import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const TypingIndicator = () => (
  <div className="flex items-center gap-1.5 px-2 py-3">
    <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 rounded-full bg-primary/60" />
    <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 rounded-full bg-primary/60" />
    <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 rounded-full bg-primary/60" />
  </div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Predefined FAQ questions and answers
  const predefinedOptions = [
    {
      id: 'dtcp',
      text: 'Are your plots DTCP approved?',
      answer: 'Yes, absolutely. Every single plot we offer at Gurujii Group is fully DTCP (Directorate of Town and Country Planning) approved.'
    },
    {
      id: 'visit',
      text: 'How can I book a site visit?',
      answer: 'We offer complimentary, guided site visits! Please contact our experts on WhatsApp to schedule a convenient time.'
    },
    {
      id: 'loans',
      text: 'Are bank loans available?',
      answer: 'Yes! Because our layouts are strictly DTCP approved, major nationalized and private banks easily process loans for our properties.'
    },
    {
      id: 'location',
      text: 'Where are your projects located?',
      answer: 'We have premium projects across prime locations in Madurai including Thirumangalam, Kappalur, Tirunagar, and near the Airport.'
    }
  ];

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          type: 'bot',
          content: 'Welcome to Gurujii Group! How can we assist you with your real estate journey today?',
          isOptions: true
        }
      ]);
    }
  }, [messages.length]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    // Add user's selected question
    setMessages((prev) => [...prev, { type: 'user', content: option.text }]);
    setIsTyping(true);
    
    // Simulate robotic thinking delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { type: 'bot', content: option.answer }]);
    }, 1200);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setMessages((prev) => [...prev, { type: 'user', content: userText }]);
    setInputValue('');
    setIsTyping(true);

    // WhatsApp Fallback for custom text with robotic thinking delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev, 
        { 
          type: 'bot', 
          content: 'For specific inquiries, please chat with our real estate experts directly!',
          isWhatsappFallback: true,
          userQuery: userText
        }
      ]);
    }, 1500);
  };

  const openWhatsApp = (customText = '') => {
    const defaultMsg = customText ? `Hello Gurujii Group, ${customText}` : 'Hello Gurujii Group, I have an inquiry from your website.';
    const encodedMsg = encodeURIComponent(defaultMsg);
    window.open(`https://wa.me/918610143937?text=${encodedMsg}`, '_blank');
  };

  return (
    <>
      {/* Floating Toggle Button with Robotic Hover Animation */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1, y: [0, -10, 0] }}
        transition={{ 
          scale: { duration: 0.3 }, 
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" } 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[100] w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-primary/20 ${isOpen ? 'hidden' : 'block'}`}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden p-2 flex items-center justify-center">
          <img src="/logo.png" alt="Chat" className="w-full h-full object-contain" />
        </div>
        {/* Notification dot */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white"></span>
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-[100] w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] flex flex-col glass-panel shadow-2xl overflow-hidden border border-gray-200/50 bg-white"
          >
            {/* Header */}
            <div className="bg-primary px-6 py-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-inner">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="text-white font-serif font-semibold text-lg leading-tight">Gurujii Bot</h3>
                  <p className="text-white/80 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {/* Bot Avatar for messages */}
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex flex-shrink-0 items-center justify-center text-primary mr-2 mt-1">
                      <Bot size={16} />
                    </div>
                  )}
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, x: msg.type === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                      msg.type === 'user' 
                        ? 'bg-primary text-white rounded-tr-sm' 
                        : 'bg-white border border-gray-100 shadow-sm text-gray-700 rounded-tl-sm'
                    }`}
                  >
                    <p className="leading-relaxed">{msg.content}</p>
                    
                    {/* Predefined Options rendered only on the first greeting */}
                    {msg.isOptions && (
                      <div className="mt-4 flex flex-col gap-2">
                        {predefinedOptions.map((opt, i) => (
                          <motion.button
                            key={opt.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                            onClick={() => handleOptionClick(opt)}
                            className="text-left text-xs text-primary border border-primary/20 hover:bg-primary/5 rounded-lg px-3 py-2 transition-colors font-medium"
                          >
                            {opt.text}
                          </motion.button>
                        ))}
                      </div>
                    )}

                    {/* WhatsApp Fallback Button */}
                    {msg.isWhatsappFallback && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        onClick={() => openWhatsApp(msg.userQuery)}
                        className="mt-3 w-full flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a] px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
                      >
                        <FaWhatsapp size={16} />
                        Chat on WhatsApp
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex flex-shrink-0 items-center justify-center text-primary mr-2 mt-1">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm">
                    <TypingIndicator />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-gray-700"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors shrink-0 shadow-sm"
              >
                <Send size={16} className="-ml-0.5" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
