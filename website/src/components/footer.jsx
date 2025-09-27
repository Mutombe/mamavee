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

  const navItems = [
    { 
      path: '/', 
      label: 'The Stage', 
      shortLabel: 'Stage',
      subtitle: 'Where the magic happens', 
      icon: Home 
    },
    { 
      path: '/about', 
      label: 'Behind the Laughs', 
      shortLabel: 'Story',
      subtitle: 'My comedy journey', 
      icon: User 
    },
    { 
      path: '/services', 
      label: 'Let\'s Collaborate', 
      shortLabel: 'Work',
      subtitle: 'Brand partnerships', 
      icon: Briefcase 
    },
    { 
      path: '/portfolio', 
      label: 'Greatest Hits', 
      shortLabel: 'Hits',
      subtitle: 'Viral content showcase', 
      icon: Image 
    },
    { 
      path: '/contact', 
      label: 'Start Something', 
      shortLabel: 'Connect',
      subtitle: 'Let\'s create together', 
      icon: Mail 
    }
  ];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-20 h-10 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                                    <img src="/logo4.png" alt="Mama Vee Logo" className="w-20 h-10 sm:w-20 sm:h-10" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Mama Vee</span>
                <div className="text-xs text-orange-300">Comedy Creator</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              🎭 Zimbabwe's premier comedy content creator transforming brands through authentic humor and viral storytelling.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 sm:mb-6 text-white">Quick Links</h3>
            <div className="space-y-2 sm:space-y-3">
              {navItems.slice(0, 4).map(({ label, path }) => (
                <Link 
                  key={label}
                  to={path}
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 sm:mb-6 text-white">Services</h3>
            <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <p>Brand Ambassadorships</p>
              <p>Product Launch Campaigns</p>
              <p>Event Coverage</p>
              <p>Custom Content Creation</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 sm:mb-6 text-white">Connect</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, index) => (
                <button
                  key={index}
                  className="p-2.5 sm:p-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Mama Vee. All rights reserved. | Made with ❤️ in Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;