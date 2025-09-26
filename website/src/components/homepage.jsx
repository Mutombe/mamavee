
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
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
  TrendingUp,
  Sparkles,
  Zap,
  Target,
  Award
} from 'lucide-react';
import { toast, Toaster } from 'sonner';
import { IoIosPeople } from "react-icons/io";
import { LuView } from "react-icons/lu";
import { HiDocumentChartBar } from "react-icons/hi2";
import { SlLike } from "react-icons/sl";
import { BsHearts } from "react-icons/bs";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { TbBrandAbstract } from "react-icons/tb";

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

// Enhanced Home Page Component
const HomePage = () => {
  const stats = [
    { icon: IoIosPeople, value: '90K+', label: 'Followers', color: 'from-blue-400 to-cyan-400' },
    { icon: LuView, value: '1M+', label: 'Views', color: 'from-purple-400 to-pink-400' },
    { icon: SlLike, value: '500K+', label: 'Likes', color: 'from-red-400 to-rose-400' },
    { icon: TbBrandAbstract, value: '10+', label: 'Brand Partners', color: 'from-yellow-400 to-orange-400' }
  ];

  const features = [
    {
      icon: FaFaceGrinHearts,
      title: "Authentic Connection",
      description: "Every skit comes from genuine experiences, creating real bonds with audiences.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: LuChartNoAxesCombined,
      title: "Viral Potential",
      description: "Strategic humor that naturally encourages sharing and engagement.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Brand Integration",
      description: "Seamlessly weaving brand messages into entertainment without losing authenticity.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: HiDocumentChartBar,
      title: "Proven Results",
      description: "Consistent track record of successful campaigns and satisfied brand partners.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Travel Zimbabwe",
      text: "Mama Vee's authentic comedy style perfectly captured our brand essence. The engagement was incredible!",
      rating: 5,
      image: "SJ"
    },
    {
      name: "Michael Banda", 
      company: "Victoria Falls Hotel",
      text: "Working with Mama Vee doubled our social media reach. His content is pure gold for hospitality marketing.",
      rating: 5,
      image: "MB"
    },
    {
      name: "Grace Mutindi",
      company: "Harare Events Co.",
      text: "His unique philosophy on content creation helped us connect with audiences in ways we never imagined.",
      rating: 5,
      image: "GM"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ">
        <FloatingElements />
      </div>

      {/* Hero Section with Curved Design */}
      <section className="relative min-h-screen flex items-center pt-30">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-teal-500/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-xl border border-orange-500/30 text-orange-300 font-medium text-sm">
                  <Sparkles className="mr-2" size={16} />
                  Welcome to Zimbabwe's Comedy Hub
                </span>
              </motion.div>

              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <motion.span 
                  className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Comedy
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  That Connects
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Brands & Hearts
                </motion.span>
              </h1>

              <motion.p
                className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Zimbabwe's premier comedy content creator with a unique philosophy 
                that transforms brand messaging into viral entertainment. 
                Over 90K followers trust my authentic voice.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link
                  to="/services"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center">
                    Partner With Me
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  to="/portfolio"
                  className="group inline-flex items-center px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
                  Watch My Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Profile Card */}
              <GlassCard className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-sm">
                    <div 
                      className="w-full h-full flex items-center justify-center text-white"
                      style={{ background: colors.gradients.primary }}
                    >
                      <div className="text-center">
                        <img src="/mama-vee.jpg" alt="Profile" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating microphone */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-2xl"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Mic className="text-white" size={32} />
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">90K+</div>
                      <div className="text-sm text-gray-300">Followers</div>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">1M+</div>
                      <div className="text-sm text-gray-300">Views</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-2">
                    {[Instagram, Youtube, Facebook, Twitter].map((Icon, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
                      >
                        <Icon size={20} className="text-white/80 hover:text-white" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </GlassCard>

              {/* Floating Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
                className="absolute -top-4 -left-4"
              >
                <GlassCard className="p-4">
                  <div className="flex items-center space-x-2 text-white">
                    <Award className="text-yellow-400" size={24} />
                    <div>
                      <div className="font-bold text-sm">Top Creator</div>
                      <div className="text-xs text-gray-300">Zimbabwe 2024</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Curved Section Divider 
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 text-slate-800">
            <path d="M0,120 C300,80 900,80 1200,120 L1200,0 L0,0 Z" fill="currentColor"/>
          </svg>
        </div>*/}
      </section>

      {/* Stats Section with Enhanced Design */}
      <section className="relative py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label, color }, index) => (
              <GlassCard key={label} delay={index * 0.1} className="p-6 text-center group hover:scale-105">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {value}
                </motion.div>
                <div className="text-gray-300 font-medium">{label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section with Dynamic Layout */}
      <section className="relative py-32 bg-gradient-to-br from-slate-800 to-slate-900">
        <FloatingElements />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Mama Vee Philosophy
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comedy isn't just entertainment—it's a bridge between hearts and minds. 
              My unique approach transforms brand messages into memorable stories that resonate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, description, gradient }, index) => (
              <GlassCard key={title} delay={index * 0.2} className="p-8 text-center group hover:scale-105">
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, -5, 5, 0],
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${gradient} flex items-center justify-center shadow-2xl`}
                >
                  <Icon className="text-white" size={40} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="relative py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Brands Say
            </h2>
            <p className="text-xl text-gray-400">Real results from real partnerships</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={index} delay={index * 0.2} className="p-8 group hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.image}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-orange-300">{testimonial.company}</p>
                  </div>
                </div>
                
                <Quote className="text-orange-400 mb-4" size={32} />
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.1, duration: 0.3 }}
                      >
                        <Star className="text-yellow-400 fill-current" size={20} />
                      </motion.div>
                    ))}
                  </div>
                  <Zap className="text-orange-400" size={20} />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;