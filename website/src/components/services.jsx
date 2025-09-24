import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Zap,
  Sparkles,
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
  darkBrown: '#311F1F'
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


const ServicesPage = () => {
  const services = [
    {
      title: "Brand Ambassador Programs",
      description: "Long-term partnerships that build authentic connections between your brand and my audience.",
      features: ["Monthly content creation", "Brand integration in skits", "Cross-platform promotion", "Performance analytics"],
      price: "From $500/month",
      gradient: "from-blue-500 to-cyan-500",
      icon: Users
    },
    {
      title: "Product Launch Campaigns",
      description: "Creative campaign strategies that introduce your products through entertaining storylines.",
      features: ["Custom content series", "Multi-platform rollout", "Engagement optimization", "Launch event coverage"],
      price: "From $1,200/campaign",
      gradient: "from-purple-500 to-pink-500",
      icon: Zap
    },
    {
      title: "Event Coverage & Promotion",
      description: "Live event documentation and promotional content that captures the energy and excitement.",
      features: ["Live social media coverage", "Event highlight reels", "Behind-scenes content", "Post-event follow-up"],
      price: "From $800/event",
      gradient: "from-green-500 to-emerald-500",
      icon: Camera
    },
    {
      title: "Custom Content Creation",
      description: "Tailored comedy content that addresses specific brand messages or campaigns.",
      features: ["Script development", "Professional production", "Platform optimization", "Content rights included"],
      price: "From $300/video",
      gradient: "from-orange-500 to-amber-500",
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <FloatingElements />
      
      {/* Mobile-First Hero Section */}
      <section className="relative py-20 sm:py-32 pt-24 sm:pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Partnership Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Transform your brand message into viral comedy content that resonates 
              with audiences and drives genuine engagement across all social platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mobile-First Services Grid */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <GlassCard key={service.title} delay={index * 0.1} className="p-6 sm:p-8 group hover:scale-105">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg flex-shrink-0 mb-3 sm:mb-0`}>
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold sm:ml-4 text-white group-hover:text-orange-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">{service.description}</p>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm sm:text-base">
                      <CheckCircle className="text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    {service.price}
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;