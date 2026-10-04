import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Guarantees = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const guarantees = [
    ['01', 'High Test Accuracy', 'Reliable test generation with minimal false positives so your pipeline stays clean and trustworthy.', '✓'],
    ['02', '10x Faster Than Manual', 'What takes a QA team days to write and maintain, QraftAI does in minutes.', '⚡'],
    ['03', 'Minimal Cost', 'Enterprise-grade automation without bloated legacy tooling or unnecessary licenses.', '◈'],
    ['04', 'Always-On Support', 'Our team is available via WhatsApp and email when you need help with your setup.', '◌'],
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-[#060a14]">
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: .7 }} className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-eyebrow">Built for confidence</span>
          <h2 className="section-title mt-5">Your success is<br /><span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">our promise.</span></h2>
          <p className="section-copy mt-6">QraftAI is designed around a simple principle: reliable software testing should be accessible without adding another layer of operational complexity.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {guarantees.map(([number, title, description, icon], index) => (
            <motion.article key={number} initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }} transition={{ duration: .6, delay: index * .08 }} whileHover={{ y: -5 }} className="glass-card p-6 sm:p-7">
              <div className="relative z-10 flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-teal/15 bg-teal/[0.08] text-teal text-lg">{icon}</span><span className="text-[10px] font-mono text-white/20">{number}</span></div>
              <h3 className="relative z-10 mt-9 text-lg font-semibold">{title}</h3>
              <p className="relative z-10 mt-3 text-sm leading-6 text-white/45">{description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: .7, delay: .45 }} className="relative mt-8 overflow-hidden rounded-3xl border border-teal/15 bg-gradient-to-r from-teal/[0.08] via-white/[0.025] to-purple/[0.08] p-7 sm:p-9">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal/10 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div><p className="text-xs uppercase tracking-[.2em] text-teal">Ready when you are</p><h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">Start automating your QA today.</h3><p className="mt-2 text-sm text-white/45">No credit card. No scripts. Just an AI testing teammate.</p></div>
            <div className="flex flex-col sm:flex-row gap-3"><a href="https://qa.swiftscalesoftware.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">Try QraftAI Free ↗</a><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">Book a Demo</button></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantees;
