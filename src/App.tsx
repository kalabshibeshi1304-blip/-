import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { BibleReader } from './components/BibleReader';
import { TheologicalAnalysisPanel } from './components/TheologicalAnalysisPanel';
import { FiveSolasView } from './components/FiveSolasView';
import { TopicalStudyView } from './components/TopicalStudyView';
import { CoverPageView } from './components/CoverPageView';
import { NotesAndBookmarksModal } from './components/NotesAndBookmarksModal';
import { BookSelectorModal } from './components/BookSelectorModal';
import { DailyDevotionalModal } from './components/DailyDevotionalModal';
import { SearchModal } from './components/SearchModal';
import { AddNoteModal } from './components/AddNoteModal';
import { TheologyChatDrawer } from './components/TheologyChatDrawer';
import { OfflineIndicator } from './components/OfflineIndicator';
import { OfflineStorageModal } from './components/OfflineStorageModal';
import { SecurityGateModal } from './components/SecurityGateModal';
import { AdminSecurityModal } from './components/AdminSecurityModal';

import { 
  BibleBook, 
  BibleVerse, 
  VerseHighlight, 
  Bookmark, 
  PersonalStudyNote, 
  AnalysisType, 
  HighlightColor 
} from './types';
import { PROTESTANT_BOOKS, getBookById, getCachedVerses } from './data/bibleData';
import { getPresetExegesis } from './data/theologyData';
import { 
  getOfflineChapter, 
  saveOfflineChapter, 
  initializeSeedChaptersInOfflineStorage 
} from './utils/offlineBibleStorage';
import { checkIsUnlocked } from './utils/securityManager';

