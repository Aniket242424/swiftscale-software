import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const QRAFTAI_APP_URL = 'https://qa.swiftscalesoftware.com/';

const plans = [
  {
    name: 'Starter',
    price: 49,
    steps: '200 steps / month',
    description: 'For individuals and small teams running QraftAI on a single product.',
    features: [
      '200 test steps / month',
      'AI test case generation',
      'Chrome + Firefox execution',
      'Standard AI reports',
      'Community support'
    ],
    cta: 'Start with Starter',
    badge: null,
    href: QRAFTAI_APP_URL
  },
  {
    name: 'Pro',
    price: 99,
    steps: '500 steps / month',
    description: 'For teams running QraftAI across CI/CD with full browser and reporting depth.',
    features: [
      '500 test steps / month',
      'Everything in Starter',
      'All browsers (Chrome, Firefox, Safari, Edge)',
      'CI/CD integration (GitHub, Jenkins, GitLab)',
      'AI reports with fix suggestions',
      'Test history & trend analysis',
      'Priority email support'
    ],
    cta: 'Start with Pro',
    badge: 'MOST POPULAR',
    badgeStyle: 'popular',
    href: QRAFTAI_APP_URL,
    highlight: true
  },
  {
    name: 'Unlimited',
    price: 399,
    steps: 'Unlimited steps',
    description: 'For teams that run continuously. Ship without thinking about quotas.',
    features: [
      'Unlimited test steps',
      'Everything in Pro',
      'Dedicated cloud infrastructure',
      'SSO & advanced security',
      'Dedicated success manager'
    ],
    cta: 'Get Unlimited',
    badge: 'LAUNCH OFFER',
    badgeStyle: 'offer',
    href: QRAFTAI_APP_URL
  }
];

const trustItems = [
  'No credit card to start',
  'Cancel anytime',
  '14-day money-back guarantee'
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-slate-900 to-navy relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="text-teal text-xs font-semibold uppercase tracking-[0.18em] mb-3">Pricing</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-5 leading-tight">
            Simple pricing. <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Pay per step.</span>
          </h2>
          <p className="text-lg text-white/80">
            Choose the plan that matches your QA volume. Switch anytime as your team grows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative ${plan.highlight ? 'md:-mt-4' : ''}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                    plan.badgeStyle === 'offer'
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-gradient-to-r from-teal to-purple text-white shadow-lg shadow-teal/30'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className={`relative h-full rounded-2xl border p-7 sm:p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-teal/[0.08] to-purple/[0.04] border-teal/50 shadow-2xl shadow-teal/15'
                  : 'bg-white/[0.04] border-white/10 hover:border-white/20'
              }`}>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold font-poppins text-white mb-1">{plan.name}</h3>
                  <div className="text-teal text-sm font-medium">{plan.steps}</div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/60 text-2xl font-medium">$</span>
                    <span className="text-5xl sm:text-6xl font-bold font-poppins text-white leading-none tracking-tight">{plan.price}</span>
                    <span className="text-white/60 text-sm ml-1">/ month</span>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6">{plan.description}</p>

                {/* Divider */}
                <div className="border-t border-white/10 mb-5" />

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-grow">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm">
                      <svg className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/85">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold text-center block transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-teal to-purple text-white hover:shadow-lg hover:shadow-teal/30'
                      : 'bg-white/[0.06] text-white border border-white/15 hover:bg-white/10 hover:border-white/25'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/65 text-sm"
        >
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* Custom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-white/70 mb-3">
            Need something custom? Higher volume, on-premise, custom integrations.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-teal font-medium hover:underline"
          >
            Talk to our team →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
