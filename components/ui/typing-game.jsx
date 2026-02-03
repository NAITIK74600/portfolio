'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiLightningBolt } from 'react-icons/hi';

const codeSnippets = [
  "import tensorflow as tf",
  "model = Sequential()",
  "df = pd.read_csv('data.csv')",
  "numpy.array([1, 2, 3])",
  "const portfolio = awesome()",
];

export default function TypingGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSnippet, setCurrentSnippet] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    if (isPlaying && !currentSnippet) {
      nextSnippet();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (userInput === currentSnippet && userInput.length > 0) {
      setScore(score + 1);
      nextSnippet();
    }
  }, [userInput]);

  const nextSnippet = () => {
    setCurrentSnippet(codeSnippets[Math.floor(Math.random() * codeSnippets.length)]);
    setUserInput('');
  };

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
    setUserInput('');
    nextSnippet();
  };

  // Open game with Ctrl+T
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-40 left-8 z-50 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all"
      >
        <HiLightningBolt className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black/80 backdrop-blur-xl border-2 border-green-500/30 rounded-3xl p-8 max-w-2xl w-full"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white"
              >
                <HiX className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-bold text-white mb-2">Code Typing Challenge</h2>
              <p className="text-white/60 mb-6">Type the code as fast as you can!</p>

              {!isPlaying && timeLeft === 30 ? (
                <button
                  onClick={startGame}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-bold text-xl hover:shadow-2xl transition-all"
                >
                  Start Game
                </button>
              ) : (
                <>
                  <div className="flex justify-between mb-6">
                    <div className="text-white">
                      Score: <span className="text-green-400 font-bold text-2xl">{score}</span>
                    </div>
                    <div className="text-white">
                      Time: <span className="text-red-400 font-bold text-2xl">{timeLeft}s</span>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-xl p-6 mb-4 font-mono">
                    <div className="text-white/40 text-sm mb-2">Type this:</div>
                    <div className="text-2xl text-white">
                      {currentSnippet.split('').map((char, i) => (
                        <span
                          key={i}
                          className={
                            i < userInput.length
                              ? userInput[i] === char
                                ? 'text-green-400'
                                : 'text-red-400'
                              : 'text-white'
                          }
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>

                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="w-full bg-black/50 border-2 border-white/10 rounded-xl px-6 py-4 text-white text-xl font-mono outline-none focus:border-green-500/50"
                    placeholder="Start typing..."
                    autoFocus
                    disabled={!isPlaying || timeLeft === 0}
                  />

                  {timeLeft === 0 && (
                    <div className="mt-6 text-center">
                      <div className="text-3xl font-bold text-white mb-4">
                        Game Over! Score: {score}
                      </div>
                      <button
                        onClick={startGame}
                        className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-bold hover:shadow-2xl transition-all"
                      >
                        Play Again
                      </button>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
