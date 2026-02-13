"use client"

import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const MouseFollower = ({ children, className, strength = 0.2 }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), springConfig)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5
    
    x.set(mouseX * strength)
    y.set(mouseY * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default MouseFollower