export default function App() {
  // Security & Device Activation State
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => checkIsUnlocked());
  const [isAdminSecurityOpen, setIsAdminSecurityOpen] = useState<boolean>(false);
  const [isMasterUser, setIsMasterUser] = useState<boolean>(() => {
    return sessionStorage.getItem('kal_session_is_master') === 'true';
  });

  // Navigation & Reading State
  // Default to Romans (ሮሜ) - the central Protestant book on justification by faith & grace
  const [currentBook, setCurrentBook] = useState<BibleBook>(() => {
    return getBookById('ROM') || PROTESTANT_BOOKS[44];
  });
  const [currentChapter, setCurrentChapter] = useState<number>(8);
  const [verses, setVerses] = useState<BibleVerse[]>(() => {
    return getOfflineChapter('ROM', 8) || getCachedVerses('ROM', 8) || [];
  });
  const [isLoadingVerses, setIsLoadingVerses] = useState<boolean>(false);

  // Pre-initialize seed chapters in offline store on mount
  useEffect(() => {
    initializeSeedChaptersInOfflineStorage();
  }, []);

  // Active View Tab (Defaults to bilingual Cover Page)
  const [activeView, setActiveView] = useState<'cover' | 'reader' | 'analysis' | 'solas' | 'topical' | 'notes'>('cover');

  // Display Settings
  const [showEnglishParallel, setShowEnglishParallel] = useState<boolean>(() => {
    return localStorage.getItem('berean_parallel_en') === 'true';
  });
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>(() => {
    return (localStorage.getItem('berean_font_size') as any) || 'base';
  });
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>(() => {
    return (localStorage.getItem('berean_font_family') as any) || 'sans';
  });

  // User Annotations & Persistence
  const [highlights, setHighlights] = useState<VerseHighlight[]>(() => {
    try {
      const saved = localStorage.getItem('berean_highlights');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    try {
      const saved = localStorage.getItem('berean_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [notes, setNotes] = useState<PersonalStudyNote[]>(() => {
    try {
      const saved = localStorage.getItem('berean_notes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('berean_highlights', JSON.stringify(highlights));
  }, [highlights]);

  useEffect(() => {
    localStorage.setItem('berean_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('berean_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('berean_parallel_en', String(showEnglishParallel));
  }, [showEnglishParallel]);

  useEffect(() => {
    localStorage.setItem('berean_font_size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('berean_font_family', fontFamily);
  }, [fontFamily]);

  // Modals state
  const [isBookSelectorOpen, setIsBookSelectorOpen] = useState<boolean>(false);
  const [isDevotionalOpen, setIsDevotionalOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);
  const [isAddNoteOpen, setIsAddNoteOpen] = useState<boolean>(false);
  const [isOfflineStorageOpen, setIsOfflineStorageOpen] = useState<boolean>(false);
  const [selectedVerseForNote, setSelectedVerseForNote] = useState<number | undefined>();
  const [assistantPrompt, setAssistantPrompt] = useState<string>('');

  // Theological Analysis State
  const [analysisType, setAnalysisType] = useState<AnalysisType>('depth');
  const [analysisPassageRef, setAnalysisPassageRef] = useState<string>('ወደ ሮሜ ሰዎች ምዕራፍ 8');
  const [analysisPassageText, setAnalysisPassageText] = useState<string>('እንግዲህ በክርስቶስ ኢየሱስ ላሉት አሁን ኩነኔ የለባቸውም። በክርስቶስ ኢየሱስ ያለው የሕይወት መንፈስ ሕግ ከኃጢአትና ከሞት ሕግ አርነት አውጥቶኛልና።');
  const [analysisContent, setAnalysisContent] = useState<string>(`### 📖 የክፍሉ የታሪክና ሥነ-ጽሑፋዊ አውድ (Historical Context)
- **ጸሐፊው**: ሐዋርያው ጳውሎስ በቆሮንቶስ በነበረበት ወቅት (በ57 ዓ.ም ገደማ) የጻፈው።
- **ተደራሲያን**: በሮም ከተማ ለሚገኙ የአይሁድና የአሕዛብ አማኞች።
- **የክፍሉ ቁልፍ አውድ**: በምዕራፍ 7 ላይ የተነሣውን የሥጋና የሕግ ትግል ካጠናቀቀ በኋላ፣ በምዕራፍ 8 ላይ በክርስቶስ ኢየሱስ ባገኘነው ፍጹም የጸጋ ነጻነትና በመንፈስ ቅዱስ አዲስ ሕይወት ላይ ያተኩራል።

### ✝️ ክርስቶስ-ተኮር ትንታኔ (Christocentric Interpretation)
- **"ኩነኔ የለባቸውም" (Kataprima - ፍርድ/ቅጣት የለም)**: ክርስቶስ በቀራንዮ መስቀል ላይ የእግዚአብሔርን ቁጣ ስለ ሁላችን ሙሉ በሙሉ ስለተቀበለ (Propitiation / ማስተስሪያ)፣ በእርሱ ለሆኑት ምንም የፍርድ አዋጅ አይጠብቃቸውም።
- ክርስቶስ የሕጉን ፍትሐዊ ጥያቄ ፈጽሞታል፤ እኛም በእርሱ በኩል የልጅነት መንፈስ (Adoption) አግኝተን "አባ አባት" ብለን እንድንጠራ አድርጎናል።

### 🏛️ የወንጌላውያን አስተምህሮ እና አምስቱ ሶላዎች
1. **Sola Gratia (በጸጋ ብቻ)**: ድነታችንና ከኩነኔ ነጻ መውጣታችን የእኛ ሥራ ሳይሆን የእግዚአብሔር ነጻ የጸጋ ስጦታ ነው።
2. **Solus Christus (በክርስቶስ ብቻ)**: ያለ ክርስቶስ ተተኪ መስዋዕትነት ማንም ከኃጢአትና ከሞት ሕግ ነጻ ሊወጣ አይችልም።
3. **Sola Fide (በእምነት ብቻ)**: ይህንን በክርስቶስ የተዘጋጀ ጽድቅ የምንቀበለው በእምነት ብቻ ነው።

### 🔍 የቃላት ጥናትና አገናዛቢ ጥቅሶች
- **Kataprima (κατάκριμα)**: በሕግ ቋንቋ የጥፋተኝነት የፍርድ ውሳኔ ወይም ቅጣት ማለት ነው። በክርስቶስ ለሆነው ይህ ፍርድ ሙሉ በሙሉ ተሰርዟል።
- **Pneuma (πνεῦμα - መንፈስ)**: በዚህ ምዕራፍ ውስጥ መንፈስ ቅዱስ ከ19 ጊዜ በላይ ተጠቅሷል፤ ይህም የክርስቲያን ሕይወት በመንፈስ ኃይል የሚመራ መሆኑን ያረጋግጣል።
- **አገናዛቢ ጥቅሶች**: ዮሐንስ 3:18 ("በእርሱ በሚያምን አይፈረድበትም")፤ ገላትያ 3:13፤ ኤፌሶን 1:7።

### 🕊️ ለግል ሕይወት ተግባራዊ አተገባበር
- የጥፋተኝነት ስሜትና የጠላት ክስ ሲመጣ፣ በስሜትህ ሳይሆን በሮሜ 8:1 የእግዚአብሔር ቃል እውነት ላይ ተደገፍ።
- በመንፈስ ቅዱስ መሪነት እንጂ በሥጋ ፈቃድ አትመላለስ፤ በክርስቶስ የተሰጠህን የልጅነት ክብር በምስጋና ኑርበት።`);
  const [isLoadingAnalysis, setIsLoadingAnalysis] = useState<boolean>(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [versesError, setVersesError] = useState<string | null>(null);

  // Load verses when book or chapter changes
  const loadChapterVerses = useCallback(async (book: BibleBook, ch: number) => {
    setVersesError(null);

    // 1. Check offline persistent storage (and seed chapters) first
    const offlineVerses = getOfflineChapter(book.id, ch);
    if (offlineVerses && offlineVerses.length > 0) {
      setVerses(offlineVerses);
      return;
    }

    // 2. If not stored offline yet, fetch from backend (and Service Worker caches it)
    setIsLoadingVerses(true);
    try {
      const url = `/api/bible/chapter-verses?book=${encodeURIComponent(book.nameAm)}&chapter=${ch}`;
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        const data = await res.json();
        if (data.verses && Array.isArray(data.verses) && data.verses.length > 0) {
          setVerses(data.verses);
          setVersesError(null);
          // Persist in local storage for reliable offline access
          saveOfflineChapter(book.id, ch, book.nameAm, book.nameEn, data.verses);
        } else {
          setVerses([]);
          setVersesError('ለዚህ ምዕራፍ የተመዘገበ ጽሑፍ ማግኘት አልተቻለም።');
        }
      } else {
        const errData = await res.json().catch(() => ({}));
        let errMsg = errData.message || errData.error || 'ምዕራፉን በመጫን ላይ እክል አጋጥሟል';
        if (typeof errMsg === 'string' && (errMsg.includes('503') || errMsg.includes('high demand') || errMsg.includes('UNAVAILABLE'))) {
          errMsg = 'የመጽሐፍ ቅዱስ ጽሑፉን በማመንጨት ላይ ሳለ ሞዴሉ በከፍተኛ ጥያቄ ምክንያት ተጨናንቋል። እባክዎ እንደገና ይሞክሩ።';
        }
        
        // Fallback check
        const fallback = getOfflineChapter(book.id, ch);
        if (fallback && fallback.length > 0) {
          setVerses(fallback);
          setVersesError(null);
        } else {
          setVersesError(errMsg);
          setVerses([]);
        }
      }
    } catch (e: any) {
      console.error('Failed to load verses dynamically:', e);
      // Check if we have offline copy
      const fallback = getOfflineChapter(book.id, ch);
      if (fallback && fallback.length > 0) {
        setVerses(fallback);
        setVersesError(null);
      } else {
        let errMsg = 'የኔትወርክ ግንኙነት የለም (Offline)። ይህ ምዕራፍ ገና በስልክዎ/ኮምፒውተርዎ ላይ አልተቀመጠም። እባክዎ ኢንተርኔት ሲኖር ይክፈቱት ወይም የተቀመጡ ምዕራፎችን ያንብቡ።';
        setVersesError(errMsg);
        setVerses([]);
      }
    } finally {
      setIsLoadingVerses(false);
    }
  }, []);

  useEffect(() => {
    loadChapterVerses(currentBook, currentChapter);
  }, [currentBook, currentChapter, loadChapterVerses]);

  // Navigate between chapters
  const handleNavigateChapter = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentChapter > 1) {
      setCurrentChapter((prev) => prev - 1);
    } else if (direction === 'next' && currentChapter < currentBook.totalChapters) {
      setCurrentChapter((prev) => prev + 1);
    }
  };

  // Select a specific book and chapter
  const handleSelectBookAndChapter = (book: BibleBook, chapter: number) => {
    setCurrentBook(book);
    setCurrentChapter(chapter);
  };

  // Trigger Theological Analysis
  const handleTriggerTheologicalAnalysis = async (
    verseStart?: number, 
    verseEnd?: number, 
    customPassageText?: string
  ) => {
    const ref = `${currentBook.nameAm} ምዕራፍ ${currentChapter}${
      verseStart ? `:${verseStart}${verseEnd && verseEnd !== verseStart ? `-${verseEnd}` : ''}` : ''
    }`;

    setAnalysisPassageRef(ref);
    setAnalysisPassageText(customPassageText || '');
    setActiveView('analysis');
    setIsLoadingAnalysis(true);
    setAnalysisError(null);

    try {
      const response = await fetch('/api/theology/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          book: currentBook.nameAm,
          chapter: currentChapter,
          verseStart,
          verseEnd,
          passageText: customPassageText,
          analysisType,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        let errorMsg = errData.message || errData.error || 'ትንታኔውን ማመንጨት አልተቻለም';
        if (typeof errorMsg === 'string' && (errorMsg.includes('503') || errorMsg.includes('high demand') || errorMsg.includes('UNAVAILABLE'))) {
          errorMsg = 'የቲኦሎጂ ትንታኔ ሞዴሉ በአሁኑ ሰዓት በከፍተኛ የተጠቃሚዎች ጥያቄ ምክንያት ተጨናንቋል። እባክዎ ጥቂት ሰከንዶች ቆይተው "እንደገና ሞክር" የሚለውን ይጫኑ።';
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      setAnalysisContent(data.analysis);
    } catch (err: any) {
      console.error('Error fetching exegesis:', err);
      const preset = getPresetExegesis(currentBook.id, currentChapter);
      if (preset && (!verseStart || verseStart === 1)) {
        setAnalysisContent(preset);
        setAnalysisError(null);
        return;
      }
      let errorMsg = err?.message || 'ትንታኔውን በማዘጋጀት ላይ ስህተት አጋጥሟል።';
      if (errorMsg === 'Failed to fetch' || errorMsg.includes('NetworkError') || errorMsg.includes('fetch')) {
        errorMsg = 'የኔትወርክ ግንኙነት መቆራረጥ አጋጥሟል። እባክዎ የበይነመረብ ግንኙነትዎን ያረጋግጡ ወይም "እንደገና ሞክር" የሚለውን ይጫኑ።';
      } else if (typeof errorMsg === 'string' && (errorMsg.includes('503') || errorMsg.includes('high demand') || errorMsg.includes('UNAVAILABLE'))) {
        errorMsg = 'የቲኦሎጂ ትንታኔ ሞዴሉ በአሁኑ ሰዓት በከፍተኛ የተጠቃሚዎች ጥያቄ ምክንያት ተጨናንቋል። እባክዎ ጥቂት ሰከንዶች ቆይተው "እንደገና ሞክር" የሚለውን ይጫኑ።';
      }
      setAnalysisError(errorMsg);
    } finally {
      setIsLoadingAnalysis(false);
    }
  };

  // Highlight actions
  const handleAddHighlight = (verseNum: number, color: HighlightColor) => {
    const id = `${currentBook.id}_${currentChapter}_${verseNum}`;
    setHighlights((prev) => {
      const filtered = prev.filter((h) => h.id !== id);
      return [
        ...filtered,
        {
          id,
          bookId: currentBook.id,
          chapter: currentChapter,
          verse: verseNum,
          color,
          createdAt: Date.now(),
        },
      ];
    });
  };

  const handleRemoveHighlight = (verseNum: number) => {
    const id = `${currentBook.id}_${currentChapter}_${verseNum}`;
    setHighlights((prev) => prev.filter((h) => h.id !== id));
  };

  // Bookmark actions
  const handleToggleBookmark = (verseNum: number, previewText: string) => {
    const id = `${currentBook.id}_${currentChapter}_${verseNum}`;
    const exists = bookmarks.some((b) => b.id === id);
    if (exists) {
      setBookmarks((prev) => prev.filter((b) => b.id !== id));
    } else {
      setBookmarks((prev) => [
        ...prev,
        {
          id,
          bookId: currentBook.id,
          bookNameAm: currentBook.nameAm,
          chapter: currentChapter,
          verse: verseNum,
          createdAt: Date.now(),
          previewTextAm: previewText,
        },
      ]);
    }
  };

  // Notes actions
  const handleSaveNote = (
    title: string, 
    content: string, 
    bookId: string, 
    chapter: number, 
    verse?: number
  ) => {
    const newNote: PersonalStudyNote = {
      id: `note_${Date.now()}`,
      title,
      content,
      bookId,
      bookNameAm: getBookById(bookId)?.nameAm || bookId,
      chapter,
      verse,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const handleDeleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const handleDeleteBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const handleDeleteHighlight = (id: string) => {
    setHighlights((prev) => prev.filter((h) => h.id !== id));
  };

  // Open note modal for specific verse
  const handleOpenAddNote = (verseNum: number) => {
    setSelectedVerseForNote(verseNum);
    setIsAddNoteOpen(true);
  };

  // Open assistant with query
  const handleOpenAssistantWithQuery = (prompt: string) => {
    setAssistantPrompt(prompt);
    setIsAssistantOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-ethiopic-sans selection:bg-amber-600/30 selection:text-amber-200">
      {/* Sticky Header Navigation */}
      <Navbar
        currentBook={currentBook}
        currentChapter={currentChapter}
        onOpenBookSelector={() => setIsBookSelectorOpen(true)}
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenDevotional={() => setIsDevotionalOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAssistant={() => {
          setAssistantPrompt('');
          setIsAssistantOpen(true);
        }}
        onOpenOfflineStorage={() => setIsOfflineStorageOpen(true)}
        onOpenSecurity={() => setIsAdminSecurityOpen(true)}
        showEnglishParallel={showEnglishParallel}
        onToggleEnglishParallel={() => setShowEnglishParallel((prev) => !prev)}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
        fontFamily={fontFamily}
        onToggleFontFamily={() => setFontFamily((prev) => (prev === 'serif' ? 'sans' : 'serif'))}
      />

      {/* Main View Display Container */}
      <main className="flex-1 pb-16">
        {activeView === 'cover' && (
          <CoverPageView
            onStartReading={() => setActiveView('reader')}
            onOpenAnalysis={() => setActiveView('analysis')}
            onOpenSolas={() => setActiveView('solas')}
            onOpenTopical={() => setActiveView('topical')}
            onOpenDevotional={() => setIsDevotionalOpen(true)}
            onSelectBook={(bookId, chapter) => {
              const book = getBookById(bookId);
              if (book) {
                setCurrentBook(book);
                setCurrentChapter(chapter);
                setActiveView('reader');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            currentBook={currentBook}
          />
        )}

        {activeView === 'reader' && (
          <BibleReader
            currentBook={currentBook}
            currentChapter={currentChapter}
            verses={verses}
            isLoadingVerses={isLoadingVerses}
            versesError={versesError}
            onRetryLoadVerses={() => loadChapterVerses(currentBook, currentChapter)}
            onNavigateChapter={handleNavigateChapter}
            showEnglishParallel={showEnglishParallel}
            fontSize={fontSize}
            fontFamily={fontFamily}
            highlights={highlights}
            bookmarks={bookmarks}
            onAddHighlight={handleAddHighlight}
            onRemoveHighlight={handleRemoveHighlight}
            onToggleBookmark={handleToggleBookmark}
            onOpenAddNote={handleOpenAddNote}
            onTriggerTheologicalAnalysis={handleTriggerTheologicalAnalysis}
            onAskTheologyAssistant={handleOpenAssistantWithQuery}
          />
        )}

        {activeView === 'analysis' && (
          <TheologicalAnalysisPanel
            currentBook={currentBook}
            currentChapter={currentChapter}
            passageRef={analysisPassageRef}
            passageText={analysisPassageText}
            analysisContent={analysisContent}
            isLoading={isLoadingAnalysis}
            error={analysisError}
            activeAnalysisType={analysisType}
            onChangeAnalysisType={(t) => {
              setAnalysisType(t);
              handleTriggerTheologicalAnalysis();
            }}
            onRefreshAnalysis={() => handleTriggerTheologicalAnalysis()}
            onSaveToNotes={(title, content) => handleSaveNote(title, content, currentBook.id, currentChapter)}
            onOpenAssistantWithContext={handleOpenAssistantWithQuery}
          />
        )}

        {activeView === 'solas' && (
          <FiveSolasView
            onNavigateToScripture={(bookId, ch) => {
              const book = getBookById(bookId);
              if (book) {
                setCurrentBook(book);
                setCurrentChapter(ch);
                setActiveView('reader');
              }
            }}
            onAskTheologyQuestion={handleOpenAssistantWithQuery}
          />
        )}

        {activeView === 'topical' && (
          <TopicalStudyView
            onAskTheologyAssistant={handleOpenAssistantWithQuery}
            onSelectScripture={(_ref, bookId, chapter) => {
              if (bookId && chapter) {
                const book = getBookById(bookId);
                if (book) {
                  setCurrentBook(book);
                  setCurrentChapter(chapter);
                  setActiveView('reader');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }
            }}
          />
        )}

        {activeView === 'notes' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
            <NotesAndBookmarksModal
              isOpen={true}
              onClose={() => setActiveView('reader')}
              notes={notes}
              highlights={highlights}
              bookmarks={bookmarks}
              onDeleteNote={handleDeleteNote}
              onDeleteBookmark={handleDeleteBookmark}
              onDeleteHighlight={handleDeleteHighlight}
              onNavigateToPassage={(bookId, ch) => {
                const book = getBookById(bookId);
                if (book) {
                  setCurrentBook(book);
                  setCurrentChapter(ch);
                  setActiveView('reader');
                }
              }}
            />
          </div>
        )}
      </main>

      {/* Floating Book Selector Modal */}
      <BookSelectorModal
        isOpen={isBookSelectorOpen}
        onClose={() => setIsBookSelectorOpen(false)}
        currentBook={currentBook}
        currentChapter={currentChapter}
        onSelectBookAndChapter={handleSelectBookAndChapter}
      />

      {/* Daily Devotional Modal */}
      <DailyDevotionalModal
        isOpen={isDevotionalOpen}
        onClose={() => setIsDevotionalOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPassage={(book, ch) => {
          setCurrentBook(book);
          setCurrentChapter(ch);
          setActiveView('reader');
        }}
      />

      {/* Add Note Modal */}
      <AddNoteModal
        isOpen={isAddNoteOpen}
        onClose={() => setIsAddNoteOpen(false)}
        currentBook={currentBook}
        currentChapter={currentChapter}
        verseNum={selectedVerseForNote}
        onSaveNote={handleSaveNote}
      />

      {/* Theology AI Chat Assistant Drawer */}
      <TheologyChatDrawer
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        currentContext={`${currentBook.nameAm} ምዕራፍ ${currentChapter}`}
        initialPrompt={assistantPrompt}
      />

      {/* Offline Storage Management Modal */}
      <OfflineStorageModal
        isOpen={isOfflineStorageOpen}
        onClose={() => setIsOfflineStorageOpen(false)}
        onSelectChapter={(book, ch) => {
          setCurrentBook(book);
          setCurrentChapter(ch);
          setActiveView('reader');
        }}
        notesCount={notes.length}
        bookmarksCount={bookmarks.length}
        highlightsCount={highlights.length}
      />

      {/* Real-time Offline & Online Status Floating Indicator */}
      <OfflineIndicator onOpenOfflineManager={() => setIsOfflineStorageOpen(true)} />

      {/* Security Gate / Passcode Lock Screen for New Devices or Locked State */}
      <SecurityGateModal
        isOpen={!isUnlocked}
        onUnlocked={(isMaster) => {
          setIsUnlocked(true);
          setIsMasterUser(isMaster);
        }}
      />

      {/* Admin / Owner Security & Access Management Modal */}
      <AdminSecurityModal
        isOpen={isAdminSecurityOpen}
        onClose={() => setIsAdminSecurityOpen(false)}
        onLockApp={() => {
          setIsUnlocked(false);
          setIsMasterUser(false);
        }}
      />
    </div>
  );
}
