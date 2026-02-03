'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChat } from 'react-icons/hi';

const responses = {
  'hello': 'Hey there! 👋 Welcome to Naitik\'s portfolio!',
  'hi': 'Hi! 🎉 I\'m the AI assistant. How can I help you explore?',
  'projects': 'Naitik has built amazing AI/ML projects! Check out the Projects section to see them all. 🚀',
  'skills': 'Naitik specializes in Python, TensorFlow, Machine Learning, and more! Scroll down to see the tech stack. 💻',
  'contact': 'Want to connect? Head over to the Contact page to reach out! 📧',
  'who': 'Naitik Raj is an MCA (AI & ML) student at Chandigarh University, passionate about building intelligent solutions! 🧠',
  'experience': 'Naitik has 2+ years of experience in AI/ML and has worked on 6+ projects! 📊',
  'help': 'I can help you navigate! Try asking about projects, skills, contact, or experience. 🤖',
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m your AI guide. Ask me anything about Naitik\'s portfolio! 🤖' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages([...messages, userMessage]);

    // Find response
    const lowerInput = input.toLowerCase();
    let botResponse = 'Hmm, I\'m not sure about that. Try asking about projects, skills, contact, or experience! 🤔';
    
    for (const [key, value] of Object.entries(responses)) {
      if (lowerInput.includes(key)) {
        botResponse = value;
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 500);

    setInput('');
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all"
      >
        <HiChat className="w-7 h-7" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 left-8 z-50 w-96 bg-black/90 backdrop-blur-2xl border-2 border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="w-3 h-3 bg-white rounded-full"
                />
                <span className="text-white font-bold">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-white/70">
                <HiX className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-white border border-white/20'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 outline-none focus:border-purple-500/50"
                />
                <button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
