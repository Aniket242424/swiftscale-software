import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

const logo = (slug) => `https://cdn.simpleicons.org/${slug}/2DD4BF`;
const CALENDLY = 'https://calendly.com/soubhik-das-swiftscalesoftware/qraftai-demo';

const services = [
  {
    name: 'Test Automation',
    tagline: 'Stop shipping flakes.',
    blurb: 'Reliable, maintainable test suites for web and APIs. Built by engineers who debug at 3am — so your team never has to.',
    capabilities: [
      'Audit your existing suite — what to keep, fix, or kill',
      'Framework setup tuned to your stack',
      'Cross-browser coverage (Chrome, Firefox, Safari, Edge)',
      'API & contract testing alongside UI',
      'CI/CD wiring with Slack alerts on real failures',
      'Pairing sessions so your team owns it after'
    ],
    tech: [
      { name: 'Playwright', slug: 'playwright' },
      { name: 'Selenium', slug: 'selenium' },
      { name: 'Cypress', slug: 'cypress' },
      { name: 'WebdriverIO', slug: 'webdriverio' },
      { name: 'Postman', slug: 'postman' },
      { name: 'GitHub Actions', slug: 'githubactions' },
      { name: 'Jenkins', slug: 'jenkins' },
      { name: 'GitLab CI', slug: 'gitlab' }
    ],
    accent: 'from-teal/30 to-transparent',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Mobile Automation',
    tagline: 'iOS + Android. Real devices. Real reliability.',
    blurb: 'Mobile tests that survive OS upgrades, gesture changes, and bad network conditions. Smoke + regression on every build.',
    capabilities: [
      'Appium, Detox, XCUITest, Espresso — chosen per stack',
      'Real device + emulator coverage at parallel scale',
      'BrowserStack, Sauce Labs, AWS Device Farm wired in',
      'Native gestures, deep links, push notifications tested',
      'App-store release confidence — every build',
      'Mobile-first CI/CD with sane parallel sharding'
    ],
    tech: [
      { name: 'Appium', slug: 'appium' },
      { name: 'Android', slug: 'android' },
      { name: 'iOS', slug: 'apple' },
      { name: 'React Native', slug: 'react' },
      { name: 'BrowserStack', slug: 'browserstack' },
      { name: 'Fastlane', slug: 'fastlane' },
      { name: 'Firebase', slug: 'firebase' },
      { name: 'AWS Device Farm', slug: 'amazonwebservices' }
    ],
    accent: 'from-purple/30 to-transparent',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Cloud',
    tagline: 'Infra that scales. Bills that don\'t surprise.',
    blurb: 'Cloud architecture and DevOps that hold up in production — without burning your AWS budget. AWS, GCP, Azure, Kubernetes.',
    capabilities: [
      'Architecture review + migration roadmap',
      'Infrastructure as Code (Terraform, Pulumi)',
      'CI/CD pipelines that actually deploy',
      'Kubernetes, Docker, serverless — chosen on merit',
      'Observability: monitoring, logging, SLOs',
      'Cost audits and ongoing FinOps',
      'Security baseline: IAM, encryption, network isolation'
    ],
    tech: [
      { name: 'AWS', slug: 'amazonwebservices' },
      { name: 'GCP', slug: 'googlecloud' },
      { name: 'Azure', slug: 'microsoftazure' },
      { name: 'Terraform', slug: 'terraform' },
      { name: 'Kubernetes', slug: 'kubernetes' },
      { name: 'Docker', slug: 'docker' },
      { name: 'Datadog', slug: 'datadog' },
      { name: 'Grafana', slug: 'grafana' }
    ],
    accent: 'from-blue-500/30 to-transparent',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    name: 'Software Development',
    tagline: 'Idea to deployed. In weeks, not quarters.',
    blurb: 'Web apps, mobile apps, CRMs, internal tools — built from scratch or alongside your team. Production-ready from day one.',
    capabilities: [
      'Discovery week with fixed-quote scoping',
      'React, Next.js, TypeScript on the web',
      'React Native, iOS + Android on mobile',
      'Node, Express, NestJS on the backend',
      'Custom CRMs and internal tooling',
      'Dedicated team for builds + ongoing maintenance'
    ],
    tech: [
      { name: 'React', slug: 'react' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'React Native', slug: 'react' },
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'Tailwind', slug: 'tailwindcss' }
    ],
    accent: 'from-teal/20 via-purple/20 to-transparent',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

const projects = [
  {
    name: 'QraftAI',
    role: 'Flagship Product',
    summary: 'AI agent that learns your web app and writes its own test suite. Built end-to-end by SwiftScale — same engineers, available for you.',
    tech: ['Node.js', 'Python', 'Playwright', 'Claude', 'AWS'],
    links: [{ href: 'https://qa.swiftscalesoftware.com/', label: 'Try it live' }],
    accent: 'from-teal/40 via-purple/30 to-slate-900',
    initials: 'QA',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Trading Agent',
    role: 'Algorithmic Trading Platform · Live',
    summary: 'Multi-worker algorithmic trading system for Indian markets. Real-time market data, regime detection, and strategy execution — with Upstox broker integration and a 3-lock safety gate before going live with capital.',
    tech: ['Python', 'Postgres', 'Redis', 'Upstox API', 'AWS'],
    links: [{ href: 'http://43.204.64.180:8000/dashboard', label: 'View live dashboard' }],
    accent: 'from-green-500/30 via-teal/20 to-slate-900',
    initials: 'TA',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'PixelLens',
    role: 'Built in 2020 · Open Source',
    summary: 'Shipped in 2020 — years before the AI wave — a pixel-precise screenshot comparison engine for visual regression testing. C# + SpecFlow + Selenium with batch processing and reports. Proof we\'ve been solving QA problems with serious engineering long before LLMs were the answer to everything.',
    tech: ['C#', 'SpecFlow', 'Selenium', 'BDD'],
    links: [
      { href: 'https://github.com/Aniket242424/ScreenshotComparison', label: 'View on GitHub' },
      { href: 'https://drive.google.com/file/d/1mxOGutaWYa_WGijfAZPHqgMS08bwUZBy/view?usp=sharing', label: 'Watch demo' }
    ],
    accent: 'from-purple/40 via-teal/20 to-slate-900',
    initials: 'PL',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Mama Bhelwale',
    role: 'Restaurant Website + Ordering',
    summary: 'A full-stack restaurant site with menu showcase, online ordering, and mobile-first responsive design. Shipped in 2 weeks.',
    tech: ['React', 'Responsive UI', 'SEO'],
    links: [{ href: 'https://mama-bhelwale-w9bp.vercel.app/', label: 'Visit site' }],
    accent: 'from-blue-500/30 via-teal/20 to-slate-900',
    initials: 'MB',
    image: '/projects/mama-bhelwale.jpg'
  }
];

const engagementModels = [
  {
    name: 'Sprint Audit',
    duration: '1 week',
    fitFor: 'You have a system to diagnose',
    detail: 'Audit your code, tests, infra, or AI setup. Written report with prioritized recommendations. No commitment to continue.'
  },
  {
    name: 'Project Build',
    duration: '4–12 weeks',
    fitFor: 'You have a project to ship',
    detail: 'Fixed scope, fixed quote, weekly deploys. From kickoff to shipped product with handover.',
    popular: true
  },
  {
    name: 'Embedded Team',
    duration: 'Monthly retainer',
    fitFor: 'You need ongoing engineering',
    detail: 'Senior engineers embedded with your team. Continuous shipping, maintenance, on-call coverage.'
  }
];

const stats = [
  { value: '8+', label: 'years lead engineer, ex-Amazon SDET' },
  { value: '100%', label: 'senior engineers — no juniors on your project' },
  { value: '1', label: 'team across testing, dev, mobile, cloud' }
];

/* ── Decorative hero graphic ─────────────────────────────── */
const HeroGraphic = () => (
  <div className="relative w-full h-full min-h-[340px]">
    {/* Browser */}
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: -3 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute top-2 left-2 right-14 bg-slate-900/85 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-teal/10 overflow-hidden"
    >
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/10 bg-white/[0.03]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-[10px] text-white/40 truncate font-mono">runs.swiftscale.io/142</span>
      </div>
      <div className="p-3.5 space-y-1.5 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-white/85"><span className="text-green-400">✓</span> login.spec.ts <span className="text-white/40 ml-auto">12 passed</span></div>
        <div className="flex items-center gap-2 text-white/85"><span className="text-green-400">✓</span> checkout.spec.ts <span className="text-white/40 ml-auto">34 passed</span></div>
        <div className="flex items-center gap-2 text-white/85"><span className="text-green-400">✓</span> dashboard.spec.ts <span className="text-white/40 ml-auto">28 passed</span></div>
        <div className="flex items-center gap-2 text-white/85"><span className="text-yellow-400">●</span> mobile.detox.ts <span className="text-white/40 ml-auto">running…</span></div>
      </div>
    </motion.div>

    {/* Mobile */}
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 6 }}
      animate={{ opacity: 1, y: 0, rotate: 6 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute bottom-2 right-0 w-32 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/15 rounded-2xl p-2 shadow-2xl shadow-purple/20"
    >
      <div className="bg-gradient-to-br from-teal/30 to-purple/30 rounded-xl h-44 flex flex-col items-center justify-center gap-2 p-2">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div className="text-[10px] text-white/90 font-medium">Build passed</div>
        <div className="text-[9px] text-white/50">v2.4.1 · 2m ago</div>
      </div>
    </motion.div>

    {/* Chip */}
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="absolute bottom-14 left-0 px-3 py-1.5 bg-teal/15 border border-teal/40 rounded-full text-teal text-[11px] font-semibold backdrop-blur-md"
    >
      ☁ deployed to prod
    </motion.div>
  </div>
);

/* ── Section pieces ─────────────────────────────── */
const Eyebrow = ({ children }) => (
  <div className="text-teal text-xs font-semibold uppercase tracking-[0.18em] mb-3">{children}</div>
);

const Services = () => (
  <div className="App">
    <div className="relative bg-navy">
      <Navbar />
    </div>

    {/* ── Hero ──────────────────────────────────── */}
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-slate-900 to-navy">
      <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max py-24 sm:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <Eyebrow>Services</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins mb-6 leading-[1.05] tracking-tight">
              Engineering you can <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">actually hire.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Test automation, mobile, cloud, and software development — by senior engineers, all the way to production. The same team that built QraftAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-center">
                Book a Consultation
              </a>
              <a href="#projects" className="btn-secondary inline-block text-center">
                See Our Work
              </a>
            </div>
          </motion.div>
          <div className="lg:col-span-2 hidden lg:block">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>

    {/* ── Trust strip ───────────────────────────── */}
    <section className="bg-navy border-y border-white/10">
      <div className="container-max py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center md:text-left"
            >
              <div className="text-3xl sm:text-4xl font-bold font-poppins bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-white/70 text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Services ──────────────────────────────── */}
    <section className="section-padding bg-navy">
      <div className="container-max">
        <div className="mb-14 max-w-3xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins leading-tight">
            Four services. <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">One senior team.</span>
          </h2>
        </div>

        <div className="space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden hover:border-teal/30 transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
                {/* Visual header panel */}
                <div className={`relative bg-gradient-to-br ${s.accent} p-8 flex flex-col justify-between min-h-[260px] border-b lg:border-b-0 lg:border-r border-white/10`}>
                  <div className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(45,212,191,0.25) 0%, transparent 55%), radial-gradient(circle at 75% 75%, rgba(168,85,247,0.20) 0%, transparent 55%)'
                    }}
                  />
                  <div className="relative text-teal/90">{s.icon}</div>
                  <div className="relative">
                    <div className="text-[11px] text-white/50 uppercase tracking-[0.18em] font-semibold mb-1">Service {String(i + 1).padStart(2, '0')}</div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-white leading-tight">{s.name}</h3>
                    <p className="text-teal text-sm font-medium mt-1.5">{s.tagline}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10">
                  <p className="text-white/85 leading-relaxed mb-7 text-base sm:text-lg">{s.blurb}</p>

                  <div className="text-[11px] text-white/40 uppercase tracking-[0.18em] mb-3 font-semibold">What you get</div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-8">
                    {s.capabilities.map((c, ci) => (
                      <li key={ci} className="flex items-start gap-2 text-white/80 text-sm">
                        <svg className="w-4 h-4 text-teal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] text-white/40 uppercase tracking-[0.18em] mb-3 font-semibold">Tech we use</div>
                  <div className="flex flex-wrap gap-2">
                    {s.tech.map((t, ti) => (
                      <span key={ti} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] hover:bg-teal/10 text-white/80 hover:text-teal text-xs rounded-full border border-white/10 hover:border-teal/40 transition-all">
                        <img src={logo(t.slug)} alt="" className="w-3.5 h-3.5" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Projects ──────────────────────────────── */}
    <section id="projects" className="section-padding bg-gradient-to-br from-navy to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="container-max relative">
        <div className="mb-14 max-w-3xl">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins leading-tight mb-4">
            Built. Shipped. <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">In production.</span>
          </h2>
          <p className="text-white/70 text-lg">
            A flagship product, an open-source testing tool, a live client site. Click in — they're all real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-teal/40 transition-all duration-300"
            >
              {/* Project visual */}
              <div className={`relative h-48 bg-gradient-to-br ${p.accent} overflow-hidden flex items-center justify-center`}>
                {/* Initials fallback (always rendered, sits behind image) */}
                <div className="absolute w-20 h-20 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white font-bold text-2xl font-poppins shadow-2xl">
                  {p.initials}
                </div>
                {/* Image — covers fallback when loaded, slightly desaturated to integrate with brand */}
                {p.image && (
                  <img
                    src={p.image}
                    alt={`${p.name} preview`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:scale-[1.04] transition-all duration-700"
                    style={{ filter: 'saturate(0.85) contrast(1.05)' }}
                    onLoad={(e) => { e.currentTarget.style.opacity = '1'; }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                )}
                {/* Brand color wash — ties image to site palette */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} mix-blend-multiply opacity-60 pointer-events-none`} />
                {/* Legibility overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent pointer-events-none" />
                {/* Role badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur border border-white/15 rounded-full text-white text-[10px] font-semibold uppercase tracking-wider z-10">
                  {p.role}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold font-poppins text-white mb-2 group-hover:text-teal transition-colors">{p.name}</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-4 flex-grow">{p.summary}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t, ti) => (
                    <span key={ti} className="px-2 py-0.5 bg-teal/10 text-teal text-[11px] rounded-full border border-teal/25">{t}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 border-t border-white/5">
                  {p.links.map((l, li) => (
                    <a
                      key={li}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:gap-2.5 transition-all"
                    >
                      {l.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Engagement models ─────────────────────── */}
    <section className="section-padding bg-navy">
      <div className="container-max">
        <div className="mb-14 max-w-3xl">
          <Eyebrow>How we engage</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins leading-tight">
            Pick the model that <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">fits.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementModels.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`relative bg-white/[0.04] border rounded-2xl p-7 transition-colors ${m.popular ? 'border-teal/50 shadow-xl shadow-teal/10' : 'border-white/10 hover:border-white/20'}`}
            >
              {m.popular && (
                <div className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-gradient-to-r from-teal to-purple text-white text-[10px] font-bold uppercase tracking-wider">
                  Most popular
                </div>
              )}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal/30 to-purple/30 flex items-center justify-center text-teal font-bold mb-5">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{m.name}</h3>
              <div className="text-teal text-xs font-medium mb-1">{m.duration}</div>
              <div className="text-white/50 text-xs italic mb-4">For: {m.fitFor}</div>
              <p className="text-white/75 leading-relaxed text-sm">{m.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ───────────────────────────────────── */}
    <section className="section-padding bg-gradient-to-br from-navy via-slate-900 to-navy relative overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-teal/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="container-max relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-5 leading-tight">
            Got a project? <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Let's talk.</span>
          </h2>
          <p className="text-lg text-white/75 mb-9">
            30 minutes. We'll tell you honestly whether we're the right team — and what it'd take.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-center">
              Book a Consultation
            </a>
            <a href="mailto:soubhik.das@swiftscalesoftware.com" className="btn-secondary inline-block text-center">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppWidget />
  </div>
);

export default Services;
