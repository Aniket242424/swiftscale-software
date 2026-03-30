import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI-First Product Company",
      description: "We don't just use AI as a feature — we build products where AI is the core engine. QraftAI is proof of that philosophy in action."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Built by Practitioners",
      description: "Our team has real-world experience in software engineering, cloud infrastructure, product management, and business development — we build tools we'd want to use ourselves."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      title: "Global Ambition",
      description: "Founded in Pune, built for the world. We are actively seeking investors and partners to scale QraftAI into a globally adopted web testing standard."
    }
  ];

  return (
    <section id="about" className="section-padding bg-navy">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          {/* Company Story */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
              About <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">SwiftScale</span>
            </h2>
            
            <div className="space-y-6 text-white/90 leading-relaxed">
              <p className="text-lg">
                SwiftScale Software was founded in 2025 in Pune, India, with a clear mission: make high-quality software testing accessible to every development team — without the complexity, cost, or manual effort traditionally required.
              </p>

              <p>
                We are an AI product company. Our flagship product, <a href="https://qaforge.swiftscalesoftware.com/" target="_blank" rel="noopener noreferrer" className="text-teal font-semibold hover:underline">QraftAI</a>, is an AI-powered web test automation platform that automatically generates test cases, executes them live across all major browsers, integrates seamlessly into CI/CD pipelines, and delivers intelligent reports — all without writing a single line of test script.
              </p>

              <p>
                Led by a team of engineers, cloud specialists, and product strategists with backgrounds at companies like Amazon, SwiftScale is building the next generation of developer tools — starting with QraftAI.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-teal flex-shrink-0 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-poppins mb-2">{value.title}</h3>
                    <p className="text-white/80">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
