"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const GlassCard = ({ 
  children, 
  className,
  hover = true,
  glow = false,
  glowColor = "blue",
  onClick,
  ...props
}) => {
  const glowColors = {
    blue: "shadow-blue-500/20",
    purple: "shadow-purple-500/20",
    pink: "shadow-pink-500/20",
    green: "shadow-green-500/20",
    orange: "shadow-orange-500/20"
  }

  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative group",
        "bg-gradient-to-br from-white/10 via-white/5 to-transparent",
        "backdrop-blur-xl border border-white/20",
        "rounded-2xl p-6 shadow-2xl",
        hover && "hover:shadow-3xl hover:border-white/30",
        glow && `hover:${glowColors[glowColor]}`,
        "transition-all duration-300",
        className
      )}
    >
      {/* Animated border gradient */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default GlassCard
