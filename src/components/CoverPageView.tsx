import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Layers, 
  Bookmark, 
  Volume2, 
  Heart, 
  ChevronRight, 
  Cross, 
  Scroll, 
  ShieldCheck, 
  Flame, 
  Languages,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { BibleBook } from '../types';

interface CoverPageViewProps {
  onStartReading: () => void;
  onOpenAnalysis: () => void;
  onOpenSolas: () => void;
  onOpenTopical: () => void;
  onOpenDevotional: () => void;
  onSelectBook: (bookId: string, chapter: number) => void;
  currentBook: BibleBook;
}

export const CoverPageView: React.FC<CoverPageViewProps> = ({
  onStartReading,
  onOpenAnalysis,
  onOpenSolas,
  onOpenTopical,
  onOpenDevotional,
  onSelectBook,
  currentBook,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Grand Cover Page / Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 border-2 border-amber-500/40 p-6 sm:p-12 shadow-2xl shadow-amber-950/20 text-center space-y-8">
        {/* Decorative corner patterns */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-amber-500/30 text-xs font-serif font-bold uppercase tracking-widest select-none">
          ✝ SOLI DEO GLORIA
        </div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-amber-500/30 text-xs font-serif font-bold uppercase tracking-widest select-none">
          SOLA SCRIPTURA ✝
        </div>

        {/* Emblem / Cross Badge */}
        <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-amber-700 via-amber-600 to-amber-500 p-0.5 shadow-xl shadow-amber-600/30 flex items-center justify-center">
          <div className="w-full h-full bg-stone-950/90 rounded-2xl flex flex-col items-center justify-center text-amber-400 gap-1">
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300" />
            <span className="text-[10px] font-mono tracking-widest text-amber-500 font-bold">LOGOS</span>
          </div>
        </div>

        {/* Bilingual Titles */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-semibold">
            <Languages className="w-3.5 h-3.5 text-amber-400" />
            <span>አማርኛ • English (Dual Language Study Bible)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 font-ethiopic-serif leading-tight">
            Kal (ቃል) መጽሐፍ ቅዱስ
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl font-serif tracking-wider text-amber-200/90 uppercase font-semibold">
            Kal (The Word) Holy Bible
          </h2>

          <p className="text-xs sm:text-base text-stone-300 max-w-2xl mx-auto font-ethiopic-sans leading-relaxed pt-1">
            የወንጌላዊ የጥናትና የሥነ-መለኮት ትንታኔ መጽሐፍ ቅዱስ (Theological Exegesis & Study Bible)
          </p>
        </div>

        {/* John 1:1 Prologue Callout - Bilingual & Greek */}
        <div className="max-w-3xl mx-auto bg-stone-950/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-inner text-left">
          <div className="flex items-center justify-between border-b border-stone-800 pb-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Scroll className="w-4 h-4 text-amber-400" />
              የቃል መሠረት • The Word Prologue (John 1:1)
            </span>
            <span className="text-[11px] font-mono text-stone-400">ዮሐንስ 1፥1</span>
          </div>

          {/* Amharic Text */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-amber-500 uppercase">አማርኛ (Amharic):</span>
            <blockquote className="text-base sm:text-lg font-ethiopic-serif text-stone-100 italic leading-relaxed pl-3 border-l-2 border-amber-500">
              «በመጀመሪያ ቃል ነበረ፥ ቃልም በእግዚአብሔር ዘንድ ነበረ፥ ቃልም እግዚአብሔር ነበረ።»
            </blockquote>
          </div>

          {/* English Text */}
          <div className="space-y-1 pt-1 border-t border-stone-900">
            <span className="text-[11px] font-bold text-amber-500 uppercase">English (WEB / KJV):</span>
            <blockquote className="text-sm sm:text-base font-serif text-stone-200 italic leading-relaxed pl-3 border-l-2 border-amber-600/70">
              "In the beginning was the Word, and the Word was with God, and the Word was God."
            </blockquote>
          </div>

          {/* Greek Reference */}
          <div className="text-[12px] font-mono text-stone-400 pt-1 border-t border-stone-900">
            <span className="text-amber-500 font-bold">Greek (Original):</span> «Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος.»
          </div>
        </div>

        {/* Primary Call-to-Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <button
            id="cover-start-reading-btn"
            onClick={onStartReading}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-amber-600/25 transition-all transform hover:-translate-y-0.5"
          >
            <BookOpen className="w-5 h-5 text-stone-950" />
            <span>መጽሐፍ ቅዱስ ንባብ ጀምር • Start Reading</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            id="cover-theology-btn"
            onClick={onOpenAnalysis}
            className="px-5 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 hover:text-amber-200 font-semibold text-sm sm:text-base border border-stone-700 flex items-center gap-2 transition-all"
          >
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>ቲኦሎጂካል ትንታኔ • Exegesis</span>
          </button>

          <button
            id="cover-topical-btn"
            onClick={onOpenTopical}
            className="px-5 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 hover:text-amber-200 font-semibold text-sm sm:text-base border border-stone-700 flex items-center gap-2 transition-all"
          >
            <Bookmark className="w-5 h-5 text-amber-400" />
            <span>የአርእስት ጥናት • Topical Studies</span>
          </button>
        </div>
      </div>

      {/* Bilingual Features & Structure Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-stone-100 font-ethiopic-sans">
            የመተግበሪያው ዋና ዋና ክፍሎች (Core Features & Pillars)
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 font-ethiopic-sans">
            በሁለቱም ቋንቋዎች (አማርኛና እንግሊዝኛ) የተዘጋጀ የተሟላ የመጽሐፍ ቅዱስ ማጥኛ መሣሪያ።
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Holy Scripture Reading */}
          <div 
            onClick={onStartReading}
            className="bg-stone-900/90 border border-stone-800 hover:border-amber-600/60 rounded-2xl p-5 space-y-3 cursor-pointer transition-all hover:bg-stone-850 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                1. መጽሐፍ ቅዱስ ንባብ (Scripture Reading)
              </h4>
              <p className="text-xs text-amber-400/90 font-mono">66 Protestant Canonical Books</p>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-ethiopic-sans leading-relaxed">
              39 የብሉይ ኪዳን እና 27 የአዲስ ኪዳን መጻሕፍት ከአማርኛና እንግሊዝኛ ጎን ለጎን ማነጻጸሪያ፣ የዕልባትና ማስታወሻ መያዣ ጋር።
            </p>
          </div>

          {/* Card 2: Theological Exegesis */}
          <div 
            onClick={onOpenAnalysis}
            className="bg-stone-900/90 border border-stone-800 hover:border-amber-600/60 rounded-2xl p-5 space-y-3 cursor-pointer transition-all hover:bg-stone-850 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                2. ቲኦሎጂካል ትንታኔ (Theological Exegesis)
              </h4>
              <p className="text-xs text-amber-400/90 font-mono">Christocentric Hermeneutics</p>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-ethiopic-sans leading-relaxed">
              ክርስቶስ-ተኮር የወንጌላዊ ሥነ-መለኮት ማብራሪያ፣ የታሪክና ቋንቋ (ዕብራይስጥ/ግሪክ) አውድ እና ተግባራዊ የሕይወት አተገባበር።
            </p>
          </div>

          {/* Card 3: The 5 Solas */}
          <div 
            onClick={onOpenSolas}
            className="bg-stone-900/90 border border-stone-800 hover:border-amber-600/60 rounded-2xl p-5 space-y-3 cursor-pointer transition-all hover:bg-stone-850 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                3. አምስቱ ሶላዎች (The Five Solas)
              </h4>
              <p className="text-xs text-amber-400/90 font-mono">Reformation Pillars</p>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-ethiopic-sans leading-relaxed">
              Sola Scriptura (በመጽሐፍ ብቻ)፣ Sola Gratia (በጸጋ ብቻ)፣ Sola Fide (በእምነት ብቻ)፣ Solus Christus (በክርስቶስ ብቻ) እና Soli Deo Gloria።
            </p>
          </div>

          {/* Card 4: Topical Theology */}
          <div 
            onClick={onOpenTopical}
            className="bg-stone-900/90 border border-stone-800 hover:border-amber-600/60 rounded-2xl p-5 space-y-3 cursor-pointer transition-all hover:bg-stone-850 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                4. የአርእስት ጥናት (Topical Studies)
              </h4>
              <p className="text-xs text-amber-400/90 font-mono">Systematic Doctrines</p>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-ethiopic-sans leading-relaxed">
              ስለ ክርስቶሎጂ (Christology)፣ ቅድስት ሥላሴ (The Holy Trinity)፣ ድነት (Soteriology) እና ታሪካዊ የሃይማኖት ኑዛዜዎች ጥናት።
            </p>
          </div>

          {/* Card 5: Audio Bible & Recitation */}
          <div 
            onClick={onStartReading}
            className="bg-stone-900/90 border border-stone-800 hover:border-amber-600/60 rounded-2xl p-5 space-y-3 cursor-pointer transition-all hover:bg-stone-850 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                5. የድምፅ ንባብ (Audio Recitation)
              </h4>
              <p className="text-xs text-amber-400/90 font-mono">Ethiopian Cadence</p>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-ethiopic-sans leading-relaxed">
              በተመረጠ የኢትዮጵያዊ የንባብ ቃና (0.85x Standard / 0.75x Meditative) እና የጥቅስ-በ-ጥቅስ ማሳያ ማዳመጥ።
            </p>
          </div>

          {/* Card 6: Daily Devotional */}
          <div 
            onClick={onOpenDevotional}
            className="bg-stone-900/90 border border-stone-800 hover:border-amber-600/60 rounded-2xl p-5 space-y-3 cursor-pointer transition-all hover:bg-stone-850 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                6. የዕለቱ ቃልና ጸሎት (Daily Manna)
              </h4>
              <p className="text-xs text-amber-400/90 font-mono">Devotion & Prayer</p>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-ethiopic-sans leading-relaxed">
              የየዕለቱ የመንፈስ ምግብ፣ የቃሉ ማሰላሰያና ወደ እግዚአብሔር የሚቀርብ የጸሎት መመሪያ።
            </p>
          </div>
        </div>
      </div>

      {/* Protestant Canon & Quick Jump Section */}
      <div className="bg-stone-900/80 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-4">
          <div>
            <h4 className="text-lg font-bold text-amber-300 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <span>የቀኖና መጻሕፍት ፈጣን መግቢያ (Quick Scripture Jump)</span>
            </h4>
            <p className="text-xs text-stone-400 font-ethiopic-sans">
              የተመረጡ ዋና ዋና መጻሕፍትን በአንድ ጠቅታ ይክፈቱ
            </p>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-stone-950 px-3 py-1 rounded-full border border-stone-800 self-start sm:self-auto">
            66 Books (39 OT + 27 NT)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            { id: 'GEN', nameAm: 'ዘፍጥረት', nameEn: 'Genesis', chapter: 1, desc: 'የፍጥረትና የቃልኪዳን መጀመሪያ' },
            { id: 'PSA', nameAm: 'መዝሙረ ዳዊት', nameEn: 'Psalms', chapter: 23, desc: 'ምስጋና፣ ጸሎትና መጽናናት' },
            { id: 'ISA', nameAm: 'ኢሳይያስ', nameEn: 'Isaiah', chapter: 53, desc: 'ስለ መከራው አገልጋይ ትንቢት' },
            { id: 'JHN', nameAm: 'የዮሐንስ ወንጌል', nameEn: 'Gospel of John', chapter: 1, desc: 'የቃል መገለጥና አምላክነት' },
            { id: 'ROM', nameAm: 'ወደ ሮሜ ሰዎች', nameEn: 'Romans', chapter: 8, desc: 'ጽድቅ በእምነትና በመንፈስ ሕይወት' },
            { id: 'EPH', nameAm: 'ወደ ኤፌሶን ሰዎች', nameEn: 'Ephesians', chapter: 2, desc: 'በጸጋ ድነናል በእምነት' },
            { id: 'COL', nameAm: 'ወደ ቆላስይስ ሰዎች', nameEn: 'Colossians', chapter: 1, desc: 'የክርስቶስ የበላይነትና ክብር' },
            { id: 'REV', nameAm: 'የዮሐንስ ራእይ', nameEn: 'Revelation', chapter: 21, desc: 'አዲስ ሰማይና አዲስ ምድር' },
          ].map((item) => (
            <button
              id={`cover-quick-jump-${item.id.toLowerCase()}`}
              key={item.id}
              onClick={() => onSelectBook(item.id, item.chapter)}
              className="p-3.5 rounded-xl bg-stone-950 hover:bg-amber-950/40 border border-stone-800 hover:border-amber-600/50 text-left transition-all group space-y-1 cursor-pointer active:scale-95"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-stone-100 group-hover:text-amber-300">
                  {item.nameAm}
                </span>
                <span className="text-[10px] font-mono text-amber-500 font-bold bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/50">
                  ምዕ. {item.chapter}
                </span>
              </div>
              <p className="text-[11px] font-mono text-stone-400">{item.nameEn}</p>
              <p className="text-[11px] text-stone-400 font-ethiopic-sans line-clamp-1">{item.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
