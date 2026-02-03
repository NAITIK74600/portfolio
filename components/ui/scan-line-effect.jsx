'use client';

import { motion } from 'framer-motion';

export default function ScanLineEffect() {
  return (
    <>
      {/* Vertical scan line */}
      <motion.div
        className="fixed top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30 pointer-events-none"
        style={{ zIndex: 3 }}
        animate={{
          left: ['0%', '100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Horizontal scan line */}
      <motion.div
        className="fixed left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 pointer-events-none"
        style={{ zIndex: 3 }}
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Radial pulse */}
      <motion.div
        className="fixed top-1/2 left-1/2 w-96 h-96 rounded-full border-2 border-cyan-500/20 pointer-events-none"
        style={{ zIndex: 2, transform: 'translate(-50%, -50%)' }}
        animate={{
          scale: [0, 2],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
    </>
  );
}
