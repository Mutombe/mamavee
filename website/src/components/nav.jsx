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

// Color palette with enhanced gradients
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

// Glassmorphism Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/portfolio', label: 'Portfolio', icon: Image },
    { path: '/contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-2' 
        : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl transition-all duration-500 ${
          scrolled ? 'bg-white/20' : 'bg-white/10'
        }`}>
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-teal-500/10 rounded-2xl"></div>
          
          <div className="relative flex justify-between items-center px-6 py-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">MV</span>
                </div>
                <div className="absolute inset-0 w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-500 opacity-50 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  Mama Vee
                </span>
                <div className="text-xs text-white/70 font-medium">Comedy Creator</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    location.pathname === path
                      ? 'text-white bg-white/20 backdrop-blur-sm shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                  {location.pathname === path && (
                    <motion.div
                      layoutId="navHighlight"
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-teal-500/30 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="relative group px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                className="lg:hidden border-t border-white/10 backdrop-blur-xl"
              >
                <div className="px-6 py-4 space-y-2">
                  {navItems.map(({ path, label, icon: Icon }) => (
                    <Link
                      key={path}
                      to={path}
                      className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{label}</span>
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Mail size={20} />
                    <span>Let's Talk</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;