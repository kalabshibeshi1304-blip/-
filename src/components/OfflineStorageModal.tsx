import React, { useState, useEffect } from 'react';
import { 
  HardDrive, 
  CheckCircle2, 
  Download, 
  Trash2, 
  BookOpen, 
  ShieldCheck, 
  X, 
  WifiOff,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { BibleBook } from '../types';
import { PROTESTANT_BOOKS } from '../data/bibleData';
import { 
  getOfflineCacheStats, 
  saveOfflineChapter, 
  isChapterAvailableOffline,
  initializeSeedChaptersInOfflineStorage
} from '../utils/offlineBibleStorage';

interface OfflineStorageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (book: BibleBook, chapter: number) => void;
  notesCount: number;
  bookmarksCount: number;
  highlightsCount: number;
}

export const OfflineStorageModal: React.FC<OfflineStorageModalProps> = ({
  isOpen,
  onClose,
  onSelectChapter,
  notesCount,
  bookmarksCount,
  highlightsCount,
}) => {
  const [stats, setStats] = useState(() => getOfflineCacheStats());
  const [isPreloading, setIsPreloading] = useState<boolean>(false);
  const [preloadProgress, setPreloadProgress] = useState<{ current: number; total: number; label: string }>({
    current: 0,
    total: 0,
    label: '',
  });

  useEffect(() => {
    if (isOpen) {
      setStats(getOfflineCacheStats());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Key theological books for quick offline pre-caching
  const keyOfflineBooks = [
    { id: 'JHN', nameAm: 'የዮሐንስ ወንጌል', desc: 'የክርስቶስ ማንነትና መለኮትነት' },
    { id: 'ROM', nameAm: 'ወደ ሮሜ ሰዎች', desc: 'በእምነት ስለመጽደቅና ስለ ጸጋ' },
    { id: 'EPH', nameAm: 'ወደ ኤፌሶን ሰዎች', desc: 'የእግዚአብሔር ጸጋና የቤተክርስቲያን አንድነት' },
    { id: 'GAL', nameAm: 'ወደ ገላትያ ሰዎች', desc: 'በክርስቶስ ያለ ነጻነት (Sola Fide)' },
    { id: 'PSA', nameAm: 'መዝሙረ ዳዊት', desc: 'የምስጋና፣ ጸሎትና መጽናኛ መዝሙራት' },
    { id: 'ISA', nameAm: 'ትንቢተ ኢሳይያስ', desc: 'ስለ መሲሑ መከራና ክብር' },
    { id: 'HEB', nameAm: 'ወደ ዕብራውያን', desc: 'የክርስቶስ ታላቅ ሊቀ ካህንነት' },
    { id: 'REV', nameAm: 'የዮሐንስ ራእይ', desc: 'የክርስቶስ የመጨረሻ ድልና አዲሲቱ ኢየሩሳሌም' },
  ];

  const handlePrecacheSeeds = () => {
    setIsPreloading(true);
    initializeSeedChaptersInOfflineStorage();
    setTimeout(() => {
      setStats(getOfflineCacheStats());
      setIsPreloading(false);
    }, 600);
  };

  const handleClearCache = () => {
    if (window.confirm('ከመስመር ውጭ የተቀመጡትን ምዕራፎች ማጽዳት ይፈልጋሉ? (ማስታወሻዎችዎ እና ምልክቶችዎ አይጠፉም)')) {
      localStorage.removeItem('kal_offline_chapters_v1');
      setStats(getOfflineCacheStats());
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-fade-in">
      <div className="w-full max-w-2xl rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl text-stone-100 flex flex-col max-h-[88vh] overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-100">ከመስመር ውጭ ማከማቻ (Offline Storage)</h2>
              <p className="text-xs text-stone-400">ያለ ኢንተርኔት (Service Worker) የሚሰሩ ምዕራፎችና ማስታወሻዎች</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-6">
          {/* Overview Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-stone-800/60 border border-stone-700/60">
              <span className="text-[11px] text-stone-400 block mb-1">የተቀመጡ ምዕራፎች</span>
              <span className="text-xl font-bold text-amber-400">{stats.totalChaptersCached}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-800/60 border border-stone-700/60">
              <span className="text-[11px] text-stone-400 block mb-1">የግል ማስታወሻዎች</span>
              <span className="text-xl font-bold text-emerald-400">{notesCount}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-800/60 border border-stone-700/60">
              <span className="text-[11px] text-stone-400 block mb-1">ዕልባቶች (Bookmarks)</span>
              <span className="text-xl font-bold text-sky-400">{bookmarksCount}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-800/60 border border-stone-700/60">
              <span className="text-[11px] text-stone-400 block mb-1">የደመቁ ጥቅሶች</span>
              <span className="text-xl font-bold text-amber-300">{highlightsCount}</span>
            </div>
          </div>

          {/* Offline Protection Notice */}
          <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-stone-300 space-y-1">
              <p className="font-semibold text-amber-200">
                አፕሊኬሽኑ በService Worker የተገነባ በመሆኑ ማንበብዎን በየትኛውም ቦታ ያለ ኢንተርኔት መቀጠል ይችላሉ።
              </p>
              <p className="text-stone-400">
                የከፈቷቸው ምዕራፎች በሙሉ በራሳቸው ወደ ስልክዎ/ኮምፒውተርዎ ቋሚ ማከማቻ ይቀመጣሉ፤ እንዲሁም ማስታወሻዎችዎ በሙሉ ደህንነታቸው ተጠብቆ ይቆያል።
              </p>
            </div>
          </div>

          {/* Curated Core Books Quick Access */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-stone-200 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>ቁልፍ የመጽሐፍ ቅዱስ ክፍሎች (Offline Ready)</span>
              </h3>
              <button
                onClick={handlePrecacheSeeds}
                disabled={isPreloading}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isPreloading ? 'animate-spin' : ''}`} />
                <span>ሁሉንም አድስ</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {keyOfflineBooks.map((item) => {
                const book = PROTESTANT_BOOKS.find((b) => b.id === item.id);
                if (!book) return null;
                const isCached = isChapterAvailableOffline(item.id, 1);

                return (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-stone-800/40 hover:bg-stone-800/70 border border-stone-700/50 flex items-center justify-between transition-colors group cursor-pointer"
                    onClick={() => {
                      onSelectChapter(book, 1);
                      onClose();
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                          {item.nameAm}
                        </span>
                        {isCached && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                            <CheckCircle2 className="w-3 h-3" />
                            ተቀምጧል
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-stone-400 block">{item.desc}</span>
                    </div>

                    <button
                      className="p-1.5 rounded-lg bg-stone-700/50 hover:bg-amber-600 hover:text-stone-950 text-stone-300 transition-colors"
                      title="አንብብ"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-950/60 flex items-center justify-between">
          <button
            onClick={handleClearCache}
            className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-rose-950/40 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>ማከማቻ አጽዳ</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            ዝጋ
          </button>
        </div>
      </div>
    </div>
  );
};
