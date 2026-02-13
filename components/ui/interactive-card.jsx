"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const InteractiveCard = ({ 
  children, 
  className,
  glowColor = "#3b82f6"
}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-white/10 to-white/5",
        "backdrop-blur-sm border border-white/20",
        "p-6 transition-all duration-300",
        className
      )}
      style={{
        boxShadow: isHovered 
          ? `0 0 40px ${glowColor}30`
          : 'none'
      }}
    >
      {/* Spotlight effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}20, transparent 80%)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(${glowColor} 1px, transparent 1px), linear-gradient(90deg, ${glowColor} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl">
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${glowColor}80, transparent)`,
            opacity: isHovered ? 0.5 : 0
          }}
          animate={{
            backgroundPosition: isHovered ? ['0% 0%', '200% 0%'] : '0% 0%'
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>
    </motion.div>
  )
}

export default InteractiveCard
