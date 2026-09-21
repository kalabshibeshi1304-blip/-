import React, { useState } from 'react';
import { 
  Layers, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  ChevronDown,
  Quote
} from 'lucide-react';
import { FIVE_SOLAS } from '../data/theologyData';
import { FiveSola } from '../types';

interface FiveSolasViewProps {
  onNavigateToScripture?: (bookId: string, chapter: number) => void;
  onAskTheologyQuestion?: (question: string) => void;
}

export const FiveSolasView: React.FC<FiveSolasViewProps> = ({
  onNavigateToScripture,
  onAskTheologyQuestion,
}) => {
  const [activeSolaId, setActiveSolaId] = useState<string>(FIVE_SOLAS[0].id);

  const activeSola = FIVE_SOLAS.find((s) => s.id === activeSolaId) || FIVE_SOLAS[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-lg text-center space-y-3 relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
          <ShieldCheck className="w-4 h-4" />
          <span>የወንጌላውያን ፕሮቴስታንቶች መሠረተ-እምነት አምዶች</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
          አምስቱ ሶላዎች <span className="text-amber-400 font-serif italic text-xl sm:text-2xl">(The Five Solas)</span>
        </h2>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-stone-300 leading-relaxed font-ethiopic-sans">
          በ16ኛው ክፍለ ዘመን የተካሄደው የፕሮቴስታንት ተሐድሶ (The Protestant Reformation) የመጽሐፍ ቅዱስን ንጹሕ የወንጌል እውነት ወደ ቤተክርስቲያን የመለሰባቸው 5 ታላላቅ መርሆዎች።
        </p>
      </div>

      {/* Solas Selector Cards / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {FIVE_SOLAS.map((sola, index) => {
          const isActive = sola.id === activeSolaId;
          return (
            <button
              key={sola.id}
              onClick={() => setActiveSolaId(sola.id)}
              className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between gap-3 ${
                isActive
                  ? 'bg-amber-600 text-white border-amber-400 shadow-md scale-[1.02]'
                  : 'bg-stone-900 hover:bg-stone-800/90 text-stone-300 border-stone-800 hover:border-amber-500/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isActive ? 'bg-amber-700 text-white' : 'bg-stone-800 text-amber-400'
                }`}>
                  0{index + 1}
                </span>
                <span className={`text-[11px] font-mono tracking-wider uppercase ${
                  isActive ? 'text-amber-100' : 'text-stone-400'
                }`}>
                  {sola.latin}
                </span>
              </div>

              <div>
                <h3 className={`text-base font-bold leading-snug ${isActive ? 'text-white' : 'text-stone-100'}`}>
                  {sola.amharic}
                </h3>
                <p className={`text-xs mt-0.5 ${isActive ? 'text-amber-100' : 'text-stone-400'}`}>
                  {sola.english}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Sola Detailed Display */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in duration-300">
        {/* Title & Motto */}
        <div className="border-b border-stone-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-sm tracking-wide">
              <span>{activeSola.latin}</span>
              <span>•</span>
              <span className="text-stone-400">{activeSola.english}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-100">
              {activeSola.amharic}
            </h3>
            <p className="text-sm sm:text-base text-amber-200 font-medium font-ethiopic-serif italic">
              "{activeSola.motto}"
            </p>
          </div>

          {onAskTheologyQuestion && (
            <button
              onClick={() => onAskTheologyQuestion(`ስለ "${activeSola.latin} (${activeSola.amharic})" ጥልቅ የወንጌላዊ ትንታኔ እና የመጽሐፍ ቅዱስ ማስረጃዎችን አብራራልኝ:`)}
              className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-amber-300 text-xs font-semibold flex items-center gap-2 transition-colors shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>ስለዚህ ሶላ በቲኦሎጂ ረዳት ጠይቅ</span>
            </button>
          )}
        </div>

        {/* Core Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Meaning */}
          <div className="bg-stone-950/70 border border-stone-800/80 rounded-2xl p-5 space-y-2.5">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>የአስተምህሮው ይዘትና ትርጉም</span>
            </h4>
            <p className="text-stone-200 text-sm leading-relaxed font-ethiopic-sans">
              {activeSola.summaryAm}
            </p>
          </div>

          {/* Historical Reformation Context */}
          <div className="bg-stone-950/70 border border-stone-800/80 rounded-2xl p-5 space-y-2.5">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>የተሐድሶ ታሪካዊ ፋይዳ</span>
            </h4>
            <p className="text-stone-300 text-sm leading-relaxed font-ethiopic-sans">
              {activeSola.theologicalImpactAm}
            </p>
          </div>
        </div>

        {/* Key Scripture Card */}
        <div className="bg-gradient-to-br from-amber-950/30 to-stone-950 border border-amber-900/40 rounded-2xl p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Quote className="w-4 h-4" />
              <span>ዋና መጽሐፍ ቅዱሳዊ መሠረት</span>
            </span>
            <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800/60">
              {activeSola.scriptureRef}
            </span>
          </div>
          <blockquote className="text-base sm:text-lg text-stone-100 font-ethiopic-serif italic leading-relaxed">
            "{activeSola.keyScriptureAm}"
          </blockquote>

          {onNavigateToScripture && activeSola.bookId && activeSola.chapter && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => onNavigateToScripture(activeSola.bookId, activeSola.chapter)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-700/80 hover:bg-amber-600 text-amber-100 text-xs font-semibold transition-colors shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>ይህን ክፍል በመጽሐፍ ቅዱስ አንብብ ({activeSola.scriptureRef})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
