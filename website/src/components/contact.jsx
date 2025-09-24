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


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! I\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Let's Create Together
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Ready to transform your brand message into viral comedy content? 
              Let's discuss your vision and make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Mobile-First Contact Form */}
            <GlassCard className="p-6 sm:p-8 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-base"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-base"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-base"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 sm:py-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 resize-none text-base"
                    placeholder="Tell me about your project, goals, and how I can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg"
                >
                  Send Message
                </button>
              </form>
            </GlassCard>

            {/* Mobile-First Contact Info */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <GlassCard className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">
                  Get in Touch
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-white">Email</p>
                      <p className="text-gray-300 truncate">hello@mamavee.zw</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-white">Response Time</p>
                      <p className="text-gray-300">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Mobile-First Social Media */}
              <GlassCard className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-4 sm:mb-6 text-white">
                  Follow My Journey
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: Instagram, label: '@mamavee_zw', gradient: 'from-pink-500 to-purple-500' },
                    { icon: Facebook, label: 'Mama Vee Comedy', gradient: 'from-blue-500 to-indigo-500' },
                    { icon: Youtube, label: 'Mama Vee', gradient: 'from-red-500 to-pink-500' },
                    { icon: Twitter, label: '@mamavee_zw', gradient: 'from-sky-500 to-blue-500' }
                  ].map(({ icon: Icon, label, gradient }) => (
                    <button
                      key={label}
                      className={`flex items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${gradient} text-white hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon size={20} className="mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium truncate">{label}</span>
                    </button>
                  ))}
                </div>
              </GlassCard>

              {/* Mobile-First Quick Stats */}
              <GlassCard className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-4 sm:mb-6 text-white">
                  Why Work With Me?
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { label: "Total Followers", value: "90K+", color: "text-orange-400" },
                    { label: "Average Engagement", value: "15%", color: "text-green-400" },
                    { label: "Brand Partnerships", value: "10+", color: "text-blue-400" },
                    { label: "Content Reach", value: "1M+ Views", color: "text-purple-400" }
                  ].map(({ label, value, color }) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm sm:text-base">{label}</span>
                      <span className={`font-bold ${color} text-sm sm:text-base`}>{value}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
