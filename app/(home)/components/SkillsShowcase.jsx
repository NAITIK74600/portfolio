'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaGithub, FaPython } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiOpencv, SiJupyter, SiTailwindcss, SiJavascript, SiTypescript } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import Tilt from 'react-parallax-tilt';
import HolographicCard from '@/components/ui/holographic-card';

const skills = [
    { name: "Python", icon: <FaPython className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1" },
    { name: "TensorFlow", icon: <SiTensorflow className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1" },
    { name: "Scikit-learn", icon: <SiScikitlearn className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1" },
    { name: "Pandas", icon: <SiPandas className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-2 sm:col-span-1 sm:row-span-2 row-span-1" },
    { name: "NumPy", icon: <SiNumpy className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1" },
    { name: "OpenCV", icon: <SiOpencv className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1" },
    { name: "Jupyter", icon: <SiJupyter className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1" },
    { name: "Langchain", icon: <TbBrain className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1" },
    { name: "React", icon: <FaReact className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1" },
    { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1" },
    { name: "Tailwind", icon: <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1" },
    { name: "GitHub", icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1" },
];

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
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
            viewport={{ once: false, amount: 0.1 }}
            className="w-full relative py-8"
            style={{ zIndex: 15 }}
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl relative" style={{ zIndex: 15 }}>
                <motion.div 
                    variants={itemAnimation} 
                    className="flex items-center gap-2 mb-6 sm:mb-8 justify-center"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/10 border-[1.8px] border-white/30 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white backdrop-blur-xl shadow-2xl">
                        <HiCode className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        <span className="text-xs sm:text-sm font-semibold text-white">Tech Stack</span>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerAnimation}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl mx-auto"
                    style={{ 
                        gridAutoRows: 'minmax(100px, auto)',
                        gridAutoFlow: 'row dense'
                    }}
                >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        variants={itemAnimation}
                        className={`relative group ${skill.size}`}
                    >
                        <Tilt
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={2000}
                            gyroscope={true}
                        >
                        <HolographicCard className="h-full">
                        <div
                            className="
                                bg-gradient-to-br from-red-950/30 to-red-900/20
                                border-red-500/40
                                border-2
                                p-2.5 sm:p-4 md:p-6
                                rounded-lg sm:rounded-xl md:rounded-2xl
                                backdrop-blur-xl
                                cursor-default
                                relative overflow-hidden
                                h-full
                                w-full
                                min-h-[90px] sm:min-h-[120px]
                                flex flex-col items-center justify-center
                                box-border
                                shadow-[0_8px_16px_rgba(0,0,0,0.3),0_0_20px_rgba(220,20,60,0.2)]
                                transition-all duration-300
                                group-hover:border-red-500/70
                                group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.3),0_0_30px_rgba(220,20,60,0.4)]
                                group-hover:bg-gradient-to-br group-hover:from-red-900/40 group-hover:to-red-800/30
                            "
                            style={{ height: '100%' }}
                        >
                            {/* Shiny overlay effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent shiny-sweep" />
                            </div>
                            
                            {/* Glossy shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-red-500/40 to-transparent rounded-t-2xl" />
                            </div>
                            
                            <div className="relative flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 w-full z-10">
                                {/* Icon container */}
                                <div className="relative">
                                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md sm:rounded-lg md:rounded-xl bg-black border border-red-500/30 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-red-500/60 group-hover:shadow-red-500/20 group-hover:shadow-[0_0_15px_rgba(220,20,60,0.3)]">
                                        <div className="text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                                            {skill.icon}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Skill name */}
                                <div className="flex flex-col items-center gap-0.5 sm:gap-1 w-full px-0.5 sm:px-1">
                                    <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold text-white text-center tracking-tight transition-all duration-300 group-hover:text-white/90 break-words leading-tight">
                                        {skill.name}
                                    </span>
                                    <div className="w-5 sm:w-6 md:w-8 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent rounded-full transition-all duration-300 group-hover:via-red-500/80" />
                                </div>
                            </div>
                        </div>
                        </HolographicCard>
                        </Tilt>
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SkillsShowcase;

