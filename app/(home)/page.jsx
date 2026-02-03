"use client"
import React from 'react'
import HeroSection from './components/HeroSection'
import GithubProjects from './components/GithubProjects'
import SkillsSection from './components/Skills'
import ExperienceSection from './components/Experience'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background'
import ScrollProgress from '@/components/ui/scroll-progress'
import BackToTop from '@/components/ui/back-to-top'
import CustomCursor from '@/components/ui/custom-cursor'
import SpiderManBackground from '@/components/ui/spiderman-background'
import SpiderCursor from '@/components/ui/spider-cursor'
import Highlights from '@/components/ui/highlights'
import ProfessionalSkills from '@/components/ui/professional-skills'
import Timeline from '@/components/ui/timeline'
import Services from '@/components/ui/services'
import LoadingScreen from '@/components/ui/loading-screen'
import SmoothScroll from '@/components/ui/smooth-scroll'

const Home = () => {
  return (
    <>
      <LoadingScreen />
      <SmoothScroll />
      <ScrollProgress />
      <SpiderCursor />
      <SpiderManBackground />
      <BackToTop />
      <main className="relative pointer-events-auto" style={{ zIndex: 10 }}>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center py-20">
          <HeroSection />
        </section>

        {/* Highlights */}
        <Highlights />

        {/* Services */}
        <Services />

        {/* Professional Skills */}
        <ProfessionalSkills />

        {/* Timeline */}
        <Timeline />

        {/* GitHub Projects Section */}
        <section className="py-20">
          <GithubProjects />
        </section>
      
        {/* Contact Button Section */}
        <section className="py-20 pb-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-base font-medium transition-all duration-300 backdrop-blur-sm shadow-2xl"
                >
                  <span>Get In Touch</span>
                  <HiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home