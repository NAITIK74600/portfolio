"use client"

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const MagneticButton = ({ 
  children, 
  className,
  strength = 0.3,
  ...props 
}) => {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * strength
    const y = (clientY - (top + height / 2)) * strength
    setPosition({ x, y })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative overflow-hidden group",
        "bg-gradient-to-r from-blue-600 to-purple-600",
        "hover:from-blue-500 hover:to-purple-500",
        "text-white font-semibold",
        "px-8 py-3 rounded-xl",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Ripple effect */}
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Glow */}
      <div className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
    </motion.button>
  )
}

export default MagneticButton
