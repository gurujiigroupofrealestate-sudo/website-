import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, className = '', type = 'button', variant = 'primary' }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Magnetic effect factor
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = "relative px-8 py-4 rounded-full overflow-hidden font-medium tracking-wide transition-colors duration-300";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-[#800000]",
    secondary: "bg-secondary text-black-matte hover:bg-[#E5B532]",
    outline: "border border-black/20 text-black-matte hover:bg-black-matte hover:text-white glass-panel-light",
    glass: "glass-panel text-black-matte hover:bg-gray-100"
  };

  return (
    <motion.button
      type={type}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className} group`}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Ripple/Glow effect on hover */}
      {variant === 'primary' && (
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </motion.button>
  );
};

export default AnimatedButton;
