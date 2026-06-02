import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20">
      <SEO title="About Us" />
      {/* Page Header */}
      <div className="container mx-auto px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-black-matte mb-6"
        >
          Our <span className="text-gradient">Legacy</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Two decades of excellence in strategic land acquisitions and dealing in premium plots that define the pinnacle of investment value.
        </motion.p>
      </div>

      {/* Vision & Mission */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full group-hover:bg-primary/20 transition-colors duration-500" />
            <h3 className="text-3xl font-serif text-black-matte mb-4 relative z-10">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              To be South Tamil Nadu's most recognized symbol of premium land dealing, setting unprecedented standards in transparency, location value, and customer trust. We envision a future where every Gurujii plot is a landmark investment in and around Madurai.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-[50px] rounded-full group-hover:bg-secondary/40 transition-colors duration-500" />
            <h3 className="text-3xl font-serif text-black-matte mb-4 relative z-10">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              To continuously identify and secure high-potential land parcels by combining deep market insights with ethical practices, ensuring long-term value appreciation and absolute satisfaction for our clients.
            </p>
          </motion.div>
        </div>
      </div>


      {/* Leadership Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black-matte mb-4">Our Leadership</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="flex flex-col gap-16">
            {[
              { 
                name: 'Moorthy S K', 
                role: 'Managing Director', 
                image: '/moorthy.png',
                desc: 'Leading the vision of Gurujii Group, Moorthy brings decades of unmatched expertise in land acquisition, strategic growth, and market dynamics.'
              },
              { 
                name: 'Subha M', 
                role: 'Director', 
                image: '/subha.jpg',
                desc: 'With a keen eye for operational excellence and client satisfaction, Subha ensures every transaction is transparent, smooth, and highly beneficial for our investors.'
              },
              { 
                name: 'Sathya Jeyanthi J', 
                role: 'Director', 
                image: '/sathya.png',
                desc: 'Sathya spearheads the legal and compliance divisions, ensuring that every land parcel we curate has pristine titles and offers absolute peace of mind.'
              }
            ].map((leader, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`md:w-1/3 ${i % 2 !== 0 ? 'md:order-2' : ''}`}
                >
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-panel-light p-2">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 !== 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`md:w-2/3 ${i % 2 !== 0 ? 'md:order-1' : ''}`}
                >
                  <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic leading-relaxed mb-8 border-l-2 border-primary pl-6">
                    "{leader.desc}"
                  </blockquote>
                  <div>
                    <h4 className="text-black-matte text-lg font-medium">{leader.name}</h4>
                    <p className="text-primary text-sm uppercase tracking-widest font-medium">{leader.role}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-black-matte mb-4">Why Choose Gurujii Group of Real Estates</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Uncompromising Due Diligence", desc: "We ensure every land parcel has clear titles and thoroughly verified legalities before it reaches our clients." },
            { title: "Prime Locations", desc: "Our plots are strategically located in the most sought-after and rapidly developing areas, ensuring excellent appreciation." },
            { title: "Transparent Dealings", desc: "Trust is our foundation. We maintain 100% transparency in all our legal, technical, and financial proceedings." },
            { title: "Strategic Growth Potential", desc: "We identify lands with high future growth potential, ensuring your investment multiplies over time." },
            { title: "Hassle-Free Registration", desc: "We handle all the legal paperwork and registration processes, making your land acquisition seamless." },
            { title: "Bespoke Portfolios", desc: "We curate personalized land investment portfolios tailored to your specific financial goals and risk appetite." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <CheckCircle className="text-primary mb-4" size={28} />
              <h4 className="text-xl font-serif text-black-matte mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
