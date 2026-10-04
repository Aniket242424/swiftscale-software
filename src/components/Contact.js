import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#060a14]">
      <div className="absolute inset-0 premium-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-teal/[0.08] blur-[120px] pointer-events-none" />
      <div className="container-max relative">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: .7 }} className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-eyebrow">Let's talk</span>
          <h2 className="section-title mt-5">See QraftAI<br /><span className="bg-gradient-to-r from-teal via-cyan-300 to-purple bg-clip-text text-transparent">in action.</span></h2>
          <p className="section-copy mt-6">Book a live walkthrough, ask questions about your workflow, or explore enterprise pricing with the SwiftScale team.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -25 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -25 }} transition={{ duration: .7, delay: .1 }} className="glass-card p-7 sm:p-9">
            <div className="relative z-10">
              <div className="flex items-center justify-between"><span className="text-xs uppercase tracking-[.2em] text-teal">Live walkthrough</span><span className="text-[10px] text-emerald-300 flex items-center gap-2"><span className="status-dot"/> 30 min</span></div>
              <h3 className="mt-7 text-2xl font-semibold">Book a free QraftAI demo.</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">No slides. We'll show the product live, explain the workflow and answer your questions.</p>
              <div className="mt-7 space-y-3">{['Live QraftAI walkthrough', 'AI test generation in action', 'CI/CD integration demo', 'Pricing & onboarding Q&A'].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-white/65"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal/10 text-teal text-xs">✓</span>{item}</div>)}</div>
              <a href="https://calendly.com/soubhik-das-swiftscalesoftware/qraftai-demo" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full">Book Your Free Demo <span>→</span></a>
              <p className="mt-4 text-center text-[11px] text-white/25">No credit card required · Cancel anytime</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 25 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 25 }} transition={{ duration: .7, delay: .2 }} className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[.2em] text-white/30">Get in touch</p>
              <h3 className="mt-4 text-2xl font-semibold">Have a question?</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">Whether you need help getting started or want to explore enterprise options, our team is ready.</p>
              <div className="mt-9 space-y-3">
                <div className="rounded-2xl border border-white/[0.07] bg-black/15 p-4"><p className="text-[10px] uppercase tracking-[.15em] text-white/25">Email</p><p className="mt-1 text-sm text-white/75">soubhik.das@swiftscalesoftware.com</p></div>
                <div className="rounded-2xl border border-white/[0.07] bg-black/15 p-4"><p className="text-[10px] uppercase tracking-[.15em] text-white/25">Phone</p><p className="mt-1 text-sm text-white/75">+91 9172665769</p></div>
                <div className="rounded-2xl border border-white/[0.07] bg-black/15 p-4"><p className="text-[10px] uppercase tracking-[.15em] text-white/25">Location</p><p className="mt-1 text-sm text-white/75">Pune, India</p></div>
              </div>
              <a href="https://wa.me/919172665769?text=Hi%20SwiftScale%20Software!%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors">Chat on WhatsApp <span>↗</span></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
