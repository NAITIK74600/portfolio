/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { HiCode, HiArrowRight, HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { config } from '@/config';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion, useScroll, useTransform } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';
import GlitchText from '@/components/ui/glitch-text';
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

          {/* Enhanced Description Section */}
          <motion.div
            variants={itemAnimation}
            className="max-w-3xl mx-auto space-y-4"
          >
            {/* Main Description Card */}
            <div className="relative group bg-gradient-to-br from-white/15 via-white/10 to-white/5 px-6 py-5 rounded-2xl backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <p className="relative text-base sm:text-lg leading-relaxed flex items-start gap-3" style={{ 
                textShadow: '0 2px 8px rgba(0,0,0,1)',
                color: '#f0f0f0'
              }}>
                <HiSparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1 animate-pulse" />
                <span>
                  <span className="font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MCA (AI & ML) Student</span> @ Chandigarh University | Passionate about building intelligent solutions that transform ideas into reality. I specialize in crafting innovative AI/ML applications that solve real-world problems and create meaningful impact.
                </span>
              </p>
            </div>

            {/* Focus Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="relative group bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-transparent p-5 rounded-2xl backdrop-blur-xl border border-blue-400/30 shadow-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                    <HiLightningBolt className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base flex items-center gap-2">
                    Machine Learning
                    <HiLightningBolt className="w-4 h-4 text-yellow-400 group-hover:animate-pulse" />
                  </h3>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Building predictive models and intelligent systems using scikit-learn, TensorFlow, and PyTorch
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="relative group bg-gradient-to-br from-purple-500/25 via-pink-500/20 to-transparent p-5 rounded-2xl backdrop-blur-xl border border-purple-400/30 shadow-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                    <HiSparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base flex items-center gap-2">
                    Deep Learning
                    <HiSparkles className="w-4 h-4 text-pink-400 group-hover:animate-pulse" />
                  </h3>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Creating neural networks for computer vision, NLP, and complex pattern recognition tasks
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="relative group bg-gradient-to-br from-pink-500/25 via-red-500/20 to-transparent p-5 rounded-2xl backdrop-blur-xl border border-pink-400/30 shadow-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-pink-500/50 transition-shadow">
                    <HiCode className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base flex items-center gap-2">
                    Full-Stack Development
                    <HiCode className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
                  </h3>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Developing modern web applications with React, Next.js, Node.js, and cloud technologies
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats/Highlights Bar */}
            <motion.div
              variants={itemAnimation}
              className="relative group bg-gradient-to-r from-white/15 via-white/10 to-white/15 px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/30 flex flex-wrap justify-center items-center gap-6 text-sm shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-30"></div>
              
              <motion.div 
                whileHover={{ scale: 1.1, y: -2 }}
                className="relative flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <HiLightningBolt className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-bold">10+ Projects</span>
              </motion.div>
              
              <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              
              <motion.div 
                whileHover={{ scale: 1.1, y: -2 }}
                className="relative flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <HiSparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-bold">13 Certifications</span>
              </motion.div>
              
              <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              
              <motion.div 
                whileHover={{ scale: 1.1, y: -2 }}
                className="relative flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <HiCode className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-bold">15+ Technologies</span>
              </motion.div>
            </motion.div>
          </motion.div>

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