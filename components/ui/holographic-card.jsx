'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HolographicCard({ children, className = '' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Holographic overlay */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(220, 20, 60, 0.4) 0%,
              rgba(255, 0, 0, 0.3) 25%,
              rgba(139, 0, 0, 0.2) 50%,
              transparent 70%
            )
          `,
        }}
      />
      
      {/* Scan lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(220, 20, 60, 0.15) 2px, rgba(220, 20, 60, 0.15) 4px)',
        }}
      />
      
      {/* Border glow */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600 via-red-700 to-red-800 opacity-50 blur-xl" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
