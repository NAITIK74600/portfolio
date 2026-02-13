'use client';

import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const services = [
  {
    title: 'AI/ML Solutions',
    description: 'Custom machine learning models, NLP systems, computer vision applications',
    features: ['Predictive Models', 'Chatbots', 'Image Recognition', 'Data Analysis']
  },
  {
    title: 'Full Stack Development',
    description: 'Modern web applications with React, Next.js, Node.js, and databases',
    features: ['Responsive Design', 'REST APIs', 'Database Design', 'Cloud Deployment']
  },
  {
    title: 'API Integration',
    description: 'Seamless integration of AI models and third-party services',
    features: ['Model Deployment', 'API Development', 'Microservices', 'Documentation']
  }
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            What I Offer
          </motion.h2>
          <motion.p 
            className="text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Professional services to bring your ideas to life
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: idx * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10" />
              
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 h-full shadow-lg hover:shadow-2xl">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIdx) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center gap-3 text-white/80"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + featureIdx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      </motion.div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
