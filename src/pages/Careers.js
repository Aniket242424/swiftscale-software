import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

const logo = (slug) => `https://cdn.simpleicons.org/${slug}/2DD4BF`;
const CAREERS_EMAIL = 'soubhik.das@swiftscalesoftware.com';

// Single source of truth for the opening — drives the role card, the form
// subject line, and the JobPosting structured data below.
const role = {
  id: 'test-automation-engineer',
  title: 'Test Automation Engineer',
  level: 'Senior / SDET',
  type: 'Full-time',
  location: 'Pune, Maharashtra',
  workplace: 'Hybrid — Pune',
  experience: '5 – 9 years',
  postedOn: '2026-10-01',
  stack: [
    { name: 'Selenium', slug: 'selenium' },
    { name: 'Java', slug: 'openjdk' },
    { name: 'Playwright', slug: 'playwright' }
  ],
  summary:
    'You will own test automation for client products and for QraftAI itself — designing frameworks from scratch, hardening flaky suites, and wiring everything into CI so failures mean something. This is hands-on engineering, not test-case bookkeeping.',
  responsibilities: [
    'Design and own Selenium + Java automation frameworks end-to-end',
    'Build modern browser coverage with Playwright across Chrome, Firefox, Safari and Edge',
    'Write API and contract tests alongside UI, not as an afterthought',
    'Diagnose and eliminate flakiness — root cause, not retries',
    'Wire suites into CI/CD with alerting that engineers actually trust',
    'Review automation code and mentor mid-level engineers on the team',
    'Work directly with client engineering teams and hand over suites they can own'
  ],
  mustHave: [
    '5 – 9 years in test automation or SDET roles',
    'Strong core Java — collections, OOP design, exception handling',
    'Production Selenium WebDriver experience with a framework you designed or substantially rebuilt',
    'Hands-on Playwright (TypeScript or Java bindings)',
    'TestNG or JUnit, Maven or Gradle, Git',
    'API testing with REST Assured, Postman or similar',
    'CI/CD pipelines — Jenkins, GitHub Actions or GitLab CI',
    'Ability to debug a failing suite without reaching for a sleep()'
  ],
  bonus: [
    'BDD with Cucumber',
    'Mobile automation — Appium',
    'Performance testing — JMeter or k6',
    'Docker and containerised test execution',
    'Cloud grids — BrowserStack, LambdaTest, Selenium Grid',
    'Exposure to AI-assisted testing tools'
  ]
};

const offers = [
  {
    icon: '🧠',
    title: 'Real engineering ownership',
    description: 'You design the framework. No handed-down templates, no ticket-shuffling QA process.'
  },
  {
    icon: '🚀',
    title: 'Work on QraftAI',
    description: 'Split your time between client products and our own AI testing agent — a product, not a service queue.'
  },
  {
    icon: '🏠',
    title: 'Hybrid from Pune',
    description: 'Office when it helps collaboration, home when you need deep focus. We do not count hours.'
  },
  {
    icon: '📈',
    title: 'Senior-track growth',
    description: 'Clear path to lead and architect roles as the team scales. You will mentor, review and set standards.'
  },
  {
    icon: '🛠️',
    title: 'Modern stack, no legacy drag',
    description: 'Playwright, containerised runs, proper CI. We fix tooling debt instead of living with it.'
  },
  {
    icon: '🤝',
    title: 'Small team, direct access',
    description: 'No layers between you and the people making product decisions.'
  }
];

const hiringSteps = [
  {
    step: '1',
    title: 'Intro call',
    detail: 'A 20-minute conversation about your background, the frameworks you have built, and what you want next.'
  },
  {
    step: '2',
    title: 'Technical round',
    detail: 'Live discussion on Java, Selenium design decisions and Playwright. Expect to debug real code, not solve puzzles.'
  },
  {
    step: '3',
    title: 'Practical + fit',
    detail: 'A short take-home or pairing session on a realistic automation problem, then a final conversation on team fit and offer.'
  }
];

const skillOptions = [
  'Core Java',
  'Selenium WebDriver',
  'Playwright',
  'TestNG / JUnit',
  'REST Assured / API testing',
  'Cucumber / BDD',
  'Jenkins / GitHub Actions',
  'Appium / Mobile',
  'Docker',
  'JMeter / k6'
];

const Eyebrow = ({ children }) => (
  <div className="text-teal text-xs font-semibold uppercase tracking-[0.18em] mb-3">{children}</div>
);

const Field = ({ label, required, hint, children }) => (
  <div>
    <label className="block text-sm font-medium text-white/90 mb-2">
      {label} {required && <span className="text-teal">*</span>}
    </label>
    {children}
    {hint && <p className="text-xs text-white/50 mt-1.5">{hint}</p>}
  </div>
);

const inputClass =
  'w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  experience: '',
  currentCompany: '',
  currentLocation: '',
  puneAvailability: '',
  noticePeriod: '',
  currentCtc: '',
  expectedCtc: '',
  skills: [],
  resumeLink: '',
  linkedin: '',
  message: ''
};

