'use client';

import { motion } from 'framer-motion';
import { HiCode, HiChip, HiServer, HiDatabase, HiCube, HiLightningBolt } from 'react-icons/hi';
import { SiPython, SiTensorflow, SiReact, SiNodedotjs, SiDocker, SiGit } from 'react-icons/si';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: HiChip,
    color: 'from-red-600 to-red-800',
    skills: [
      { name: 'Python', level: 90, icon: SiPython },
      { name: 'TensorFlow', level: 85, icon: SiTensorflow },
      { name: 'PyTorch', level: 80, icon: HiLightningBolt },
      { name: 'NLP', level: 75, icon: HiCode },
    ]
  },
  {
    title: 'Web Development',
    icon: HiCode,
    color: 'from-red-500 to-red-700',
    skills: [
      { name: 'React/Next.js', level: 90, icon: SiReact },
      { name: 'Node.js', level: 85, icon: SiNodedotjs },
      { name: 'REST APIs', level: 88, icon: HiServer },
      { name: 'MongoDB', level: 80, icon: HiDatabase },
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: HiServer,
    color: 'from-red-700 to-red-900',
    skills: [
      { name: 'Docker', level: 75, icon: SiDocker },
      { name: 'Git', level: 90, icon: SiGit },
      { name: 'AWS', level: 70, icon: HiCube },
      { name: 'CI/CD', level: 75, icon: HiLightningBolt },
    ]
  }
];

export default function ProfessionalSkills() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [180, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-white">
              Technical Expertise
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Proficient in AI/ML, Full-Stack Development, and modern DevOps practices
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: idx * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative group cursor-pointer"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 -z-10`} />
              
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 h-full shadow-lg hover:shadow-2xl">
                {/* Category Header */}
                <motion.div 
                  className="flex items-center gap-3 mb-8"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </motion.div>

                {/* Skills List */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + skillIdx * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <motion.div 
                          className="flex items-center gap-2"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <skill.icon className="w-4 h-4 text-white/70" />
                          <span className="text-white font-medium">{skill.name}</span>
                        </motion.div>
                        <span className="text-white/60 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-white/10 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.3,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          {/* Shine effect */}
                          <motion.div
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
