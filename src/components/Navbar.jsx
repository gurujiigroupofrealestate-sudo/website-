import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSlotModal, setShowSlotModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const sites = [
    'Vinayaga Nagar',
    'Vibul City',
    'Arunachala Enclave',
    'Fortune City',
    'Perumal Nagar',
    'Kamuthi - Kaana Vilakku',
    'Achampatti Farm Land'
  ];

  const handleSiteSelect = (site) => {
    const message = `Hello, I would like to book a slot and get more details about your property: *${site}*.`;
    window.open(`https://wa.me/918610143937?text=${encodeURIComponent(message)}`, '_blank');
    setShowSlotModal(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center gap-2 sm:gap-3">
            <img src="/logo.png" alt="Gurujii Group" className="h-9 sm:h-10 md:h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-[15px] sm:text-lg md:text-xl text-black-matte tracking-wide leading-none">
                GURUJII GROUP
              </span>
              <span className="font-sans text-[9px] sm:text-[11px] text-gray-500 tracking-[0.15em] sm:tracking-[0.2em] font-medium mt-0.5 sm:mt-1">
                OF REAL ESTATES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 hover:text-primary ${
                      location.pathname === link.path ? 'text-primary' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative" onMouseLeave={() => setShowSlotModal(false)}>
              <div className="relative inline-block">
                {/* Notification Dot */}
                <span className="absolute -top-1.5 -left-1.5 flex h-4 w-4 z-10 pointer-events-none">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                </span>
                
                <AnimatedButton 
                  variant="primary" 
                  className="py-2.5 px-6 text-sm relative z-0"
                  onClick={() => setShowSlotModal(!showSlotModal)}
                >
                  Book Your Slot
                </AnimatedButton>
              </div>

              <AnimatePresence>
                {showSlotModal && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="p-3 bg-gray-50/80 border-b border-gray-100 backdrop-blur-sm">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider text-center">Select Preferred Site</p>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      {sites.map(site => (
                        <button
                          key={site}
                          onClick={() => handleSiteSelect(site)}
                          className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors border-b border-gray-50 last:border-0"
                        >
                          {site}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 text-black-matte p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-4xl hover:text-primary transition-colors duration-300 ${
                      location.pathname === link.path ? 'text-primary' : 'text-black-matte'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
