"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
import GlassCard from './glass-card'
import AnimatedBox from './animated-box'
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, 
  SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, SiDocker,
  SiGit, SiNodedotjs, SiExpress, SiFastapi, SiJavascript,
  SiHtml5, SiCss3, SiFramer, SiVercel, SiGithub
} from 'react-icons/si'
import { cn } from '@/lib/utils'

const TechStackShowcase = () => {
  const techCategories = [
    {
      title: "Frontend Development",
      gradient: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      ]
    },
    {
      title: "Backend & APIs",
      gradient: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
      ]
    },
    {
      title: "AI & Machine Learning",
      gradient: "from-purple-500 to-pink-500",
      technologies: [
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
      ]
    },
    {
      title: "Database & DevOps",
      gradient: "from-orange-500 to-red-500",
      technologies: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      
      {/* Animated background shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedBox className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Tech Stack & Tools
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </motion.div>
        </AnimatedBox>

        {/* Tech Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <Fade key={category.title} direction="up" triggerOnce delay={categoryIndex * 100}>
              <GlassCard className="overflow-hidden">
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className={cn(
                    "text-2xl font-bold bg-clip-text text-transparent",
                    `bg-gradient-to-r ${category.gradient}`
                  )}>
                    {category.title}
                  </h3>
                </div>

                {/* Technologies Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
                >
                  {category.technologies.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.15, y: -8, rotateZ: 5 }}
                        className="relative group cursor-pointer"
                      >
                        <div className={cn(
                          "relative flex flex-col items-center justify-center p-6",
                          "bg-gradient-to-br from-white/10 to-white/[0.02]",
                          "backdrop-blur-md border border-white/10",
                          "rounded-xl hover:border-white/40 hover:from-white/15",
                          "transition-all duration-300 shadow-lg hover:shadow-2xl"
                        )}>
                          {/* Glow effect */}
                          <div 
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"
                            style={{ backgroundColor: tech.color }}
                          />
                          
                          {/* Icon */}
                          <motion.div 
                            className="relative z-10 mb-3"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon 
                              className="w-12 h-12 transition-all duration-300 group-hover:scale-125 drop-shadow-lg" 
                              style={{ color: tech.color }}
                            />
                          </motion.div>
                          
                          {/* Name */}
                          <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                            {tech.name}
                          </span>

                          {/* Animated border */}
                          <motion.div 
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                            animate={{
                              backgroundPosition: ['0% 0%', '100% 100%'],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: 'reverse',
                            }}
                            style={{
                              background: `linear-gradient(45deg, transparent, ${tech.color}40, transparent)`,
                              backgroundSize: '200% 200%',
                            }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </GlassCard>
            </Fade>
          ))}
        </div>

        {/* Stats Section */}
        <AnimatedBox delay={0.4} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Technologies", value: "20+" },
              { label: "Projects Built", value: "50+" },
              { label: "Years Learning", value: "3+" },
              { label: "Coffee Consumed", value: "∞" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "relative overflow-hidden",
                  "bg-gradient-to-br from-white/10 to-white/5",
                  "backdrop-blur-sm border border-white/20",
                  "rounded-xl p-6 text-center",
                  "hover:border-white/40 transition-all duration-300"
                )}
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedBox>
      </div>
    </section>
  )
}

export default TechStackShowcase
