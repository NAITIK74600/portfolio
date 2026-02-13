"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import GlassCard from '../glass-card'
import { HiExternalLink, HiEye, HiX, HiBadgeCheck, HiDocumentText, HiDownload } from 'react-icons/hi'

const CertificateCard = ({ certificate, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isPdf = certificate.image?.toLowerCase().endsWith('.pdf')

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <GlassCard 
          hover={true} 
          glow={true} 
          glowColor="blue"
          className="group cursor-pointer h-full"
          onClick={() => setIsModalOpen(true)}
        >
          {/* Certificate Image/Preview */}
          <div className="relative aspect-[16/11] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            {certificate.image ? (
              <>
                {isPdf ? (
                  // PDF Preview
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <HiDocumentText className="w-24 h-24 text-blue-400 mb-4" />
                    <p className="text-white/80 font-semibold text-sm">PDF Certificate</p>
                    <p className="text-white/50 text-xs">Click to view</p>
                  </div>
                ) : (
                  // Image Preview
                  <>
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </>
                )}
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-blue-600/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="flex gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
                    >
                      <HiEye className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <HiBadgeCheck className="w-20 h-20 text-blue-400/30" />
              </div>
            )}
          </div>

          {/* Certificate Info */}
          <div className="space-y-3">
            {/* Badge/Issuer */}
            <div className="flex items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300">
                {certificate.issuer}
              </span>
              {certificate.verified && (
                <HiBadgeCheck className="w-5 h-5 text-green-400" title="Verified Certificate" />
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all line-clamp-2">
              {certificate.title}
            </h3>

            {/* Description */}
            {certificate.description && (
              <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                {certificate.description}
              </p>
            )}

            {/* Date & Credential ID */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-xs text-white/50">
                {certificate.date}
              </span>
              {certificate.credentialId && (
                <span className="text-xs text-white/40 font-mono">
                  ID: {certificate.credentialId}
                </span>
              )}
            </div>

            {/* Skills/Tags */}
            {certificate.skills && certificate.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {certificate.skills.slice(0, 3).map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/60 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
                {certificate.skills.length > 3 && (
                  <span className="text-xs px-2 py-1 text-white/40">
                    +{certificate.skills.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* View Certificate Link */}
            {certificate.link && (
              <motion.a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors pt-2"
              >
                <span>View Credential</span>
                <HiExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </GlassCard>
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <GlassCard className="p-6">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <HiX className="w-6 h-6 text-white" />
                </button>

                {/* Certificate Image/PDF */}
                {certificate.image && (
                  <div className="rounded-xl overflow-hidden mb-6">
                    {isPdf ? (
                      <iframe
                        src={certificate.image}
                        className="w-full h-[600px] bg-white rounded-xl"
                        title={certificate.title}
                      />
                    ) : (
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-auto"
                      />
                    )}
                  </div>
                )}

                {/* Certificate Details */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {certificate.title}
                      </h2>
                      <p className="text-lg text-blue-400 mb-2">
                        {certificate.issuer}
                      </p>
                      {certificate.description && (
                        <p className="text-white/70 leading-relaxed">
                          {certificate.description}
                        </p>
                      )}
                    </div>
                    {certificate.verified && (
                      <div className="flex items-center gap-2 text-green-400">
                        <HiBadgeCheck className="w-6 h-6" />
                        <span className="text-sm">Verified</span>
                      </div>
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-sm text-white/50 mb-1">Issue Date</p>
                      <p className="text-white">{certificate.date}</p>
                    </div>
                    {certificate.credentialId && (
                      <div>
                        <p className="text-sm text-white/50 mb-1">Credential ID</p>
                        <p className="text-white font-mono text-sm">{certificate.credentialId}</p>
                      </div>
                    )}
                  </div>

                  {/* Skills */}
                  {certificate.skills && certificate.skills.length > 0 && (
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-white/50 mb-3">Skills Covered</p>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {isPdf && certificate.image && (
                      <motion.a
                        href={certificate.image}
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold flex items-center gap-2 transition-all"
                      >
                        <HiDownload className="w-5 h-5" />
                        <span>Download PDF</span>
                      </motion.a>
                    )}
                    {certificate.link && (
                      <motion.a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold flex items-center gap-2 transition-all"
                      >
                        <span>View Credential</span>
                        <HiExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CertificateCard
