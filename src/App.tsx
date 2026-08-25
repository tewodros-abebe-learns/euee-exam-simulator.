import { useState, useEffect } from 'react';
import { PlusCircle, Loader2, Info, BookOpen, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ExamInterface from './components/ExamInterface';
import SummaryPage from './components/SummaryPage';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import SubjectDetail from './components/SubjectDetail';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import TimerSelection from './components/TimerSelection';
import InitialSetupModal from './components/InitialSetupModal';
import OfflineBanner from './components/OfflineBanner';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { OfflineProvider, useOffline } from './contexts/OfflineContext';
import { generateExamFromDocument, generateExamFromText, type Question } from './services/geminiService';
import { readFileAsBase64, extractTextFromFile } from './lib/fileParser';

import { db, auth } from './firebase';
import { collection, addDoc, serverTimestamp, updateDoc, doc, getDocs, query, where, setDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from './lib/firestoreErrorHandler';
import { offlineStorage } from './lib/offlineStorage';
import * as pdfjs from 'pdfjs-dist';

// Set up PDF.js worker using unpkg for version 4.4.168
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;

type View = 'DASHBOARD' | 'UPLOAD' | 'TIMER_SELECTION' | 'EXAM' | 'SUMMARY' | 'SUBJECT_DETAIL';
type Tab = 'HOME' | 'MY_EXAM';

function AppContent() {
  const [view, setView] = useState<View>('DASHBOARD');
  const [activeTab, setActiveTab] = useState<Tab>('HOME');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [examTitle, setExamTitle] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<string>('General');
  const [currentExamId, setCurrentExamId] = useState<string | null>(null);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  const [saveProgress, setSaveProgress] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [timeLimit, setTimeLimit] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [stats, setStats] = useState({ totalExams: 0, totalQuestions: 0 });
  const { currentUser, logout, isInitializing: authLoading, isFirebaseAuthed } = useAuth();
  const { saveExamLocally, saveSessionLocally, isOnline } = useOffline();

  const [isGuestMode, setIsGuestMode] = useState(() => localStorage.getItem('onboarded') === 'true');
  const { language, setLanguage, t } = useLanguage();
  const [showOnboarding, setShowOnboarding] = useState(() => {
    if (typeof window === 'undefined') return false;
    const isCompleted = localStorage.getItem('euee_initial_setup_completed');
    const isOnboarded = localStorage.getItem('onboarded');
    return !isCompleted && !isOnboarded;
  });

  useEffect(() => {
    if (showOnboarding) {
      // Mark as acknowledged immediately so refreshing the page will not prompt the modal again
      localStorage.setItem('euee_initial_setup_completed', 'true');
    }
  }, [showOnboarding]);

  useEffect(() => {
    if (currentUser) {
      setShowOnboarding(false);
      localStorage.setItem('euee_initial_setup_completed', 'true');
      localStorage.setItem('onboarded', 'true');
    }
  }, [currentUser]);

  const handleGuestModeFromOnboarding = () => {
    localStorage.setItem('euee_initial_setup_completed', 'true');
    localStorage.setItem('onboarded', 'true');
    setIsGuestMode(true);
    setShowOnboarding(false);
    setView('DASHBOARD');
  };

  const handleSignInFromOnboarding = () => {
    localStorage.setItem('euee_initial_setup_completed', 'true');
    localStorage.setItem('onboarded', 'true');
    setShowOnboarding(false);
    setIsGuestMode(false);
    setView('UPLOAD'); // Will go back to auth/landing
  };

  const handleDismissOnboarding = () => {
    localStorage.setItem('euee_initial_setup_completed', 'true');
    localStorage.setItem('onboarded', 'true');
    setShowOnboarding(false);
  };

  useEffect(() => {
    if (!authLoading && !currentUser && !isGuestMode) {
      setView('UPLOAD');
    } else if (currentUser && view === 'UPLOAD') {
      setView('DASHBOARD');
    }
  }, [currentUser, authLoading, isGuestMode, view]);

  useEffect(() => {
    if (currentUser && activeTab === 'HOME') {
      const fetchStats = async () => {
        if (isFirebaseAuthed && auth.currentUser && auth.currentUser.uid === currentUser.uid) {
          const path = 'exams';
          try {
            const q = query(collection(db, path), where('createdBy', '==', currentUser.uid));
            const querySnapshot = await getDocs(q);
            let totalQ = 0;
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              if (data.questions) {
                totalQ += data.questions.length;
              }
            });
            setStats({ totalExams: querySnapshot.size, totalQuestions: totalQ });
            return;
          } catch {
            // Keep stats from local storage below
          }
        }

        try {
          const localExams = await offlineStorage.getAllExams();
          const userExams = localExams.filter(e => e.createdBy === currentUser.uid);
          let totalQ = 0;
          userExams.forEach(e => {
            if (e.questions) totalQ += e.questions.length;
          });
          setStats({ totalExams: userExams.length, totalQuestions: totalQ });
        } catch {
          // Keep default stats
        }
      };
      fetchStats();
    }
  }, [currentUser, isFirebaseAuthed, activeTab]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  // Restore in-progress exam state if page was refreshed during active exam
  useEffect(() => {
    try {
      const savedActiveState = localStorage.getItem('euee_active_exam_state');
      if (savedActiveState) {
        const parsed = JSON.parse(savedActiveState);
        if (parsed && parsed.saveProgress && parsed.examQuestions && parsed.examQuestions.length > 0) {
          setExamQuestions(parsed.examQuestions);
          setExamTitle(parsed.examTitle || 'Exam');
          setSelectedSubject(parsed.selectedSubject || 'General');
          setSelectedGrade(parsed.selectedGrade || 'Grade 12');
          setCurrentExamId(parsed.currentExamId || null);
          setTimeLimit(parsed.timeLimit || null);
          setStartTime(parsed.startTime || Date.now());
          setSaveProgress(true);
          setCurrentSessionId(parsed.currentSessionId || null);
          setView('EXAM');
        }
      }
    } catch (err) {
      console.warn("Could not restore active exam state:", err);
    }
  }, []);

  // Synchronize active exam state while taking an exam with saveProgress enabled
  useEffect(() => {
    if (view === 'EXAM' && saveProgress && examQuestions.length > 0) {
      try {
        localStorage.setItem('euee_active_exam_state', JSON.stringify({
          currentExamId,
          examTitle,
          selectedSubject,
          selectedGrade,
          examQuestions,
          timeLimit,
          startTime,
          saveProgress,
          currentSessionId
        }));
      } catch (err) {
        console.warn("Could not cache active exam state:", err);
      }
    } else if (view === 'SUMMARY') {
      try {
        localStorage.removeItem('euee_active_exam_state');
      } catch {}
    }
  }, [view, saveProgress, examQuestions, currentExamId, examTitle, selectedSubject, selectedGrade, timeLimit, startTime, currentSessionId]);

  // Sync guest exams and sessions to cloud upon login
  useEffect(() => {
    let isMounted = true;
    const syncGuestData = async () => {
      if (!currentUser || !isOnline || !isFirebaseAuthed || !auth.currentUser || auth.currentUser.uid !== currentUser.uid) return;
      
      try {
        const localExams = await offlineStorage.getAllExams();
        const guestExams = localExams.filter(e => e.createdBy === 'guest' && !e.isSample);
        
        for (const exam of guestExams) {
          if (!isMounted) break;
          try {
            // Upload to Firestore
            const examRef = doc(collection(db, 'exams'));
            await setDoc(examRef, {
              title: exam.title,
              subject: exam.subject,
              grade: exam.grade,
              questions: exam.questions,
              createdBy: currentUser.uid,
              createdAt: serverTimestamp()
            });
            
            // Delete old guest local exam
            await offlineStorage.deleteExam(exam.id);
            
            // Save new exam locally with Firestore ID
            await saveExamLocally({
              ...exam,
              id: examRef.id,
              createdBy: currentUser.uid
            });
            
            // Update sessions pointing to old guest exam
            const sessions = await offlineStorage.getAllSessions();
            for (const session of sessions) {
              if (session.examId === exam.id) {
                 const updatedSession = { ...session };
                 updatedSession.examId = examRef.id;
                 if (updatedSession.userId === 'guest' || !updatedSession.userId) {
                    updatedSession.userId = currentUser.uid;
                 }
                 await saveSessionLocally(updatedSession);
                 
                 // Push to cloud
                 const sessionRef = doc(collection(db, 'user_exams'));
                 await setDoc(sessionRef, {
                    userId: currentUser.uid,
                    examId: examRef.id,
                    status: updatedSession.status,
                    answers: updatedSession.answers,
                    score: updatedSession.score ?? null,
                    total: updatedSession.total ?? null,
                    percentage: updatedSession.percentage ?? null,
                    startTime: updatedSession.startTime,
                    timeLimit: updatedSession.timeLimit,
                    lastUpdated: serverTimestamp()
                 });
                 // Delete old session locally
                 await offlineStorage.deleteSession(session.id);
                 // Save the new session with the new ID
                 updatedSession.id = sessionRef.id;
                 await saveSessionLocally(updatedSession);
              }
            }
          } catch (e) {
             console.warn("Failed syncing guest exam:", e);
          }
        }
      } catch (err) {
         console.warn("Error accessing offline storage for guest sync:", err);
      }
    };
    
    syncGuestData();
    return () => { isMounted = false; };
  }, [currentUser, isFirebaseAuthed, isOnline, saveExamLocally, saveSessionLocally]);

  const processExamContent = async (options: {
    rawText?: string;
    fileBase64?: string;
    mimeType?: string;
    fileName?: string;
    subject: string;
    grade?: string;
  }) => {
    setIsParsing(true);
    setErrorMessage(null);
    try {
      const result = await generateExamFromDocument({
        rawText: options.rawText,
        fileBase64: options.fileBase64,
        mimeType: options.mimeType,
        fileName: options.fileName,
        titleHint: options.subject
      });
      
      const rawTitle = (result.title && result.title !== 'General Exam' && result.title !== 'Uploaded Exam Practice')
        ? result.title
        : (options.fileName ? options.fileName.replace(/\.[^/.]+$/, '') : `${options.subject}${options.grade ? ` - Grade ${options.grade}` : ''}`);
      const computedTitle = rawTitle.trim() || 'Custom Exam';

      setExamQuestions(result.questions);
      setExamTitle(computedTitle);
      setSelectedGrade(options.grade || 'General');

      // Auto-save uploaded & analyzed exam immediately by default
      const newExamId = `exam_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      const examData = {
        title: computedTitle,
        subject: options.subject || 'General',
        grade: options.grade || 'General',
        questions: result.questions,
        createdBy: currentUser?.uid || 'guest',
        createdAt: Date.now(),
        isSample: false,
        source: 'custom' as const
      };
      
      
      if (currentUser && isOnline && isFirebaseAuthed && auth.currentUser && auth.currentUser.uid === currentUser.uid) {
        try {
          const docRef = await addDoc(collection(db, 'exams'), {
            title: examData.title,
            subject: examData.subject,
            grade: examData.grade,
            questions: examData.questions,
            createdBy: currentUser.uid,
            createdAt: serverTimestamp()
          });
          setCurrentExamId(docRef.id);
          await saveExamLocally({ id: docRef.id, ...examData });
        } catch(e) {
          console.warn("Could not save exam to Firestore, cached locally:", e);
          setCurrentExamId(newExamId);
          await saveExamLocally({ id: newExamId, ...examData });
        }
      } else {
        setCurrentExamId(newExamId);
        await saveExamLocally({ id: newExamId, ...examData });
      }

      setView('TIMER_SELECTION');
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message || "Failed to generate exam.");
    } finally {
      setIsParsing(false);
    }
  };

  const handleFileUpload = async (file: File, subject: string, grade?: string) => {
    setSelectedSubject(subject);
    try {
      const [base64, extractedText] = await Promise.all([
        readFileAsBase64(file),
        extractTextFromFile(file).catch(() => '')
      ]);

      await processExamContent({
        fileBase64: base64,
        rawText: extractedText || undefined,
        fileName: file.name,
        mimeType: file.type || (file.name.toLowerCase().endsWith('.pdf') ? 'application/pdf' : undefined),
        subject,
        grade
      });
    } catch (e: any) {
      console.error(e);
      setErrorMessage(e?.message || "Error reading uploaded file");
    }
  };

  const handleTextSubmit = async (text: string, subject: string, grade?: string) => {
    setSelectedSubject(subject);
    await processExamContent({ rawText: text, subject, grade });
  };

  const handleTimerSelection = async (seconds: number, saveProgressChoice: boolean) => {
    setTimeLimit(seconds);
    setSaveProgress(saveProgressChoice);
    setStartTime(Date.now());
    setUserAnswers({});
    
    // If not already persisted or user selected an official/existing exam without currentExamId
    if (!currentExamId) {
      try {
        const examData = {
          title: examTitle,
          subject: selectedSubject || 'General',
          grade: selectedGrade,
          questions: examQuestions,
          createdBy: currentUser?.uid || 'guest',
          createdAt: Date.now(),
          isSample: false,
          source: 'custom' as const
        };
        
        const newExamId = `local_${Date.now()}`;
        
        if (currentUser && isOnline && isFirebaseAuthed && auth.currentUser && auth.currentUser.uid === currentUser.uid) {
           try {
             const docRef = await addDoc(collection(db, 'exams'), {
               ...examData,
               createdAt: serverTimestamp()
             });
             setCurrentExamId(docRef.id);
             await saveExamLocally({ id: docRef.id, ...examData });
           } catch(e) {
             setCurrentExamId(newExamId);
             await saveExamLocally({ id: newExamId, ...examData });
           }
        } else {
           setCurrentExamId(newExamId);
           await saveExamLocally({ id: newExamId, ...examData });
        }
      } catch (e) {
        console.error(e);
      }
    }
    
    setView('EXAM');
  };

  const handleFinishExam = async (answers: Record<string, string> = {}) => {
    setUserAnswers(answers);
    const endTime = Date.now();
    const duration = Math.floor((endTime - (startTime || endTime)) / 1000);
    
    let score = 0;
    examQuestions.forEach(q => {
      if (parseInt(answers[q.id]) === q.correctAnswerIndex) score++;
    });

    const sessionData = {
      examId: currentExamId,
      userId: currentUser?.uid || 'guest',
      score,
      totalQuestions: examQuestions.length,
      duration,
      completedAt: Date.now(),
      answers
    };
    
    const newSessionId = `session_${Date.now()}`;
    await saveSessionLocally({ 
      id: newSessionId, 
      examId: currentExamId || 'exam_local',
      userId: currentUser?.uid || 'guest',
      status: 'COMPLETED', 
      score,
      total: examQuestions.length,
      percentage: Math.round((score / (examQuestions.length || 1)) * 100),
      startTime: startTime || Date.now(), 
      timeLimit: timeLimit || 0, 
      timeSpent: duration,
      lastUpdated: Date.now(), 
      syncedWithCloud: false, 
      answers 
    });
    
    if (currentUser && isOnline && currentExamId && isFirebaseAuthed && auth.currentUser && auth.currentUser.uid === currentUser.uid) {
      try {
        const userExamDoc = await addDoc(collection(db, 'user_exams'), {
          examId: currentExamId,
          userId: currentUser.uid,
          status: 'COMPLETED',
          answers,
          score,
          totalQuestions: examQuestions.length,
          startTime: startTime || Date.now(),
          timeLimit: timeLimit || 0,
          duration,
          lastUpdated: serverTimestamp()
        });
        setCurrentSessionId(userExamDoc.id);

        // Also mirror to sessions collection
        try {
          await addDoc(collection(db, 'sessions'), {
            examId: currentExamId,
            userId: currentUser.uid,
            score,
            totalQuestions: examQuestions.length,
            duration,
            answers,
            completedAt: serverTimestamp()
          });
        } catch {
          // ignore mirror error
        }
      } catch (e) {
        console.warn("Could not save user exam session to Firestore:", e);
        setCurrentSessionId(newSessionId);
      }
    } else {
      setCurrentSessionId(newSessionId);
    }
    
    try {
      localStorage.removeItem('euee_active_exam_state');
      if (currentExamId) {
        localStorage.removeItem(`exam_progress_${currentExamId}`);
      }
      if (examTitle) {
        localStorage.removeItem(`exam_progress_${examTitle.replace(/\s+/g, '_')}`);
      }
    } catch {}
    
    setView('SUMMARY');
  };

  const handleSelectExam = (exam: any) => {
    if (!exam || !exam.questions || exam.questions.length === 0) {
      setErrorMessage("Selected exam contains no valid questions.");
      return;
    }
    setExamQuestions(exam.questions);
    setExamTitle(exam.title || 'National Exam');
    setSelectedSubject(exam.subject || 'General');
    setSelectedGrade(exam.grade || 'Grade 12');
    setCurrentExamId(exam.id || `exam_${Date.now()}`);
    setView('TIMER_SELECTION');
  };

  const handleContinueSession = (exam: any, session: any) => {
    if (!exam) return;
    setExamQuestions(exam.questions || []);
    setExamTitle(exam.title || 'Exam Session');
    setSelectedSubject(exam.subject || 'General');
    setSelectedGrade(exam.grade || 'Grade 12');
    setCurrentExamId(exam.id);
    setTimeLimit(session?.timeLimit || null);
    setUserAnswers(session?.answers || {});
    setStartTime(session?.startTime || Date.now());
    setCurrentSessionId(session?.id);
    setView('EXAM');
  };

  const handleViewSummarySession = (exam: any, session: any) => {
    if (!exam) return;
    setExamQuestions(exam.questions || []);
    setExamTitle(exam.title || 'Exam Summary');
    setUserAnswers(session?.answers || {});
    setView('SUMMARY');
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <Loader2 className="w-8 h-8 animate-spin text-[#8AB4F8]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Header
        currentUser={currentUser}
        onLogout={() => {
          logout();
          setIsGuestMode(false);
          localStorage.removeItem('onboarded');
          localStorage.removeItem('euee_initial_setup_completed');
          setView('UPLOAD');
        }}
        onDashboard={() => setView('DASHBOARD')}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
        onSignIn={() => {
           setIsGuestMode(false);
           setView('UPLOAD');
        }}
      />
      
      <OfflineBanner />

      <main className="flex-1 overflow-x-hidden relative">
        <AnimatePresence mode="wait">
          {view === 'UPLOAD' && (!currentUser && !isGuestMode) && (
            <LandingPage
              key="landing"
              onUpload={handleFileUpload}
              onProcessText={handleTextSubmit}
              isParsing={isParsing}
              currentUser={currentUser}
              onGuestMode={() => {
                setIsGuestMode(true);
                setView('DASHBOARD');
              }}
            />
          )}

          {view === 'DASHBOARD' && activeTab === 'HOME' && (currentUser || isGuestMode) && (
            <Home
              key="home"
              onStartNew={() => setView('UPLOAD')}
              onContinue={handleContinueSession}
              onRetake={handleSelectExam}
              onViewSummary={handleViewSummarySession}
              onLoadSample={handleSelectExam}
              onUpload={handleFileUpload}
              onProcessText={handleTextSubmit}
              isParsing={isParsing}
            />
          )}
          
          {view === 'SUBJECT_DETAIL' && activeTab === 'HOME' && selectedSubject && (
            <SubjectDetail
              key="subject_detail"
              subject={selectedSubject || ''}
              onBack={() => setView('DASHBOARD')}
              onContinue={handleContinueSession}
              onRetake={handleSelectExam}
              onViewSummary={handleViewSummarySession}
              onUpload={handleFileUpload}
              onProcessText={handleTextSubmit}
              isParsing={isParsing}
            />
          )}

          {view === 'DASHBOARD' && activeTab === 'MY_EXAM' && (currentUser || isGuestMode) && (
            <Dashboard 
              key="dashboard" 
              onStartNew={() => setView('UPLOAD')}
              onContinue={handleContinueSession} 
              onRetake={handleSelectExam} 
              onViewSummary={handleViewSummarySession} 
              onSelectSubject={(subj) => { setSelectedSubject(subj); setView('SUBJECT_DETAIL'); }} 
            />
          )}

          {view === 'TIMER_SELECTION' && (
            <TimerSelection
              key="timer"
              onSelect={handleTimerSelection}
              currentUser={currentUser}
              onSignIn={() => {
                setIsGuestMode(false);
                setView('UPLOAD');
              }}
            />
          )}

          {view === 'EXAM' && (
            <ExamInterface
              key="exam"
              questions={examQuestions}
              timeLimit={timeLimit || 0}
              onComplete={handleFinishExam}
              onBack={() => setView('DASHBOARD')}
              saveAnswer={(qId, ans) => setUserAnswers(prev => ({...prev, [qId]: ans}))}
              initialAnswers={userAnswers}
              startTime={startTime || Date.now()}
              examTitle={examTitle}
              subject={selectedSubject || 'General'}
              grade={selectedGrade || 'General'}
              saveProgress={saveProgress}
              isDarkMode={isDarkMode}
            />
          )}

          {view === 'SUMMARY' && (
            <SummaryPage
              key="summary"
              questions={examQuestions}
              userAnswers={userAnswers}
              title={examTitle}
              onReset={() => setView('DASHBOARD')}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {errorMessage && (
            (() => {
              const isBusy = /busy|high traffic|capacity|rate limit|quota|temporarily|available official/i.test(errorMessage);
              return (
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 40, scale: 0.95 }}
                  className={`fixed bottom-5 right-5 p-4 sm:p-5 rounded-2xl shadow-2xl max-w-md z-50 border backdrop-blur-md ${
                    isBusy
                      ? 'bg-[#1e3a8a]/95 border-[#8AB4F8]/50 text-blue-50'
                      : 'bg-red-600/95 border-red-400/40 text-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-xl shrink-0 ${isBusy ? 'bg-[#8AB4F8]/20 text-[#8AB4F8]' : 'bg-white/10 text-white'}`}>
                      {isBusy ? <Info className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">
                        {isBusy ? t('aiHighTrafficNotice') : 'Notice'}
                      </h3>
                      <p className="text-xs opacity-90 mt-1 leading-relaxed">{errorMessage}</p>
                      {isBusy && (
                        <p className="text-[11px] text-blue-200/80 mt-1.5 font-medium">{t('aiBusyTip')}</p>
                      )}
                      <div className="mt-3 flex items-center gap-2">
                        {isBusy && (
                          <button
                            onClick={() => {
                              setErrorMessage(null);
                              setView('DASHBOARD');
                            }}
                            className="text-xs bg-[#8AB4F8] text-gray-900 font-bold px-3 py-1.5 rounded-xl hover:bg-[#AECBFA] transition-colors flex items-center gap-1.5 shadow-sm"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            {t('browseOfficialExams')}
                          </button>
                        )}
                        <button
                          onClick={() => setErrorMessage(null)}
                          className={`text-xs px-2.5 py-1.5 rounded-xl transition-colors ${
                            isBusy
                              ? 'bg-white/10 hover:bg-white/20 text-blue-100'
                              : 'bg-white/20 hover:bg-white/30 text-white'
                          }`}
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showOnboarding && (
            <InitialSetupModal
              isOpen={showOnboarding}
              isDarkMode={isDarkMode}
              onSetTheme={(isDark) => setIsDarkMode(isDark)}
              onContinueAsGuest={handleGuestModeFromOnboarding}
              onSignIn={handleSignInFromOnboarding}
              onClose={handleDismissOnboarding}
            />
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <OfflineProvider>
      <LanguageProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </LanguageProvider>
    </OfflineProvider>
  );
}
