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

const HomePage = ({ setCurrentPage }) => {
  const stats = [
    { icon: Users, value: '90K+', label: 'Followers' },
    { icon: Eye, value: '1M+', label: 'Views' },
    { icon: Heart, value: '500K+', label: 'Likes' },
    { icon: Star, value: '10+', label: 'Brand Partners' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Travel Zimbabwe",
      text: "Mama Vee's authentic comedy style perfectly captured our brand essence. The engagement was incredible!",
      rating: 5
    },
    {
      name: "Michael Banda", 
      company: "Victoria Falls Hotel",
      text: "Working with Mama Vee doubled our social media reach. His content is pure gold for hospitality marketing.",
      rating: 5
    },
    {
      name: "Grace Mutindi",
      company: "Harare Events Co.",
      text: "His unique philosophy on content creation helped us connect with audiences in ways we never imagined.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span style={{ color: colors.darkTeal }}>Comedy</span>
                <br />
                <span className="text-orange-500">That Connects</span>
                <br />
                <span style={{ color: colors.mediumTeal }}>Brands & Hearts</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Zimbabwe's premier comedy content creator with a unique philosophy 
                that transforms brand messaging into viral entertainment. 
                Over 90K followers trust my authentic voice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('services')}
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-200"
                >
                  Partner With Me
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button
                  onClick={() => setCurrentPage('portfolio')}
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                >
                  <Play className="mr-2" size={20} />
                  Watch My Work
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full flex items-center justify-center text-white text-6xl font-bold"
                  style={{ background: `linear-gradient(135deg, ${colors.mediumTeal}, ${colors.brownOrange})` }}
                >
                  <div className="text-center">
                    <Camera size={80} className="mx-auto mb-4" />
                    <p className="text-2xl">Mama Vee</p>
                    <p className="text-lg opacity-80">In Action</p>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Mic className="text-white" size={32} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: colors.darkTeal }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Icon className="mx-auto mb-4 text-orange-400" size={40} />
                <div className="text-3xl font-bold text-white mb-2">{value}</div>
                <div className="text-orange-200">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: colors.darkTeal }}>
              The Mama Vee Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comedy isn't just entertainment—it's a bridge between hearts and minds. 
              My unique approach transforms brand messages into memorable stories that resonate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Authentic Connection",
                description: "Every skit comes from genuine experiences, creating real bonds with audiences."
              },
              {
                icon: TrendingUp,
                title: "Viral Potential",
                description: "Strategic humor that naturally encourages sharing and engagement."
              },
              {
                icon: CheckCircle,
                title: "Brand Integration",
                description: "Seamlessly weaving brand messages into entertainment without losing authenticity."
              }
            ].map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: colors.lightBeige }}
              >
                <Icon className="mx-auto mb-4 text-orange-500" size={48} />
                <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkTeal }}>
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: colors.darkTeal }}>
            What Brands Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Quote className="text-orange-400 mb-4" size={32} />
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold" style={{ color: colors.darkTeal }}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
