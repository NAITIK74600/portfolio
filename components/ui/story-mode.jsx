'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlay, HiX, HiArrowRight, HiLightningBolt } from 'react-icons/hi';

const storyChapters = [
  {
    id: 1,
    title: "The Beginning",
    text: "In a world dominated by AI and Machine Learning...",
    subtitle: "A student's journey begins",
    effect: "fade",
  },
  {
    id: 2,
    title: "The Training",
    text: "Through countless lines of code and endless debugging sessions...",
    subtitle: "Skills were forged in the fires of determination",
    effect: "glitch",
  },
  {
    id: 3,
    title: "The Projects",
    text: "Each project a battle won, each algorithm a puzzle solved...",
    subtitle: "Creating solutions that matter",
    effect: "matrix",
  },
  {
    id: 4,
    title: "The Present",
    text: "Now, standing at the intersection of AI and innovation...",
    subtitle: "Ready to build the future",
    effect: "cyber",
  },
  {
    id: 5,
    title: "Your Chapter",
    text: "And this is where YOUR story intersects with mine...",
    subtitle: "Let's create something extraordinary together",
    effect: "portal",
  },
];

export default function StoryMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isOpen && currentChapter < storyChapters.length) {
      setShowText(false);
      const timer = setTimeout(() => setShowText(true), 500);
      return () => clearTimeout(timer);
    }
  }, [currentChapter, isOpen]);

  const nextChapter = () => {
    if (currentChapter < storyChapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    } else {
      setIsOpen(false);
      setCurrentChapter(0);
    }
  };

  const chapter = storyChapters[currentChapter];

  return (
    <>
      {/* Story Mode Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 z-50 group"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-75"
          />
          <div className="relative bg-black/90 backdrop-blur-xl border-2 border-purple-500/50 rounded-full p-4 hover:border-purple-400 transition-all">
            <HiPlay className="w-6 h-6 text-white" />
          </div>
        </div>
        <span className="absolute -top-12 right-0 bg-black/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Play Story Mode
        </span>
      </motion.button>

      {/* Story Mode Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
            >
              <HiX className="w-8 h-8" />
            </button>

            {/* Progress Bar */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentChapter + 1) / storyChapters.length) * 100}%` }}
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
              />
            </div>

            {/* Chapter Counter */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              Chapter {currentChapter + 1} of {storyChapters.length}
            </div>

            {/* Story Content */}
            <motion.div
              key={currentChapter}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-4xl w-full"
            >
              {/* Animated Background Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {chapter.effect === 'fade' && (
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"
                  />
                )}
                {chapter.effect === 'glitch' && (
                  <motion.div
                    animate={{ x: [-2, 2, -2], y: [2, -2, 2] }}
                    transition={{ duration: 0.3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-yellow-500/20"
                  />
                )}
                {chapter.effect === 'matrix' && (
                  <motion.div
                    animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20"
                    style={{ backgroundSize: '200% 200%' }}
                  />
                )}
                {chapter.effect === 'cyber' && (
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
                  />
                )}
                {chapter.effect === 'portal' && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20"
                  />
                )}
              </div>

              {/* Content Card */}
              <div className="relative bg-black/50 backdrop-blur-2xl border-2 border-white/10 rounded-3xl p-12 text-center">
                {/* Chapter Title */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold text-sm">
                      {chapter.title}
                    </span>
                  </div>
                </motion.div>

                {/* Main Text */}
                <AnimatePresence mode="wait">
                  {showText && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8 }}
                      className="space-y-6"
                    >
                      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        {chapter.text}
                      </h2>
                      <p className="text-xl md:text-2xl text-white/60">
                        {chapter.subtitle}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Next Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  onClick={nextChapter}
                  className="mt-12 group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                >
                  <span>{currentChapter === storyChapters.length - 1 ? 'Enter Portfolio' : 'Continue'}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <HiArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
