"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient = "from-blue-500 to-purple-500",
  className 
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative group cursor-pointer",
        "bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm",
        "border border-white/10 rounded-2xl p-6",
        "hover:border-white/20 transition-all duration-300",
        "overflow-hidden",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0",
        "group-hover:opacity-10 transition-opacity duration-300",
        gradient
      )} />
      
      {/* Glow effect */}
      <div className={cn(
        "absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0",
        "group-hover:opacity-20 blur-xl transition-opacity duration-300",
        gradient
      )} />

      <div className="relative z-10">
        {/* Icon container with gradient */}
        <div className={cn(
          "w-14 h-14 rounded-xl mb-4 flex items-center justify-center",
          "bg-gradient-to-br",
          gradient,
          "shadow-lg shadow-blue-500/20"
        )}>
          {Icon && <Icon className="w-7 h-7 text-white" />}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/60 leading-relaxed">
          {description}
        </p>

        {/* Decorative corner */}
        <div className="absolute top-4 right-4 w-16 h-16">
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br rounded-full",
            "opacity-20 blur-2xl group-hover:opacity-30 transition-opacity",
            gradient
          )} />
        </div>
      </div>
    </motion.div>
  )
}

export default FeatureCard
