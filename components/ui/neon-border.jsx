'use client';

import { motion } from 'framer-motion';

export default function NeonBorder({ children, className = '', color = 'cyan' }) {
  const colorMap = {
    cyan: 'shadow-cyan-500/50 border-cyan-500',
    purple: 'shadow-purple-500/50 border-purple-500',
    pink: 'shadow-pink-500/50 border-pink-500',
    green: 'shadow-green-500/50 border-green-500',
  };

  return (
    <motion.div
      className={`relative p-[2px] rounded-xl ${className}`}
      animate={{
        boxShadow: [
          `0 0 20px ${color === 'cyan' ? 'rgba(0, 255, 255, 0.5)' : color === 'purple' ? 'rgba(168, 85, 247, 0.5)' : color === 'pink' ? 'rgba(236, 72, 153, 0.5)' : 'rgba(34, 197, 94, 0.5)'}`,
          `0 0 40px ${color === 'cyan' ? 'rgba(0, 255, 255, 0.8)' : color === 'purple' ? 'rgba(168, 85, 247, 0.8)' : color === 'pink' ? 'rgba(236, 72, 153, 0.8)' : 'rgba(34, 197, 94, 0.8)'}`,
          `0 0 20px ${color === 'cyan' ? 'rgba(0, 255, 255, 0.5)' : color === 'purple' ? 'rgba(168, 85, 247, 0.5)' : color === 'pink' ? 'rgba(236, 72, 153, 0.5)' : 'rgba(34, 197, 94, 0.5)'}`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${
          color === 'cyan'
            ? 'from-cyan-500 to-blue-500'
            : color === 'purple'
            ? 'from-purple-500 to-pink-500'
            : color === 'pink'
            ? 'from-pink-500 to-rose-500'
            : 'from-green-500 to-emerald-500'
        } opacity-50 blur-md`}
      />
      <div className="relative bg-black/80 backdrop-blur-xl rounded-xl">
        {children}
      </div>
    </motion.div>
  );
}
