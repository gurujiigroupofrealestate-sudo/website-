import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-panel p-8 md:p-10 group hover:-translate-y-2 transition-transform duration-500 cursor-pointer"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
        {React.cloneElement(service.icon, { size: 32 })}
      </div>
      
      <h3 className="text-2xl font-serif text-black-matte mb-4 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>

      {service.features && (
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-800">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <div className="flex items-center text-sm font-semibold text-primary group-hover:translate-x-2 transition-transform duration-300">
        Explore <ArrowRight size={16} className="ml-2" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
