/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion, useScroll, useTransform } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';
import GlitchText from '@/components/ui/glitch-text';
import TerminalText from '@/components/ui/terminal-text';
import HeroActions from '@/components/ui/hero-actions';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  // Removed opacity transform that was hiding content

  return (
    <motion.section 
      className="flex items-center justify-center relative w-full"
      style={{ y }}
    >
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center space-y-8 relative"
        >
          <motion.div
            variants={itemAnimation}
            className="inline-flex items-center space-x-2 bg-white/10 border-[1.8px] border-white/30 px-4 py-2 rounded-full text-white backdrop-blur-xl shadow-2xl"
          >
            <HiCode className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white">Welcome to my portfolio</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemAnimation}
              className="text-4xl md:text-7xl font-bold tracking-tight"
              style={{ 
                textShadow: '0 0 40px rgba(0,0,0,1), 0 4px 20px rgba(0,0,0,1), 0 8px 40px rgba(0,0,0,0.8)',
                color: '#ffffff'
              }}
            >
              <motion.span
                variants={textAnimation}
                className="block mb-2"
                style={{ color: '#ffffff' }}
              >
                <GlitchText className="text-4xl md:text-7xl font-bold">
                  Hi, I'm {config.developer.name}
                </GlitchText>
              </motion.span>
              <motion.span
                variants={textAnimation}
                className="block text-2xl md:text-4xl"
                style={{ color: '#e5e5e5' }}
              >
                <GlitchText className="text-2xl md:text-4xl">
                  AI/ML Student & Builder
                </GlitchText>
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemAnimation}
            className="text-base sm:text-md leading-relaxed max-w-2xl mx-auto bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/20"
            style={{ 
              textShadow: '0 2px 8px rgba(0,0,0,1)',
              color: '#f0f0f0'
            }}
          >
           MCA (AI & ML) Student @ Chandigarh University 🎓 Passionate about building intelligent solutions with Machine Learning, Deep Learning, and AI. Creating projects that solve real-world problems. 🚀
          </motion.p>

          {/* Hero Actions */}
          <motion.div
            variants={itemAnimation}
          >
            <HeroActions />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -z-10 inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
        <SkillsShowcase />
      </div>
    </motion.section>
  );
};

export default HeroSection;