"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const NumberCounter = ({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '',
  className 
}) => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}

const StatsGrid = ({ stats, className }) => {
  return (
    <div className={cn(
      "grid grid-cols-2 md:grid-cols-4 gap-6",
      className
    )}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className={cn(
            "relative overflow-hidden",
            "bg-gradient-to-br from-white/10 to-white/5",
            "backdrop-blur-sm border border-white/20",
            "rounded-2xl p-6 text-center",
            "hover:border-white/40 hover:shadow-2xl",
            "transition-all duration-300"
          )}
        >
          {/* Gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            {/* Icon */}
            {stat.icon && (
              <div className="text-4xl mb-3">
                {typeof stat.icon === 'string' ? stat.icon : <stat.icon />}
              </div>
            )}
            
            {/* Number */}
            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
              {stat.useCounter ? (
                <NumberCounter 
                  end={stat.value} 
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              ) : (
                `${stat.prefix || ''}${stat.value}${stat.suffix || ''}`
              )}
            </div>
            
            {/* Label */}
            <div className="text-sm text-white/60 font-medium">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default StatsGrid
