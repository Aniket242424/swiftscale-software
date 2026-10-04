import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const values = [
    ['✦', 'Agentic, Not Just AI', 'QraftAI is an agent assigned to your product, learning continuously and working alongside your team.'],
    ['◎', 'Built by Practitioners', 'Our team brings experience across software engineering, cloud infrastructure, product and business development.'],
    ['◌', 'Global Ambition', 'Founded in Pune, built for the world — with a mission to make AI-powered testing accessible to modern teams.'],
    ['⌘', 'End-to-End Software Development', 'Beyond QraftAI, we build custom web and mobile products, CRM tools and full-cycle software experiences.'],
  ];

  return (
    <section id="about" className="section-padding bg-[#050816] relative overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: .7 }} className="lg:col-span-6">
            <span className="section-eyebrow">About SwiftScale</span>
            <h2 className="section-title mt-5">Building the software<br /><span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">we wished existed.</span></h2>
            <div className="mt-7 space-y-5 text-white/55 leading-7 text-sm sm:text-base">
              <p>SwiftScale Software was founded in 2025 in Pune, India, with a clear mission: make high-quality software testing accessible to development teams without the complexity, cost or manual effort traditionally required.</p>
              <p>Our flagship product, <a href="https://qa.swiftscalesoftware.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline font-medium">QraftAI</a>, is an AI agent that learns an application end-to-end, generates test cases continuously, executes them across browsers and mobile devices, and plugs into CI/CD workflows.</p>
              <p>We also take on select <Link to="/services" className="text-teal hover:underline font-medium">end-to-end software builds</Link> — from custom web and mobile apps to CRM tools and full-cycle product development.</p>
            </div>
          </motion.div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {values.map(([icon, title, description], index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }} transition={{ duration: .6, delay: .1 + index * .08 }} className="glass-card p-6">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-teal/[0.08] border border-teal/15 text-teal">{icon}</div>
                <h3 className="relative z-10 mt-7 text-base font-semibold">{title}</h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-white/45">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
