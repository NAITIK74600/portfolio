'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiOpencv, SiJupyter, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';

const skills = [
    { name: "Python", icon: <FaPython className="w-6 h-6" />, color: "#3776AB" },
    { name: "TensorFlow", icon: <SiTensorflow className="w-6 h-6" />, color: "#FF6F00" },
    { name: "Scikit-learn", icon: <SiScikitlearn className="w-6 h-6" />, color: "#F7931E" },
    { name: "Pandas", icon: <SiPandas className="w-6 h-6" />, color: "#150458" },
    { name: "NumPy", icon: <SiNumpy className="w-6 h-6" />, color: "#013243" },
    { name: "OpenCV", icon: <SiOpencv className="w-6 h-6" />, color: "#5C3EE8" },
    { name: "Jupyter", icon: <SiJupyter className="w-5 h-5" />, color: "#F37626" },
    { name: "Langchain", icon: <TbBrain className="w-6 h-6" />, color: "#4A90E2" },
    { name: "React", icon: <FaReact className="w-6 h-6" />, color: "#61DAFB" },
    { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" />, color: "#3178C6" },
    { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6" />, color: "#06B6D4" },
    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" />, color: "#339933" },
];

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.15
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const SkillsShowcase = () => {
    return (
        <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full relative py-12"
            style={{ zIndex: 15 }}
        >
            <div className="container mx-auto px-4 max-w-5xl relative" style={{ zIndex: 15 }}>
                {/* Compact Badge */}
                <motion.div 
                    variants={itemAnimation} 
                    className="flex items-center justify-center mb-10"
                >
                    <motion.div 
                        className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-5 py-2.5 rounded-full text-white backdrop-blur-xl shadow-xl"
                        whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <HiCode className="w-5 h-5 text-white" />
                        <span className="text-sm font-semibold">Tech Stack</span>
                    </motion.div>
                </motion.div>

                {/* Compact Grid */}
                <motion.div
                    variants={containerAnimation}
                    className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        variants={itemAnimation}
                        whileHover={{ 
                            scale: 1.1, 
                            y: -8,
                            rotateZ: [0, -5, 5, 0],
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                        className="relative group cursor-pointer"
                    >
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 aspect-square flex flex-col items-center justify-center gap-2 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                            {/* Glow effect */}
                            <motion.div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
                                style={{ backgroundColor: skill.color }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            
                            {/* Icon */}
                            <motion.div 
                                className="relative z-10 flex items-center justify-center"
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                                style={{ color: skill.color }}
                            >
                                {skill.icon}
                            </motion.div>
                            
                            {/* Name */}
                            <span className="relative z-10 text-[10px] font-semibold text-white/90 text-center leading-tight">
                                {skill.name}
                            </span>

                            {/* Hover line */}
                            <motion.div 
                                className="absolute bottom-2 w-8 h-0.5 rounded-full"
                                style={{ backgroundColor: skill.color }}
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SkillsShowcase;
