import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Bookmark, 
  BookmarkCheck, 
  Highlighter, 
  FileText, 
  Copy, 
  Check, 
  Share2, 
  Loader2,
  BookOpen,
  RotateCw,
  AlertCircle,
  HardDriveDownload,
  CheckCircle2,
  Languages,
  Hash,
  Volume2
} from 'lucide-react';
import { BibleBook, BibleVerse, VerseHighlight, Bookmark as BookmarkType, HighlightColor, StrongsWord } from '../types';
import { isChapterAvailableOffline } from '../utils/offlineBibleStorage';
import { StrongsWordModal } from './StrongsWordModal';

interface BibleReaderProps {
  currentBook: BibleBook;
  currentChapter: number;
  verses: BibleVerse[];
  isLoadingVerses: boolean;
  versesError?: string | null;
  onRetryLoadVerses?: () => void;
  onNavigateChapter: (direction: 'prev' | 'next') => void;
  showEnglishParallel: boolean;
  showOriginalLanguage?: boolean;
  onToggleOriginalLanguage?: () => void;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  fontFamily: 'serif' | 'sans';
  highlights: VerseHighlight[];
  bookmarks: BookmarkType[];
  onAddHighlight: (verseNum: number, color: HighlightColor) => void;
  onRemoveHighlight: (verseNum: number) => void;
  onToggleBookmark: (verseNum: number, previewText: string) => void;
  onOpenAddNote: (verseNum: number) => void;
  onTriggerTheologicalAnalysis: (verseStart?: number, verseEnd?: number, customPassageText?: string) => void;
  onAskTheologyAssistant?: (prompt: string) => void;
}

export const BibleReader: React.FC<BibleReaderProps> = ({
  currentBook,
  currentChapter,
  verses,
  isLoadingVerses,
  versesError,
  onRetryLoadVerses,
  onNavigateChapter,
  showEnglishParallel,
  showOriginalLanguage = true,
  onToggleOriginalLanguage,
  fontSize,
  fontFamily,
  highlights,
  bookmarks,
  onAddHighlight,
  onRemoveHighlight,
  onToggleBookmark,
  onOpenAddNote,
  onTriggerTheologicalAnalysis,
  onAskTheologyAssistant,
}) => {
  const [selectedVerses, setSelectedVerses] = useState<number[]>([]);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
  const [showOriginalView, setShowOriginalView] = useState<boolean>(showOriginalLanguage);
  const [showStrongsView, setShowStrongsView] = useState<boolean>(true);
  const [selectedStrongsWord, setSelectedStrongsWord] = useState<StrongsWord | null>(null);
  const [selectedVerseNumberForWord, setSelectedVerseNumberForWord] = useState<number | undefined>();

  // Sync prop changes
  useEffect(() => {
    setShowOriginalView(showOriginalLanguage);
  }, [showOriginalLanguage]);

  // Clear selection when book or chapter changes
  useEffect(() => {
    setSelectedVerses([]);
  }, [currentBook.id, currentChapter]);

  const isOldTestament = currentBook.testament === 'OT';
  const originalLanguageTitle = isOldTestament 
    ? 'ዕብራይስጥ (Biblical Hebrew / BHS)' 
    : 'ግሪክኛ (Biblical Greek / NA28)';

  const toggleVerseSelection = (vNum: number) => {
    setSelectedVerses((prev) => {
      if (prev.includes(vNum)) {
        return prev.filter((v) => v !== vNum);
      } else {
        return [...prev, vNum].sort((a, b) => a - b);
      }
    });
  };

  const getHighlightForVerse = (vNum: number): VerseHighlight | undefined => {
    return highlights.find(
      (h) => h.bookId === currentBook.id && h.chapter === currentChapter && h.verse === vNum
    );
  };

  const isBookmarked = (vNum: number): boolean => {
    return bookmarks.some(
      (b) => b.bookId === currentBook.id && b.chapter === currentChapter && b.verse === vNum
    );
  };

  // Font size classes
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-base leading-relaxed';
      case 'base':
        return 'text-lg leading-loose';
      case 'lg':
        return 'text-xl leading-loose';
      case 'xl':
        return 'text-2xl leading-loose';
      default:
        return 'text-lg leading-loose';
    }
  };

  const getHighlightColorClass = (color: HighlightColor) => {
    switch (color) {
      case 'yellow':
        return 'bg-amber-100/90 text-amber-950 dark:bg-amber-950/60 dark:text-amber-100 border-l-4 border-amber-500 pl-2 rounded-r';
      case 'green':
        return 'bg-emerald-100/90 text-emerald-950 dark:bg-emerald-950/60 dark:text-emerald-100 border-l-4 border-emerald-500 pl-2 rounded-r';
      case 'blue':
        return 'bg-sky-100/90 text-sky-950 dark:bg-sky-950/60 dark:text-sky-100 border-l-4 border-sky-500 pl-2 rounded-r';
      case 'purple':
        return 'bg-purple-100/90 text-purple-950 dark:bg-purple-950/60 dark:text-purple-100 border-l-4 border-purple-500 pl-2 rounded-r';
      case 'amber':
        return 'bg-orange-100/90 text-orange-950 dark:bg-orange-950/60 dark:text-orange-100 border-l-4 border-orange-500 pl-2 rounded-r';
      default:
        return '';
    }
  };

  // Copy selected verses
  const handleCopySelected = () => {
    if (selectedVerses.length === 0) return;
    const selectedTexts = selectedVerses
      .map((vNum) => {
        const verse = verses.find((v) => v.verse === vNum);
        return verse ? `[${vNum}] ${verse.textAm}${verse.textOriginal ? `\n[${isOldTestament ? 'Hebrew' : 'Greek'}] ${verse.textOriginal}` : ''}` : '';
      })
      .filter(Boolean)
      .join('\n\n');

    const fullText = `${currentBook.nameAm} ${currentChapter}:${selectedVerses.join(',')}\n${selectedTexts}`;
    navigator.clipboard.writeText(fullText);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  // Trigger analysis for selected
  const handleAnalyzeSelected = () => {
    if (selectedVerses.length === 0) {
      onTriggerTheologicalAnalysis();
      return;
    }
    const minVerse = Math.min(...selectedVerses);
    const maxVerse = Math.max(...selectedVerses);
    const selectedTexts = selectedVerses
      .map((vNum) => {
        const verse = verses.find((v) => v.verse === vNum);
        return verse ? `${vNum}. ${verse.textAm}` : '';
      })
      .join('\n');

    onTriggerTheologicalAnalysis(minVerse, maxVerse, selectedTexts);
  };

  const handleOpenStrongsWord = (word: StrongsWord, verseNum: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedStrongsWord(word);
    setSelectedVerseNumberForWord(verseNum);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6 pb-28">
      {/* Chapter Top Bar */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <button
            id="prev-chapter-btn"
            onClick={() => onNavigateChapter('prev')}
            disabled={currentChapter <= 1}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:hover:bg-stone-800 text-stone-200 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            title="ያለፈው ምዕራፍ"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>ያለፈው</span>
          </button>

          <div className="text-center">
            <h2 className="text-base sm:text-lg font-bold text-stone-100 flex items-center justify-center gap-2">
              <span>{currentBook.nameAm}</span>
              {currentBook.nameOriginal && (
                <span className="text-xs text-amber-300/80 font-serif font-normal" dir={isOldTestament ? 'rtl' : 'ltr'}>
                  ({currentBook.nameOriginal})
                </span>
              )}
              <span className="text-amber-400 font-mono">ምዕ. {currentChapter}</span>
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-0.5 flex-wrap">
              <span className="text-xs text-stone-400">
                {currentBook.nameEn} • {currentBook.category}
              </span>
              <span className="text-[11px] px-1.5 py-0.2 rounded bg-amber-950/60 border border-amber-800/40 text-amber-300 font-medium">
                {isOldTestament ? 'ዕብራይስጥ (OT)' : 'ግሪክኛ (NT)'}
              </span>
              {isChapterAvailableOffline(currentBook.id, currentChapter) && (
                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-1.5 py-0.2 rounded font-medium" title="ይህ ምዕራፍ ከመስመር ውጭ (Offline) ተቀምጧል">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>Offline Ready</span>
                </span>
              )}
            </div>
          </div>

          <button
            id="next-chapter-btn"
            onClick={() => onNavigateChapter('next')}
            disabled={currentChapter >= currentBook.totalChapters}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:hover:bg-stone-800 text-stone-200 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            title="የሚቀጥለው ምዕራፍ"
          >
            <span>ቀጣይ</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Original Language & Exegesis Quick Controls */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
          {/* Toggle Original Language */}
          <button
            id="toggle-original-lang-btn"
            onClick={() => {
              if (onToggleOriginalLanguage) {
                onToggleOriginalLanguage();
              } else {
                setShowOriginalView(!showOriginalView);
              }
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
              showOriginalView
                ? 'bg-amber-600/30 text-amber-300 border-amber-500/60 shadow-xs'
                : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
            }`}
            title="የመጀመሪያው ቋንቋ (ዕብራይስጥ / ግሪክኛ) ጽሑፍ አሳይ/ደብቅ"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{isOldTestament ? 'ዕብራይስጥ (Hebrew)' : 'ግሪክኛ (Greek)'}</span>
          </button>

          {/* Toggle Strong's Concordance Words */}
          {showOriginalView && (
            <button
              id="toggle-strongs-btn"
              onClick={() => setShowStrongsView(!showStrongsView)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 border transition-all cursor-pointer ${
                showStrongsView
                  ? 'bg-amber-950/70 text-amber-200 border-amber-700/60'
                  : 'bg-stone-800/80 text-stone-400 border-stone-700'
              }`}
              title="Strong's Concordance የቃላት ትንተና አሳይ/ደብቅ"
            >
              <Hash className="w-3 h-3 text-amber-400" />
              <span>Strong's</span>
            </button>
          )}

          {/* Exegesis Quick Bar */}
          <button
            id="analyze-chapter-btn"
            onClick={() => onTriggerTheologicalAnalysis()}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-amber-50 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            title="የዚህን ምዕራፍ ቲኦሎጂካል ትንታኔ ተመልከት"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span className="hidden sm:inline">የምዕራፉ</span>
            <span>ቲኦሎጂካል ትንታኔ</span>
          </button>
        </div>
      </div>

      {/* Floating Verse Action Toolbar (When verses are selected) */}
      {selectedVerses.length > 0 && (
        <div className="sticky top-28 z-30 bg-stone-900 text-stone-100 border border-amber-500/50 rounded-xl p-3 shadow-xl flex flex-wrap items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-amber-600 text-white text-xs font-bold font-mono">
              {selectedVerses.length} ቁጥር{selectedVerses.length > 1 ? 'ዎች' : ''}
            </span>
            <span className="text-xs text-stone-300 font-medium hidden sm:inline">
              ተመርጧል (ቁጥር {selectedVerses.join(', ')})
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Analyze Selection */}
            <button
              onClick={handleAnalyzeSelected}
              className="px-2.5 py-1.5 rounded-md bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold flex items-center gap-1 shadow transition-colors cursor-pointer"
              title="የተመረጡትን ቁጥሮች በቲኦሎጂ ተንትን"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>ትንታኔ</span>
            </button>

            {/* Highlight color picker */}
            <div className="flex items-center gap-1 px-1.5 py-1 bg-stone-800 rounded-md border border-stone-700">
              {(['yellow', 'green', 'blue', 'purple', 'amber'] as const).map((col) => (
                <button
                  key={col}
                  onClick={() => {
                    selectedVerses.forEach((v) => onAddHighlight(v, col));
                  }}
                  className={`w-5 h-5 rounded-full border border-white/20 transition-transform hover:scale-110 cursor-pointer ${
                    col === 'yellow'
                      ? 'bg-amber-400'
                      : col === 'green'
                      ? 'bg-emerald-400'
                      : col === 'blue'
                      ? 'bg-sky-400'
                      : col === 'purple'
                      ? 'bg-purple-400'
                      : 'bg-orange-400'
                  }`}
                  title={`${col} ቀለም ደምቅ`}
                />
              ))}
            </div>

            {/* Add Note Button */}
            <button
              onClick={() => onOpenAddNote(selectedVerses[0])}
              className="p-1.5 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="የግል ማስታወሻ ጻፍ"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span className="hidden md:inline">ማስታወሻ</span>
            </button>

            {/* Bookmark Button */}
            <button
              onClick={() => {
                const firstV = selectedVerses[0];
                const verseObj = verses.find((v) => v.verse === firstV);
                onToggleBookmark(firstV, verseObj ? verseObj.textAm : '');
              }}
              className="p-1.5 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="ዕልባት አድርግ"
            >
              <Bookmark className="w-4 h-4 text-amber-400" />
            </button>

            {/* Copy Button */}
            <button
              onClick={handleCopySelected}
              className="p-1.5 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs transition-colors cursor-pointer"
              title="ጥቅሱን ቅዳ"
            >
              {copiedSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            {/* Deselect all */}
            <button
              onClick={() => setSelectedVerses([])}
              className="text-xs text-stone-400 hover:text-stone-100 px-2 py-1 cursor-pointer"
            >
              አጽዳ
            </button>
          </div>
        </div>
      )}

      {/* Verses Container */}
      <div className="bg-stone-900/60 border border-stone-800/90 rounded-2xl p-4 sm:p-8 shadow-md">
        {isLoadingVerses ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3 text-stone-400">
            <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
            <p className="text-sm font-medium">የመጽሐፍ ቅዱስ ክፍሉ (የአማርኛ፣ {originalLanguageTitle}) በመጫን ላይ ነው...</p>
          </div>
        ) : versesError ? (
          <div className="py-16 text-center space-y-3.5 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-stone-200">{versesError}</p>
            <p className="text-xs text-stone-400">
              የመጽሐፍ ቅዱስ ክፍሉን ከሞዴሉ በማምጣት ላይ እክል ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።
            </p>
            {onRetryLoadVerses && (
              <button
                onClick={onRetryLoadVerses}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-semibold shadow transition-colors cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>ምዕራፉን እንደገና ጫን</span>
              </button>
            )}
          </div>
        ) : verses.length === 0 ? (
          <div className="py-16 text-center text-stone-400 space-y-3">
            <BookOpen className="w-10 h-10 mx-auto text-amber-500/50" />
            <p className="text-sm">ለዚህ ምዕራፍ የተመዘገበ ጽሑፍ የለም።</p>
            <div className="flex items-center justify-center gap-2">
              {onRetryLoadVerses && (
                <button
                  onClick={onRetryLoadVerses}
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>እንደገና ጫን</span>
                </button>
              )}
              <button
                onClick={() => onTriggerTheologicalAnalysis()}
                className="px-4 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-medium cursor-pointer"
              >
                የክፍሉን ትንታኔ ፈልግ
              </button>
            </div>
          </div>
        ) : (
          <div className={`space-y-4 ${fontFamily === 'serif' ? 'font-ethiopic-serif' : 'font-ethiopic-sans'}`}>
            {verses.map((verse) => {
              const isSelected = selectedVerses.includes(verse.verse);
              const highlight = getHighlightForVerse(verse.verse);
              const bookmarked = isBookmarked(verse.verse);

              return (
                <div
                  id={`verse-item-${verse.verse}`}
                  key={verse.verse}
                  onClick={() => toggleVerseSelection(verse.verse)}
                  className={`group relative p-3 sm:p-4 rounded-xl transition-all cursor-pointer select-text border ${
                    isSelected
                      ? 'bg-amber-950/40 border-amber-500/60 shadow-sm'
                      : highlight
                      ? `${getHighlightColorClass(highlight.color)} border-stone-800/80`
                      : 'border-transparent hover:border-stone-800 hover:bg-stone-800/50 text-stone-200'
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Verse Number & Bookmark indicator */}
                    <div className="flex flex-col items-center pt-0.5 select-none shrink-0">
                      <span
                        className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded transition-all ${
                          isSelected 
                            ? 'bg-amber-500 text-stone-950' 
                            : 'bg-stone-800/80 text-amber-400 group-hover:bg-amber-500/20 group-hover:text-amber-300'
                        }`}
                      >
                        {verse.verse}
                      </span>
                      {bookmarked && (
                        <BookmarkCheck className="w-3.5 h-3.5 text-amber-400 mt-1 fill-amber-400/30" />
                      )}
                    </div>

                    {/* Verse Text Area */}
                    <div className="flex-1 space-y-2">
                      {/* Amharic Text */}
                      <p className={`${getFontSizeClass()} font-normal text-stone-100 tracking-wide`}>
                        {verse.textAm}
                      </p>

                      {/* Original Language Text (Hebrew / Greek) */}
                      {showOriginalView && verse.textOriginal && (
                        <div className="mt-2 pt-2 pb-1 px-3 rounded-lg bg-stone-950/70 border border-stone-800/80 space-y-1.5">
                          {/* Original Text with appropriate script & direction */}
                          <div 
                            dir={isOldTestament ? 'rtl' : 'ltr'}
                            className={`text-base sm:text-lg text-amber-300 font-serif leading-relaxed ${isOldTestament ? 'font-mono text-right' : 'font-serif'}`}
                          >
                            {verse.textOriginal}
                          </div>

                          {/* Transliteration */}
                          {verse.transliteration && (
                            <p className="text-xs text-stone-400 font-sans italic">
                              {verse.transliteration}
                            </p>
                          )}

                          {/* Strong's Concordance Interactive Word Pills */}
                          {showStrongsView && verse.strongsWords && verse.strongsWords.length > 0 && (
                            <div className="pt-2 border-t border-stone-800/60 flex flex-wrap items-center gap-1.5">
                              <span className="text-[10px] uppercase font-bold text-stone-500 flex items-center gap-0.5 mr-1">
                                <Hash className="w-2.5 h-2.5 text-amber-400" />
                                <span>ቃላት ትንተና:</span>
                              </span>
                              {verse.strongsWords.map((word, wIdx) => (
                                <button
                                  key={`${word.strongsNumber}-${wIdx}`}
                                  onClick={(e) => handleOpenStrongsWord(word, verse.verse, e)}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-stone-900 hover:bg-amber-950/80 border border-stone-700 hover:border-amber-500/60 text-stone-300 hover:text-amber-200 text-xs transition-colors cursor-pointer group/word"
                                  title={`${word.strongsNumber}: ${word.lemma || word.wordOriginal} - ${word.definition || word.amharicMeaning}`}
                                >
                                  <span className="font-mono text-[10px] text-amber-400 font-semibold group-hover/word:text-amber-300">
                                    {word.strongsNumber}
                                  </span>
                                  <span className="font-serif font-medium text-stone-200" dir={isOldTestament ? 'rtl' : 'ltr'}>
                                    {word.wordOriginal}
                                  </span>
                                  {word.amharicMeaning && (
                                    <span className="text-[11px] text-stone-400 group-hover/word:text-stone-300 hidden sm:inline">
                                      ({word.amharicMeaning})
                                    </span>
                                  )}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* English Parallel Text (Optional) */}
                      {showEnglishParallel && verse.textEn && (
                        <p className="text-xs sm:text-sm text-stone-400 font-sans italic pt-1 border-t border-stone-800/60">
                          {verse.textEn}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Chapter Bottom Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-stone-800">
        <button
          onClick={() => onNavigateChapter('prev')}
          disabled={currentChapter <= 1}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 disabled:opacity-30 disabled:hover:bg-stone-800 text-stone-200 text-sm font-medium transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>ያለፈው ምዕራፍ</span>
        </button>

        <span className="text-xs text-stone-500 font-mono">
          {currentBook.nameAm} {currentBook.nameOriginal ? `(${currentBook.nameOriginal})` : ''} • ምዕራፍ {currentChapter} / {currentBook.totalChapters}
        </span>

        <button
          onClick={() => onNavigateChapter('next')}
          disabled={currentChapter >= currentBook.totalChapters}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 disabled:opacity-30 disabled:hover:bg-stone-800 text-stone-200 text-sm font-medium transition-colors cursor-pointer"
        >
          <span>የሚቀጥለው ምዕራፍ</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Strong's Concordance Lexicon Modal */}
      <StrongsWordModal
        isOpen={!!selectedStrongsWord}
        onClose={() => setSelectedStrongsWord(null)}
        word={selectedStrongsWord}
        book={currentBook}
        chapter={currentChapter}
        verse={selectedVerseNumberForWord}
        onAskTheologyAssistant={onAskTheologyAssistant}
      />
    </div>
  );
};
