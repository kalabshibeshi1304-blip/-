import React, { useState } from 'react';
import { 
  Bookmark, 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  HeartHandshake, 
  Flame, 
  Cross, 
  Quote, 
  CheckCircle2,
  Scroll,
  Layers,
  ShieldCheck,
  Award
} from 'lucide-react';
import { TOPICAL_STUDIES } from '../data/theologyData';
import { TopicalStudy } from '../types';

interface TopicalStudyViewProps {
  onSelectScripture?: (ref: string, bookId?: string, chapter?: number) => void;
  onAskTheologyAssistant?: (question: string) => void;
}

export const TopicalStudyView: React.FC<TopicalStudyViewProps> = ({
  onSelectScripture,
  onAskTheologyAssistant,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('christology');
  const [activeTab, setActiveTab] = useState<'overview' | 'sections' | 'confessions'>('overview');

  const activeTopic = TOPICAL_STUDIES.find((t) => t.id === selectedTopicId) || TOPICAL_STUDIES[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-amber-400" />;
      case 'Cross':
        return <Cross className="w-5 h-5 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
          <Bookmark className="w-3.5 h-3.5" />
          <span>የወንጌላውያን መጽሐፍ ቅዱሳዊ አርእስት ጥናት</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-100">
          የአርእስት ጥናት (Topical Theological Studies)
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 font-ethiopic-sans">
          የክርስቶሎጂ፣ የቅድስት ሥላሴ (ትሪኒቲ) እና ዋና ዋና የክርስትና መሠረተ-እምነቶችን ጥልቅ የወንጌላዊ ቲኦሎጂ ትንታኔ ከመጽሐፍ ቅዱስ ጥቅሶችና ከታሪካዊ ኑዛዜዎች ጋር አጥኑ።
        </p>
      </div>

      {/* Topics Selector Pills */}
      <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        {TOPICAL_STUDIES.map((topic) => {
          const isActive = topic.id === selectedTopicId;
          return (
            <button
              key={topic.id}
              onClick={() => {
                setSelectedTopicId(topic.id);
                setActiveTab('overview');
              }}
              className={`px-4 py-2.5 rounded-xl whitespace-nowrap text-xs sm:text-sm font-semibold flex items-center gap-2.5 border transition-all ${
                isActive
                  ? 'bg-amber-600 text-white border-amber-500 shadow-md scale-[1.02]'
                  : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800 hover:border-amber-500/40'
              }`}
            >
              {getIcon(topic.iconName)}
              <span>{topic.titleAm}</span>
            </button>
          );
        })}
      </div>

      {/* Active Topic Study Guide Card */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
        {/* Topic Title & Actions */}
        <div className="border-b border-stone-800 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              {activeTopic.titleEn}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-100">
              {activeTopic.titleAm}
            </h3>
            <p className="text-sm text-stone-300 font-ethiopic-sans">
              {activeTopic.descriptionAm}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onAskTheologyAssistant && (
              <button
                onClick={() => onAskTheologyAssistant(`ስለ "${activeTopic.titleAm}" ተጨማሪ ጥልቅ የወንጌላዊ ቲኦሎጂ ማብራሪያ ስጠኝ:`)}
                className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-amber-300 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>ስለ አርእስቱ ጠይቅ</span>
              </button>
            )}
          </div>
        </div>

        {/* View Tabs if detailedSections or historicalConfessions exist */}
        {(activeTopic.detailedSections || activeTopic.historicalConfessions) && (
          <div className="flex border-b border-stone-800 gap-4 text-xs sm:text-sm font-semibold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'border-amber-500 text-amber-400'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>የጥናት ጥቅሶችና አጠቃላይ እይታ</span>
            </button>

            {activeTopic.detailedSections && (
              <button
                onClick={() => setActiveTab('sections')}
                className={`pb-3 border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeTab === 'sections'
                    ? 'border-amber-500 text-amber-400'
                    : 'border-transparent text-stone-400 hover:text-stone-200'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>ዝርዝር መሠረታዊ ክፍሎች ({activeTopic.detailedSections.length})</span>
              </button>
            )}

            {activeTopic.historicalConfessions && (
              <button
                onClick={() => setActiveTab('confessions')}
                className={`pb-3 border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeTab === 'confessions'
                    ? 'border-amber-500 text-amber-400'
                    : 'border-transparent text-stone-400 hover:text-stone-200'
                }`}
              >
                <Scroll className="w-4 h-4" />
                <span>ታሪካዊ የሃይማኖት ኑዛዜዎች ({activeTopic.historicalConfessions.length})</span>
              </button>
            )}
          </div>
        )}

        {/* TAB 1: OVERVIEW & SCRIPTURE READINGS */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Core Doctrine Callout */}
            <div className="p-4 bg-amber-950/30 border-l-4 border-amber-500 rounded-r-xl space-y-1">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                ዋናው መጽሐፍ ቅዱሳዊ አስተምህሮ (Core Doctrine)
              </span>
              <p className="text-sm sm:text-base font-medium text-stone-100">
                {activeTopic.coreDoctrineAm}
              </p>
            </div>

            {/* Scripture Readings & Exegesis Breakdown */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-stone-300 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>የጥናት ጥቅሶችና የቲኦሎጂ ትንታኔ</span>
              </h4>

              <div className="space-y-4">
                {activeTopic.scriptureReadings.map((reading, idx) => (
                  <div
                    key={idx}
                    className="bg-stone-950/80 border border-stone-800 rounded-2xl p-5 space-y-3 transition-all hover:border-amber-900/60"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold font-mono text-amber-400 bg-stone-900 px-3 py-1 rounded-lg border border-stone-800">
                        {reading.ref}
                      </span>
                      {onSelectScripture && (
                        <button
                          onClick={() => onSelectScripture(reading.ref, reading.bookId, reading.chapter)}
                          className="inline-flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 px-2 py-1 rounded-md bg-stone-900 hover:bg-stone-800 border border-stone-800 transition-colors"
                          title="ይህን ክፍል በመጽሐፍ ቅዱስ ውስጥ ክፈት"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>በመጽሐፍ ቅዱስ አንብብ</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <blockquote className="text-base text-stone-100 font-ethiopic-serif italic leading-relaxed pl-3 border-l-2 border-amber-600/60">
                      "{reading.textAm}"
                    </blockquote>

                    <div className="pt-2 border-t border-stone-800/80 text-xs sm:text-sm text-stone-300 font-ethiopic-sans leading-relaxed space-y-1">
                      <div className="text-[11px] font-bold text-amber-400/80 uppercase">
                        የሥነ-መለኮት ትንታኔ (Theological Commentary):
                      </div>
                      <p>{reading.analysisAm}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DETAILED SECTIONS */}
        {activeTab === 'sections' && activeTopic.detailedSections && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {activeTopic.detailedSections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-stone-950/90 border border-stone-800 rounded-2xl p-6 space-y-4 hover:border-amber-700/50 transition-all"
              >
                <h4 className="text-lg font-bold text-amber-300 flex items-center gap-2 border-b border-stone-800/80 pb-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  {sec.title}
                </h4>
                
                <div className="text-sm text-stone-200 whitespace-pre-line leading-relaxed font-ethiopic-sans">
                  {sec.content}
                </div>

                {sec.keyVerses && sec.keyVerses.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-800/60">
                    <span className="text-xs text-amber-400 font-medium">ቁልፍ ጥቅሶች:</span>
                    {sec.keyVerses.map((vRef, vIdx) => (
                      <span
                        key={vIdx}
                        className="px-2.5 py-1 bg-stone-900 border border-stone-700 rounded-md text-xs font-mono text-amber-200"
                      >
                        {vRef}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: HISTORICAL CONFESSIONS */}
        {activeTab === 'confessions' && activeTopic.historicalConfessions && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {activeTopic.historicalConfessions.map((conf, idx) => (
              <div
                key={idx}
                className="bg-amber-950/20 border border-amber-900/40 rounded-2xl p-6 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-amber-900/30 pb-2">
                  <h4 className="text-base font-bold text-amber-300 flex items-center gap-2">
                    <Scroll className="w-4 h-4 text-amber-400" />
                    {conf.title}
                  </h4>
                  <span className="text-xs font-mono bg-stone-900 text-amber-400 px-2.5 py-0.5 rounded-full border border-stone-800">
                    {conf.date}
                  </span>
                </div>
                <blockquote className="text-sm text-stone-200 font-ethiopic-serif italic leading-relaxed pl-3 border-l-2 border-amber-500">
                  {conf.content}
                </blockquote>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

