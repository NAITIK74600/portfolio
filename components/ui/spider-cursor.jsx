'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SpiderCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="relative w-4 h-4">
          {/* Core */}
          <div className="absolute inset-0 bg-red-500 rounded-full" />
          {/* Glow */}
          <div className="absolute inset-0 bg-red-500 rounded-full blur-sm opacity-70" />
          <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-40" />
        </div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <div className="w-10 h-10 border-2 border-red-500/50 rounded-full" 
          style={{
            boxShadow: '0 0 10px rgba(255, 0, 0, 0.5), inset 0 0 10px rgba(255, 0, 0, 0.2)'
          }}
        />
      </motion.div>

      {/* Spider web cursor trail */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
        <svg width="80" height="80" className="opacity-30">
          <circle cx="40" cy="40" r="35" fill="none" stroke="#ff0000" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="25" fill="none" stroke="#ff0000" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="15" fill="none" stroke="#ff0000" strokeWidth="0.5" />
          <line x1="40" y1="5" x2="40" y2="75" stroke="#ff0000" strokeWidth="0.5" />
          <line x1="5" y1="40" x2="75" y2="40" stroke="#ff0000" strokeWidth="0.5" />
          <line x1="13" y1="13" x2="67" y2="67" stroke="#ff0000" strokeWidth="0.5" />
          <line x1="67" y1="13" x2="13" y2="67" stroke="#ff0000" strokeWidth="0.5" />
        </svg>
      </motion.div>
    </>
  );
}
