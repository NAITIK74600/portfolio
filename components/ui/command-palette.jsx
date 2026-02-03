'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiHome, HiCode, HiMail, HiUser, HiLightningBolt } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const commands = [
  { id: 1, name: 'Home', icon: HiHome, path: '/', shortcut: 'H' },
  { id: 2, name: 'Projects', icon: HiCode, path: '/projects', shortcut: 'P' },
  { id: 3, name: 'Contact', icon: HiMail, path: '/contact', shortcut: 'C' },
  { id: 4, name: 'GitHub Profile', icon: HiUser, action: () => window.open('https://github.com/NAITIK74600', '_blank'), shortcut: 'G' },
  { id: 5, name: 'Toggle Theme', icon: HiLightningBolt, action: () => console.log('Theme toggled'), shortcut: 'T' },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);
  const router = useRouter();

  const filteredCommands = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Open with Ctrl/Cmd + K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      
      // Close with Escape
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearch('');
      }

      if (isOpen) {
        // Navigate with arrows
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelected((prev) => (prev + 1) % filteredCommands.length);
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelected((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        }

        // Execute with Enter
        if (e.key === 'Enter' && filteredCommands[selected]) {
          e.preventDefault();
          executeCommand(filteredCommands[selected]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selected, filteredCommands]);

  const executeCommand = (command) => {
    if (command.path) {
      router.push(command.path);
    } else if (command.action) {
      command.action();
    }
    setIsOpen(false);
    setSearch('');
  };

  return (
    <>
      {/* Trigger Hint */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden md:block"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full text-white/60 hover:text-white hover:border-white/30 transition-all"
        >
          <HiSearch className="w-4 h-4" />
          <span className="text-sm">Quick Command</span>
          <kbd className="px-2 py-0.5 bg-white/10 rounded text-xs">⌘K</kbd>
        </button>
      </motion.div>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[91] px-4"
            >
              <div className="bg-black/90 backdrop-blur-2xl border-2 border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
                  <HiSearch className="w-5 h-5 text-purple-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type a command or search..."
                    className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-lg"
                    autoFocus
                  />
                  <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-white/60">ESC</kbd>
                </div>

                {/* Commands List */}
                <div className="max-h-96 overflow-y-auto">
                  {filteredCommands.length > 0 ? (
                    filteredCommands.map((command, index) => (
                      <motion.button
                        key={command.id}
                        onClick={() => executeCommand(command)}
                        onMouseEnter={() => setSelected(index)}
                        className={`w-full flex items-center gap-4 px-6 py-4 transition-all ${
                          selected === index
                            ? 'bg-purple-500/20 border-l-4 border-purple-500'
                            : 'border-l-4 border-transparent hover:bg-white/5'
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        <div className={`p-2 rounded-lg ${
                          selected === index ? 'bg-purple-500/30' : 'bg-white/5'
                        }`}>
                          <command.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-white font-medium">{command.name}</div>
                        </div>
                        <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-white/60">
                          {command.shortcut}
                        </kbd>
                      </motion.button>
                    ))
                  ) : (
                    <div className="px-6 py-12 text-center text-white/40">
                      No commands found
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↑↓</kbd> Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↵</kbd> Select
                    </span>
                  </div>
                  <span>Command Palette</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
