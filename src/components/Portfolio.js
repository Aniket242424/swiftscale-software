import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:'-100px' });
  const steps = [
    ['01','Discover','QraftAI maps your product, flows and edge cases automatically.'],
    ['02','Generate','It turns that context into relevant tests and assertions.'],
    ['03','Execute','Tests run across browsers and mobile environments.'],
    ['04','Analyze','Failures arrive with context, coverage and suggested fixes.'],
  ];

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden bg-[#060a14]">
      <div className="absolute inset-0 premium-grid pointer-events-none opacity-40" />
      <div className="container-max relative">
        <motion.div ref={ref} initial={{opacity:0,y:28}} animate={isInView?{opacity:1,y:0}:{opacity:0,y:28}} transition={{duration:.65}} className="mb-14 max-w-3xl">
          <span className="section-eyebrow">How QraftAI works</span>
          <h2 className="section-title mt-5">From sign-up to shipping.<br/><span className="gradient-text-shimmer">Your agent handles the QA.</span></h2>
          <p className="section-copy mt-6 max-w-2xl">A simple workflow on the surface. Underneath, your agent continuously learns, executes and explains what changed.</p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div initial={{opacity:0,x:-25}} animate={isInView?{opacity:1,x:0}:{opacity:0,x:-25}} transition={{duration:.7}} className="glass-card relative overflow-hidden p-6 sm:p-7">
            <div className="mb-5 flex items-center justify-between"><span className="text-[10px] uppercase tracking-[.18em] text-white/30">Agent activity</span><span className="flex items-center gap-2 text-[9px] text-emerald-300"><span className="status-dot"/> Live</span></div>
            <div className="space-y-3">
              {['Discovering checkout flow','Generating edge-case tests','Running Chrome + Safari','Analyzing latest results'].map((item,i)=>(
                <motion.div key={item} initial={{opacity:0,x:12}} animate={isInView?{opacity:1,x:0}:{opacity:0,x:12}} transition={{delay:.25+i*.12}} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
                  <div className="flex items-center justify-between gap-3"><span className="text-xs text-white/60">{item}</span><span className={`h-2 w-2 rounded-full ${i===3?'bg-cyan-300':'bg-emerald-400'}`} /></div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.05]"><motion.div initial={{width:0}} animate={{width:`${[78,62,88,72][i]}%`}} transition={{delay:.45+i*.12,duration:.8}} className="dashboard-bar h-full rounded-full bg-gradient-to-r from-cyan-300/80 to-blue-400/60" /></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative space-y-3">
            <div className="absolute left-6 top-6 bottom-6 hidden w-px bg-gradient-to-b from-cyan-300/50 via-white/10 to-purple-400/30 sm:block" />
            {steps.map(([number,title,description],index)=>(
              <motion.article key={number} initial={{opacity:0,x:25}} animate={isInView?{opacity:1,x:0}:{opacity:0,x:25}} transition={{duration:.55,delay:index*.09}} whileHover={{x:5}} className="group relative flex gap-4 sm:gap-6">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-[#0a1423] font-mono text-[10px] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,.05)]">{number}</div>
                <div className="glass-card flex-1 p-5 sm:p-6">
                  <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/45">{description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div initial={{opacity:0,y:18}} animate={isInView?{opacity:1,y:0}:{opacity:0,y:18}} transition={{duration:.55,delay:.55}} className="mt-12 text-center">
          <a href="https://qa.swiftscalesoftware.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">Try QraftAI Free <span>→</span></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
