import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { 
  Sparkles, 
  BookOpen, 
  Layers, 
  RotateCw, 
  Bookmark, 
  Share2, 
  FileText, 
  Check, 
  MessageSquare,
  AlertCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { AnalysisType, BibleBook } from '../types';

interface TheologicalAnalysisPanelProps {
  currentBook: BibleBook;
  currentChapter: number;
  passageRef: string;
  passageText?: string;
  analysisContent: string;
  isLoading: boolean;
  error?: string | null;
  activeAnalysisType: AnalysisType;
  onChangeAnalysisType: (type: AnalysisType) => void;
  onRefreshAnalysis: () => void;
  onSaveToNotes: (title: string, content: string) => void;
  onOpenAssistantWithContext: (questionPrompt: string) => void;
}

export const TheologicalAnalysisPanel: React.FC<TheologicalAnalysisPanelProps> = ({
  currentBook,
  currentChapter,
  passageRef,
  passageText,
  analysisContent,
  isLoading,
  error,
  activeAnalysisType,
  onChangeAnalysisType,
  onRefreshAnalysis,
  onSaveToNotes,
  onOpenAssistantWithContext,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [savedNote, setSavedNote] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${passageRef}\n\n${analysisContent}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveNote = () => {
    onSaveToNotes(
      `${passageRef} - ቲኦሎጂካል ትንታኔ`,
      analysisContent
    );
    setSavedNote(true);
    setTimeout(() => setSavedNote(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Card */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 sm:p-6 shadow-md relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                የወንጌላዊ ፕሮቴስታንት ትንታኔ (Reformed & Evangelical Exegesis)
              </span>
              <span className="text-xs text-stone-400 font-mono">
                {currentBook.category}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{passageRef || `${currentBook.nameAm} ምዕራፍ ${currentChapter}`}</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              በአምስቱ ሶላዎች (Five Solas) እና በክርስቶስ-ተኮር (Christocentric) ሥነ-መለኮት የተተነተነ
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onRefreshAnalysis}
              disabled={isLoading}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 disabled:opacity-40 transition-colors"
              title="እንደገና አፍልቅ (Refresh Analysis)"
            >
              <RotateCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-amber-400' : ''}`} />
            </button>

            <button
              onClick={handleSaveNote}
              disabled={isLoading || !analysisContent}
              className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium flex items-center gap-1.5 border border-stone-700 transition-colors"
              title="ወደ ማስታወሻ አስቀምጥ"
            >
              {savedNote ? <Check className="w-4 h-4 text-emerald-400" /> : <FileText className="w-4 h-4 text-amber-300" />}
              <span>{savedNote ? 'ተቀምጧል' : 'ማስታወሻ ያዝ'}</span>
            </button>

            <button
              onClick={handleCopy}
              disabled={isLoading || !analysisContent}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title="ትንታኔውን ቅዳ"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Selected Scripture Quote if available */}
        {passageText && (
          <div className="mt-4 p-3 bg-stone-950/70 rounded-xl border border-stone-800/80 text-xs sm:text-sm text-stone-300 font-serif italic border-l-2 border-l-amber-500">
            "{passageText}"
          </div>
        )}

        {/* Analysis Mode Selector Tabs */}
        <div className="mt-5 flex gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none border-t border-stone-800 pt-3">
          <button
            onClick={() => onChangeAnalysisType('depth')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
              activeAnalysisType === 'depth'
                ? 'bg-amber-600 text-white font-bold shadow-xs'
                : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200'
            }`}
          >
            ጥልቅ ቲኦሎጂካል ትንታኔ
          </button>
          <button
            onClick={() => onChangeAnalysisType('overview')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
              activeAnalysisType === 'overview'
                ? 'bg-amber-600 text-white font-bold shadow-xs'
                : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200'
            }`}
          >
            ፈጣን ማብራሪያ
          </button>
          <button
            onClick={() => onChangeAnalysisType('sermon')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
              activeAnalysisType === 'sermon'
                ? 'bg-amber-600 text-white font-bold shadow-xs'
                : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200'
            }`}
          >
            የስብከትና የማስተማሪያ ረቂቅ
          </button>
          <button
            onClick={() => onChangeAnalysisType('words')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
              activeAnalysisType === 'words'
                ? 'bg-amber-600 text-white font-bold shadow-xs'
                : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200'
            }`}
          >
            የቃላት ጥናት (ግሪክ / ዕብራይስጥ)
          </button>
        </div>
      </div>

      {/* Main Analysis Content Card */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 sm:p-8 shadow-md">
        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-4 text-center">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-amber-500/20 border-t-amber-500 animate-spin" />
              <Sparkles className="w-5 h-5 text-amber-400 absolute inset-0 m-auto" />
            </div>
            <div className="space-y-1">
              <p className="text-base font-semibold text-stone-200">
                የወንጌላዊ ቲኦሎጂካል ትንታኔ በመዘጋጀት ላይ ነው...
              </p>
              <p className="text-xs text-stone-400 max-w-md">
                የክፍሉን ታሪካዊ ዳራ፣ ክርስቶስ-ተኮር የወንጌል ትርጓሜ፣ የመጀመሪያ ቋንቋዎችን (ግሪክ/ዕብራይስጥ) እና አምስቱ ሶላዎችን በማጣቀስ እያዘጋጀ ነው።
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="p-6 bg-red-950/30 border border-red-900/50 rounded-xl text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-red-400 mx-auto" />
            <p className="text-sm text-red-200">{error}</p>
            <button
              onClick={onRefreshAnalysis}
              className="px-4 py-1.5 bg-red-900/60 hover:bg-red-800/80 text-red-100 rounded-lg text-xs font-medium"
            >
              እንደገና ሞክር
            </button>
          </div>
        ) : (
          <div className="prose prose-invert max-w-none prose-amber prose-headings:text-amber-300 prose-headings:font-bold prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-stone-200 prose-p:leading-relaxed prose-li:text-stone-300 prose-strong:text-amber-200 prose-blockquote:border-l-amber-500 prose-blockquote:bg-stone-950/40 prose-blockquote:p-3 prose-blockquote:rounded-r font-ethiopic-sans text-stone-200">
            <div>
              <Markdown>{analysisContent}</Markdown>
            </div>
          </div>
        )}
      </div>

      {/* Follow-up Question Suggestion Footer */}
      {!isLoading && analysisContent && (
        <div className="bg-stone-950 border border-stone-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-xs text-stone-300">
            <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>ስለዚህ ክፍል ወይም ስለ አስተምህሮው የተለየ ጥያቄ አለዎት?</span>
          </div>
          <button
            onClick={() => onOpenAssistantWithContext(`ስለ ${passageRef} ቲኦሎጂካል ትንታኔ የሚከተለውን ጠይቅ:`)}
            className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-stone-700"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>የቲኦሎጂ ረዳት ጠይቅ</span>
          </button>
        </div>
      )}
    </div>
  );
};
