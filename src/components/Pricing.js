import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const QRAFTAI_APP_URL = 'https://qa.swiftscalesoftware.com/';

const plans = [
  {
    name: 'Starter',
    price: 49,
    steps: '200 steps / month',
    description: 'For individual developers running early-stage validation on a single product.',
    features: [
      '200 test steps / month',
      'Core QA pipelines',
      'AI test case generation',
      'Basic reporting',
      'Email support',
      'Community access'
    ],
    cta: 'Get Started',
    badge: null,
    href: QRAFTAI_APP_URL
  },
  {
    name: 'Growth',
    price: 149,
    steps: '700 steps / month',
    description: 'For mid-sized product teams shipping on a weekly release cycle.',
    features: [
      '700 test steps / month',
      'Everything in Starter',
      'CI/CD integrations',
      'Advanced analytics',
      'Team dashboard',
      'Priority email support'
    ],
    cta: 'Get Started',
    badge: null,
    href: QRAFTAI_APP_URL
  },
  {
    name: 'Pro',
    price: 399,
    steps: '2,000 steps / month',
    description: 'For high-growth SaaS teams deploying daily with custom integrations.',
    features: [
      '2,000 test steps / month',
      'Everything in Growth',
      'Choice of LLM mode (Claude / GPT)',
      'Custom integrations',
      'Dedicated CSM',
      'Advanced security'
    ],
    cta: 'Get Started',
    badge: 'MOST POPULAR',
    badgeStyle: 'popular',
    href: QRAFTAI_APP_URL,
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    steps: '5,000+ steps / month',
    description: 'For large-scale enterprises with unlimited workloads and compliance needs.',
    features: [
      '5,000+ test steps / month',
      'Everything in Pro',
      'All LLM modes (Claude, GPT, Gemini)',
      'Unlimited workloads',
      'On-premise option',
      '24/7 phone support',
      'Audit & compliance'
    ],
    cta: 'Contact Sales',
    badge: null,
    href: '#contact',
    isContact: true
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-7xl mx-auto">
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

              <div className={`relative h-full rounded-2xl border p-6 sm:p-7 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-teal/[0.08] to-purple/[0.04] border-teal/50 shadow-2xl shadow-teal/15'
                  : 'bg-white/[0.04] border-white/10 hover:border-white/20'
              }`}>
                {/* Header */}
                <div className="mb-5">
                  <h3 className="text-xl font-semibold font-poppins text-white mb-1">{plan.name}</h3>
                  <div className="text-teal text-sm font-medium">{plan.steps}</div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  {plan.price === 'Custom' ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-bold font-poppins text-white leading-none tracking-tight">Custom</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-white/60 text-xl font-medium">$</span>
                      <span className="text-4xl sm:text-5xl font-bold font-poppins text-white leading-none tracking-tight">{plan.price}</span>
                      <span className="text-white/60 text-sm ml-1">/ month</span>
                    </div>
                  )}
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-5">{plan.description}</p>

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
                {plan.isContact ? (
                  <motion.button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl font-semibold text-center block bg-white/[0.06] text-white border border-white/15 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                  >
                    {plan.cta}
                  </motion.button>
                ) : (
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
                )}
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
