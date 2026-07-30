import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      step: "01",
      title: "Hire Your Agent",
      description: "Sign up and we assign a dedicated AI agent to your product. Like a new SDET joining your team — minus the offer letter.",
      tags: ["Sign Up", "Dedicated Agent", "Day One", "No Setup"]
    },
    {
      step: "02",
      title: "It Learns Your App",
      description: "Your agent reads your application end-to-end. UI, flows, edge cases, business logic — onboarded in hours, not weeks.",
      tags: ["Auto Discovery", "Business Logic", "Full Context", "Hours Not Weeks"]
    },
    {
      step: "03",
      title: "It Connects to Your Tools",
      description: "Plug in Jira, GitHub, GitLab, or any test management tool. Your agent pulls the context it needs to write the right tests.",
      tags: ["Jira", "GitHub", "GitLab", "Test Management"]
    },
    {
      step: "04",
      title: "It Writes Your Test Cases",
      description: "For every change, your agent generates the test cases your team would write — covering edge cases you'd never think of.",
      tags: ["AI-Generated", "Edge Cases", "Full Coverage", "Always Current"]
    },
    {
      step: "05",
      title: "It Runs Them Live",
      description: "Tests execute across every browser and every mobile app. Real browsers. Real devices. Real-time results. On every PR.",
      tags: ["Chrome", "Firefox", "Safari", "Edge", "Mobile Apps"]
    },
    {
      step: "06",
      title: "It Never Logs Off",
      description: "Failures get root-cause analysis. Coverage compounds with every release. Your agent gets sharper the longer it works for you.",
      tags: ["Root Cause", "Smart Reports", "Compounding Coverage", "24/7"]
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-navy">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            How Your <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">AI Agent</span> Works
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            From sign-up to shipping — your QA team has a new teammate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/25 h-full flex flex-col">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl font-bold font-poppins bg-gradient-to-br from-teal to-purple bg-clip-text text-transparent leading-none">
                    {step.step}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold font-poppins">
                    {step.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed flex-grow">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-teal/20 text-teal text-sm rounded-full border border-teal/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://qa.swiftscalesoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Hire Your Agent — Free
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
