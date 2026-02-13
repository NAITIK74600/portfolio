"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { cn } from '@/lib/utils'

const SkillsMarquee = ({ skills, direction = "left", gradient = true }) => {
  return (
    <div className="py-8 relative">
      <Marquee 
        gradient={gradient}
        gradientColor="#000000"
        gradientWidth={100}
        speed={40}
        direction={direction}
        pauseOnHover
      >
        {skills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            whileHover={{ scale: 1.1, y: -5 }}
            className={cn(
              "mx-4 px-6 py-4 rounded-xl",
              "bg-gradient-to-br from-white/10 to-white/5",
              "backdrop-blur-sm border border-white/20",
              "hover:border-white/40 transition-all duration-300",
              "flex items-center gap-3 min-w-[180px]"
            )}
          >
            {skill.icon && (
              <div className="text-3xl">
                {typeof skill.icon === 'string' ? skill.icon : <skill.icon />}
              </div>
            )}
            <div>
              <div className="font-semibold text-white">{skill.name}</div>
              {skill.level && (
                <div className="text-xs text-white/60">{skill.level}</div>
              )}
            </div>
          </motion.div>
        ))}
      </Marquee>
    </div>
  )
}

export default SkillsMarquee
