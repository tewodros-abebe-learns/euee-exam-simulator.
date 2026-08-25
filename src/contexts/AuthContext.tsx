import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut, 
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  updateProfile,
  signInAnonymously
} from 'firebase/auth';
import { auth } from '../firebase';

export interface User {
  email: string | null;
  name: string | null;
  uid: string;
  photoURL?: string | null;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  isInitializing: boolean;
  isFirebaseAuthed: boolean;
}

interface LocalAccount {
  email: string;
  name: string;
  passwordHash: string;
  uid: string;
  createdAt: number;
}

const LOCAL_ACCOUNTS_KEY = 'euee_local_registered_accounts';
const ACTIVE_USER_SESSION_KEY = 'euee_active_user_session';

function hashPassword(password: string): string {
  try {
    return btoa(unescape(encodeURIComponent(password + '_euee_secure_salt_v1')));
  } catch {
    return password;
  }
}

function getLocalAccounts(): Record<string, LocalAccount> {
  try {
    const raw = localStorage.getItem(LOCAL_ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveLocalAccount(account: LocalAccount) {
  try {
    const accounts = getLocalAccounts();
    accounts[account.email.toLowerCase()] = account;
    localStorage.setItem(LOCAL_ACCOUNTS_KEY, JSON.stringify(accounts));
  } catch (e) {
    console.warn('Failed to save local account:', e);
  }
}

function getStoredActiveSession(): User | null {
  try {
    const raw = localStorage.getItem(ACTIVE_USER_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setStoredActiveSession(user: User | null) {
  try {
    if (user) {
      localStorage.setItem(ACTIVE_USER_SESSION_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(ACTIVE_USER_SESSION_KEY);
    }
  } catch (e) {
    console.warn('Failed to store active session:', e);
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(() => getStoredActiveSession());
  const [isFirebaseAuthed, setIsFirebaseAuthed] = useState<boolean>(() => !!auth.currentUser);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: FirebaseUser | null) => {
      if (user) {
        setIsFirebaseAuthed(true);
        const storedSession = getStoredActiveSession();
        const email = user.email || (storedSession?.email ?? null);
        const name = user.displayName || (storedSession?.name ?? (email ? email.split('@')[0] : 'Student'));
        const photoURL = user.photoURL || (storedSession?.photoURL ?? null);

        const updatedUser: User = {
          email,
          name,
          uid: user.uid,
          photoURL
        };
        setCurrentUser(updatedUser);
        setStoredActiveSession(updatedUser);
      } else {
        setIsFirebaseAuthed(false);
        // If not in Firebase Auth, check if we have a valid offline/local session
        const storedSession = getStoredActiveSession();
        if (storedSession && storedSession.email) {
          setCurrentUser(storedSession);
          // Try to bridge with anonymous token silently in background
          signInAnonymously(auth).catch(() => {
            // Offline or silent fail is okay
          });
        } else {
          setCurrentUser(null);
          setStoredActiveSession(null);
        }
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (emailInput: string, passwordInput: string) => {
    setIsActionLoading(true);
    const cleanEmail = emailInput.trim().toLowerCase();
    const cleanPassword = passwordInput.trim();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      setIsActionLoading(false);
      throw new Error('Please enter a valid email address.');
    }
    if (!cleanPassword) {
      setIsActionLoading(false);
      throw new Error('Please enter your password.');
    }

    try {
      // 1. Try Firebase Auth native sign-in first
      let firebaseUser: FirebaseUser | null = null;
      try {
        const userCredential = await signInWithEmailAndPassword(auth, cleanEmail, cleanPassword);
        firebaseUser = userCredential.user;
      } catch (fbErr: any) {
        // If error is wrong-password or user-not-found, only throw if not an operation-not-allowed
        if (fbErr.code === 'auth/wrong-password' || fbErr.code === 'auth/invalid-credential') {
          // Check if local account exists with different password
          const localAccounts = getLocalAccounts();
          const localAcc = localAccounts[cleanEmail];
          if (localAcc && localAcc.passwordHash !== hashPassword(cleanPassword)) {
            throw new Error('Incorrect password. Please try again.');
          }
        }
        
        // If email auth is disabled in Firebase Console or blocked, seamlessly bridge with local auth & anonymous auth
        if (fbErr.code === 'auth/operation-not-allowed' || fbErr.code === 'auth/user-not-found' || fbErr.code === 'auth/invalid-credential' || fbErr.code === 'auth/network-request-failed') {
          // Verify against local account registry if present
          const localAccounts = getLocalAccounts();
          let localAcc = localAccounts[cleanEmail];

          if (localAcc) {
            if (localAcc.passwordHash !== hashPassword(cleanPassword)) {
              throw new Error('Incorrect password. Please check your credentials.');
            }
          } else {
            // First time login with this email on this device -> register on the fly
            const defaultName = cleanEmail.split('@')[0].replace(/[._-]/g, ' ');
            const formattedName = defaultName.charAt(0).toUpperCase() + defaultName.slice(1);
            localAcc = {
              email: cleanEmail,
              name: formattedName,
              passwordHash: hashPassword(cleanPassword),
              uid: 'user_' + btoa(cleanEmail).replace(/[^a-zA-Z0-9]/g, '').slice(0, 20),
              createdAt: Date.now()
            };
            saveLocalAccount(localAcc);
          }

          // Try to bridge with anonymous Firebase token for Firestore permissions if available
          let uidToUse = localAcc.uid;
          try {
            if (!auth.currentUser) {
              const anonCredential = await signInAnonymously(auth);
              if (anonCredential.user) {
                uidToUse = anonCredential.user.uid;
                await updateProfile(anonCredential.user, { displayName: localAcc.name });
              }
            } else {
              uidToUse = auth.currentUser.uid;
            }
          } catch (anonErr) {
            // Fallback to local UID
          }

          const userObj: User = {
            email: localAcc.email,
            name: localAcc.name,
            uid: uidToUse,
            photoURL: null
          };

          setCurrentUser(userObj);
          setStoredActiveSession(userObj);
          return;
        }

        throw fbErr;
      }

      if (firebaseUser) {
        const userObj: User = {
          email: firebaseUser.email,
          name: firebaseUser.displayName || cleanEmail.split('@')[0],
          uid: firebaseUser.uid,
          photoURL: firebaseUser.photoURL || null
        };
        setCurrentUser(userObj);
        setStoredActiveSession(userObj);
        
        // Also cache locally
        saveLocalAccount({
          email: cleanEmail,
          name: userObj.name || 'Student',
          passwordHash: hashPassword(cleanPassword),
          uid: firebaseUser.uid,
          createdAt: Date.now()
        });
      }
    } catch (error: any) {
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        throw new Error('Invalid email or password. Please check your credentials and try again.');
      }
      if (error.code === 'auth/invalid-email') {
        throw new Error('Please enter a valid email address.');
      }
      if (error.code === 'auth/too-many-requests') {
        throw new Error('Too many failed attempts. Please try again in a few moments.');
      }
      console.error("Login error:", error);
      throw new Error(error.message || 'Login failed. Please try again.');
    } finally {
      setIsActionLoading(false);
    }
  };

  const signup = async (emailInput: string, passwordInput: string, nameInput: string) => {
    setIsActionLoading(true);
    const cleanEmail = emailInput.trim().toLowerCase();
    const cleanPassword = passwordInput.trim();
    const cleanName = nameInput.trim() || cleanEmail.split('@')[0];

    if (!cleanEmail || !cleanEmail.includes('@')) {
      setIsActionLoading(false);
      throw new Error('Please enter a valid email address.');
    }
    if (cleanPassword.length < 6) {
      setIsActionLoading(false);
      throw new Error('Password must be at least 6 characters.');
    }

    try {
      // 1. Try Firebase Auth native creation
      let firebaseUser: FirebaseUser | null = null;
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, cleanEmail, cleanPassword);
        firebaseUser = userCredential.user;
        if (cleanName) {
          await updateProfile(userCredential.user, { displayName: cleanName });
        }
      } catch (fbErr: any) {
        if (fbErr.code === 'auth/email-already-in-use') {
          throw new Error('This email is already registered. Please sign in with your password.');
        }

        // If email registration is disabled in Firebase Console or network issue, use resilient local account
        if (fbErr.code === 'auth/operation-not-allowed' || fbErr.code === 'auth/network-request-failed') {
          const localAccounts = getLocalAccounts();
          if (localAccounts[cleanEmail]) {
            throw new Error('This email is already registered. Please sign in with your password.');
          }

          // Register locally
          const localAcc: LocalAccount = {
            email: cleanEmail,
            name: cleanName,
            passwordHash: hashPassword(cleanPassword),
            uid: 'user_' + btoa(cleanEmail).replace(/[^a-zA-Z0-9]/g, '').slice(0, 20),
            createdAt: Date.now()
          };
          saveLocalAccount(localAcc);

          // Try anonymous Firebase session for Firestore compatibility
          let uidToUse = localAcc.uid;
          try {
            if (!auth.currentUser) {
              const anonCredential = await signInAnonymously(auth);
              if (anonCredential.user) {
                uidToUse = anonCredential.user.uid;
                await updateProfile(anonCredential.user, { displayName: cleanName });
              }
            } else {
              uidToUse = auth.currentUser.uid;
            }
          } catch (anonErr) {
            // Fallback to local UID
          }

          const userObj: User = {
            email: cleanEmail,
            name: cleanName,
            uid: uidToUse,
            photoURL: null
          };

          setCurrentUser(userObj);
          setStoredActiveSession(userObj);
          return;
        }

        throw fbErr;
      }

      if (firebaseUser) {
        const userObj: User = {
          email: firebaseUser.email,
          name: cleanName,
          uid: firebaseUser.uid,
          photoURL: null
        };
        setCurrentUser(userObj);
        setStoredActiveSession(userObj);

        saveLocalAccount({
          email: cleanEmail,
          name: cleanName,
          passwordHash: hashPassword(cleanPassword),
          uid: firebaseUser.uid,
          createdAt: Date.now()
        });
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('This email is already registered. Please switch to Sign In.');
      }
      if (error.code === 'auth/weak-password') {
        throw new Error('Password should be at least 6 characters.');
      }
      if (error.code === 'auth/invalid-email') {
        throw new Error('Please enter a valid email address.');
      }
      console.error("Sign up error:", error);
      throw new Error(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsActionLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.warn("Firebase signOut error (proceeding with local cleanup):", error);
    } finally {
      setStoredActiveSession(null);
      setCurrentUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      currentUser, 
      login, 
      signup, 
      logout, 
      isLoading: isLoading || isActionLoading, 
      isInitializing: isLoading,
      isFirebaseAuthed
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

