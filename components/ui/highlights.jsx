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
    <section className="py-16 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {item.number}
                </motion.div>

                {/* Label */}
                <div className="text-white/60 text-sm font-medium">
                  {item.label}
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
