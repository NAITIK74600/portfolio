"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const PulseEffect = ({ children, className, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    green: "bg-green-500",
    orange: "bg-orange-500"
  }

  return (
    <div className={cn("relative inline-block", className)}>
      {children}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-full",
          colors[color],
          "opacity-75"
        )}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default PulseEffect
