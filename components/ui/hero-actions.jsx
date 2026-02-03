'use client';

import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiBriefcase } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      {/* Download Resume */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-xl text-white font-bold shadow-lg hover:shadow-red-500/50 transition-all overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity" />
        <HiDownload className="w-5 h-5" />
        <span>Download Resume</span>
      </motion.a>

      {/* Hire Me */}
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white font-bold hover:bg-white/20 hover:border-white/40 transition-all"
      >
        <HiBriefcase className="w-5 h-5" />
        <span>Hire Me</span>
      </motion.a>

      {/* GitHub */}
      <motion.a
        href="https://github.com/NAITIK74600"
        target="_blank"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 hover:border-white/40 transition-all"
      >
        <FaGithub className="w-6 h-6" />
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://linkedin.com"
        target="_blank"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 hover:border-white/40 transition-all"
      >
        <FaLinkedin className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
