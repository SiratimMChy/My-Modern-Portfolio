import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Trash2 } from 'lucide-react';
import { FaComments } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { getChatResponse } from '../../lib/chatService';

const AiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatbot_messages');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [{ role: 'assistant', content: "Hi! I'm Siratim's AI Assistant. How can I help you today?" }];
  });

  useEffect(() => {
    localStorage.setItem('chatbot_messages', JSON.stringify(messages));
  }, [messages]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleClearChat = () => {
    setMessages([
      { role: 'assistant', content: "Hi! I'm Siratim's AI Assistant. How can I help you today?" }
    ]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setInput('');

    const newMessages = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const aiResponse = await getChatResponse(newMessages);
      
      // Step 3: Show the AI's reply on the screen
      
      setMessages([...newMessages, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("Groq API Error:", error);
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: "Oops! My brain is on a short break right now. 😅 Feel free to email Siratim directly instead!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, originBottomRight: true }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-[400px] h-[500px] max-h-[75vh] flex flex-col bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
              <div className="flex items-center gap-2">
                <Bot size={24} />
                <div>
                  <h3 className="font-semibold text-sm">Siratim's AI Assistant</h3>
                  <p className="text-[10px] text-white/80">Ask me anything about Siratim</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={handleClearChat} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors" title="Clear Chat">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div 
              className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 p-4 space-y-4 bg-slate-50 dark:bg-[#07090f] custom-scrollbar overscroll-contain touch-pan-y"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {messages.map((msg, index) => (
                <div key={index} className={`flex gap-2 w-full ${msg.role === 'user' ? 'justify-end' : 'justify-center'}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-sky-600 dark:text-sky-400" />
                    </div>
                  )}
                  <div 
                    className={`rounded-2xl px-4 py-3 text-sm ${
                      msg.role === 'user' 
                        ? 'bg-indigo-500 text-white rounded-tr-sm max-w-[85%]' 
                        : 'flex-1 min-w-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-sm border border-slate-100 dark:border-slate-700 shadow-sm'
                    }`}
                  >
                    {msg.role === 'assistant' ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-slate-800 prose-pre:text-slate-100 break-words overflow-x-auto w-full">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 flex-shrink-0"></div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-sky-600 dark:text-sky-400" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 relative bg-slate-50 dark:bg-slate-800/50 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 focus-within:border-sky-500 dark:focus-within:border-sky-500 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my skills, projects..."
                  className="flex-1 bg-transparent text-slate-900 dark:text-white text-sm pl-3 pr-10 py-2 focus:outline-none"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 shadow-sm text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The floating chat button at the bottom right corner of the screen */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen 
            ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300' 
            : 'bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <FaComments size={24} />}
      </button>
    </div>
  );
};

export default AiChatbot;
