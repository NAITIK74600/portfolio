"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { cn } from '@/lib/utils'

const FloatingElements = () => {
  const shapes = [
    { size: 'w-20 h-20', color: 'bg-blue-500/10', delay: 0, duration: 20 },
    { size: 'w-32 h-32', color: 'bg-purple-500/10', delay: 2, duration: 25 },
    { size: 'w-16 h-16', color: 'bg-pink-500/10', delay: 4, duration: 18 },
    { size: 'w-24 h-24', color: 'bg-cyan-500/10', delay: 1, duration: 22 },
    { size: 'w-28 h-28', color: 'bg-indigo-500/10', delay: 3, duration: 24 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={cn(shape.size, shape.color, "absolute rounded-full blur-3xl")}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

const GradientText = ({ children, className }) => (
  <span className={cn(
    "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400",
    className
  )}>
    {children}
  </span>
)

const AnimatedHeroSection = ({ 
  title, 
  subtitle, 
  description, 
  children 
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black opacity-50" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Subtitle with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 text-sm font-medium text-white/80">
            <TypeAnimation
              sequence={[
                subtitle || '👋 Welcome to my portfolio',
                2000,
                '💻 Full Stack Developer',
                2000,
                '🤖 AI & ML Enthusiast',
                2000,
                '🎨 Creative Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          {title?.split(' ').map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="inline-block mr-4"
            >
              {index % 2 === 0 ? (
                word
              ) : (
                <GradientText>{word}</GradientText>
              )}
            </motion.span>
          )) || (
            <>
              Building <GradientText>Digital</GradientText> Experiences
            </>
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {description || "Crafting innovative solutions with cutting-edge technologies. Specializing in AI, ML, and modern web development."}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {children}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-white/40">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AnimatedHeroSection
