'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TerminalText({ 
  lines = [], 
  typingSpeed = 50, 
  startDelay = 0,
  className = '' 
}) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const timer = setTimeout(() => {
      const fullLine = lines[currentLineIndex];
      
      if (currentText.length < fullLine.length) {
        setCurrentText(fullLine.substring(0, currentText.length + 1));
      } else {
        setDisplayedLines([...displayedLines, fullLine]);
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentText('');
      }
    }, startDelay || typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentLineIndex, lines, displayedLines, typingSpeed, startDelay]);

  return (
    <div className={`font-mono text-sm ${className}`}>
      <div className="bg-black/80 backdrop-blur-md border border-green-500/30 rounded-lg p-4 shadow-[0_0_15px_rgba(0,255,0,0.3)]">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-green-500/20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-green-400 text-xs">terminal@portfolio</span>
        </div>
        
        <div className="space-y-1">
          {displayedLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400"
            >
              <span className="text-green-500">$</span> {line}
            </motion.div>
          ))}
          
          {currentLineIndex < lines.length && (
            <div className="text-green-400 flex items-center">
              <span className="text-green-500">$</span> {currentText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-green-400 ml-1"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
