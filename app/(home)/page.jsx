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
import AnimatedBox from '@/components/ui/animated-box'
import MagneticButton from '@/components/ui/magnetic-button'
import CertificatesSection from '@/components/ui/certificate/certificates-section'
import certificates from '@/data/certificates'

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

        {/* Highlights Section */}
        <AnimatedBox direction="up" delay={0.1}>
          <Highlights />
        </AnimatedBox>

        {/* Services Section */}
        <AnimatedBox direction="up" delay={0.2}>
          <Services />
        </AnimatedBox>

        {/* Professional Skills Section */}
        <AnimatedBox direction="up" delay={0.1}>
          <ProfessionalSkills />
        </AnimatedBox>

        {/* Timeline Section */}
        <AnimatedBox direction="up" delay={0.1}>
          <Timeline />
        </AnimatedBox>

        {/* GitHub Projects Section */}
        <AnimatedBox direction="up" delay={0.2}>
          <section className="py-20">
            <GithubProjects />
          </section>
        </AnimatedBox>

        {/* Certifications Section */}
        <AnimatedBox direction="up" delay={0.1}>
          <CertificatesSection certificates={certificates} />
        </AnimatedBox>
      
        {/* Contact Button Section */}
        <section className="py-20 pb-32">
          <div className="container mx-auto px-6">
            <AnimatedBox direction="up" delay={0.3} className="flex justify-center">
              <Link href="/contact">
                <MagneticButton className="group inline-flex items-center gap-2 text-lg px-8 py-4">
                  <span>Get In Touch</span>
                  <HiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </MagneticButton>
              </Link>
            </AnimatedBox>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home