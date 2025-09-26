import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Zap,
  Sparkles,
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
} from "lucide-react";
import { toast, Toaster } from "sonner";

const colors = {
  darkTeal: "#122D39",
  mediumTeal: "#2C697F",
  lightBeige: "#D6B9B9",
  brownOrange: "#8A4C1C",
  darkBrown: "#311F1F",
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
          ease: "easeInOut",
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
          delay: 1,
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
          ease: "linear",
        }}
      />
    </div>
  );
};

// Glassmorphism Card Component
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

const ServicesPage = () => {
  const services = [
    {
      number: "01",
      title: "Brand Ambassador Programs",
      description:
        "Long-term partnerships that build authentic connections between your brand and my audience.",
      features: [
        "Monthly content creation",
        "Brand integration in skits",
        "Cross-platform promotion",
        "Performance analytics",
      ],
      price: "From $500/month",
      gradient: "from-blue-500 to-cyan-500",
      icon: Users,
      imagePattern:
        "bg-gradient-to-br from-blue-400/30 via-cyan-400/20 to-purple-400/30",
    },
    {
      number: "02",
      title: "Product Launch Campaigns",
      description:
        "Creative campaign strategies that introduce your products through entertaining storylines.",
      features: [
        "Custom content series",
        "Multi-platform rollout",
        "Engagement optimization",
        "Launch event coverage",
      ],
      price: "From $1,200/campaign",
      gradient: "from-purple-500 to-pink-500",
      icon: Zap,
      imagePattern:
        "bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-rose-400/30",
    },
    {
      number: "03",
      title: "Event Coverage & Promotion",
      description:
        "Live event documentation and promotional content that captures the energy and excitement.",
      features: [
        "Live social media coverage",
        "Event highlight reels",
        "Behind-scenes content",
        "Post-event follow-up",
      ],
      price: "From $800/event",
      gradient: "from-green-500 to-emerald-500",
      icon: Camera,
      imagePattern:
        "bg-gradient-to-br from-green-400/30 via-emerald-400/20 to-teal-400/30",
    },
    {
      number: "04",
      title: "Custom Content Creation",
      description:
        "Tailored comedy content that addresses specific brand messages or campaigns.",
      features: [
        "Script development",
        "Professional production",
        "Platform optimization",
        "Content rights included",
      ],
      price: "From $300/video",
      gradient: "from-orange-500 to-amber-500",
      icon: Sparkles,
      imagePattern:
        "bg-gradient-to-br from-orange-400/30 via-amber-400/20 to-yellow-400/30",
    },
  ];

  const processSteps = [
    {
      step: "Discovery",
      description: "We discuss your brand, goals, and target audience",
      icon: "🔍",
    },
    {
      step: "Strategy",
      description:
        "I create a custom content strategy aligned with your objectives",
      icon: "📋",
    },
    {
      step: "Creation",
      description: "Professional production of engaging comedy content",
      icon: "🎬",
    },
    {
      step: "Analysis",
      description: "Track results and optimize for maximum impact",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <FloatingElements />

      {/* Hero Section with Picture-Filled Title - Mobile Responsive */}
      <section className="relative py-12 sm:py-20 lg:py-32 pt-30 sm:pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            {/* Picture-Filled Title */}
            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-3 sm:mb-4 lg:mb-6 relative leading-none">
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 block"
                  style={{
                    backgroundImage: `
                linear-gradient(135deg, 
                  rgba(251, 146, 60, 0.9) 0%, 
                  rgba(245, 158, 11, 0.8) 50%, 
                  rgba(234, 179, 8, 0.9) 100%
                ),
                url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zM0 20v20h20c0-11.046-8.954-20-20-20z'/%3E%3C/g%3E%3C/svg%3E")
              `,
                    backgroundSize: "20px 20px, 20px 20px",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  LET'S
                </span>
              </h1>
              <h1 className="text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none">
                <span
                  className="bg-clip-text text-transparent block"
                  style={{
                    backgroundImage: `
                linear-gradient(135deg, 
                  rgba(59, 130, 246, 0.9) 0%, 
                  rgba(147, 51, 234, 0.8) 50%, 
                  rgba(236, 72, 153, 0.9) 100%
                ),
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `,
                    backgroundSize: "25px 25px, 25px 25px",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  COLLABORATE
                </span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
                Transform your brand message into viral comedy content that
                resonates with audiences and drives genuine engagement across
                all social platforms.
              </p>

              {/* Quick Stats - Mobile Optimized */}
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center max-w-2xl mx-auto">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400">
                    1M+
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">
                    Followers Reached
                  </div>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                    15%
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">
                    Avg Engagement
                  </div>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400">
                    10+
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">
                    Happy Brands
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services with Image-Filled Numbers */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image-Filled Number */}
                  <div className="flex-shrink-0 relative">
                    <div className="relative">
                      {/* Large Number with Image Fill */}
                      <div
                        className="font-black text-[200px] sm:text-[250px] lg:text-[300px] leading-none select-none"
                        style={{
                          backgroundImage: `
                            linear-gradient(135deg, 
                              rgba(251, 146, 60, 0.9) 0%, 
                              rgba(245, 158, 11, 0.8) 30%,
                              rgba(59, 130, 246, 0.8) 70%,
                              rgba(147, 51, 234, 0.9) 100%
                            ),
                            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='comedy-pattern' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Ccircle cx='10' cy='10' r='2' fill='%23ffffff' opacity='0.1'/%3E%3Cpath d='M5,15 Q10,10 15,15' stroke='%23ffffff' stroke-width='0.5' fill='none' opacity='0.15'/%3E%3Cpath d='M2,8 L8,8 M2,12 L6,12' stroke='%23ffffff' stroke-width='0.3' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23comedy-pattern)'/%3E%3C/svg%3E")
                          `,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                          backgroundSize: "40px 40px",
                        }}
                      >
                        {service.number}
                      </div>

                      {/* Fallback/outline for browsers that don't support background-clip */}
                      <div className="font-black absolute inset-0 text-[200px] sm:text-[250px] lg:text-[300px] leading-none select-none text-transparent bg-gradient-to-b from-gray-400/20 to-gray-600/10 bg-clip-text -z-10">
                        {service.number}
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-6 -right-6 w-4 h-4 bg-gradient-to-r from-orange-400/60 to-amber-400/60 rounded-full opacity-80"></div>
                      <div className="absolute top-1/4 -left-8 w-3 h-3 bg-purple-500/50 rounded-full opacity-60"></div>
                      <div className="absolute bottom-12 right-16 w-5 h-5 border-2 border-cyan-400/40 rounded-full"></div>
                      <div className="absolute top-3/4 -right-4 w-2 h-2 bg-pink-400/60 rounded-full"></div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="flex-1 text-center lg:text-left max-w-2xl">
                    <GlassCard className="p-8 lg:p-12">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                          {service.title}
                        </h3>

                        <p className="text-gray-300 mb-8 text-lg lg:text-xl leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-6 mb-8">
                          <h4 className="text-orange-400 font-semibold text-lg lg:text-xl">
                            What's Included:
                          </h4>
                          <ul className="space-y-4">
                            {service.features.map((feature, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: 0.4 + i * 0.1,
                                }}
                                className="flex items-start text-gray-300"
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center mr-4 mt-0.5">
                                  <CheckCircle
                                    className="text-white"
                                    size={14}
                                  />
                                </div>
                                <span className="text-base lg:text-lg">
                                  {feature}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Pricing and CTA */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 pt-6 border-t border-white/10">
                          <div>
                            <div className="text-sm text-gray-400 mb-2">
                              Investment Starting At
                            </div>
                            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                              {service.price}
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                              to="/contact"
                              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
                            >
                              Get Started
                              <ArrowRight className="ml-2" size={20} />
                            </Link>
                            <Link
                              to="/portfolio"
                              className="inline-flex items-center justify-center px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-all duration-300 font-semibold text-lg"
                            >
                              See Examples
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    </GlassCard>
                  </div>
                </div>

                {/* Separator line - only show between services, not after the last one */}
                {index < services.length - 1 && (
                  <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Process */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-400">
              From idea to viral content in 4 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <GlassCard className="p-8 text-center hover:scale-105 h-full">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.step}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Go Viral?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's create comedy content that not only entertains but drives
                real results for your brand. Join the growing list of successful
                partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  Start Your Campaign
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg"
                >
                  See Success Stories
                </Link>
              </div>
            </motion.div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
