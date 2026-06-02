import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedCursor from './components/AnimatedCursor'
import PageLoader from './components/PageLoader'
import Chatbot from './components/Chatbot'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Terms = lazy(() => import('./pages/Terms'))

// ScrollToTop component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="App font-sans bg-black-matte min-h-screen text-white overflow-hidden">
        <PageLoader isLoading={loading} />
        
        {/* Render content only when not initially loading to prevent layout shifts or premature animations */}
        <AnimatedCursor />
        <Navbar />
        <Chatbot />
        
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="h-screen bg-black-matte flex items-center justify-center"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
