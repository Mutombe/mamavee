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


const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: "Travel Zimbabwe Campaign",
      category: "Tourism",
      description: "Comedy series showcasing Zimbabwe's hidden gems",
      stats: { views: "250K", engagement: "15%" },
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Victoria Falls Hotel",
      category: "Hospitality", 
      description: "Luxury accommodation comedy skits",
      stats: { views: "180K", engagement: "12%" },
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Local Business Spotlights",
      category: "Retail",
      description: "Small business promotion through humor",
      stats: { views: "320K", engagement: "18%" },
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Food Festival Coverage",
      category: "Events",
      description: "Live event comedy coverage and promotion",
      stats: { views: "195K", engagement: "14%" },
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Tech Product Launch",
      category: "Technology",
      description: "Making tech accessible through comedy",
      stats: { views: "275K", engagement: "16%" },
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Fashion Brand Collaboration",
      category: "Fashion",
      description: "Style meets comedy in this viral series",
      stats: { views: "420K", engagement: "22%" },
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Tourism', 'Hospitality', 'Retail', 'Events', 'Technology', 'Fashion'];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <FloatingElements />
      
      {/* Mobile-First Hero Section */}
      <section className="relative py-20 sm:py-32 pt-30 sm:pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Creative Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              A showcase of successful brand partnerships and viral content 
              that demonstrates the power of authentic comedy marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mobile-First Filter Buttons */}
      <section className="relative py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-2xl scale-105'
                    : 'backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-First Portfolio Grid */}
      <section className="relative py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredItems.map((item, index) => (
              <GlassCard
                key={item.title}
                delay={index * 0.1}
                className="overflow-hidden group hover:scale-105"
              >
                <div className={`h-40 sm:h-48 flex items-center justify-center text-white bg-gradient-to-r ${item.gradient}`}>
                  <div className="text-center">
                    <Play size={40} className="sm:w-12 sm:h-12 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-base sm:text-lg font-semibold">Video Content</p>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300 flex-1">
                      {item.title}
                    </h3>
                    <span className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-white flex-shrink-0 w-fit">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{item.description}</p>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-400">Views:</span>
                      <span className="font-bold text-orange-400 ml-1">{item.stats.views}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Engagement:</span>
                      <span className="font-bold text-green-400 ml-1">{item.stats.engagement}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile-First CTA Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Create Viral Content?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Let's discuss how we can bring your brand story to life through comedy.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg"
            >
              Start Your Campaign
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;