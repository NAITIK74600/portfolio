'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function GlitchText({ children, className = '' }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        animate={isGlitching ? {
          x: [0, -2, 2, -2, 0],
          y: [0, 2, -2, 1, 0],
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-cyan-500 opacity-70"
            style={{ transform: 'translate(-2px, 1px)', zIndex: 9 }}
          >
            {children}
          </span>
          <span
            className="absolute top-0 left-0 text-red-500 opacity-70"
            style={{ transform: 'translate(2px, -1px)', zIndex: 8 }}
          >
            {children}
          </span>
        </>
      )}
    </div>
  );
}
