import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Capabilities', href: '#services' },
    { name: 'Why QraftAI', href: '#features' },
    { name: 'How It Works', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-5"
    >
      <div className={`mx-auto max-w-7xl rounded-2xl sm:rounded-[22px] border transition-all duration-500 ${
        isScrolled
          ? 'border-white/[0.13] bg-[#070b16]/85 shadow-[0_20px_70px_rgba(0,0,0,.38)] backdrop-blur-2xl'
          : 'border-white/[0.08] bg-black/20 backdrop-blur-xl'
      }`}>
        <div className="flex items-center justify-between px-4 sm:px-5 lg:px-6 py-3">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} aria-label="SwiftScale home">
            <Logo size="default" />
          </a>

          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                whileHover={{ y: -2, scale: 1.02 }}
                className="relative px-3 py-2 rounded-xl text-[13px] font-medium text-white/60 hover:text-white hover:bg-white/[0.06] hover:shadow-[0_0_24px_rgba(45,212,191,.06)] transition-all duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center gap-2 text-[11px] text-white/45 px-3">
              <span className="status-dot" /> Agent online
            </span>
            <motion.a
              href="https://qa.swiftscalesoftware.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: .98 }}
              className="btn-primary text-sm px-5 py-2.5 rounded-xl"
            >
              Try QraftAI <span aria-hidden="true">↗</span>
            </motion.a>
          </div>

          <motion.button
            whileTap={{ scale: .94 }}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="lg:hidden rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-white"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/[0.08]"
            >
              <div className="p-3 space-y-1">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="block rounded-xl px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/[0.06] hover:shadow-[0_0_24px_rgba(45,212,191,.06)] transition-all duration-300">
                    {item.name}
                  </a>
                ))}
                <a href="https://qa.swiftscalesoftware.com/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full mt-2 text-sm rounded-xl">
                  Try QraftAI Free ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
