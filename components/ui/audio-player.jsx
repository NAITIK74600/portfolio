'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/projects/WhatsApp Audio 2026-02-03 at 3.39.52 PM.mpeg" preload="auto" />
      
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={togglePlay}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* 3D Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl transform group-hover:scale-125 transition-transform duration-300" />
          
          {/* Main Button */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/20 backdrop-blur-sm">
            {/* Animated Ring */}
            <AnimatePresence>
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/50"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  exit={{ scale: 1, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>

            {/* Icon */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
            >
              {isPlaying ? (
                <HiVolumeUp className="w-7 h-7 text-white" />
              ) : (
                <HiVolumeOff className="w-7 h-7 text-white" />
              )}
            </motion.div>
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-2 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg border border-white/10"
              >
                {isPlaying ? 'Pause Audio' : 'Play Audio'}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </>
  );
}
