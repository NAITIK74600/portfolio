"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CertificateCard from './certificate-card'
import AnimatedBox from '../animated-box'
import { HiAcademicCap } from 'react-icons/hi'
import { HiSparkles } from 'react-icons/hi2'

const CertificatesSection = ({ certificates = [] }) => {
  const [filter, setFilter] = useState('all')

  // Extract unique issuers for filtering
  const issuers = ['all', ...new Set(certificates.map(cert => cert.issuer))]

  const filteredCertificates = filter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.issuer === filter)

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedBox className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center backdrop-blur-sm">
                  <HiAcademicCap className="w-8 h-8 text-blue-400" />
                </div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-1 -right-1"
                >
                  <HiSparkles className="w-5 h-5 text-yellow-400" />
                </motion.div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Certifications & Achievements
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Professional certifications and courses that showcase my continuous learning journey
            </p>
          </motion.div>
        </AnimatedBox>

        {/* Filter Buttons */}
        {issuers.length > 1 && (
          <AnimatedBox delay={0.2} className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {issuers.map((issuer, index) => (
                <motion.button
                  key={issuer}
                  onClick={() => setFilter(issuer)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
                    ${filter === issuer 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30' 
                      : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                    }
                  `}
                >
                  {issuer === 'all' ? 'All Certificates' : issuer}
                </motion.button>
              ))}
            </div>
          </AnimatedBox>
        )}

        {/* Certificates Grid */}
        {filteredCertificates.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id || index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CertificateCard certificate={certificate} index={index} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <AnimatedBox delay={0.3} className="text-center py-12">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
              <HiAcademicCap className="w-6 h-6 text-blue-400" />
              <p className="text-white/60">No certificates found for this filter</p>
            </div>
          </AnimatedBox>
        )}

        {/* Stats Section */}
        {certificates.length > 0 && (
          <AnimatedBox delay={0.4} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Certificates", value: certificates.length },
                { label: "Verified", value: certificates.filter(c => c.verified).length },
                { label: "Platforms", value: new Set(certificates.map(c => c.issuer)).size },
                { label: "Skills Mastered", value: new Set(certificates.flatMap(c => c.skills || [])).size },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:border-white/40 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedBox>
        )}
      </div>
    </section>
  )
}

export default CertificatesSection
