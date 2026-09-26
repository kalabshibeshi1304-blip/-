import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Loader2, 
  HelpCircle,
  RotateCcw,
  BookOpen,
  Copy,
  Check
} from 'lucide-react';
import { ChatMessage } from '../types';
import { generateClientTheologyAnswer } from '../data/theologyQnABase';

interface TheologyChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentContext: string;
  initialPrompt?: string;
}

export const TheologyChatDrawer: React.FC<TheologyChatDrawerProps> = ({
  isOpen,
  onClose,
  currentContext,
  initialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `ሰላም ለእርስዎ ይሁን! እኔ የወንጌላዊ መጽሐፍ ቅዱስና ሥነ-መለኮት (Evangelical Protestant Theology) አጋዥዎ ነኝ።

ስለ መጽሐፍ ቅዱስ ጥቅሶች፣ ስለ ድነት በጸጋ (Sola Gratia)፣ ስለ አምስቱ ሶላዎች፣ ወይም ስለ ክርስቲያናዊ አስተምህሮ ማንኛውንም ጥያቄ ሊጠይቁኝ ይችላሉ። ምን ላብራራሎት?`,
      timestamp: Date.now(),
    },
  ]);
  const [inputQuery, setInputQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Set initial prompt if provided
  useEffect(() => {
    if (initialPrompt && isOpen) {
      setInputQuery(initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyMessage = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content: `ውይይቱ በአዲስ መልክ ተጀምሯል። ስለ መጽሐፍ ቅዱስ፣ ሥነ-መለኮት ወይም የወንጌል አስተምህሮ ጥያቄዎን ይጠይቁ።`,
        timestamp: Date.now(),
      },
    ]);
  };

  const handleSendMessage = async (queryToSend?: string) => {
    const text = (queryToSend || inputQuery).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsLoading(true);

    try {
      // 1. Try server endpoint first (with timeout)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const response = await fetch('/api/theology/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: text,
          currentContext,
        }),
        signal: controller.signal,
      }).catch(() => null);

      clearTimeout(timeoutId);

      if (response && response.ok) {
        const data = await response.json();
        if (data && data.answer) {
          const assistantMsg: ChatMessage = {
            id: `a-${Date.now()}`,
            role: 'assistant',
            content: data.answer,
            timestamp: Date.now(),
          };
          setMessages((prev) => [...prev, assistantMsg]);
          return;
        }
      }

      // 2. Fallback seamlessly to client-side theological knowledge engine (Vercel static or offline)
      const clientAnswer = generateClientTheologyAnswer(text, currentContext);
      const assistantMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: clientAnswer,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      // Guaranteed fallback on any error
      const clientAnswer = generateClientTheologyAnswer(text, currentContext);
      const assistantMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: clientAnswer,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const sampleQuestions = [
    'በጸጋ ብቻ (Sola Gratia) መዳን ማለት ምን ማለት ነው?',
    'የሮሜ 8:1 ዋና የወንጌል መልእክት ምንድን ነው?',
    'ክርስቶስ ብቸኛው አማላጅ (Solus Christus) መሆኑ በመጽሐፍ ቅዱስ እንዴት ተብራርቷል?',
    'የቅድስት ሥላሴ አስተምህሮ የመጽሐፍ ቅዱስ ማስረጃዎች ምን ምን ናቸው?',
    'በእምነት ብቻ መጽደቅ (Sola Fide) እና መልካም ሥራ ልዩነት',
    'መጽሐፍ ቅዱሳዊ የጾም ትርጉምና ዓላማ ምንድን ነው?'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="w-full max-w-lg bg-stone-900 border-l border-stone-800 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-500 flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-stone-100 flex items-center gap-1.5">
                <span>የመጽሐፍ ቅዱስና ቲኦሎጂ ረዳት</span>
              </h3>
              <p className="text-[11px] text-amber-400">
                Evangelical Protestant Doctrine Assistant
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={handleResetChat}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
              title="ውይይቱን አድስ (Reset Chat)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
              title="ዝጋ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Current Context Pill if available */}
        {currentContext && (
          <div className="px-4 py-1.5 bg-amber-950/40 border-b border-amber-900/30 flex items-center gap-1.5 text-[11px] text-amber-300">
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">ወቅታዊ አውድ: {currentContext}</span>
          </div>
        )}

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-ethiopic-sans text-sm">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-amber-900/60 border border-amber-600/40 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed shadow-xs relative group ${
                  msg.role === 'user'
                    ? 'bg-amber-600 text-white rounded-br-none'
                    : 'bg-stone-800/90 text-stone-200 border border-stone-700/80 rounded-bl-none'
                }`}
              >
                {msg.role === 'user' ? (
                  <p>{msg.content}</p>
                ) : (
                  <div>
                    <div className="prose prose-invert prose-amber max-w-none text-xs sm:text-sm prose-p:my-1 prose-headings:my-2 prose-ul:my-1">
                      <Markdown>{msg.content}</Markdown>
                    </div>
                    {msg.id !== 'welcome' && (
                      <div className="mt-2 pt-1 border-t border-stone-700/50 flex justify-end">
                        <button
                          onClick={() => handleCopyMessage(msg.id, msg.content)}
                          className="text-[10px] text-stone-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                          title="ቅዳ"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">ተቀድቷል</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>ቅዳ</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-stone-700 flex items-center justify-center text-stone-300 shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start items-center text-stone-400 text-xs pl-2">
              <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
              <span>የቲኦሎጂ መልስ በመዘጋጀት ላይ ነው...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Questions */}
        {messages.length <= 2 && !isLoading && (
          <div className="px-4 py-2 bg-stone-950/60 border-t border-stone-800/60 space-y-1.5">
            <div className="text-[11px] font-semibold text-stone-400 flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-amber-400" />
              <span>የተለመዱ የቲኦሎጂ ጥያቄዎች:</span>
            </div>
            <div className="flex flex-col gap-1">
              {sampleQuestions.slice(0, 2).map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="text-left text-xs p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-amber-200 border border-stone-700 transition-colors truncate"
                >
                  "{q}"
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Form */}
        <div className="p-3 border-t border-stone-800 bg-stone-950">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="ስለ ጥቅሱ ወይም ስለ ቲኦሎጂ ጠይቅ..."
              disabled={isLoading}
              className="flex-1 bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputQuery.trim()}
              className="p-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:hover:bg-amber-600 text-white transition-colors shadow-xs shrink-0"
              title="ላክ"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
