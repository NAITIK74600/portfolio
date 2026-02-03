'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ParticleExplosion() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        angle: (Math.PI * 2 * i) / 20,
        velocity: 2 + Math.random() * 3,
      }));

      setParticles((prev) => [...prev, ...newParticles]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
      }, 1000);
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
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              background: `hsl(${Math.random() * 360}, 100%, 50%)`,
              boxShadow: `0 0 10px hsl(${Math.random() * 360}, 100%, 50%)`,
            }}
            initial={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              x: Math.cos(particle.angle) * particle.velocity * 50,
              y: Math.sin(particle.angle) * particle.velocity * 50,
              scale: 0,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
