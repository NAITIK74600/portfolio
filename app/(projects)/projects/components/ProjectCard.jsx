"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { itemAnimation } from './Animations';
import Tilt from 'react-parallax-tilt';
import GlassCard from '@/components/ui/glass-card';
import { cn } from '@/lib/utils';

export const ProjectCard = ({ project, index }) => {
    const ref = React.useRef(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
    <motion.div
        ref={ref}
        variants={itemAnimation}
        style={{ y, opacity }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
    >
        <GlassCard 
            className="group flex flex-col sm:flex-row items-stretch gap-6 overflow-hidden"
            glow={true}
            glowColor="blue"
        >
            <Tilt
                className="sm:w-1/3"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.05}
                transitionSpeed={2000}
                gyroscope={true}
            >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />
                    
                    {/* Animated overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </Tilt>

            <div className="sm:w-2/3 flex flex-col justify-between py-2">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {project.title}
                        </h3>
                        <span className={cn(
                            "text-xs font-mono px-3 py-1 rounded-full",
                            "bg-gradient-to-r from-blue-500/20 to-purple-500/20",
                            "border border-white/20 text-white/60"
                        )}>
                            #{String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    <p className="text-sm text-white/70 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                            <motion.span
                                key={idx}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className={cn(
                                    "text-xs px-3 py-1 rounded-full",
                                    "bg-gradient-to-r from-blue-500/10 to-purple-500/10",
                                    "border border-blue-500/30 text-blue-300",
                                    "hover:border-blue-400/50 transition-all duration-200",
                                    "backdrop-blur-sm"
                                )}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            size="sm"
                            className={cn(
                                "rounded-full h-9 px-5 text-xs font-semibold",
                                "bg-gradient-to-r from-blue-600 to-purple-600",
                                "hover:from-blue-500 hover:to-purple-500",
                                "shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40",
                                "transition-all duration-300"
                            )}
                            asChild
                        >
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                Live Demo
                                <FaExternalLinkAlt className="w-3 h-3" />
                            </a>
                        </Button>
                    </motion.div>
                    
                    {project.github && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                size="sm"
                                variant="outline"
                                className={cn(
                                    "rounded-full h-9 px-5 text-xs font-semibold",
                                    "border-white/20 hover:border-white/40",
                                    "bg-white/5 hover:bg-white/10",
                                    "transition-all duration-300"
                                )}
                                asChild
                            >
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    Code
                                </a>
                            </Button>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </GlassCard>
    </motion.div>
);
};