import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Image, 
  Mail, 
  Menu, 
  X, 
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Twitter
} from 'lucide-react';
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCloseFullscreen } from "react-icons/md";


// Enhanced Mobile-First Glassmorphism Navigation with Fixed Routing and Spacing
const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { 
      path: '/', 
      label: 'The Stage', 
      shortLabel: 'Stage',
      subtitle: 'Where the magic happens', 
      icon: Home,
      emoji: '🎭'
    },
    { 
      path: '/about', 
      label: 'Behind the Laughs', 
      shortLabel: 'Story',
      subtitle: 'My comedy journey', 
      icon: User,
      emoji: '😄'
    },
    { 
      path: '/services', 
      label: 'Let\'s Collaborate', 
      shortLabel: 'Work',
      subtitle: 'Brand partnerships', 
      icon: Briefcase,
      emoji: '🤝'
    },
    { 
      path: '/portfolio', 
      label: 'Greatest Hits', 
      shortLabel: 'Hits',
      subtitle: 'Viral content showcase', 
      icon: Image,
      emoji: '🔥'
    },
    { 
      path: '/contact', 
      label: 'Start Something', 
      shortLabel: 'Connect',
      subtitle: 'Let\'s create together', 
      icon: Mail,
      emoji: '💫'
    }
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 px-2 sm:px-4' 
          : 'py-3 px-2 sm:px-4'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className={`relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden ${
            scrolled ? 'bg-white/20' : 'bg-white/10'
          }`}>
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-teal-500/10 rounded-xl sm:rounded-2xl"></div>
            
            <div className="relative flex justify-between items-center px-3 sm:px-6 py-3 sm:py-4 min-w-0">
              {/* Logo - Mobile Optimized */}
              <button 
                onClick={() => handleNavClick('/')}
                className="flex items-center space-x-2 sm:space-x-3 group min-w-0 flex-shrink-0"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-lg sm:text-xl">MV</span>
                  </div>
                  <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-400 to-amber-500 opacity-50 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <div className="hidden xs:block min-w-0">
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent truncate block">
                    Mama Vee
                  </span>
                  <div className="text-xs sm:text-sm text-white/70 font-medium">Comedy Creator</div>
                </div>
              </button>

              {/* Desktop Navigation - Hidden on Mobile */}
              <div className="hidden xl:flex items-center space-x-1">
                {navItems.map(({ path, label, icon: Icon }) => (
                  <button
                    key={path}
                    onClick={() => handleNavClick(path)}
                    className={`relative group flex items-center space-x-2 px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-medium transition-all duration-300 ${
                      location.pathname === path
                        ? 'text-white bg-white/20 backdrop-blur-sm shadow-lg'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={16} className="lg:w-[18px] lg:h-[18px]" />
                    <span className="text-sm lg:text-base">{label}</span>
                    {location.pathname === path && (
                      <motion.div
                        layoutId="navHighlight"
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-teal-500/30 rounded-xl -z-10"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* CTA Button - Responsive */}
              <div className="hidden lg:block flex-shrink-0">
                <button
                  onClick={() => handleNavClick('/contact')}
                  className="relative group px-3 lg:px-4 xl:px-5 py-2.5 lg:py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <span className="relative z-10 text-sm lg:text-sm xl:text-base whitespace-nowrap">
                    <span className="lg:inline xl:hidden">🚀 Talk</span>
                    <span className="hidden xl:inline">🚀 Let's Talk</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Mobile menu button - Enhanced Touch Target */}
              <button
                className="xl:hidden p-3 -m-2 text-white/80 hover:text-white transition-colors duration-200 relative z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? <MdOutlineCloseFullscreen size={24} /> : <CiMenuFries size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl" />
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
              <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-500" />
            </div>

            {/* Content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative h-full flex flex-col"
            >
              {/* Header space for fixed nav */}
              <div className="h-20 sm:h-24" />

              {/* Menu content */}
              <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 max-w-lg mx-auto w-full">
                {/* Welcome text */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-center mb-8 sm:mb-12"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Where would you like to go?
                  </h2>
                  <p className="text-white/60 text-sm sm:text-base">
                    Choose your adventure 🎭
                  </p>
                </motion.div>

                {/* Navigation items */}
                <div className="space-y-3 sm:space-y-4">
                  {navItems.map(({ path, label, subtitle, icon: Icon, emoji }, index) => (
                    <motion.div
                      key={path}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    >
                      <button
                        onClick={() => handleNavClick(path)}
                        className={`group relative flex items-center space-x-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 overflow-hidden w-full text-left ${
                          location.pathname === path
                            ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-white shadow-xl'
                            : 'bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        {/* Background glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/20 group-hover:to-orange-500/10 transition-all duration-500" />
                        
                        {/* Icon container */}
                        <div className="relative flex-shrink-0">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            location.pathname === path
                              ? 'bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg'
                              : 'bg-white/10 group-hover:bg-gradient-to-r group-hover:from-orange-500/50 group-hover:to-amber-500/50'
                          }`}>
                            <span className="text-xl sm:text-2xl">{emoji}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 relative">
                          <div className="font-semibold text-base sm:text-lg">{label}</div>
                          <div className="text-xs sm:text-sm text-white/60 mt-1">{subtitle}</div>
                        </div>

                        {/* Arrow indicator */}
                        <div className="flex-shrink-0 relative">
                          <ArrowRight 
                            size={20} 
                            className={`transition-all duration-300 ${
                              location.pathname === path
                                ? 'text-white translate-x-1'
                                : 'text-white/40 group-hover:text-white/80 group-hover:translate-x-1'
                            }`}
                          />
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="mt-8 sm:mt-12"
                >
                  <button
                    onClick={() => handleNavClick('/contact')}
                    className="group relative flex items-center justify-center space-x-3 w-full p-4 sm:p-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Mail size={24} className="relative z-10" />
                    <span className="relative z-10 text-lg">🚀 Let's Create Magic Together</span>
                  </button>
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="flex justify-center space-x-6 mt-8 sm:mt-12"
                >
                  {[
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Youtube, label: 'YouTube' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Facebook, label: 'Facebook' }
                  ].map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </button>
                  ))}
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="text-center text-white/40 text-xs sm:text-sm pb-6 sm:pb-8 px-6"
              >
                © 2025 Mama Vee. Making the world laugh, one post at a time.
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer div to prevent content from hiding behind fixed nav */}
      <div className="h-20 sm:h-24"></div>
    </>      
  );
};

export default Navigation;