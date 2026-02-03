'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function KonamiCode() {
  const [keys, setKeys] = useState([]);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newKeys = [...keys, e.key].slice(-10);
      setKeys(newKeys);

      if (newKeys.join(',') === KONAMI_CODE.join(',')) {
        setActivated(true);
        setKeys([]);
        
        // Create matrix effect
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
          document.body.style.animation = '';
        }, 5000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keys]);

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-[999] flex items-center justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{ duration: 2 }}
            className="text-9xl"
          >
            🚀
          </motion.div>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
          >
            SECRET UNLOCKED!
          </motion.h1>
        </motion.div>
      )}

      <style jsx global>{`
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </AnimatePresence>
  );
}
