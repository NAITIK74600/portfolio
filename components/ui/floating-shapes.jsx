'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingShapes() {
  const [mounted, setMounted] = useState(false);
  const [positions, setPositions] = useState([]);

  const shapes = [
    { type: 'circle', size: 60, color: 'from-cyan-500 to-blue-500', delay: 0 },
    { type: 'square', size: 40, color: 'from-purple-500 to-pink-500', delay: 1 },
    { type: 'triangle', size: 50, color: 'from-green-500 to-emerald-500', delay: 2 },
    { type: 'hexagon', size: 45, color: 'from-yellow-500 to-orange-500', delay: 1.5 },
    { type: 'circle', size: 35, color: 'from-red-500 to-rose-500', delay: 0.5 },
    { type: 'square', size: 55, color: 'from-indigo-500 to-purple-500', delay: 2.5 },
  ];

  useEffect(() => {
    setPositions(shapes.map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    })));
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute opacity-20`}
          style={{
            left: `${positions[index]?.left || 0}%`,
            top: `${positions[index]?.top || 0}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'circle' && (
            <div
              className={`rounded-full bg-gradient-to-br ${shape.color} blur-sm`}
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className={`bg-gradient-to-br ${shape.color} blur-sm`}
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className={`bg-gradient-to-br ${shape.color} blur-sm`}
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid currentColor`,
              }}
            />
          )}
          {shape.type === 'hexagon' && (
            <div
              className={`bg-gradient-to-br ${shape.color} blur-sm`}
              style={{
                width: shape.size,
                height: shape.size,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
