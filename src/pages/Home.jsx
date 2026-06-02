import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Building2, Users, Trophy, Key, ArrowRight } from 'lucide-react';

import AnimatedButton from '../components/AnimatedButton';
import ProjectCard from '../components/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    // GSAP ScrollTrigger for parallax and fade effects
    const ctx = gsap.context(() => {
      gsap.to('.hero-overlay', {
        opacity: 0.8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.from('.stat-item', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const featuredProjects = [
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
      title: 'Fortune City',
      location: 'Thanakkankulam',
      price: '₹6.5 Lakhs / Cent',
      status: 'Road Cost Free',
      category: 'Residential Plots',
      image: '/fortune.png',
    },
    {
      id: 3,
      title: 'Achampatti Farm Land',
      location: 'Sedapatti Road',
      price: '₹26 Lakhs / Acre',
      status: 'Highly Fertile',
      category: 'Agricultural',
      image: '/farmland.png',
    }
  ];

  const stats = [
    { icon: <Building2 size={24} />, value: '150+', label: 'Premium Projects' },
    { icon: <Users size={24} />, value: '10k+', label: 'Happy Families' },
    { icon: <Trophy size={24} />, value: '25+', label: 'Years Experience' },
    { icon: <Key size={24} />, value: '500+', label: 'Properties Sold' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 hero-overlay z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-gray-50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-secondary font-medium tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
              Welcome to Gurujii Group of Real Estates
            </p>
          </motion.div>

          <div className="overflow-hidden mb-8" ref={textRef}>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
            >
              Premium Land <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Investments</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <AnimatedButton variant="primary">
              View Projects
            </AnimatedButton>
            <AnimatedButton variant="outline">
              Contact Us
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-xs text-white uppercase tracking-widest mb-2 font-light">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Floating Statistics */}
      <section className="relative z-30 -mt-20 container mx-auto px-6 stats-container">
        <div className="glass-panel p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-black-matte mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Highlights */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden glass-panel-light p-2">
                <img 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Luxury Interior" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary p-8 rounded-2xl hidden md:flex flex-col justify-center items-center text-black-matte shadow-2xl">
                <span className="text-6xl font-serif font-bold mb-2">25</span>
                <span className="text-sm font-medium uppercase tracking-widest text-center">Years of Excellence</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2"
            >
              <h4 className="text-primary tracking-widest uppercase text-sm font-medium mb-4">About Gurujii Group of Real Estates</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-black-matte mb-6 leading-tight">
                Curating Premium Lands That Define <span className="text-gradient">Value</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Gurujii Group of Real Estates, we specialize in premium land acquisitions and strategic plot dealings. With a legacy spanning over two decades, we have been at the forefront of identifying and securing high-value plots, blending market expertise with uncompromising trust.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Our vision is to acquire and offer lands that resonate with immense potential, ensuring that every plot we deal in is a golden investment opportunity in its own right.
              </p>
              <AnimatedButton variant="outline" className="flex items-center gap-2">
                Discover Our Story <ArrowRight size={16} />
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Slider */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <div className="text-center md:text-left w-full">
            <h4 className="text-primary tracking-widest uppercase text-sm font-medium mb-4">Exclusive Parcels</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-black-matte">Featured Lands</h2>
          </div>
          <AnimatedButton variant="glass" className="hidden md:block">
            View All Properties
          </AnimatedButton>
        </div>

        <div className="w-full pl-6 md:pl-0 md:container md:mx-auto">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-12"
          >
            {featuredProjects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
      {/* Testimonials or CTA can be added here */}
    </div>
  );
};

export default Home;
