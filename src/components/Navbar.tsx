import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Columns, 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  Sun, 
  Moon, 
  Type, 
  SlidersHorizontal,
  ChevronDown,
  Layers,
  Heart,
  HardDrive,
  ShieldCheck,
  KeyRound
} from 'lucide-react';
import { BibleBook } from '../types';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  currentBook: BibleBook;
  currentChapter: number;
  onOpenBookSelector: () => void;
  activeView: 'cover' | 'reader' | 'analysis' | 'solas' | 'topical' | 'notes';
  setActiveView: (view: 'cover' | 'reader' | 'analysis' | 'solas' | 'topical' | 'notes') => void;
  onOpenDevotional: () => void;
  onOpenSearch: () => void;
  onOpenAssistant: () => void;
  onOpenOfflineStorage?: () => void;
  onOpenSecurity?: () => void;
  showEnglishParallel: boolean;
  onToggleEnglishParallel: () => void;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  onChangeFontSize: (size: 'sm' | 'base' | 'lg' | 'xl') => void;
  fontFamily: 'serif' | 'sans';
  onToggleFontFamily: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentBook,
  currentChapter,
  onOpenBookSelector,
  activeView,
  setActiveView,
  onOpenDevotional,
  onOpenSearch,
  onOpenAssistant,
  onOpenOfflineStorage,
  onOpenSecurity,
  showEnglishParallel,
  onToggleEnglishParallel,
  fontSize,
  onChangeFontSize,
  fontFamily,
  onToggleFontFamily,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md">
      {/* Top Banner / Utility Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between gap-2">
        {/* Brand & Quick Book Selector */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setActiveView('cover')}>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-700 to-amber-500 border border-amber-400/40 flex items-center justify-center text-amber-100 shadow-inner group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm sm:text-base font-bold tracking-tight text-stone-100 leading-tight flex items-center gap-1.5">
                <span>Kal (ቃል) መጽሐፍ ቅዱስ</span>
              </h1>
              <p className="text-[10px] text-amber-400 font-medium">
                Kal Holy Bible • የወንጌላዊ ቲኦሎጂ ጥናት
              </p>
            </div>
          </div>

          {/* Quick Book & Chapter Selector Dropdown Button */}
          <button
            id="book-selector-trigger"
            onClick={onOpenBookSelector}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-stone-800 hover:bg-stone-700 border border-stone-700 transition-colors text-sm font-medium text-amber-100 group cursor-pointer"
            title="መጽሐፍና ምዕራፍ ምረጥ"
          >
            <span className="font-bold text-amber-300">{currentBook.nameAm}</span>
            <span className="text-stone-300 text-xs px-1.5 py-0.5 rounded bg-stone-900/80 border border-stone-700 font-mono">
              ምዕ. {currentChapter}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-300 transition-transform" />
          </button>
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* PWA In-App Install Button */}
          <PWAInstallButton />

          {/* Offline Storage Status Button */}
          {onOpenOfflineStorage && (
            <button
              id="offline-storage-btn"
              onClick={onOpenOfflineStorage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300 hover:text-amber-300 text-xs font-medium transition-colors cursor-pointer"
              title="ከመስመር ውጭ ማከማቻ (Offline Storage & Cached Chapters)"
            >
              <HardDrive className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden xl:inline">ማከማቻ</span>
            </button>
          )}

          {/* Security & Access Control Button */}
          {onOpenSecurity && (
            <button
              id="security-settings-btn"
              onClick={onOpenSecurity}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-md bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300 hover:text-amber-300 text-xs font-medium transition-colors cursor-pointer"
              title="የደኅንነት እና የፈቃድ መቆጣጠሪያ (Security & Access Keys)"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden lg:inline">ደኅንነት/ፈቃድ</span>
            </button>
          )}

          {/* Quick Search */}
          <button
            id="search-btn"
            onClick={onOpenSearch}
            className="p-2 rounded-md hover:bg-stone-800 text-stone-300 hover:text-amber-200 transition-colors cursor-pointer"
            title="መፈለጊያ (Search)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Daily Devotional Button */}
          <button
            id="devotional-btn"
            onClick={onOpenDevotional}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-amber-950/60 hover:bg-amber-900/60 border border-amber-800/60 text-amber-300 text-xs font-medium transition-colors cursor-pointer"
            title="የዕለቱ ቃልና ማሰላሰያ"
          >
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
            <span>የዕለቱ ቃል</span>
          </button>

          {/* Parallel English Toggle */}
          <button
            id="parallel-btn"
            onClick={onToggleEnglishParallel}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
              showEnglishParallel
                ? 'bg-amber-600 text-white border-amber-500'
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
            }`}
            title="አማርኛ + እንግሊዝኛ ጎን ለጎን ማነጻጸሪያ"
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden md:inline">English</span>
          </button>

          {/* Font Controls (Serif / Sans & Size) */}
          <div className="hidden lg:flex items-center bg-stone-800 rounded-md border border-stone-700 p-0.5">
            <button
              onClick={onToggleFontFamily}
              className={`px-2 py-1 text-xs rounded transition-colors cursor-pointer ${
                fontFamily === 'serif' ? 'bg-amber-800 text-amber-100 font-serif' : 'text-stone-300 hover:text-stone-100'
              }`}
              title="የፊደል ቅርጽ (ሰሪፍ/ሳንስ)"
            >
              ፊደል
            </button>
            <div className="h-3 w-px bg-stone-700 mx-0.5" />
            {(['sm', 'base', 'lg', 'xl'] as const).map((s) => (
              <button
                key={s}
                onClick={() => onChangeFontSize(s)}
                className={`px-1.5 py-1 text-[11px] rounded transition-colors cursor-pointer ${
                  fontSize === s ? 'bg-stone-700 text-amber-300 font-bold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {s === 'sm' ? 'A-' : s === 'base' ? 'A' : s === 'lg' ? 'A+' : 'A++'}
              </button>
            ))}
          </div>

          {/* Theology AI Assistant Button */}
          <button
            id="theology-assistant-btn"
            onClick={onOpenAssistant}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-amber-50 text-xs font-semibold shadow-sm transition-all cursor-pointer"
            title="የቲኦሎጂ ረዳት ጠይቅ"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span className="hidden sm:inline">የቲኦሎጂ ረዳት</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="bg-stone-950/80 border-t border-stone-800/80 px-2 sm:px-6 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 py-1">
          <button
            id="nav-tab-cover"
            onClick={() => setActiveView('cover')}
            className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeView === 'cover'
                ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>ከቨር ፔጅ (Cover)</span>
          </button>

          <button
            id="nav-tab-reader"
            onClick={() => setActiveView('reader')}
            className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeView === 'reader'
                ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>መጽሐፍ ቅዱስ (Bible)</span>
          </button>

          <button
            id="nav-tab-analysis"
            onClick={() => setActiveView('analysis')}
            className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeView === 'analysis'
                ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>ቲኦሎጂካል ትንታኔ (Exegesis)</span>
          </button>

          <button
            id="nav-tab-solas"
            onClick={() => setActiveView('solas')}
            className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeView === 'solas'
                ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>አምስቱ ሶላዎች (The 5 Solas)</span>
          </button>

          <button
            id="nav-tab-topical"
            onClick={() => setActiveView('topical')}
            className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeView === 'topical'
                ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>የአርእስት ጥናት (Topical)</span>
          </button>

          <button
            id="nav-tab-notes"
            onClick={() => setActiveView('notes')}
            className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeView === 'notes'
                ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <BookmarkCheck className="w-4 h-4" />
            <span>ማስታወሻዎች (Notes)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
