'use client';

import { motion } from 'framer-motion';

export default function Floating3DText({ text, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-bold opacity-20 text-6xl"
            style={{
              transform: `rotateY(${i * 45}deg) translateZ(100px)`,
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
