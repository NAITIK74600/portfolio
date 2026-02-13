"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
import { cn } from '@/lib/utils'

const RevealOnScroll = ({ 
  children, 
  direction = 'up',
  delay = 0,
  cascade = false,
  className 
}) => {
  return (
    <Fade 
      direction={direction} 
      delay={delay}
      cascade={cascade}
      triggerOnce
      className={className}
    >
      {children}
    </Fade>
  )
}

export const ScaleReveal = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const SlideReveal = ({ 
  children, 
  direction = 'left',
  className, 
  delay = 0 
}) => {
  const directions = {
    left: { x: -100 },
    right: { x: 100 },
    up: { y: 100 },
    down: { y: -100 }
  }

  return (
    <motion.div
      initial={{ ...directions[direction], opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll
