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

const PortfolioPage = ({ setCurrentPage }) => {
  const portfolioItems = [
    {
      title: "Travel Zimbabwe Campaign",
      category: "Tourism",
      description: "Comedy series showcasing Zimbabwe's hidden gems",
      stats: { views: "250K", engagement: "15%" }
    },
    {
      title: "Victoria Falls Hotel",
      category: "Hospitality", 
      description: "Luxury accommodation comedy skits",
      stats: { views: "180K", engagement: "12%" }
    },
    {
      title: "Local Business Spotlights",
      category: "Retail",
      description: "Small business promotion through humor",
      stats: { views: "320K", engagement: "18%" }
    },
    {
      title: "Food Festival Coverage",
      category: "Events",
      description: "Live event comedy coverage and promotion",
      stats: { views: "195K", engagement: "14%" }
    },
    {
      title: "Tech Product Launch",
      category: "Technology",
      description: "Making tech accessible through comedy",
      stats: { views: "275K", engagement: "16%" }
    },
    {
      title: "Fashion Brand Collaboration",
      category: "Fashion",
      description: "Style meets comedy in this viral series",
      stats: { views: "420K", engagement: "22%" }
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Tourism', 'Hospitality', 'Retail', 'Events', 'Technology', 'Fashion'];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6" style={{ color: colors.darkTeal }}>
              Creative Portfolio
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A showcase of successful brand partnerships and viral content 
              that demonstrates the power of authentic comedy marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div 
                  className="h-48 flex items-center justify-center text-white"
                  style={{ background: `linear-gradient(135deg, ${colors.mediumTeal}, ${colors.brownOrange})` }}
                >
                  <div className="text-center">
                    <Play size={48} className="mx-auto mb-2" />
                    <p className="text-lg font-semibold">Video Content</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold" style={{ color: colors.darkTeal }}>
                      {item.title}
                    </h3>
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: colors.brownOrange }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-gray-500">Views:</span>
                      <span className="font-bold text-orange-500 ml-1">{item.stats.views}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Engagement:</span>
                      <span className="font-bold text-green-500 ml-1">{item.stats.engagement}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: colors.darkTeal }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Viral Content?
          </h2>
          <p className="text-xl text-orange-200 mb-8">
            Let's discuss how we can bring your brand story to life through comedy.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-200"
          >
            Start Your Campaign
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;