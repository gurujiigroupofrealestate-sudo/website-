import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Key, Building, Wrench, ShieldCheck, FileText } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import AnimatedButton from '../components/AnimatedButton';

const Services = () => {
  const services = [
    {
      title: 'Land Acquisition',
      description: 'Expert advice and strategic planning to help you acquire premium land parcels with high appreciation potential.',
      icon: <Briefcase size={24} />
    },
    {
      title: 'Plot Trading',
      description: 'Seamless buying and selling of verified plots. We handle everything from market analysis to closing with utmost professionalism.',
      icon: <Key size={24} />
    },
    {
      title: 'Investment Guidance',
      description: 'Strategic land portfolio management to ensure your investments yield the highest possible returns over time.',
      icon: <Building size={24} />
    },
    {
      title: 'Land Surveying',
      description: 'Comprehensive topographical and boundary surveys to verify the exact dimensions and usability of the land.',
      icon: <Wrench size={24} />
    },
    {
      title: 'Portfolio Management',
      description: 'End-to-end management of your land assets, ensuring they are secured, maintained, and optimized for future resale.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Legal & Title Verification',
      description: 'Transparent and thorough legal support to ensure all your land transactions have clear titles and are 100% secure.',
      icon: <FileText size={24} />
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-40 left-[-10%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-black-matte mb-6"
          >
            Bespoke <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            A comprehensive suite of luxury real estate services designed to cater to your every need with absolute precision.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>


        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel-light p-12 text-center rounded-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-black-matte mb-6">Need a Customized Solution?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experts are ready to design a tailored strategy that aligns perfectly with your unique real estate aspirations.
            </p>
            <Link to="/contact">
              <AnimatedButton variant="primary">
                Schedule a Consultation
              </AnimatedButton>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;
