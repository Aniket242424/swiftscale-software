import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Get started with QraftAI — no credit card needed. Perfect for individuals and small teams evaluating the platform.",
      features: [
        "Up to 50 test cases/month",
        "AI Test Case Generation",
        "Web App Support",
        "Live Test Execution",
        "Basic AI Reports",
        "Community Support"
      ],
      popular: false,
      badge: "FREE FOREVER",
      cta: "Get Started Free"
    },
    {
      name: "Pro",
      price: "Contact Us",
      period: "per month",
      description: "Full-power QraftAI for growing teams. CI/CD integration, advanced reporting, and mobile support included.",
      features: [
        "Unlimited Test Cases",
        "AI Test Case Generation",
        "Full Cross-Browser Support (Chrome, Firefox, Safari, Edge)",
        "Live Test Execution",
        "CI/CD Integration (GitHub, Jenkins, GitLab)",
        "AI-Powered Reports with Fix Suggestions",
        "Priority Email Support",
        "Test History & Trend Analysis"
      ],
      popular: true,
      badge: "MOST POPULAR",
      cta: "Get Pro Access"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large teams and organizations needing dedicated infrastructure, custom integrations, and SLA-backed support.",
      features: [
        "Everything in Pro",
        "Dedicated Cloud Infrastructure",
        "Custom CI/CD Integrations",
        "On-Premise Deployment Option",
        "SSO & Advanced Security",
        "SLA-Backed Uptime Guarantee",
        "Dedicated Account Manager",
        "Custom Onboarding & Training"
      ],
      popular: false,
      badge: "ENTERPRISE",
      cta: "Talk to Sales"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-slate-900 to-navy">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Simple, Transparent <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Start free. Scale when you're ready. No hidden fees, no lock-in — just reliable AI test automation at a price that makes sense.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className={`px-6 py-2 rounded-full text-sm font-semibold ${
                  plan.badge === 'BEST VALUE' 
                    ? 'bg-gradient-to-r from-green-500 to-teal text-white' 
                    : plan.badge === 'MOST POPULAR'
                    ? 'bg-gradient-to-r from-teal to-purple text-white'
                    : 'bg-gradient-to-r from-purple to-pink-500 text-white'
                }`}>
                  {plan.badge}
                </span>
              </div>
              
              <div className={`glass-card h-full ${plan.popular ? 'ring-2 ring-teal/50' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-poppins mb-2">{plan.name}</h3>
                  {plan.discount && (
                    <div className="mb-2">
                      <span className="bg-gradient-to-r from-teal to-purple text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {plan.discount}
                      </span>
                    </div>
                  )}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/60">/{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-white/50 line-through text-lg">
                        {plan.originalPrice}
                      </div>
                    )}
                  </div>
                  <p className="text-white/80">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={plan.name === 'Starter' ? 'https://qaforge.swiftscalesoftware.com/' : '#contact'}
                  target={plan.name === 'Starter' ? '_blank' : '_self'}
                  rel={plan.name === 'Starter' ? 'noopener noreferrer' : ''}
                  onClick={plan.name !== 'Starter' ? (e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); } : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal to-purple text-white hover:shadow-lg hover:shadow-teal/25'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/80 mb-6">
            Not sure which plan is right for you? Book a free demo and we'll walk you through QraftAI live.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Book a Free Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
