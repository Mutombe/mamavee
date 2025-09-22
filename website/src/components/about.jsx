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

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-8" style={{ color: colors.darkTeal }}>
                Meet Mama Vee
              </h1>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Born and raised in Zimbabwe, I discovered my passion for comedy as a way to 
                  bring joy to people's lives during challenging times. What started as casual 
                  skits among friends has evolved into a powerful platform for authentic storytelling.
                </p>
                <p>
                  With over 90,000 followers across all social media platforms and more than 
                  a million views, I've built a community that values genuine humor and 
                  meaningful connections. My content isn't just about getting laughs—it's 
                  about creating moments that people remember and share.
                </p>
                <p>
                  As a brand ambassador for companies in travel, hospitality, and various 
                  other industries, I've developed a unique approach to influencer marketing 
                  that prioritizes authenticity over everything else.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full flex items-center justify-center text-white text-4xl font-bold"
                  style={{ background: `linear-gradient(135deg, ${colors.darkTeal}, ${colors.brownOrange})` }}
                >
                  <div className="text-center">
                    <User size={120} className="mx-auto mb-6" />
                    <p className="text-3xl">Mama Vee</p>
                    <p className="text-xl opacity-80">Comedy Creator</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20" style={{ backgroundColor: colors.lightBeige }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8" style={{ color: colors.darkTeal }}>
              My Creative Philosophy
            </h2>
            <div className="space-y-8 text-lg text-gray-700">
              <p className="italic text-2xl" style={{ color: colors.brownOrange }}>
                "Comedy is the universal language that breaks down barriers and builds bridges."
              </p>
              <p>
                I believe that humor has the power to transform how people perceive brands and messages. 
                When you make someone laugh, you create a positive association that lasts far beyond 
                the moment of entertainment.
              </p>
              <p>
                My approach combines traditional Zimbabwean storytelling with modern social media 
                dynamics. Every piece of content I create is rooted in authentic experiences, 
                ensuring that audiences connect not just with the humor, but with the human 
                behind it.
              </p>
              <p>
                For brands, this means their message doesn't just get seen—it gets felt, 
                remembered, and shared organically because it's wrapped in genuine entertainment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: colors.darkTeal }}>
            Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Authenticity", description: "Every piece of content reflects genuine experiences and emotions" },
              { title: "Respect", description: "Humor that uplifts rather than tears down, respecting all communities" },
              { title: "Quality", description: "Consistent high-standard content that serves both entertainment and brand goals" },
              { title: "Innovation", description: "Constantly evolving content styles to stay fresh and engaging" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: colors.mediumTeal, color: 'white' }}
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="opacity-90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;