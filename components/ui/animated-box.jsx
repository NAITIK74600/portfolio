"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'

const AnimatedBox = ({ 
  children, 
  className, 
  delay = 0, 
  direction = 'up',
  duration = 0.5,
  once = true 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })
  const controls = useAnimation()

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          ...directions[direction]
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.4, 0.25, 1]
          }
        }
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedBox
