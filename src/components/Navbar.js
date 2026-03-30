import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#services' },
    { name: 'Why QraftAI', href: '#features' },
    { name: 'How It Works', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy/95 backdrop-blur-lg border-b border-white/10' 
          : 'bg-navy/20 backdrop-blur-sm'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo size="default" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={item.isExternal ? undefined : (e) => {
                  e.preventDefault();
                  const targetElement = document.querySelector(item.href);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    console.log('Element not found:', item.href);
                  }
                }}
                whileHover={{ y: -2 }}
                className="text-white/80 hover:text-teal transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-sm px-6 py-2"
            >
              Try QraftAI Free
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              console.log('Mobile menu button clicked, current state:', isMobileMenuOpen);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`lg:hidden p-2 text-white z-50 relative ${isMobileMenuOpen ? 'bg-white/10 rounded-lg' : ''}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-navy/95 backdrop-blur-lg border-t border-white/10 relative z-50"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={item.isExternal ? () => {
                  console.log('Navigating to external page:', item.href);
                  setIsMobileMenuOpen(false);
                  // Use setTimeout to ensure menu closes before navigation
                  setTimeout(() => {
                    window.location.href = item.href;
                  }, 100);
                } : (e) => {
                  e.preventDefault();
                  console.log('Attempting to scroll to:', item.href);
                  setIsMobileMenuOpen(false);
                  
                  // Use setTimeout to ensure menu closes before scrolling
                  setTimeout(() => {
                    const targetElement = document.querySelector(item.href);
                    if (targetElement) {
                      console.log('Element found, scrolling to:', item.href);
                      targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    } else {
                      console.log('Element not found:', item.href);
                      // Fallback: try to scroll to the element by ID
                      const elementId = item.href.replace('#', '');
                      const elementById = document.getElementById(elementId);
                      if (elementById) {
                        console.log('Found element by ID, scrolling to:', elementId);
                        elementById.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      } else {
                        console.log('Element not found by ID either:', elementId);
                      }
                    }
                  }, 200);
                }}
                whileHover={{ x: 10 }}
                className="block text-white/80 hover:text-teal transition-colors duration-300 font-medium px-4"
              >
                {item.name}
              </motion.a>
            ))}
            <div className="px-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="btn-primary w-full text-sm px-6 py-2"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
