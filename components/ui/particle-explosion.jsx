'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ParticleExplosion() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const colors = [
        '#FF1744', '#F50057', '#D500F9', '#651FFF', '#2979FF',
        '#00B0FF', '#00E5FF', '#1DE9B6', '#00E676', '#76FF03',
        '#C6FF00', '#FFEA00', '#FFC400', '#FF9100', '#FF3D00'
      ];
      
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        angle: (Math.PI * 2 * i) / 30,
        velocity: 3 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 2 + Math.random() * 4,
      }));

      setParticles((prev) => [...prev, ...newParticles]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
      }, 1500);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              background: particle.color,
              boxShadow: `0 0 20px ${particle.color}`,
            }}
            initial={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              rotate: 0,
            }}
            animate={{
              x: Math.cos(particle.angle) * particle.velocity * 60,
              y: Math.sin(particle.angle) * particle.velocity * 60,
              scale: [1, 2, 0],
              opacity: [1, 0.8, 0],
              rotate: [0, 180, 360],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
