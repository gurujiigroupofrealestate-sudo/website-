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

    const userTextLC = userText.toLowerCase();
    
    // Knowledge base for keyword matching
    const knowledgeBase = [
      {
        keywords: ['property', 'properties', 'plot', 'plots', 'villa', 'villas', 'apartment', 'apartments', 'commercial', 'farmland', 'agricultural', 'shop', 'shops', 'office', 'warehouse', 'house', 'houses'],
        answer: 'We primarily offer premium DTCP approved residential plots, customized villas, and select commercial properties in prime locations around Madurai.'
      },
      {
        keywords: ['dtcp', 'rera', 'approval', 'approved', 'legal', 'verified', 'parent', 'document', 'documents', 'patta', 'ec', 'encumbrance', 'certificate', 'lawyer', 'dispute', 'clear'],
        answer: 'Yes! All our properties are strictly DTCP approved with 100% clear parent documents, individual patta, and EC. You can easily verify all legal documents with your lawyer.'
      },
      {
        keywords: ['buy', 'online', 'book', 'booking', 'reserve', 'choose', 'prefer', 'immediate', 'purchase'],
        answer: 'You can book your preferred property by paying a nominal token advance. The entire process is swift, and our team also supports online/remote buying for out-of-town or NRI clients!'
      },
      {
        keywords: ['first-time', 'first', 'nri', 'nris', 'abroad'],
        answer: 'Absolutely! We provide complete end-to-end assistance for first-time buyers and NRIs, guiding you through documentation, loans, and registration.'
      },
      {
        keywords: ['visit', 'schedule', 'tour', 'tours', 'virtual', 'see', 'look', 'arrange'],
        answer: 'We offer complimentary, guided site visits! If you are out of town, we also provide virtual property tours and video calls to show you the layout.'
      },
      {
        keywords: ['loan', 'loans', 'bank', 'banks', 'emi', 'finance', 'assist'],
        answer: 'Yes, we provide full loan assistance! Since our properties are DTCP approved, major banks easily provide up to 70-80% funding with flexible EMI options.'
      },
      {
        keywords: ['hide', 'hidden', 'charge', 'charges', 'gst', 'rate', 'evlo', 'budget', 'price', 'cost', 'amount'],
        answer: 'We maintain 100% transparency with zero hidden charges. For exact plot rates matching your budget, please tap the WhatsApp button below to connect with our experts!'
      },
      {
        keywords: ['register', 'registration', 'deed'],
        answer: 'Yes, our dedicated administrative team takes care of the entire property registration process smoothly without any hassle for you.'
      },
      {
        keywords: ['location', 'locations', 'serve', 'madurai', 'area', 'map', 'maps', 'best', 'suitable'],
        answer: 'We have premium projects across fast-growing areas in Madurai like Thirumangalam, Kappalur, and Tirunagar. We gladly provide exact Google Maps locations for all sites.'
      },
      {
        keywords: ['school', 'schools', 'hospital', 'hospitals', 'highway', 'highways', 'transportation', 'bus', 'train', 'railway', 'water', 'electricity', 'eb', 'road', 'fence', 'fenced', 'lighting', 'light', 'amenities'],
        answer: 'Our layouts come with excellent infrastructure including blacktop roads, street lighting, EB connection, and secure fencing. They are strategically located near highways, schools, hospitals, and bus stops.'
      },
      {
        keywords: ['corner', 'gated', 'community', 'size', 'sizes', 'build', 'construct', 'resell', 'resale'],
        answer: 'We offer various plot sizes, including premium corner plots and gated communities. You can build immediately or hold it as an investment with great resale value!'
      },
      {
        keywords: ['ready', 'move', 'park', 'parking', 'furnish', 'furnished', 'security', 'secure', 'customize', 'custom', 'interior', 'interiors'],
        answer: 'We offer both ready-to-move and customizable villas within secure, gated communities. They come with dedicated parking, and we allow you to customize interiors during construction!'
      },
      {
        keywords: ['rent', 'rental', 'business', 'income'],
        answer: 'While our primary focus is on property sales, buying our commercial plots or villas is an excellent way to generate solid rental income for your business.'
      },
      {
        keywords: ['investment', 'invest', 'advice', 'advise', 'appreciate', 'appreciation', 'dream', 'help'],
        answer: 'Real estate in Madurai is appreciating rapidly! Our experts provide tailored investment advice to help you find your dream property with the best ROI.'
      },
      {
        keywords: ['contact', 'office', 'time', 'timings', 'whatsapp', 'respond', 'quick', 'quickly', 'call', 'callback', 'language', 'languages', 'tamil', 'english', 'hindi', 'speak', 'appointment', 'consult', 'consultation', 'details', 'number', 'reach'],
        answer: 'Our team is available to assist you in Tamil, English, and Hindi. You can chat with us on WhatsApp, request a callback, or schedule a consultation during office hours.'
      },
      {
        keywords: ['hi', 'hello', 'hey', 'greetings', 'morning', 'afternoon', 'evening'],
        answer: 'Hello there! How can I help you with your real estate journey today?'
      },
      {
        keywords: ['thanks', 'thank you', 'okay', 'ok', 'great', 'awesome', 'good'],
        answer: 'You are very welcome! Let me know if you have any other questions.'
      }
    ];

    let foundMatch = null;
    let maxMatchCount = 0;

    knowledgeBase.forEach(entry => {
      let matchCount = 0;
      entry.keywords.forEach(kw => {
        // Regex word boundary matching to prevent partial matches like 'hi' in 'this'
        const regex = new RegExp(`\\b${kw}\\b`, 'i');
        if (regex.test(userTextLC)) {
          matchCount++;
        }
      });
      if (matchCount > maxMatchCount) {
        maxMatchCount = matchCount;
        foundMatch = entry.answer;
      }
    });

    // Fallback logic
    setTimeout(() => {
      setIsTyping(false);
      
      if (foundMatch) {
        setMessages((prev) => [
          ...prev, 
          { 
            type: 'bot', 
            content: foundMatch,
            isWhatsappFallback: false
          }
        ]);
      } else {
        setMessages((prev) => [
          ...prev, 
          { 
            type: 'bot', 
            content: "I'm not quite sure about that. For specific inquiries, please chat with our real estate experts directly!",
            isWhatsappFallback: true
          }
        ]);
      }
    }, 1500);
  };

  const openWhatsApp = () => {
    let conversationText = "Hello Gurujii Group, I have an inquiry from your website.\n\n*Chat History:*\n";
    messages.forEach((msg) => {
      if (msg.isWhatsappFallback) return;
      const sender = msg.type === 'bot' ? 'Gurujii Bot' : 'User';
      conversationText += `*${sender}:* ${msg.content}\n`;
    });
    
    const encodedMsg = encodeURIComponent(conversationText.trim());
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
                        onClick={() => openWhatsApp()}
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
