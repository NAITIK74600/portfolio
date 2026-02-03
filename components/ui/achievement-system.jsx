'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar, HiEye, HiCode, HiMail, HiClock } from 'react-icons/hi';

const achievements = [
  { id: 'visited', name: 'First Visit', description: 'Discovered the portfolio', icon: HiEye, condition: () => true },
  { id: 'scrolled', name: 'Explorer', description: 'Scrolled through the entire page', icon: HiStar, condition: () => window.scrollY > 2000 },
  { id: 'projects', name: 'Project Hunter', description: 'Viewed projects section', icon: HiCode, condition: () => window.location.pathname === '/projects' },
  { id: 'contact', name: 'Connector', description: 'Reached out via contact', icon: HiMail, condition: () => window.location.pathname === '/contact' },
  { id: 'time', name: 'Time Traveler', description: 'Spent 2+ minutes exploring', icon: HiClock, condition: () => false }, // Will be checked via timer
];

export default function AchievementSystem() {
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [showNotification, setShowNotification] = useState(null);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    // Load unlocked achievements from localStorage
    const saved = localStorage.getItem('achievements');
    if (saved) {
      setUnlockedAchievements(JSON.parse(saved));
    }

    // Check for first visit
    checkAchievement('visited');

    // Check scroll achievement
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        checkAchievement('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Check time spent achievement
    const timeTimer = setTimeout(() => {
      checkAchievement('time');
    }, 120000); // 2 minutes

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeTimer);
    };
  }, []);

  // Check route changes
  useEffect(() => {
    if (window.location.pathname === '/projects') {
      checkAchievement('projects');
    }
    if (window.location.pathname === '/contact') {
      checkAchievement('contact');
    }
  }, []);

  const checkAchievement = (id) => {
    if (!unlockedAchievements.includes(id)) {
      const newAchievements = [...unlockedAchievements, id];
      setUnlockedAchievements(newAchievements);
      localStorage.setItem('achievements', JSON.stringify(newAchievements));
      
      const achievement = achievements.find(a => a.id === id);
      setShowNotification(achievement);
      setTimeout(() => setShowNotification(null), 4000);
    }
  };

  return (
    <>
      {/* Achievement Counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed top-20 right-8 z-40 bg-black/50 backdrop-blur-xl border border-yellow-500/30 rounded-full px-4 py-2 flex items-center gap-2"
      >
        <HiStar className="w-5 h-5 text-yellow-400" />
        <span className="text-white font-bold text-sm">
          {unlockedAchievements.length}/{achievements.length}
        </span>
      </motion.div>

      {/* Achievement Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="fixed top-32 right-8 z-50 w-80"
          >
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border-2 border-yellow-500/50 rounded-2xl p-6 shadow-2xl">
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                className="flex items-start gap-4"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: [1, 1.2, 1.2, 1.2, 1.2, 1]
                  }}
                  transition={{ duration: 0.6 }}
                  className="bg-yellow-500/30 p-3 rounded-xl"
                >
                  <showNotification.icon className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <div className="flex-1">
                  <div className="text-yellow-400 font-bold text-xs mb-1">ACHIEVEMENT UNLOCKED!</div>
                  <h3 className="text-white font-bold text-lg mb-1">{showNotification.name}</h3>
                  <p className="text-white/60 text-sm">{showNotification.description}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
