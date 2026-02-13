'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CosmicCursor() {
  const [trail, setTrail] = useState([]);
  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    let animationFrame;
    let lastTime = Date.now();

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 16) return; // Throttle to ~60fps
      lastTime = now;

      const newDot = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: isHolding ? 20 + Math.random() * 20 : 8 + Math.random() * 8,
        color: isHolding 
          ? `hsl(${Math.random() * 360}, 100%, 50%)` 
          : `hsl(${(Date.now() / 10) % 360}, 80%, 60%)`,
      };

      setTrail((prev) => {
        const newTrail = [...prev, newDot].slice(-30);
        return newTrail;
      });

      // Auto-remove old dots
      setTimeout(() => {
        setTrail((prev) => prev.filter((dot) => dot.id !== newDot.id));
      }, isHolding ? 800 : 500);
    };

    const handleMouseDown = () => setIsHolding(true);
    const handleMouseUp = () => setIsHolding(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isHolding]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9997 }}>
      <AnimatePresence>
        {trail.map((dot, index) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full mix-blend-screen"
            style={{
              left: dot.x - dot.size / 2,
              top: dot.y - dot.size / 2,
              width: dot.size,
              height: dot.size,
              background: `radial-gradient(circle, ${dot.color} 0%, transparent 70%)`,
              boxShadow: `0 0 ${dot.size}px ${dot.color}`,
            }}
            initial={{
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: isHolding ? [1, 1.5, 1] : 1,
              opacity: 1 - (index / trail.length) * 0.5,
            }}
            exit={{
              scale: 2,
              opacity: 0,
            }}
            transition={{
              duration: isHolding ? 0.3 : 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
