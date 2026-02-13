'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConfettiCannon() {
  const [confetti, setConfetti] = useState([]);

  const fire = (x, y) => {
    const colors = ['#FF1744', '#F50057', '#FFD700', '#00E676', '#2979FF', '#D500F9'];
    const newConfetti = Array.from({ length: 100 }, (_, i) => ({
      id: Date.now() + i,
      x: x || window.innerWidth / 2,
      y: y || 0,
      angle: Math.random() * Math.PI * 2,
      velocity: 5 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 8 + Math.random() * 8,
      rotation: Math.random() * 360,
    }));

    setConfetti((prev) => [...prev, ...newConfetti]);

    setTimeout(() => {
      setConfetti((prev) => prev.filter((c) => !newConfetti.find((nc) => nc.id === c.id)));
    }, 3000);
  };

  useEffect(() => {
    // Fire on special events
    const handleKeyDown = (e) => {
      // Press C for confetti
      if (e.key === 'c' && e.ctrlKey) {
        e.preventDefault();
        fire(Math.random() * window.innerWidth, 0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Custom event for achievements
    const handleAchievement = (e) => {
      fire(window.innerWidth / 2, 100);
    };

    window.addEventListener('achievement-unlocked', handleAchievement);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('achievement-unlocked', handleAchievement);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9998 }}>
      <AnimatePresence>
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute"
            style={{
              left: piece.x,
              top: piece.y,
              width: piece.size,
              height: piece.size / 2,
              background: piece.color,
              borderRadius: '2px',
              rotate: piece.rotation,
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              rotate: piece.rotation,
            }}
            animate={{
              x: Math.cos(piece.angle) * piece.velocity * 30,
              y: piece.velocity * 80 + Math.sin(piece.angle) * 20,
              opacity: [1, 1, 0],
              rotate: piece.rotation + 720,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3,
              ease: [0.23, 1, 0.32, 1],
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
