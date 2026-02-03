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
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I Offer
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Professional services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/60 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
