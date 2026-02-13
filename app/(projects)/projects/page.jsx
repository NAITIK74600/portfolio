"use client"
import React from 'react';
import BackgroundEffects from '@/components/ui/background-effects';
import SpiderManBackground from '@/components/ui/spiderman-background';
import { config } from '@/config';
import SectionTitle from './components/SectionTitle';
import { ProjectsList } from './components/ProjectsList';
import ScrollProgress from '@/components/ui/scroll-progress';
import BackToTop from '@/components/ui/back-to-top';
import AnimatedBox from '@/components/ui/animated-box';

const ProjectsPage = () => {
    return (
        <>
            <ScrollProgress />
            <BackToTop />
            <section className="py-20 min-h-screen" id="projects">
                <SpiderManBackground />
                <div className="container mx-auto px-6 md:px-64">
                    <BackgroundEffects
                        variant="diagonal"
                        colors={{ first: "secondary", second: "secondary" }}
                        intensity="10"
                        blurAmount="3xl"
                    />

                    <div className="relative">
                        <AnimatedBox direction="down" duration={0.8}>
                            <SectionTitle />
                        </AnimatedBox>
                        <AnimatedBox direction="up" delay={0.3} duration={0.8}>
                            <ProjectsList projects={config.projects} />
                        </AnimatedBox>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsPage;