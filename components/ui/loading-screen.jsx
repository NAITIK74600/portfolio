'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {/* Spider-Man Logo Animation */}
          <div className="relative">
            {/* Web Pattern */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg width="200" height="200" className="opacity-30">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#ff0000" strokeWidth="1" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#ff0000" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#ff0000" strokeWidth="1" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="#ff0000" strokeWidth="1" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="#ff0000" strokeWidth="1" />
                <line x1="35" y1="35" x2="165" y2="165" stroke="#ff0000" strokeWidth="1" />
                <line x1="165" y1="35" x2="35" y2="165" stroke="#ff0000" strokeWidth="1" />
              </svg>
            </motion.div>

            {/* Center Glow */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-20 h-20 bg-red-500 rounded-full blur-2xl opacity-50"
            />

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="text-white font-bold text-xl tracking-wider">
                Loading Portfolio
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
