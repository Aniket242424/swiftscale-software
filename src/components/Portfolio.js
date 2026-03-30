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
      title: "Connect Your Web App",
      description: "Link QraftAI to your web application — no SDK installation, no code changes. Just provide your app URL and you're ready to go in minutes.",
      tags: ["Web Apps", "Any Framework", "Zero Setup", "Instant Start"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "02",
      title: "AI Generates Test Cases",
      description: "QraftAI's AI engine explores your application, understands its flows, and automatically generates a comprehensive suite of test cases — covering edge cases you'd never think to write.",
      tags: ["AI-Powered", "Auto Discovery", "Full Coverage", "Edge Cases"],
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "03",
      title: "Live Test Execution",
      description: "Watch your tests execute in real time across real browsers — Chrome, Firefox, Edge, and Safari. See every click, every assertion, every result — live as it happens.",
      tags: ["Chrome", "Firefox", "Safari", "Edge", "Live View"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "04",
      title: "CI/CD Pipeline Integration",
      description: "Plug QraftAI into GitHub Actions, Jenkins, GitLab CI, or any CI/CD tool. Tests run automatically on every commit or pull request — keeping your pipeline always green.",
      tags: ["GitHub Actions", "Jenkins", "GitLab CI", "Auto Trigger"],
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "05",
      title: "AI-Powered Reports",
      description: "Get intelligent reports after every run — not just pass/fail counts, but AI-generated insights on what failed, why it failed, and what to fix. Actionable, not overwhelming.",
      tags: ["Smart Reports", "Root Cause", "Fix Suggestions", "Trends"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "06",
      title: "Ship with Confidence",
      description: "Every release is backed by automated AI-tested coverage. Catch regressions before your users do, ship faster, and build a product your customers can trust.",
      tags: ["Regression Free", "Fast Release", "Quality Assured", "User Trust"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
            How <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">QraftAI</span> Works
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            From zero to fully automated testing in minutes. No scripts. No setup headaches. Just AI doing the heavy lifting.
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
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/25 h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-5xl font-bold text-white/20 font-poppins">{step.step}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-semibold font-poppins mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed flex-grow">
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
            href="https://qaforge.swiftscalesoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Start Using QraftAI Free
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
