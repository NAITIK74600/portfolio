'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="hidden md:block fixed w-4 h-4 rounded-full pointer-events-none mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          x: '-50%',
          y: '-50%',
          zIndex: 9999,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? '#fff' : '#fff',
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Cursor trail */}
      <motion.div
        className="hidden md:block fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          x: '-50%',
          y: '-50%',
          zIndex: 9998,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: 'backOut',
        }}
      />
    </>
  );
}
