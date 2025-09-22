import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import HomePage from './components/homepage'
import AboutPage from './components/about'
import ServicesPage from './components/services'
import PortfolioPage from './components/portfolio'
import ContactPage from './components/contact'
import Footer from './components/footer'
import Navigation from './components/nav'
import { Toaster } from 'sonner' // Add this import (or wherever Toaster comes from)

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage />
            </motion.div>
          } 
        />
        <Route 
          path="/about" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage />
            </motion.div>
          } 
        />
        <Route 
          path="/services" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ServicesPage />
            </motion.div>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioPage />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ContactPage />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

// Main App Component - now inside the router context
const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AnimatedRoutes />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

// Root Component with BrowserRouter
const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Root;