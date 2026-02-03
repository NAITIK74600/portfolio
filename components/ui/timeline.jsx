'use client';

import { motion } from 'framer-motion';
import { HiAcademicCap, HiBriefcase, HiLightningBolt } from 'react-icons/hi';

const timeline = [
  {
    type: 'education',
    icon: HiAcademicCap,
    title: 'MCA (AI & ML)',
    organization: 'Chandigarh University',
    period: '2023 - 2025',
    description: 'Specializing in Artificial Intelligence and Machine Learning with focus on Deep Learning, NLP, and Computer Vision',
    color: 'from-red-600 to-red-800'
  },
  {
    type: 'experience',
    icon: HiBriefcase,
    title: 'AI/ML Developer',
    organization: 'Personal Projects',
    period: '2022 - Present',
    description: 'Built 10+ AI/ML projects including chatbots, image recognition systems, and predictive models',
    color: 'from-red-500 to-red-700'
  },
  {
    type: 'experience',
    icon: HiLightningBolt,
    title: 'Full Stack Developer',
    organization: 'Freelance',
    period: '2021 - Present',
    description: 'Developed modern web applications using React, Next.js, Node.js, and integrated AI models via REST APIs',
    color: 'from-red-700 to-red-900'
  }
];

export default function Timeline() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Journey & Experience
          </h2>
          <p className="text-xl text-white/60">
            My path in AI/ML and Software Development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-700 to-red-900 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`hidden md:flex w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} items-center justify-center flex-shrink-0 relative z-10`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                        <div className="text-lg text-white/80">{item.organization}</div>
                      </div>
                      <div className="text-white/60 text-sm whitespace-nowrap">{item.period}</div>
                    </div>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
