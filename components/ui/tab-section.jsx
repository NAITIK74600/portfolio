"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const TabSection = ({ tabs, defaultTab = 0, className }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "relative px-6 py-3 rounded-lg font-medium transition-all duration-300",
              "hover:bg-white/5",
              activeTab === index
                ? "text-white"
                : "text-white/50 hover:text-white/70"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
            
            {activeTab === index && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/50"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {tabs[activeTab].content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TabSection
