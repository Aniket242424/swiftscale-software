import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const features = [
    { title:'Your Dedicated AI Agent', description:'An agent assigned to your product learns your application and keeps generating relevant tests as it evolves.', icon:'✦' },
    { title:'Mobile App Automation', description:'No-code mobile testing where your agent taps, swipes and validates like a real user on real devices.', icon:'⌁', isNew:true },
    { title:'Jira & Test Tool Integration', description:'Pull tickets and context from your existing tools, generate test cases and run them without copy-paste.', icon:'↗' },
    { title:'Reliable & Secure', description:'Enterprise-grade infrastructure, encryption and managed cloud operations for dependable test execution.', icon:'✓' },
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 premium-grid pointer-events-none opacity-60" />
      <div className="container-max relative">
        <motion.div ref={ref} initial={{opacity:0,y:28}} animate={isInView?{opacity:1,y:0}:{opacity:0,y:28}} transition={{duration:.65}} className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Why QraftAI</span>
            <h2 className="section-title mt-5">Built for modern teams.<br/><span className="gradient-text-shimmer">Designed to keep learning.</span></h2>
          </div>
          <p className="section-copy max-w-md">A testing agent that understands your product, not just your selectors — and gets more useful with every release.</p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-12">
          <motion.div initial={{opacity:0,x:-25}} animate={isInView?{opacity:1,x:0}:{opacity:0,x:-25}} transition={{duration:.7}} className="glass-card animated-border shimmer-surface premium-hover lg:col-span-7 min-h-[430px] p-7 sm:p-9">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between"><span className="text-sm font-semibold text-cyan-300">01 / AI agent</span><span className="flex items-center gap-2 text-[10px] text-emerald-300"><span className="status-dot"/> Active</span></div>
                <h3 className="mt-8 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">Your QA teammate learns the product, not just the selectors.</h3>
                <p className="mt-5 max-w-xl leading-7 text-white/48">It builds context around flows, edge cases and business logic so your test suite becomes more useful as the application grows.</p>
              </div>
              <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07101b] p-4">
                <span className="scan-line" />
                <div className="mb-3 flex items-center gap-3"><span className="text-cyan-300">$</span><span className="font-mono text-xs text-white/35">agent.run('checkout')</span></div>
                <div className="space-y-2 font-mono text-[11px]"><div className="text-white/30">→ discovering application flow...</div><div className="text-white/45">→ 24 test cases generated</div><div className="text-emerald-300">✓ checkout.spec passed</div></div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {features.map((feature,index)=>(
              <motion.article key={feature.title} initial={{opacity:0,y:25}} animate={isInView?{opacity:1,y:0}:{opacity:0,y:25}} transition={{duration:.6,delay:.08+index*.08}} whileHover={{y:-6,rotateX:1,rotateY:-1}} className="glass-card premium-hover group p-6">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between"><span className="hover-icon flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300">{feature.icon}</span>{feature.isNew&&<span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-2 py-1 text-[8px] uppercase tracking-[.14em] text-cyan-200">New</span>}</div>
                  <h3 className="mt-8 text-base font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/42">{feature.description}</p>
                  <span className="magnetic-arrow mt-auto pt-5 text-sm text-white/20 group-hover:text-cyan-300">→</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
