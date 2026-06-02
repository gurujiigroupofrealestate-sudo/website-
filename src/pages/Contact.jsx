import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `*New Inquiry from Website*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Message:*
${formData.message}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/918610143937?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-black-matte mb-6"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Connect with our luxury real estate experts to begin your journey towards finding the perfect property.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-serif text-black-matte mb-2">Office Address</h3>
              <p className="text-gray-600">25 Anna Poonga Street,<br />Thirunagar 2nd stop,<br />Madurai - 625006</p>
            </div>

            <div className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-serif text-black-matte mb-2">Phone & WhatsApp</h3>
              <a 
                href="https://wa.me/918610143937" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 mb-1 hover:text-primary transition-colors inline-block"
              >
                +91 8610143937
              </a>
            </div>

            <div className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-serif text-black-matte mb-2">Email Address</h3>
              <p className="text-gray-600">gurujiigroupofrealestate@gmail.com</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12">
              <h3 className="text-3xl font-serif text-black-matte mb-8">Send an Inquiry</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 text-black-matte focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 text-black-matte focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 text-black-matte focus:outline-none focus:border-primary transition-colors"
                    placeholder="+91 8610143937"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 text-black-matte focus:outline-none focus:border-primary transition-colors"
                    placeholder="Property Inquiry"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 text-black-matte focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <AnimatedButton type="submit" variant="primary" className="w-full sm:w-auto">
                  Send Message
                </AnimatedButton>
                
                <AnimatedButton 
                  type="button" 
                  variant="glass" 
                  className="w-full sm:w-auto flex justify-center items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://wa.me/918610143937', '_blank');
                  }}
                >
                  <MessageSquare size={18} /> Chat on WhatsApp
                </AnimatedButton>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
