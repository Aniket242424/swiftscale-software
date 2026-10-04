import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ProductMockup from './ProductMockup';

const Hero = () => {
  const metrics = [
    ['2,500+', 'tests generated'],
    ['98.7%', 'test pass rate'],
    ['70%', 'faster releases'],
    ['6', 'browser targets'],
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[#050816] pt-28 sm:pt-32">
      <div className="ambient-stage">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="floating-particle" style={{ left: `${12 + i * 14}%`, top: `${18 + (i * 11) % 60}%`, animationDelay: `${-i * 1.2}s` }} />
        ))}
        <span className="ambient-orb ambient-orb-teal" />
        <span className="ambient-orb ambient-orb-purple" />
        <span className="ambient-orb ambient-orb-blue" />
        <span className="hero-beam" />
      </div>
      <Navbar />
      <div className="absolute inset-0 premium-grid pointer-events-none" />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-120px)] items-center gap-12 py-14 lg:grid-cols-[.88fr_1.12fr] lg:gap-14 lg:py-20">
          <div className="relative z-10">
            <motion.div initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ duration:.55 }} className="section-eyebrow mb-6">
              <span className="status-dot" /> AI-powered software testing
            </motion.div>

            <motion.h1 initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:.75,delay:.08 }} className="max-w-3xl text-5xl font-bold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-[70px]">
              Your AI QA Engineer<br />
              <span className="text-white/48">That </span><span className="gradient-text-shimmer">Never Sleeps.</span>
            </motion.h1>

            <motion.p initial={{ opacity:0,y:18 }} animate={{ opacity:1,y:0 }} transition={{ duration:.65,delay:.18 }} className="mt-7 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg lg:text-xl">
              Automatically discover, generate and execute tests for your web and mobile applications.
            </motion.p>

            <motion.div initial={{ opacity:0,y:18 }} animate={{ opacity:1,y:0 }} transition={{ duration:.65,delay:.28 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a href="https://qa.swiftscalesoftware.com/" target="_blank" rel="noopener noreferrer" whileHover={{ y:-2 }} whileTap={{ scale:.985 }} className="btn-primary">
                Try QraftAI <span aria-hidden="true">→</span>
              </motion.a>
              <motion.button whileHover={{ y:-2 }} whileTap={{ scale:.985 }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })} className="btn-secondary">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/40 text-[9px]">▶</span>
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:.7,delay:.45 }} className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/35">
              {['No manual test writing','Cross-browser testing','AI-powered insights'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2"><span className="text-cyan-300">✓</span>{item}</span>
              ))}
            </motion.div>
          </div>

          <div className="relative lg:pl-2">
            <ProductMockup />
          </div>
        </div>

        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:'-80px' }} transition={{ duration:.65 }} className="pb-12">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl lg:grid-cols-4">
            {metrics.map(([value,label], index) => (
              <div key={label} className={`relative px-5 py-5 sm:px-7 sm:py-6 ${index < 3 ? 'border-r border-white/[0.07]' : ''} ${index > 1 ? 'border-t lg:border-t-0 border-white/[0.07]' : ''}`}>
                <div className="text-2xl font-semibold tracking-tight sm:text-3xl">{value}</div>
                <div className="mt-1 text-[9px] uppercase tracking-[.14em] text-white/35 sm:text-[10px]">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
