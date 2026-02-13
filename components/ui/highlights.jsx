'use client';

import { motion } from 'framer-motion';
import { HiCode, HiChartBar, HiTrendingUp, HiStar } from 'react-icons/hi';

const highlights = [
  {
    icon: HiCode,
    number: '10+',
    label: 'Projects Completed',
    color: 'from-red-600 to-red-800'
  },
  {
    icon: HiChartBar,
    number: '15+',
    label: 'Technologies',
    color: 'from-red-500 to-red-700'
  },
  {
    icon: HiTrendingUp,
    number: '2+',
    label: 'Years Experience',
    color: 'from-red-700 to-red-900'
  },
  {
    icon: HiStar,
    number: '95%',
    label: 'Client Satisfaction',
    color: 'from-red-800 to-black'
  }
];

export default function Highlights() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl">
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: idx * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-2"
                >
                  {item.number}
                </motion.div>

                {/* Label */}
                <div className="text-white/70 text-sm font-medium">
                  {item.label}
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 -z-10`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
