export type Testament = 'OT' | 'NT';

export type BibleCategory = 
  | 'ሕግ' // Pentateuch (Torah)
  | 'ታሪክ' // Historical
  | 'ጥበብና ቅኔ' // Poetic / Wisdom
  | 'አበይት ነቢያት' // Major Prophets
  | 'ደቂቀ ነቢያት' // Minor Prophets
  | 'ወንጌላት' // Gospels
  | 'የሐዋርያት ሥራ' // Church History
  | 'የጳውሎስ መልእክቶች' // Pauline Epistles
  | 'አጠቃላይ መልእክቶች' // General Epistles
  | 'ትንቢት'; // Apocalypse (Revelation)

export interface StrongsWord {
  original?: string; // Hebrew / Greek word
  wordOriginal?: string; // Hebrew / Greek word alias
  transliteration?: string; // Phonetic reading
  strongNumber?: string; // e.g. "H7225" (Hebrew) or "G3056" (Greek)
  strongsNumber?: string; // alias e.g. "H7225"
  lemma?: string; // Root dictionary form
  meaningAm?: string; // Amharic theological meaning
  amharicMeaning?: string; // alias
  morphology?: string; // Part of speech
  partOfSpeech?: string; // alias
  definition?: string; // English lexical definition
}

export interface BibleBook {
  id: string; // e.g., 'GEN', 'ROM', 'JHN'
  order: number; // 1 to 66
  nameAm: string; // e.g. "ኦሪት ዘፍጥረት"
  nameEn: string; // e.g. "Genesis"
  nameOriginal: string; // e.g. "בְּרֵאשִׁית" for OT (Hebrew), "ΚΑΤΑ ΙΩΑΝΝΗΝ" for NT (Greek)
  transliteration: string; // e.g. "B'reshit", "Kata Ioannen"
  abbrAm: string; // e.g. "ዘፍ"
  abbrEn: string; // e.g. "Gen"
  testament: Testament;
  category: BibleCategory;
  originalLang: 'hebrew' | 'greek' | 'aramaic';
  originalLanguageName: string; // "ዕብራይስጥ (עברית / BHS)" or "ግሪክኛ (Ἑλληνική / NA28)"
  totalChapters: number;
}

export interface BibleVerse {
  verse: number;
  textAm: string;
  textEn: string;
  textOriginal?: string; // Original Hebrew (with niqqud) or Greek (with accents)
  transliteration?: string; // Phonetic guide
  strongsWords?: StrongsWord[]; // Key Hebrew/Greek words with Strong's Concordance breakdown
}

export interface BibleChapterData {
  bookId: string;
  chapter: number;
  verses: BibleVerse[];
}

export type HighlightColor = 'yellow' | 'green' | 'blue' | 'purple' | 'amber';

export interface VerseHighlight {
  id: string;
  bookId: string;
  chapter: number;
  verse: number;
  color: HighlightColor;
  createdAt: number;
  note?: string;
}

export interface Bookmark {
  id: string;
  bookId: string;
  bookNameAm: string;
  chapter: number;
  verse: number;
  createdAt: number;
  previewTextAm: string;
}

export interface PersonalStudyNote {
  id: string;
  title: string;
  bookId: string;
  bookNameAm: string;
  chapter: number;
  verse?: number;
  content: string;
  createdAt: number;
  updatedAt: number;
}

export type AnalysisType = 'depth' | 'overview' | 'sermon' | 'words';

export interface TheologicalAnalysisState {
  isLoading: boolean;
  passageRef: string;
  content: string;
  analysisType: AnalysisType;
  error?: string | null;
}

export interface FiveSola {
  id: string;
  latin: string;
  amharic: string;
  english: string;
  motto: string;
  summaryAm: string;
  keyScriptureAm: string;
  scriptureRef: string;
  bookId: string;
  chapter: number;
  theologicalImpactAm: string;
}

export interface TopicalStudy {
  id: string;
  titleAm: string;
  titleEn: string;
  iconName: string;
  descriptionAm: string;
  coreDoctrineAm: string;
  scriptureReadings: {
    ref: string;
    textAm: string;
    analysisAm: string;
    bookId?: string;
    chapter?: number;
  }[];
  detailedSections?: {
    title: string;
    content: string;
    keyVerses?: string[];
  }[];
  historicalConfessions?: {
    title: string;
    date: string;
    content: string;
  }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}
