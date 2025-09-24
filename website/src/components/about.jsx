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
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <FloatingElements />
      
      <section className="relative py-20 sm:py-32 pt-24 sm:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Meet Mama Vee
              </h1>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300">
                <p>
                  Born and raised in Zimbabwe, I discovered my passion for comedy as a way to 
                  bring joy to people's lives during challenging times. What started as casual 
                  skits among friends has evolved into a powerful platform for authentic storytelling.
                </p>
                <p>
                  With over 90,000 followers across all social media platforms and more than 
                  a million views, I've built a community that values genuine humor and 
                  meaningful connections. My content isn't just about getting laughs—it's 
                  about creating moments that people remember and share.
                </p>
                <p>
                  As a brand ambassador for companies in travel, hospitality, and various 
                  other industries, I've developed a unique approach to influencer marketing 
                  that prioritizes authenticity over everything else.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <GlassCard className="p-4 sm:p-8">
                <div className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:max-w-none">
                  <div 
                    className="w-full h-full flex items-center justify-center text-white text-4xl font-bold"
                    style={{ background: colors.gradients.primary }}
                  >
                    <div className="text-center">
                      <User size={80} className="sm:w-[120px] sm:h-[120px] mx-auto mb-4 sm:mb-6" />
                      <p className="text-2xl sm:text-3xl">Mama Vee</p>
                      <p className="text-lg sm:text-xl opacity-80">Comedy Creator</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile-First Philosophy Section */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-6 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              My Creative Philosophy
            </h2>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-300">
              <p className="italic text-xl sm:text-2xl text-orange-300">
                "Comedy is the universal language that breaks down barriers and builds bridges."
              </p>
              <p>
                I believe that humor has the power to transform how people perceive brands and messages. 
                When you make someone laugh, you create a positive association that lasts far beyond 
                the moment of entertainment.
              </p>
              <p>
                My approach combines traditional Zimbabwean storytelling with modern social media 
                dynamics. Every piece of content I create is rooted in authentic experiences, 
                ensuring that audiences connect not just with the humor, but with the human 
                behind it.
              </p>
              <p>
                For brands, this means their message doesn't just get seen—it gets felt, 
                remembered, and shared organically because it's wrapped in genuine entertainment.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Mobile-First Values Section */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: "Authenticity", description: "Every piece of content reflects genuine experiences and emotions" },
              { title: "Respect", description: "Humor that uplifts rather than tears down, respecting all communities" },
              { title: "Quality", description: "Consistent high-standard content that serves both entertainment and brand goals" },
              { title: "Innovation", description: "Constantly evolving content styles to stay fresh and engaging" }
            ].map((value, index) => (
              <GlassCard key={value.title} delay={index * 0.1} className="p-6 text-center hover:scale-105">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default AboutPage;