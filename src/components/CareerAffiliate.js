import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CareerAffiliate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    cv: '',
    referralSource: '',
    expectedEarnings: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [emailContent, setEmailContent] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'cv') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
    console.log('Form data updated:', { [e.target.name]: e.target.value || e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone || !formData.experience) {
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      // Create email content
      const emailSubject = `Career Application - ${formData.name}`;
      const emailBody = `CAREER APPLICATION DETAILS:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Experience Level: ${formData.experience}
CV File: ${formData.cv ? formData.cv.name : 'No CV uploaded'}
How did you hear about us: ${formData.referralSource}
Expected Monthly Earnings: ${formData.expectedEarnings}

Additional Message:
${formData.message}

---
IMPORTANT: Please attach your CV file (${formData.cv ? formData.cv.name : 'CV file'}) to this email before sending.

This is a career application for the Part-time Sales Associate position.
Please review the application and schedule the initial screening interview.

Best regards,
${formData.name}`;

      console.log('Email subject:', emailSubject);
      console.log('Email body:', emailBody);

      // Store email content for display
      setEmailContent(`Subject: ${emailSubject}\n\n${emailBody}`);

      // Create mailto link
      const mailtoLink = `mailto:swift.scale2409@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      console.log('Mailto link:', mailtoLink);
      
      // Try to open email client
      try {
        window.open(mailtoLink, '_blank');
        console.log('Email client opened successfully');
      } catch (error) {
        console.error('Error opening email client:', error);
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(`Subject: ${emailSubject}\n\n${emailBody}`);
        alert('Email client could not be opened. Application details have been copied to your clipboard. Please paste them into an email and send to swift.scale2409@gmail.com');
      }
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '', email: '', phone: '', experience: '', cv: '',
        referralSource: '', expectedEarnings: '', message: ''
      });
      
    } catch (error) {
      console.error('Error in form submission:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const compensationRates = [
    {
      category: "Student Projects",
      projectValue: "₹20,000 - ₹50,000",
      fixedCommission: "₹3,000",
      description: "Perfect for students and recent graduates who know other students needing quality projects",
      color: "from-green-500 to-teal"
    },
    {
      category: "Website Development",
      projectValue: "₹25,000 - ₹100,000",
      fixedCommission: "₹5,000",
      description: "Ideal for sales associates with business networks and client relationships",
      color: "from-teal to-blue-500"
    },
    {
      category: "Custom Software",
      projectValue: "₹1,00,000+",
      fixedCommission: "₹8,000",
      description: "Best for experienced sales professionals with enterprise client connections",
      color: "from-purple to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Guaranteed Base Salary",
      description: "₹3,000/month guaranteed income plus fixed commissions on every successful referral"
    },
    {
      icon: "🚀",
      title: "Quick Payouts",
      description: "Base salary paid monthly, commissions within 7 days of project completion"
    },
    {
      icon: "🎯",
      title: "Quality Focus",
      description: "We focus on quality projects that build long-term relationships"
    },
    {
      icon: "📚",
      title: "Training & Support",
      description: "Comprehensive training, product knowledge, and ongoing support from our team"
    },
    {
      icon: "🏠",
      title: "Work from Home",
      description: "100% remote work. No commute, work from anywhere in India with flexible hours"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Opportunity to grow into full-time positions and leadership roles"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-navy to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-purple/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Join Our <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Sales Team</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Part-time Sales Associate positions available. Work from home, earn guaranteed base salary plus fixed commissions while helping clients get exceptional software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-8 py-4"
              >
                Apply for Position
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('compensation')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Compensation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compensation Package */}
      <section id="compensation" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
              Compensation <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Package</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Guaranteed base salary plus fixed commissions. Work from home and earn ₹3,000-13,000 per month with our structured compensation plan.
            </p>
          </motion.div>

          {/* Base Salary Section */}
          <div className="bg-gradient-to-r from-teal/20 to-purple/20 backdrop-blur-lg border border-teal/30 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Guaranteed Base Salary</h3>
              <div className="text-4xl font-bold text-teal mb-2">₹3,000/month</div>
              <p className="text-white/80">Plus fixed commissions on every successful referral</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {compensationRates.map((rate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/25 h-full">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${rate.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                      ₹
                    </div>
                    <h3 className="text-2xl font-bold font-poppins text-white mb-2">
                      {rate.category}
                    </h3>
                    <div className="text-teal text-lg font-semibold mb-2">
                      Project Value: {rate.projectValue}
                    </div>
                    <div className="text-green-400 text-xl font-bold mb-4">
                      Fixed Commission: {rate.fixedCommission}
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {rate.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
              Why Join Our <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Affiliate Program?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold font-poppins text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
              Professional <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Hiring Process</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We follow a structured 2-round interview process to ensure we find the right fit for our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-teal to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Initial Screening</h3>
                <ul className="text-white/80 text-sm space-y-2 text-left">
                  <li>• Experience and background review</li>
                  <li>• Understanding of our services</li>
                  <li>• Communication skills assessment</li>
                  <li>• Availability and commitment level</li>
                  <li>• Duration: 15-20 minutes</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Role Assessment</h3>
                <ul className="text-white/80 text-sm space-y-2 text-left">
                  <li>• Sales scenario questions</li>
                  <li>• Client handling situations</li>
                  <li>• Product knowledge test</li>
                  <li>• Final fit assessment</li>
                  <li>• Duration: 30 minutes</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work from Home Benefits */}
      <section className="py-16 bg-gradient-to-br from-slate-800/50 to-navy/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
              <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Work from Home</span> Benefits
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Enjoy the freedom of remote work while building your career with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-teal rounded-full flex items-center justify-center text-white text-3xl mb-6">
                🏠
              </div>
              <h3 className="text-xl font-bold text-white mb-4">No Commute</h3>
              <p className="text-white/80">Save time and money. Work from the comfort of your home office.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple rounded-full flex items-center justify-center text-white text-3xl mb-6">
                ⏰
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Flexible Hours</h3>
              <p className="text-white/80">Choose your working hours. Perfect for students and working professionals.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple to-pink-500 rounded-full flex items-center justify-center text-white text-3xl mb-6">
                🌍
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Work Anywhere</h3>
              <p className="text-white/80">Work from anywhere in India. All you need is a laptop and internet connection.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
              Why Join <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">SwiftScale?</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We're building something real. Join us in creating quality software solutions while earning fair commissions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-teal to-purple rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white mb-4">
                  Quality Over Quantity
                </h3>
              </div>
              <div className="space-y-4 text-white/80">
                <p>We focus on delivering exceptional projects, not just any projects. This means:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal mt-1">✓</span>
                    <span>Higher client satisfaction and repeat business</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal mt-1">✓</span>
                    <span>Better reputation for you as a referrer</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal mt-1">✓</span>
                    <span>Long-term partnerships, not one-time deals</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-teal rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  💰
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white mb-4">
                  Fair & Transparent
                </h3>
              </div>
              <div className="space-y-4 text-white/80">
                <p>No hidden fees, no complicated terms. Just straightforward commissions:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Clear commission rates upfront</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Quick 7-day payout after project completion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>No minimum thresholds or hidden deductions</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-gradient-to-br from-slate-900 to-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
              Apply for <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Sales Associate</span> Position
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Join our professional sales team. Work from home, fill out the form below and email your application to start your part-time career with us.
            </p>
            
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 max-w-2xl mx-auto mt-6">
              <p className="text-blue-300 text-sm text-center">
                <strong>📧 How it works:</strong> Fill out the form below, then your email client will open with all your details pre-filled. <strong>Don't forget to attach your CV file</strong> before sending!
              </p>
              <p className="text-blue-300 text-xs text-center mt-2">
                <strong>Important:</strong> You'll need to manually attach your CV file to the email. The form will remind you which file to attach.
              </p>
            </div>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300"
                    placeholder="+91 9876543210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Experience Level *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300 appearance-none"
                  >
                    <option value="">Select your experience</option>
                    <option value="Student">Student</option>
                    <option value="Recent Graduate">Recent Graduate</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Remote Worker">Remote Worker</option>
                    <option value="Business Owner">Business Owner</option>
                    <option value="Professional">Professional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  CV/Resume Upload *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal file:text-white hover:file:bg-teal/80"
                  />
                </div>
                <p className="text-xs text-white/60 mt-1">
                  Please upload your CV/Resume in PDF or DOC format (Max 5MB)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300 appearance-none"
                  >
                    <option value="">Select source</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Friend Referral">Friend Referral</option>
                    <option value="Website">Website</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Expected Monthly Earnings
                  </label>
                  <select
                    name="expectedEarnings"
                    value={formData.expectedEarnings}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300 appearance-none"
                  >
                    <option value="">Select range</option>
                    <option value="₹3,000 - ₹13,000">₹3,000 - ₹13,000</option>
                    <option value="₹13,000 - ₹25,000">₹13,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹40,000">₹25,000 - ₹40,000</option>
                    <option value="₹40,000+">₹40,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Tell us about yourself and your network
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300"
                  placeholder="Describe your background, network, and how you plan to refer clients..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-teal to-purple text-white hover:shadow-lg hover:shadow-teal/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting Application...</span>
                  </div>
                ) : (
                  'Submit Application & CV'
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center"
                >
                  ✅ Thank you! Your email client has opened with your application details. <strong>Please attach your CV file before sending the email.</strong> We'll review and contact you within 48 hours for the initial screening interview.
                </motion.div>
              )}

              {emailContent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-blue-500/20 border border-blue-500/30 rounded-xl"
                >
                  <h3 className="text-blue-300 font-semibold mb-2">📧 Email Content (Backup):</h3>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <pre className="text-white text-sm whitespace-pre-wrap">{emailContent}</pre>
                  </div>
                  <p className="text-blue-300 text-xs mt-2">
                    If your email client didn't open, copy this content and send it to: <strong>swift.scale2409@gmail.com</strong><br/>
                    <strong>Don't forget to attach your CV file!</strong>
                  </p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(emailContent);
                      alert('Email content copied to clipboard!');
                    }}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
                  >
                    📋 Copy to Clipboard
                  </button>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center"
                >
                  ❌ Sorry, there was an error submitting your application. Please try again or contact us directly.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerAffiliate;
