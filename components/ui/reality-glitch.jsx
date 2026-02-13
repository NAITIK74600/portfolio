'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RealityGlitch() {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    };

    // Random glitches
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        glitch();
      }
    }, 5000);

    // Glitch on scroll
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastScroll) > 500) {
        if (Math.random() > 0.7) {
          glitch();
        }
        lastScroll = window.scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isGlitching && (
        <>
          {/* RGB Split */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none mix-blend-screen"
            style={{
              zIndex: 10001,
              background: 'linear-gradient(90deg, #ff0000 0%, transparent 50%, #00ff00 100%)',
            }}
          />

          {/* Scan lines */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{ duration: 0.15, ease: 'linear' }}
            className="fixed inset-0 pointer-events-none"
            style={{
              zIndex: 10002,
              background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 2px)',
            }}
          />

          {/* Color shift */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 pointer-events-none"
            style={{
              zIndex: 10003,
              background: `hsl(${Math.random() * 360}, 100%, 50%)`,
              mixBlendMode: 'color',
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
