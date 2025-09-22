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
              Let's Create Together
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your brand message into viral comedy content? 
              Let's discuss your vision and make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: colors.darkTeal }}>
                Send Me a Message
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell me about your project, goals, and how I can help..."
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8" style={{ color: colors.darkTeal }}>
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="text-orange-500 mr-4" size={24} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">hello@mamavee.zw</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-orange-500 mr-4" size={24} />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkTeal }}>
                  Follow My Journey
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Instagram, label: '@mamavee_zw' },
                    { icon: Facebook, label: 'Mama Vee Comedy' },
                    { icon: Youtube, label: 'Mama Vee' },
                    { icon: Twitter, label: '@mamavee_zw' }
                  ].map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      className="p-3 rounded-full hover:bg-orange-100 transition-colors duration-200"
                      style={{ color: colors.mediumTeal }}
                    >
                      <Icon size={24} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div 
                className="p-8 rounded-2xl"
                style={{ backgroundColor: colors.lightBeige }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkTeal }}>
                  Why Work With Me?
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Followers</span>
                    <span className="font-bold text-orange-500">90K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Engagement</span>
                    <span className="font-bold text-green-500">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Brand Partnerships</span>
                    <span className="font-bold text-blue-500">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Content Reach</span>
                    <span className="font-bold text-purple-500">1M+ Views</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
