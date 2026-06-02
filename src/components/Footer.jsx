import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import AnimatedButton from './AnimatedButton';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-200 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Link to="/" className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <img src="/logo.png" alt="Gurujii Group" className="h-10 md:h-12 object-contain" />
              <span className="font-serif font-semibold text-base sm:text-lg md:text-xl text-black-matte tracking-wide leading-tight">
                GURUJII GROUP <br className="hidden sm:block lg:hidden" />OF REAL ESTATES
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Redefining luxury real estate with premium land acquisitions, unparalleled trust, and exceptional investment opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BjjKKXeV2/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-600 hover:bg-secondary hover:text-black-matte transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.instagram.com/gurujiigroupofrealestate?igsh=cGtrMTQzZDJ6aXVk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-600 hover:bg-secondary hover:text-black-matte transition-all duration-300">
                <FaInstagram size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links Col */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-xl mb-6 text-black-matte">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Projects', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Col */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif text-xl mb-6 text-black-matte">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>25 Anna Poonga Street, Thirunagar 2nd stop, Madurai - 625006</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="https://wa.me/918610143937" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +91 8610143937
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>gurujiigroupofrealestate@gmail.com</span>
              </li>
            </ul>
          </motion.div>


        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Gurujii Group of Real Estates. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs font-medium">
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
