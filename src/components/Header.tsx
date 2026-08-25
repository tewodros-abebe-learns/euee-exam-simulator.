import { useState, useRef, useEffect } from 'react';
import { User as UserIcon, LogOut, Sun, Moon, Languages, ChevronDown, Check, LogIn, Send, Download, WifiOff, HardDrive, Maximize, Minimize } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useOffline } from '../contexts/OfflineContext';
import { Language } from '../i18n/translations';

interface HeaderProps {
  currentUser: any;
  onLogout: () => void;
  onDashboard: () => void;
  activeTab: 'HOME' | 'MY_EXAM';
  onTabChange: (tab: 'HOME' | 'MY_EXAM') => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  onSignIn?: () => void;
}

const LANGUAGES: { code: Language; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'EN' },
  { code: 'am', label: 'Amharic', native: 'አማርኛ' },
  { code: 'om', label: 'Afaan Oromoo', native: 'Oromoo' },
  { code: 'ti', label: 'Tigrinya', native: 'ትግርኛ' },
];

export default function Header({ 
  currentUser, 
  onLogout, 
  onDashboard, 
  activeTab, 
  onTabChange,
  isDarkMode,
  toggleTheme,
  onSignIn
}: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const { isOnline, isInstallable, promptInstall, cachedExamsCount } = useOffline();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        (document.documentElement as any).webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangObj = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];
  const userName = currentUser?.name || currentUser?.displayName || t('guest');

  return (
    <header className="border-b border-[var(--border-color)] py-3 px-6 md:px-12 flex items-center justify-between bg-[var(--bg-primary)]/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => { onDashboard(); onTabChange('HOME'); }}>
        <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">EUEE</span>
        {!isOnline && (
          <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] font-bold flex items-center gap-1">
            <WifiOff className="w-3 h-3" />
            <span>Offline</span>
          </span>
        )}
      </div>
      
      {currentUser && (
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button 
            onClick={() => { onDashboard(); onTabChange('HOME'); }} 
            className={`transition-colors flex items-center gap-2 ${activeTab === 'HOME' ? 'text-[#8AB4F8]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
          >
            {t('home')}
          </button>
          <button 
            onClick={() => { onDashboard(); onTabChange('MY_EXAM'); }} 
            className={`transition-colors flex items-center gap-2 ${activeTab === 'MY_EXAM' ? 'text-[#8AB4F8]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
          >
            {t('myExams')}
          </button>
        </nav>
      )}

      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Full Screen Toggle Button */}
        <button
          type="button"
          onClick={toggleFullScreen}
          className="p-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[#8AB4F8]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center justify-center text-xs shadow-xs"
          title={isFullScreen ? t('exitFullScreen') : t('fullScreen')}
          aria-label={isFullScreen ? t('exitFullScreen') : t('fullScreen')}
        >
          {isFullScreen ? <Minimize className="w-4 h-4 text-[#8AB4F8]" /> : <Maximize className="w-4 h-4" />}
        </button>

        {/* Quick Install PWA Header Button if browser allows */}
        {isInstallable && (
          <button
            type="button"
            onClick={() => promptInstall()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#8AB4F8]/15 hover:bg-[#8AB4F8]/25 text-[#8AB4F8] border border-[#8AB4F8]/30 font-bold text-xs transition-all hover:scale-105"
            title="Install App to home screen for offline study"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install App</span>
          </button>
        )}

        {/* Main User Button & Menu Dropdown */}
        <div className="relative" ref={menuRef}>
          <button 
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="px-3.5 py-2 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[#8AB4F8]/50 transition-all font-bold text-xs flex items-center gap-2.5 shadow-sm hover:shadow-md"
            title={t('accountMenu')}
          >
            <div className="w-7 h-7 rounded-full bg-[#8AB4F8]/20 text-[#8AB4F8] flex items-center justify-center font-bold text-xs shrink-0">
              <UserIcon className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold truncate max-w-[120px] sm:max-w-[160px]">
              {userName}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-[var(--text-secondary)] transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* User & Settings Dropdown */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl shadow-2xl p-3.5 z-50 animate-in fade-in zoom-in-95 duration-150">
              {/* User Details Header */}
              <div className="flex items-center gap-3 p-2 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)] mb-3">
                <div className="w-10 h-10 rounded-full bg-[#8AB4F8]/20 text-[#8AB4F8] flex items-center justify-center font-bold shrink-0">
                  <UserIcon className="w-5 h-5 text-[#8AB4F8]" />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-xs font-bold text-[var(--text-primary)] truncate">
                    {userName}
                  </span>
                  <span className="text-[10px] text-[var(--text-secondary)] truncate">
                    {currentUser?.email || (currentUser ? t('welcomeBack') : 'Guest Account')}
                  </span>
                </div>
              </div>

              {/* 1. Full Screen Option (Positioned at top above theme & language) */}
              <div className="mb-2.5">
                <button
                  type="button"
                  onClick={toggleFullScreen}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[#8AB4F8]/40 transition-all flex items-center justify-between text-xs font-medium text-[var(--text-primary)]"
                >
                  <div className="flex items-center gap-2">
                    {isFullScreen ? <Minimize className="w-4 h-4 text-[#8AB4F8]" /> : <Maximize className="w-4 h-4 text-[var(--text-secondary)]" />}
                    <span>{isFullScreen ? t('exitFullScreen') : t('fullScreen')}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] uppercase">
                    {isFullScreen ? 'ON' : 'OFF'}
                  </span>
                </button>
              </div>

              {/* 2. Theme Mode Option */}
              <div className="mb-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[#8AB4F8]/40 transition-all flex items-center justify-between text-xs font-medium text-[var(--text-primary)]"
                >
                  <div className="flex items-center gap-2">
                    {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
                    <span>{t('themeMode')}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] uppercase">
                    {isDarkMode ? 'Dark' : 'Light'}
                  </span>
                </button>
              </div>

              {/* 3. Language Selection Section */}
              <div className="mb-3 pt-2 border-t border-[var(--border-color)]/60">
                <div className="px-2 py-1 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Languages className="w-3 h-3 text-[#8AB4F8]" />
                  <span>{t('selectLanguage')}</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {LANGUAGES.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        setLanguage(item.code);
                      }}
                      className={`px-2.5 py-1.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-colors ${
                        language === item.code 
                          ? 'text-[#8AB4F8] font-bold bg-[#8AB4F8]/15 border border-[#8AB4F8]/30' 
                          : 'text-[var(--text-primary)] hover:bg-[var(--bg-accent)] border border-transparent'
                      }`}
                    >
                      <span className="truncate">{item.native}</span>
                      {language === item.code && <Check className="w-3 h-3 text-[#8AB4F8] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Offline Storage Status Row */}
              <div className="mb-3 px-2.5 py-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Offline Exam Vault</span>
                </div>
                <span className="font-bold text-emerald-400">
                  {cachedExamsCount} Cached
                </span>
              </div>

              {/* Install PWA Button in Dropdown */}
              {isInstallable && (
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      promptInstall();
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-gradient-to-r from-[#8AB4F8]/20 to-[#60A5FA]/20 border border-[#8AB4F8]/40 hover:border-[#8AB4F8] text-[#8AB4F8] transition-all flex items-center justify-between text-xs font-bold shadow-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-[#8AB4F8]" />
                      <span>Install App on Device</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#8AB4F8] text-slate-950 font-black uppercase">PWA</span>
                  </button>
                </div>
              )}

              {/* Action Button: Sign Out or Sign In */}
              <div className="pt-2 border-t border-[var(--border-color)]/60">
                {currentUser ? (
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      onLogout();
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-all flex items-center justify-center gap-2 text-xs font-bold cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>{t('signOut')}</span>
                  </button>
                ) : (
                  <div className="space-y-2">                    <button
                      type="button"
                      onClick={() => {
                        setIsMenuOpen(false);
                        if (onSignIn) {
                          onSignIn();
                        }
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-accent)] text-[var(--text-primary)] border border-[var(--border-color)] transition-all flex items-center justify-center gap-2 text-xs font-bold shadow-xs cursor-pointer"
                    >
                      <LogIn className="w-3.5 h-3.5 text-[#8AB4F8]" />
                      <span>{t('signIn')}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Developer Credit & Telegram Contact */}
              <div className="mt-3 pt-2.5 border-t border-[var(--border-color)]/60 flex items-center justify-between gap-2 px-1">
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-semibold text-[var(--text-secondary)] tracking-tight">
                    Developed By <span className="font-bold text-[var(--text-primary)]">Mr. Tewodros Abebe</span>
                  </span>
                </div>
                <a
                  href="https://t.me/hahu_Ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact Mr. Tewodros Abebe on Telegram (@hahu_Ai)"
                  className="shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#229ED9]/15 hover:bg-[#229ED9]/25 text-[#229ED9] border border-[#229ED9]/30 transition-all font-bold text-[11px] hover:scale-105 active:scale-95 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

