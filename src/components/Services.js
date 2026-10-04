import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const services = [
    { number: '01', title: 'Writes Your Tests', description: 'Your agent generates comprehensive test cases for every flow in your application — no manual scripting, boilerplate or copy-paste.', icon: '✦' },
    { number: '02', title: 'Runs Them Live', description: 'Execute tests in real browsers and devices. Watch every click, assertion and result as it happens.', icon: '▶' },
    { number: '03', title: 'Plugs Into Your Pipeline', description: 'Connect GitHub Actions, Jenkins, GitLab CI and more. Tests run on every commit, PR and release.', icon: '⌘' },
    { number: '04', title: 'Reports What Matters', description: 'Get root-cause context and actionable insights instead of a wall of raw test logs.', icon: '↗' },
    { number: '05', title: 'Tests Web & Mobile', description: 'Cover Chrome, Firefox, Safari, Edge and mobile apps with one continuous AI testing workflow.', icon: '▣' },
    { number: '06', title: 'Gets Sharper Over Time', description: 'Coverage compounds with every release, turning your agent into a long-term QA teammate.', icon: '∞' },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[#060a14]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      <div className="container-max">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: .7 }} className="max-w-3xl mb-14">
          <span className="section-eyebrow">What the agent does</span>
          <h2 className="section-title mt-5">One AI teammate.<br /><span className="gradient-text-shimmer">Every QA workflow.</span></h2>
          <p className="section-copy mt-6 max-w-2xl">QraftAI discovers, generates, executes and explains — so your team can spend more time building and less time maintaining tests.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <motion.article key={service.number} initial={{ opacity: 0, y: 35 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }} transition={{ duration: .65, delay: index * .08 }} whileHover={{ y: -10, rotateX: 1.5, rotateY: -1, scale: 1.01 }} className="glass-card hover-lift premium-hover p-6 sm:p-7 min-h-[260px] group">
              <div className="relative z-10 flex items-start justify-between mb-12">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-teal/15 bg-teal/[0.08] text-teal font-semibold group-hover:bg-teal/15 transition-colors icon-pulse hover-icon">{service.icon}</span>
                <span className="text-xs font-mono text-white/20">{service.number}</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{service.description}</p>
              </div>
              <div className="absolute right-5 bottom-5 text-white/10 group-hover:text-teal/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 magnetic-arrow">↗</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
