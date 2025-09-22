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

const Footer = ({ setCurrentPage }) => {
  return (
    <footer style={{ backgroundColor: colors.darkTeal }} className="text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-amber-600 flex items-center justify-center">
                <span className="text-white font-bold">MV</span>
              </div>
              <span className="text-xl font-bold">Mama Vee</span>
            </div>
            <p className="text-orange-200">
              Zimbabwe's premier comedy content creator transforming brands through authentic humor.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => setCurrentPage('home')} className="block text-orange-200 hover:text-white transition-colors text-left">Home</button>
              <button onClick={() => setCurrentPage('about')} className="block text-orange-200 hover:text-white transition-colors text-left">About</button>
              <button onClick={() => setCurrentPage('services')} className="block text-orange-200 hover:text-white transition-colors text-left">Services</button>
              <button onClick={() => setCurrentPage('portfolio')} className="block text-orange-200 hover:text-white transition-colors text-left">Portfolio</button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <div className="space-y-2 text-orange-200">
              <p>Brand Ambassadorships</p>
              <p>Product Launch Campaigns</p>
              <p>Event Coverage</p>
              <p>Custom Content Creation</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Instagram className="text-orange-300 hover:text-white cursor-pointer transition-colors" size={20} />
              <Facebook className="text-orange-300 hover:text-white cursor-pointer transition-colors" size={20} />
              <Youtube className="text-orange-300 hover:text-white cursor-pointer transition-colors" size={20} />
              <Twitter className="text-orange-300 hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-200">
          <p>&copy; 2025 Mama Vee. All rights reserved. | Made with ❤️ in Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;