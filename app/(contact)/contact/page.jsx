/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundEffects from '@/components/ui/background-effects';
import ContactForm from './components/ContactForm';
import { toast } from 'sonner';
import { config } from '@/config';
import SpiderManBackground from '@/components/ui/spiderman-background';
import AnimatedBox from '@/components/ui/animated-box';
import GlassCard from '@/components/ui/glass-card';
import { ScaleReveal } from '@/components/ui/reveal-animations';

const ContactPage = () => {
    const handleSubmit = async (formData) => {
        try {
            console.log('Form submitted:', formData);

            toast.success("Thank you for your message. I'll get back to you soon.");
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    const contactInfo = config.contactInfo;

    return (
        <section className="relative min-h-screen flex items-center justify-center py-12" id="contact">
            <SpiderManBackground />
            <BackgroundEffects
                variant="corners"
                colors={{ first: "secondary", second: "secondary" }}
                intensity="10"
                blurAmount="3xl"
            />

            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                <AnimatedBox direction="down" duration={0.8} className="text-center space-y-5 mb-16">
                    <motion.h2 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg px-4 leading-relaxed"
                    >
                        Have a project in mind? Looking to collaborate? Drop me a message,
                        and let's create something amazing together.
                    </motion.p>
                </AnimatedBox>

                <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                    <ScaleReveal delay={0.4} duration={0.8} className="w-full lg:w-2/3">
                        <GlassCard glow={true} glowColor="purple">
                            <ContactForm onSubmit={handleSubmit} />
                        </GlassCard>
                    </ScaleReveal>

                    <ScaleReveal delay={0.6} duration={0.8} className="w-full lg:w-1/3">
                        <GlassCard glow={true} glowColor="blue">
                            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-white">Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs sm:text-sm text-white/60 mb-1">
                                                {info.label}
                                            </p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm sm:text-base text-white hover:text-blue-400 break-words transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-sm sm:text-base text-white break-words">
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </ScaleReveal>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;