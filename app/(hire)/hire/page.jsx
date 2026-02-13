/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiBriefcase, HiCheckCircle, HiClock, HiCurrencyDollar, HiLightningBolt, HiMail } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function HirePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Hire Request from ${formData.name} - ${formData.company}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Project Description:
${formData.description}
    `.trim();

    // Open email client
    window.location.href = `mailto:naitikraj74600@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models, predictive analytics, and intelligent systems",
    },
    {
      icon: <HiBriefcase className="w-6 h-6" />,
      title: "AI Development",
      description: "Deep learning, computer vision, NLP, and chatbot development",
    },
    {
      icon: <HiCheckCircle className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Modern web applications with React, Next.js, and cloud deployment",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemAnimation} className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-4 py-2 rounded-full backdrop-blur-xl">
              <HiBriefcase className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Available for Hire</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              Let's Build Something
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm available for freelance projects, consulting, and full-time opportunities in AI/ML and Full-Stack Development.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={itemAnimation} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Hire Form */}
          <motion.div variants={itemAnimation} className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10 rounded-3xl border border-white/20 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <HiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Start Your Project</h2>
                  <p className="text-sm text-muted-foreground">Fill out the form to discuss your requirements</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                </div>

                {/* Company & Project Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company/Organization</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select type</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="AI Development">AI Development</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <HiCurrencyDollar className="w-4 h-4" /> Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select budget</option>
                      <option value="< $1,000">Less than $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                      <option value="Open to discussion">Open to discussion</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <HiClock className="w-4 h-4" /> Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="< 1 month">Less than 1 month</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6+ months">6+ months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Description *</label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and requirements..."
                    required
                    className="bg-white/5 border-white/10 min-h-[150px]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 rounded-xl text-base font-semibold"
                >
                  Send Hire Request 🚀
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  This will open your email client with the form details. Or email me directly at{" "}
                  <a href="mailto:naitikraj74600@gmail.com" className="text-blue-400 hover:underline">
                    naitikraj74600@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div variants={itemAnimation} className="text-center">
            <p className="text-muted-foreground mb-4">Prefer a quick chat?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:naitikraj74600@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
              >
                <HiMail className="w-5 h-5" />
                <span>Email Me</span>
              </a>
              <a
                href="https://github.com/NAITIK74600"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
              >
                <span>View GitHub</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
