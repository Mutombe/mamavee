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

const ServicesPage = ({ setCurrentPage }) => {
  const services = [
    {
      title: "Brand Ambassador Programs",
      description: "Long-term partnerships that build authentic connections between your brand and my audience.",
      features: ["Monthly content creation", "Brand integration in skits", "Cross-platform promotion", "Performance analytics"],
      price: "From $500/month"
    },
    {
      title: "Product Launch Campaigns",
      description: "Creative campaign strategies that introduce your products through entertaining storylines.",
      features: ["Custom content series", "Multi-platform rollout", "Engagement optimization", "Launch event coverage"],
      price: "From $1,200/campaign"
    },
    {
      title: "Event Coverage & Promotion",
      description: "Live event documentation and promotional content that captures the energy and excitement.",
      features: ["Live social media coverage", "Event highlight reels", "Behind-scenes content", "Post-event follow-up"],
      price: "From $800/event"
    },
    {
      title: "Custom Content Creation",
      description: "Tailored comedy content that addresses specific brand messages or campaigns.",
      features: ["Script development", "Professional production", "Platform optimization", "Content rights included"],
      price: "From $300/video"
    }
  ];

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
              Partnership Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your brand message into viral comedy content that resonates 
              with audiences and drives genuine engagement across all social platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.darkTeal }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-500">{service.price}</span>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200"
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: colors.lightBeige }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: colors.darkTeal }}>
            How We Work Together
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery Call", description: "We discuss your brand, goals, and target audience" },
              { step: "2", title: "Strategy Development", description: "I create a custom content strategy aligned with your objectives" },
              { step: "3", title: "Content Creation", description: "Professional production of engaging comedy content" },
              { step: "4", title: "Performance Analysis", description: "Track results and optimize for maximum impact" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: colors.mediumTeal }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkTeal }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;