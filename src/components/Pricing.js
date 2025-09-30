import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Starter Website",
      price: "₹24,999",
      period: "one-time",
      originalPrice: "₹39,999",
      discount: "38% OFF",
      description: "Perfect for small businesses, startups, and local shops worldwide",
      features: [
        "5 Pages Website",
        "Mobile Responsive",
        "Contact Form",
        "WhatsApp Integration",
        "Google Maps Integration",
        "1 Month Post-Delivery Support",
        "Free Domain (1 Year)",
        "Free Hosting (1 Year)",
        "SEO Basic Setup"
      ],
      popular: false,
      badge: "BEST VALUE"
    },
    {
      name: "Business Website",
      price: "₹49,999",
      period: "one-time",
      originalPrice: "₹79,999",
      discount: "38% OFF",
      description: "Ideal for growing businesses and service providers globally",
      features: [
        "10 Pages Website",
        "Admin Dashboard",
        "Online Booking System",
        "Payment Gateway",
        "Google Analytics",
        "3 Months Post-Delivery Support",
        "Free Domain (1 Year)",
        "Free Hosting (1 Year)",
        "Social Media Integration",
        "Email Marketing Setup"
      ],
      popular: true,
      badge: "MOST POPULAR"
    },
    {
      name: "E-commerce Store",
      price: "₹99,999",
      period: "one-time",
      originalPrice: "₹1,49,999",
      discount: "33% OFF",
      description: "Complete online store for selling products worldwide",
      features: [
        "Unlimited Products",
        "Payment Gateway",
        "Inventory Management",
        "Order Tracking",
        "Customer Dashboard",
        "6 Months Post-Delivery Support",
        "Free Domain (1 Year)",
        "Free Hosting (1 Year)",
        "Mobile App (Basic)",
        "WhatsApp Order Integration"
      ],
      popular: false,
      badge: "PREMIUM"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-slate-900 to-navy">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Professional Websites <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Starting ₹24,999</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-4">
            Perfect for businesses worldwide - from local shops to global enterprises. Get your professional website with free domain & hosting. Special launch pricing!
          </p>
          <p className="text-sm text-white/60 max-w-2xl mx-auto mb-8">
            <strong>Note:</strong> All plans include post-delivery support. For ongoing maintenance, updates, and long-term partnership, we offer dedicated maintenance packages starting from ₹5,000/month.
          </p>
          
          {/* Value Stacking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-bold text-white mb-4">🎁 What You Get (Total Value: ₹45,000)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-white/90">Professional Design (₹15,000)</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-white/90">Mobile Responsive (₹8,000)</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-white/90">SEO Setup (₹5,000)</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-white/90">Free Domain (₹1,200)</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-white/90">Free Hosting (₹2,400)</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-white/90">3 Months Support (₹9,000)</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-white/70">Total Value:</span>
                <span className="text-2xl font-bold text-white">₹45,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-teal font-semibold">Your Price:</span>
                <span className="text-2xl font-bold text-teal">₹24,999</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">You Save:</span>
                <span className="text-xl font-bold text-green-400">₹20,001</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className={`px-6 py-2 rounded-full text-sm font-semibold ${
                  plan.badge === 'BEST VALUE' 
                    ? 'bg-gradient-to-r from-green-500 to-teal text-white' 
                    : plan.badge === 'MOST POPULAR'
                    ? 'bg-gradient-to-r from-teal to-purple text-white'
                    : 'bg-gradient-to-r from-purple to-pink-500 text-white'
                }`}>
                  {plan.badge}
                </span>
              </div>
              
              <div className={`glass-card h-full ${plan.popular ? 'ring-2 ring-teal/50' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-poppins mb-2">{plan.name}</h3>
                  {plan.discount && (
                    <div className="mb-2">
                      <span className="bg-gradient-to-r from-teal to-purple text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {plan.discount}
                      </span>
                    </div>
                  )}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/60">/{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-white/50 line-through text-lg">
                        {plan.originalPrice}
                      </div>
                    )}
                  </div>
                  <p className="text-white/80">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal to-purple text-white hover:shadow-lg hover:shadow-teal/25'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.name === 'Software' ? 'Contact Us' : 'Get Started'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/80 mb-6">
            Ready to grow your business online? Get started today!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Get Your Website Now - ₹24,999
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