const Careers = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errorDetail, setErrorDetail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const scrollToForm = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setErrorDetail('');

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_9g3nhzl';
    const templateId =
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CAREERS ||
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT ||
      'template_u88hszs';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'Wq1KCQz6S9BnCCZOU';

    // Every answer is also folded into a single formatted block, so the
    // application survives a template that only exposes the usual
    // from_name / from_email / message variables.
    const summary = [
      `APPLICATION — ${role.title} (${role.location})`,
      '',
      `Name:              ${formData.name}`,
      `Email:             ${formData.email}`,
      `Phone:             ${formData.phone}`,
      `Total experience:  ${formData.experience}`,
      `Current company:   ${formData.currentCompany || '—'}`,
      `Current location:  ${formData.currentLocation || '—'}`,
      `Pune availability: ${formData.puneAvailability || '—'}`,
      `Notice period:     ${formData.noticePeriod || '—'}`,
      `Current CTC:       ${formData.currentCtc || '—'}`,
      `Expected CTC:      ${formData.expectedCtc || '—'}`,
      `Resume link:       ${formData.resumeLink}`,
      `LinkedIn / GitHub: ${formData.linkedin || '—'}`,
      '',
      `Skills selected:   ${formData.skills.length ? formData.skills.join(', ') : '—'}`,
      '',
      'Candidate note:',
      formData.message || '—'
    ].join('\n');

    try {
      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        phone: formData.phone,
        subject: `Application — ${role.title} — ${formData.name} (${formData.experience})`,
        position: role.title,
        job_location: role.location,
        experience: formData.experience,
        current_company: formData.currentCompany,
        current_location: formData.currentLocation,
        pune_availability: formData.puneAvailability,
        notice_period: formData.noticePeriod,
        current_ctc: formData.currentCtc,
        expected_ctc: formData.expectedCtc,
        skills: formData.skills.join(', '),
        resume_link: formData.resumeLink,
        linkedin: formData.linkedin,
        message: summary,
        to_name: 'SwiftScale Hiring Team'
      });

      setSubmitStatus('success');
      setFormData(initialForm);
    } catch (error) {
      setSubmitStatus('error');
      setErrorDetail(error?.text || error?.message || '');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google for Jobs structured data
  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: role.title,
    description: `${role.summary} Responsibilities: ${role.responsibilities.join('; ')}. Requirements: ${role.mustHave.join('; ')}.`,
    datePosted: role.postedOn,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'SwiftScale Software',
      sameAs: 'https://www.swiftscalesoftware.com'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      }
    },
    experienceRequirements: {
      '@type': 'OccupationalExperienceRequirements',
      monthsOfExperience: 60
    },
    skills: 'Selenium, Java, Playwright, TestNG, REST Assured, CI/CD'
  };

  return (
    <div className="App">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <div className="relative bg-navy">
        <Navbar />
      </div>

      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-slate-900 to-navy">
        <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-teal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-max py-24 sm:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Eyebrow>Careers</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-[1.05] tracking-tight">
              Build the testing layer{' '}
              <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">
                everyone relies on.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
              We are a small engineering team in Pune building QraftAI — an AI agent that writes and runs
              tests for real products. We hire engineers who care why a test failed, not just that it did.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={scrollToForm} className="btn-primary">
                Apply Now
              </button>
              <a href={`#${role.id}`} className="btn-secondary inline-block text-center">
                View the Role
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Open role ─────────────────────────────── */}
      <section id={role.id} className="section-padding bg-navy">
        <div className="container-max">
          <div className="mb-10 max-w-3xl">
            <Eyebrow>Open position</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins leading-tight">
              One opening. We hire carefully.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-7 sm:p-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-teal/15 border border-teal/30 rounded-full px-3 py-1 mb-4">
                  <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                  <span className="text-teal text-xs font-semibold uppercase tracking-wider">
                    Actively hiring
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-white mb-3">
                  {role.title}
                </h3>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
                  <span>📍 {role.workplace}</span>
                  <span>💼 {role.experience}</span>
                  <span>🕒 {role.type}</span>
                  <span>🎯 {role.level}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                {role.stack.map((t) => (
                  <div key={t.name} className="flex items-center gap-2">
                    <img src={logo(t.slug)} alt="" aria-hidden="true" className="w-5 h-5" />
                    <span className="text-white/80 text-sm font-medium">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-10 max-w-3xl">{role.summary}</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-teal font-semibold mb-4 text-sm uppercase tracking-wider">
                  What you'll do
                </h4>
                <ul className="space-y-2.5">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2.5 text-white/75 text-sm leading-relaxed">
                      <span className="text-teal mt-0.5 shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-teal font-semibold mb-4 text-sm uppercase tracking-wider">
                  What we need
                </h4>
                <ul className="space-y-2.5">
                  {role.mustHave.map((item) => (
                    <li key={item} className="flex gap-2.5 text-white/75 text-sm leading-relaxed">
                      <span className="text-teal mt-0.5 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-purple font-semibold mb-4 text-sm uppercase tracking-wider">
                  Bonus points
                </h4>
                <ul className="space-y-2.5">
                  {role.bonus.map((item) => (
                    <li key={item} className="flex gap-2.5 text-white/60 text-sm leading-relaxed">
                      <span className="text-purple mt-0.5 shrink-0">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <button onClick={scrollToForm} className="btn-primary">
                Apply for this Role
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What we offer ─────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-navy to-slate-900">
        <div className="container-max">
          <div className="mb-14 max-w-3xl">
            <Eyebrow>Why us</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins leading-tight">
              What you get in return.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors duration-300"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold font-poppins text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring process ────────────────────────── */}
      <section className="section-padding bg-navy">
        <div className="container-max">
          <div className="mb-14 max-w-3xl">
            <Eyebrow>Process</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins leading-tight">
              Three rounds. About a week.
            </h2>
            <p className="text-white/70 mt-4">
              We respect your time — you will hear back after every round, including a no.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hiringSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-7"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-teal to-purple flex items-center justify-center text-white font-bold mb-5">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold font-poppins text-white mb-2">{s.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{s.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application form ──────────────────────── */}
      <section id="apply" className="section-padding bg-gradient-to-br from-slate-900 to-navy">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <Eyebrow>Apply</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
                Apply for{' '}
                <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">
                  {role.title}
                </span>
              </h2>
              <p className="text-white/70">
                {role.experience} · {role.workplace}. Fill this in once — it goes straight to our hiring
                inbox and we reply within three working days.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Full name" required>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </Field>

                <Field label="Email address" required>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Phone number" required>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="+91 98765 43210"
                  />
                </Field>

                <Field label="Total experience" required hint="This role is scoped for 5–9 years.">
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">Select experience</option>
                    <option value="5–6 years">5–6 years</option>
                    <option value="6–7 years">6–7 years</option>
                    <option value="7–8 years">7–8 years</option>
                    <option value="8–9 years">8–9 years</option>
                  </select>
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Current company">
                  <input
                    type="text"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Where you work now"
                  />
                </Field>

                <Field label="Current location">
                  <input
                    type="text"
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="City"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Can you work from Pune?" required>
                  <select
                    name="puneAvailability"
                    value={formData.puneAvailability}
                    onChange={handleChange}
                    required
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">Select one</option>
                    <option value="Already in Pune">Already in Pune</option>
                    <option value="Willing to relocate">Willing to relocate</option>
                    <option value="Need relocation support">Need relocation support</option>
                    <option value="Remote only">Remote only</option>
                  </select>
                </Field>

                <Field label="Notice period">
                  <select
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">Select one</option>
                    <option value="Immediate">Immediate</option>
                    <option value="15 days">15 days</option>
                    <option value="30 days">30 days</option>
                    <option value="60 days">60 days</option>
                    <option value="90 days">90 days</option>
                  </select>
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Current CTC" hint="Optional — in LPA.">
                  <input
                    type="text"
                    name="currentCtc"
                    value={formData.currentCtc}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. 18 LPA"
                  />
                </Field>

                <Field label="Expected CTC" hint="Optional — in LPA.">
                  <input
                    type="text"
                    name="expectedCtc"
                    value={formData.expectedCtc}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. 24 LPA"
                  />
                </Field>
              </div>

              <Field label="Which of these have you worked with?">
                <div className="flex flex-wrap gap-2">
                  {skillOptions.map((skill) => {
                    const active = formData.skills.includes(skill);
                    return (
                      <button
                        type="button"
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        aria-pressed={active}
                        className={`px-3.5 py-2 rounded-full text-sm border transition-all duration-200 ${
                          active
                            ? 'bg-teal/20 border-teal text-teal font-medium'
                            : 'bg-white/5 border-white/15 text-white/70 hover:border-white/30'
                        }`}
                      >
                        {active && <span className="mr-1.5">✓</span>}
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field
                label="Resume link"
                required
                hint="Paste a Google Drive, Dropbox or OneDrive link set to anyone-with-the-link. We cannot accept file uploads through this form."
              >
                <input
                  type="url"
                  name="resumeLink"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="https://drive.google.com/..."
                />
              </Field>

              <Field label="LinkedIn or GitHub">
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="https://linkedin.com/in/..."
                />
              </Field>

              <Field label="Anything you want us to know?">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass}
                  placeholder="Tell us about a framework you built, a flaky suite you fixed, or why this role interests you."
                />
              </Field>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-teal to-purple text-white hover:shadow-lg hover:shadow-teal/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending application…
                  </span>
                ) : (
                  'Submit Application'
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/15 border border-green-500/30 rounded-xl text-green-300 text-center text-sm"
                >
                  ✅ Application received — thanks for applying. We review every application and will reply
                  within three working days.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/15 border border-red-500/30 rounded-xl text-red-300 text-center text-sm"
                >
                  ❌ We could not send your application.{' '}
                  <a href={`mailto:${CAREERS_EMAIL}`} className="underline font-medium">
                    Email us at {CAREERS_EMAIL}
                  </a>{' '}
                  instead and we will pick it up from there.
                  {errorDetail && <div className="text-red-400/70 text-xs mt-2">({errorDetail})</div>}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Careers;
