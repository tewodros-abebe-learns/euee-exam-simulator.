import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { offlineStorage, type OfflineExam, type OfflineSession } from '../lib/offlineStorage';
import { db, auth } from '../firebase';
import { collection, addDoc, updateDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface OfflineContextType {
  isOnline: boolean;
  isOfflineReady: boolean;
  pendingSyncCount: number;
  isSyncing: boolean;
  cachedExamsCount: number;
  isInstallable: boolean;
  promptInstall: () => Promise<boolean>;
  triggerSync: () => Promise<void>;
  saveExamLocally: (exam: OfflineExam) => Promise<void>;
  saveSessionLocally: (session: OfflineSession) => Promise<void>;
  getOfflineExamsList: (subject?: string) => Promise<OfflineExam[]>;
  getOfflineSessionData: (sessionId: string) => Promise<OfflineSession | null>;
  showOfflineToast: boolean;
  dismissOfflineToast: () => void;
  toastMessage: string | null;
}

const OfflineContext = createContext<OfflineContextType | undefined>(undefined);

export function OfflineProvider({ children }: { children: ReactNode }) {
  const [isOnline, setIsOnline] = useState<boolean>(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [isOfflineReady, setIsOfflineReady] = useState<boolean>(false);
  const [pendingSyncCount, setPendingSyncCount] = useState<number>(0);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [cachedExamsCount, setCachedExamsCount] = useState<number>(0);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState<boolean>(false);
  const [showOfflineToast, setShowOfflineToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const refreshStats = useCallback(async () => {
    try {
      const stats = await offlineStorage.getStats();
      setCachedExamsCount(stats.cachedExamsCount);
      setPendingSyncCount(stats.pendingSyncCount);
    } catch (e) {
      console.warn('Could not refresh offline stats:', e);
    }
  }, []);

  // 1. Initialize IndexedDB and Service Worker
  useEffect(() => {
    const initPWA = async () => {
      try {
        await offlineStorage.init();
        setIsOfflineReady(true);
        await refreshStats();
      } catch (err) {
        console.warn('IndexedDB initialization notice:', err);
      }

      // Register Service Worker in production / compatible environments
      if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
          console.info('PWA Service Worker successfully registered with scope:', registration.scope);
        } catch (swErr) {
          console.warn('Service Worker registration skipped or failed:', swErr);
        }
      }
    };

    initPWA();
  }, [refreshStats]);

  // 2. Listen to beforeinstallprompt for PWA installation
  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
      setToastMessage('App installed successfully! You can now launch EUEE Exam from your home screen.');
      setShowOfflineToast(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // 3. Online/Offline Network Event Listeners & Automatic Sync Trigger
  useEffect(() => {
    const handleOnline = async () => {
      setIsOnline(true);
      setToastMessage('Internet reconnected. Syncing offline exam sessions with the cloud...');
      setShowOfflineToast(true);
      setTimeout(() => setShowOfflineToast(false), 4000);
      await triggerSync();
    };

    const handleOffline = () => {
      setIsOnline(false);
      setToastMessage('⚡ You are currently offline. Full offline practice mode active — all answers and past papers are saved locally.');
      setShowOfflineToast(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // 4. Synchronization Logic
  const triggerSync = async () => {
    if (!navigator.onLine || isSyncing) return;

    try {
      setIsSyncing(true);
      const queue = await offlineStorage.getSyncQueue();
      const currentAuthUser = auth.currentUser;

      for (const item of queue) {
        try {
          if (item.type === 'SAVE_SESSION') {
            const session = item.payload;
            // Only sync if user is authenticated and is the owner of the session
            if (currentAuthUser && session.userId === currentAuthUser.uid && !session.id.startsWith('guest-')) {
              const sessionDocRef = doc(db, 'user_exams', session.id);
              await setDoc(
                sessionDocRef,
                {
                  userId: currentAuthUser.uid,
                  examId: session.examId,
                  status: session.status || 'IN_PROGRESS',
                  answers: session.answers || {},
                  score: session.score ?? null,
                  total: session.total ?? null,
                  percentage: session.percentage ?? null,
                  startTime: session.startTime,
                  timeLimit: session.timeLimit,
                  lastUpdated: serverTimestamp()
                },
                { merge: true }
              );
            }
          }

          if (item.id) {
            await offlineStorage.clearSyncQueueItem(item.id);
          }
        } catch (itemErr) {
          console.warn('Sync item failure, will retry next online cycle:', itemErr);
        }
      }

      await refreshStats();
    } catch (syncErr) {
      console.warn('Offline sync cycle notice:', syncErr);
    } finally {
      setIsSyncing(false);
    }
  };

  // 5. Prompt Install Trigger
  const promptInstall = async (): Promise<boolean> => {
    if (!deferredPrompt) return false;
    try {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setIsInstallable(false);
        setDeferredPrompt(null);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const saveExamLocally = async (exam: OfflineExam) => {
    await offlineStorage.saveExam(exam);
    await refreshStats();
  };

  const saveSessionLocally = async (session: OfflineSession) => {
    await offlineStorage.saveSession(session);
    if (!navigator.onLine && !session.syncedWithCloud) {
      await offlineStorage.addToSyncQueue({
        type: 'SAVE_SESSION',
        payload: session,
        timestamp: Date.now()
      });
    }
    await refreshStats();
  };

  const getOfflineExamsList = async (subject?: string) => {
    return await offlineStorage.getAllExams(subject);
  };

  const getOfflineSessionData = async (sessionId: string) => {
    return await offlineStorage.getSession(sessionId);
  };

  const dismissOfflineToast = () => {
    setShowOfflineToast(false);
  };

  return (
    <OfflineContext.Provider
      value={{
        isOnline,
        isOfflineReady,
        pendingSyncCount,
        isSyncing,
        cachedExamsCount,
        isInstallable,
        promptInstall,
        triggerSync,
        saveExamLocally,
        saveSessionLocally,
        getOfflineExamsList,
        getOfflineSessionData,
        showOfflineToast,
        dismissOfflineToast,
        toastMessage
      }}
    >
      {children}
    </OfflineContext.Provider>
  );
}

export function useOffline(): OfflineContextType {
  const context = useContext(OfflineContext);
  if (!context) {
    throw new Error('useOffline must be used within an OfflineProvider');
  }
  return context;
}
