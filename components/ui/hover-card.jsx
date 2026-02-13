"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const HoverCard = ({ 
  children, 
  className,
  hoverScale = 1.05,
  glowColor = "from-blue-500 to-purple-500"
}) => {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        "relative group cursor-pointer",
        "bg-black/40 backdrop-blur-sm",
        "border border-white/10 rounded-2xl",
        "overflow-hidden",
        className
      )}
    >
      {/* Gradient glow on hover */}
      <div className={cn(
        "absolute -inset-1 bg-gradient-to-r rounded-2xl",
        "opacity-0 group-hover:opacity-100 blur-lg",
        "transition-opacity duration-500",
        glowColor
      )} />
      
      {/* Diagonal line animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%', skewX: -12 }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Border animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
          backgroundSize: '200% 100%',
        }}
      />
    </motion.div>
  )
}

export default HoverCard
