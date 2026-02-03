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
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Proficient in AI/ML, Full-Stack Development, and modern DevOps practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-white/60" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
