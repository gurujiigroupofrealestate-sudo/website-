import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential Plots', 'Commercial Land', 'Agricultural'];

  const allProjects = [
    {
      id: 1,
      title: 'Vinayaga Nagar',
      location: 'Near AIIMS, Madurai',
      price: '₹6.5 Lakhs / Cent',
      status: 'DTCP Approved',
      category: 'Residential Plots',
      image: '/aiims.png',
    },
    {
      id: 2,
      title: 'Vibul City',
      location: 'Alagar Kovil to Melur',
      price: '₹5.9 Lakhs / Cent',
      status: 'Available',
      category: 'Residential Plots',
      image: '/alagar.png',
    },
    {
      id: 3,
      title: 'Arunachala Enclave',
      location: 'Eliyar Pathi (Near Airport)',
      price: '₹4.99 Lakhs / Cent',
      status: 'Available',
      category: 'Residential Plots',
      image: '/airport.png',
    },
    {
      id: 4,
      title: 'Fortune City',
      location: 'Thanakkankulam',
      price: '₹6.5 Lakhs / Cent',
      status: 'Road Cost Free (DTCP)',
      category: 'Residential Plots',
      image: '/fortune.png',
    },
    {
      id: 5,
      title: 'Perumal Nagar',
      location: 'Sathangudi',
      price: '₹2.61 Lakhs / Cent',
      status: 'Registration Free',
      category: 'Residential Plots',
      image: '/perumal.png',
    },
    {
      id: 6,
      title: 'Kamuthi - Kaana Vilakku',
      location: 'Aruppukottai',
      price: '₹3 Lakhs / 1.84 Cent',
      status: 'Road Free',
      category: 'Residential Plots',
      image: '/perumal.png',
    },
    {
      id: 7,
      title: 'Achampatti Farm Land',
      location: 'Sedapatti Road',
      price: '₹26 Lakhs / Acre',
      status: 'Highly Fertile',
      category: 'Agricultural',
      image: '/farmland.png',
    }
  ];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-black-matte mb-6"
          >
            Exclusive <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Explore our collection of premium land parcels and strategic plots that redefine the art of luxury investment.
          </motion.p>
        </div>

        {/* Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                filter === cat 
                  ? 'bg-primary text-white' 
                  : 'glass-panel text-black-matte hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;
