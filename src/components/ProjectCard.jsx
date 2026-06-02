import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      className="group relative overflow-hidden rounded-2xl glass-panel-light cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-white via-white/95 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        
        <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
              {project.category}
            </p>
            <h3 className="text-2xl font-serif text-black-matte mb-1">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.location}</p>
          </div>
          
          {/* Animated Arrow */}
          <Link to="/contact" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden relative cursor-pointer">
            <div className="absolute inset-0 bg-primary transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
            <ArrowRight className="text-black-matte group-hover:text-white relative z-10 -translate-x-6 group-hover:translate-x-0 transition-transform duration-500" />
            <ArrowRight className="text-black-matte group-hover:text-white absolute z-10 group-hover:translate-x-6 transition-transform duration-500" />
          </Link>
        </div>

        {/* Details that appear on hover */}
        <div className="overflow-hidden h-0 group-hover:h-[60px] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] mt-4 opacity-0 group-hover:opacity-100 flex items-center justify-between border-t border-gray-200 pt-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Starting From</p>
            <p className="text-black-matte font-medium">{project.price}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Status</p>
            <p className="text-primary font-medium">{project.status}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
