import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Image, 
  Mail, 
  Menu, 
  X, 
  Play, 
  Users, 
  Eye, 
  Heart,
  Star,
  CheckCircle,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowRight,
  Quote,
  Camera,
  Mic,
  TrendingUp
} from 'lucide-react';
import { toast, Toaster } from 'sonner';

const colors = {
  darkTeal: '#122D39',
  mediumTeal: '#2C697F', 
  lightBeige: '#D6B9B9',
  brownOrange: '#8A4C1C',
  darkBrown: '#311F1F',
  gradients: {
    primary: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FFD23F 100%)',
    secondary: 'linear-gradient(135deg, #2C697F 0%, #122D39 100%)',
    accent: 'linear-gradient(135deg, #8A4C1C 0%, #D6B9B9 100%)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
  }
};

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated blobs */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

// Glassmorphism Card Component
const GlassCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group ${className}`}
    >
      {/* Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};


const AboutPage = () => {
  const achievements = [
    { number: '1M+', label: 'Followers', sublabel: 'Across all platforms' },
    { number: '1M+', label: 'Total Views', sublabel: 'And counting' },
    { number: '10+', label: 'Brand Partners', sublabel: 'Successful campaigns' },
    { number: '6+', label: 'Years Creating', sublabel: 'Comedy content' }
  ];

  const journey = [
    {
      year: '2021',
      title: 'The Beginning',
      description: 'Started creating comedy skits with friends',
      icon: '🌱'
    },
    {
      year: '2022', 
      title: 'Going Viral',
      description: 'First viral video hits 100K+ views',
      icon: '🚀'
    },
    {
      year: '2023',
      title: 'Brand Partnerships',
      description: 'Collaborating with major Zimbabwean brands',
      icon: '🤝'
    },
    {
      year: '2024',
      title: 'Comedy Empire',
      description: '90K followers and 1M+ total views achieved',
      icon: '👑'
    }
  ];

  const skills = [
    { skill: 'Content Creation', level: 95 },
    { skill: 'Brand Integration', level: 90 },
    { skill: 'Social Media Marketing', level: 88 },
    { skill: 'Storytelling', level: 92 },
    { skill: 'Audience Engagement', level: 96 }
  ];

  const personalFacts = [
    { icon: '🏠', label: 'Based in', value: 'Harare, Zimbabwe' },
    { icon: '🎬', label: 'Content Style', value: 'Authentic Comedy' },
    { icon: '🌍', label: 'Languages', value: 'English & Shona' },
    { icon: '🎯', label: 'Mission', value: 'Spreading Joy Through Humor' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <FloatingElements />
      
      {/* Hero Section - Large Impact */}
      <section className="relative py-20 sm:py-32 pt-30 sm:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6">
                🎭 Comedy Creator & Brand Partner
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-300 to-amber-400 bg-clip-text text-transparent">
                Behind the Laughs
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Creating authentic comedy that connects brands with hearts across Zimbabwe and beyond
              </p>
            </motion.div>

            {/* Main Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative max-w-md mx-auto"
            >
              <GlassCard className="p-8">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl mb-6">
                  <div 
                    className="w-full h-full flex items-center justify-center text-white"
                    style={{ background: colors.gradients.primary }}
                  >
                    <img src="/mama-vee.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  {[Instagram, Youtube, Facebook, Twitter].map((Icon, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl bg-white/10 hover:bg-orange-500/20 transition-colors duration-300"
                    >
                      <Icon size={20} className="text-white/80" />
                    </motion.button>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 text-center hover:scale-105">
                  <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white font-semibold mb-1">{achievement.label}</div>
                  <div className="text-gray-400 text-sm">{achievement.sublabel}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story - Timeline */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              🚀 My Comedy Journey
            </h2>
            <p className="text-xl text-gray-400">From casual skits to brand partnerships</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journey.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <GlassCard className="p-6 text-center hover:scale-105 h-full">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-orange-400 font-bold text-lg mb-2">{step.year}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                💪 What I Bring to the Table
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.skill}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.skill}</span>
                      <span className="text-orange-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">🎯 Quick Facts</h3>
                <div className="space-y-4">
                  {personalFacts.map((fact, index) => (
                    <div key={fact.label} className="flex items-center space-x-4">
                      <span className="text-2xl">{fact.icon}</span>
                      <div>
                        <div className="text-gray-400 text-sm">{fact.label}</div>
                        <div className="text-white font-semibold">{fact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <h3 className="text-xl font-bold text-orange-400 mb-4">🏆 Recent Achievement</h3>
                <p className="text-gray-300">
                  <strong>Top Comedy Creator 2024</strong> - Recognized by Zimbabwe Digital Marketing Awards 
                  for authentic brand storytelling and audience engagement.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy - Reimagined */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              🎭 My Creative Philosophy
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '❤️',
                title: 'Authentic Connection',
                description: 'Every laugh comes from real experiences and genuine emotions.'
              },
              {
                icon: '🌉',
                title: 'Building Bridges',
                description: 'Comedy breaks down barriers between brands and audiences.'
              },
              {
                icon: '✨',
                title: 'Memorable Impact',
                description: 'Creating moments that stick long after the laughter fades.'
              }
            ].map((philosophy, index) => (
              <motion.div
                key={philosophy.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <GlassCard className="p-8 text-center hover:scale-105 h-full">
                  <div className="text-5xl mb-6">{philosophy.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{philosophy.title}</h3>
                  <p className="text-gray-300">{philosophy.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <GlassCard className="p-12 text-center">
              <Quote className="text-orange-400 mx-auto mb-6" size={48} />
              <blockquote className="text-2xl sm:text-3xl font-bold text-white mb-6 italic">
                "Comedy is the universal language that breaks down barriers and builds bridges between hearts."
              </blockquote>
              <div className="text-orange-400 font-semibold">— Mama Vee</div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              🚀 Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's turn your brand story into viral comedy content that resonates with audiences across Zimbabwe and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300"
              >
                🤝 Let's Collaborate
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                🏆 See My Greatest Hits
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};


export default AboutPage;