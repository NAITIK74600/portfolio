'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function DataStream() {
  const [mounted, setMounted] = useState(false);
  const [streams, setStreams] = useState([]);
  const dataSymbols = ['01', '10', '11', '00', 'FF', 'A3', '7B', 'C4', 'E9', '2F'];

  useEffect(() => {
    setStreams(Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      left: `${(i * 100) / 15}%`,
    })));
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute top-0 h-full"
          style={{ left: stream.left }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute text-xs font-mono text-cyan-400/40"
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: '100vh',
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: stream.duration,
                repeat: Infinity,
                delay: stream.delay + index * 0.3,
                ease: 'linear',
              }}
            >
              {dataSymbols[Math.floor(Math.random() * dataSymbols.length)]}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
