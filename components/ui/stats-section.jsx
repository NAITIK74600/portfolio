'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    { label: 'Projects Completed', value: 6, suffix: '+' },
    { label: 'Technologies', value: 12, suffix: '+' },
    { label: 'Years Learning', value: 2, suffix: '+' },
    { label: 'GitHub Repos', value: 20, suffix: '+' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-2xl"
            >
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                whileHover={{ scale: 1.1 }}
              >
                <Counter end={stat.value} suffix={stat.suffix} />
              </motion.h3>
              <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
