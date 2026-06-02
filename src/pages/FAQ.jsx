import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are all your plots DTCP approved?",
      answer: "Yes, absolutely. Every single plot we offer at Gurujii Group is fully DTCP (Directorate of Town and Country Planning) approved. We prioritize providing our clients with 100% legal, hassle-free, and secure land investments."
    },
    {
      question: "Do you arrange site visits for prospective buyers?",
      answer: "We certainly do. We offer complimentary, guided site visits for all our projects in and around Madurai. Our real estate experts will accompany you, explain the layout, and answer any questions you have on-site."
    },
    {
      question: "Can you assist with the property registration process?",
      answer: "Yes, our dedicated legal and administrative team handles the entire property registration process for you. From document verification at the sub-registrar office to handing over the final registered deed, we ensure a smooth experience."
    },
    {
      question: "Are bank loans available for purchasing your plots?",
      answer: "Yes! Because our layouts are strictly DTCP approved, major nationalized and private banks easily process loans for our properties. We can also connect you with our banking partners for faster processing."
    },
    {
      question: "Why should I invest in Madurai real estate now?",
      answer: "Madurai is experiencing rapid infrastructural growth, including IT parks, new highways, and industrial corridors. Investing now ensures you secure prime land at competitive prices before the inevitable appreciation in the coming years."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20">
      <SEO title="FAQ" />
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-black-matte mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Everything you need to know about investing with Gurujii Group.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel-light overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-serif font-medium text-lg text-black-matte pr-8">{faq.question}</span>
                {openIndex === index ? 
                  <ChevronUp className="text-primary shrink-0" size={24} /> : 
                  <ChevronDown className="text-gray-400 shrink-0" size={24} />
                }
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
