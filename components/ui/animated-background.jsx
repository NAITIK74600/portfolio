'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [isMounted, setIsMounted] = useState(false);

  // Scroll-based transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [360, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

  useEffect(() => {
    setIsMounted(true);
    
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      
      const handleMouseMove = (e) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      };

      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 rounded-full"
        style={{
          y: y1,
          rotate: rotate1,
          x: mousePosition.x,
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
        style={{
          y: y2,
          rotate: rotate2,
          x: -mousePosition.x,
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          scale,
          y: mousePosition.y,
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Floating Geometric Shapes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            opacity: 0.1,
          }}
          animate={{
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: 20 + Math.random() * 40,
            height: 20 + Math.random() * 40,
          }}
        >
          {i % 3 === 0 ? (
            <div className="w-full h-full border-2 border-blue-500/20" />
          ) : i % 3 === 1 ? (
            <div className="w-full h-full border-2 border-purple-500/20 rotate-45" />
          ) : (
            <div className="w-full h-full rounded-full border-2 border-cyan-500/20" />
          )}
        </motion.div>
      ))}

      {/* Animated Grid Lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: y1,
          opacity: 0.1,
          backgroundImage: `
            linear-gradient(to right, rgba(79, 70, 229, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(79, 70, 229, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.line
            key={i}
            x1={Math.random() * 100 + '%'}
            y1={Math.random() * 100 + '%'}
            x2={Math.random() * 100 + '%'}
            y2={Math.random() * 100 + '%'}
            stroke="url(#gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-blue-400/40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight - 200],
            x: [null, Math.random() * window.innerWidth - 200],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
