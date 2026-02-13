'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ScreenShake() {
  const [shake, setShake] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || (e.ctrlKey && e.key === 'k') || (e.metaKey && e.key === 'k')) {
        triggerShake();
      }
    };

    const triggerShake = () => {
      setShake(true);
      controls.start({
        x: [0, -10, 10, -10, 10, -5, 5, -5, 5, 0],
        y: [0, -5, 5, -5, 5, -3, 3, -3, 3, 0],
        rotate: [0, -1, 1, -1, 1, -0.5, 0.5, -0.5, 0.5, 0],
        transition: { duration: 0.5, ease: "easeInOut" }
      }).then(() => setShake(false));
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Shake on first load
    setTimeout(triggerShake, 500);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 10000 }}
    />
  );
}
