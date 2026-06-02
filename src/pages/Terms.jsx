import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20">
      <SEO title="Terms & Conditions" />
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-black-matte mb-6"
          >
            Terms & <span className="text-gradient">Conditions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Last updated: June 2026
          </motion.p>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-panel-light p-8 md:p-12 prose prose-lg max-w-none text-gray-600"
        >
          <h3 className="text-2xl font-serif text-black-matte mb-4">1. Introduction</h3>
          <p className="mb-6 leading-relaxed">
            Welcome to Gurujii Group of Real Estates. By accessing our website and utilizing our services, you agree to be bound by the following terms and conditions. These terms govern your use of our digital platforms and your relationship with our company during the property acquisition process.
          </p>

          <h3 className="text-2xl font-serif text-black-matte mb-4 mt-8">2. Property Listings & Accuracy</h3>
          <p className="mb-6 leading-relaxed">
            While we strive to ensure that all property details, pricing, and availability listed on this website are accurate, Gurujii Group reserves the right to modify these details without prior notice. The images and layouts provided are for representational purposes and may vary slightly from the actual physical site.
          </p>

          <h3 className="text-2xl font-serif text-black-matte mb-4 mt-8">3. Legal and DTCP Approvals</h3>
          <p className="mb-6 leading-relaxed">
            All plots sold by Gurujii Group are backed by official DTCP approvals unless explicitly stated otherwise. However, it remains the responsibility of the buyer to review all legal documents, encumbrance certificates, and approvals provided by our legal team prior to final registration.
          </p>

          <h3 className="text-2xl font-serif text-black-matte mb-4 mt-8">4. Payments and Bookings</h3>
          <p className="mb-6 leading-relaxed">
            Booking advance amounts are subject to the specific terms outlined in your booking agreement. Failure to process the remaining balance within the stipulated timeframe may result in cancellation of the booking and forfeiture of the advance as per standard company policy.
          </p>

          <h3 className="text-2xl font-serif text-black-matte mb-4 mt-8">5. Privacy and Data Security</h3>
          <p className="mb-6 leading-relaxed">
            We value your privacy. Any personal information, phone numbers, or email addresses submitted through our contact forms or WhatsApp integrations will be used strictly for communication regarding your real estate inquiry. We do not sell your data to third-party marketing agencies.
          </p>

          <h3 className="text-2xl font-serif text-black-matte mb-4 mt-8">6. Governing Law</h3>
          <p className="mb-6 leading-relaxed">
            These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of property transactions or website usage shall be subject to the exclusive jurisdiction of the courts located in Madurai, Tamil Nadu.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Terms;
