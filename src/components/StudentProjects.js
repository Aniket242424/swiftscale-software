import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import StudentNavbar from './StudentNavbar';

const StudentProjects = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    year: '',
    projectType: '',
    technology: '',
    timeline: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // EmailJS configuration using environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_9g3nhzl';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_STUDENT || 'template_u88hszs';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'Wq1KCQz6S9BnCCZOU';

      console.log('EmailJS Config:', { serviceId, templateId, publicKey });

      // Initialize EmailJS
      emailjs.init(publicKey);
      
      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        college: formData.college,
        course: formData.course,
        year: formData.year,
        project_type: formData.projectType,
        technology: formData.technology,
        timeline: formData.timeline,
        budget: formData.budget,
        message: formData.message,
        to_name: 'SwiftScale Student Team'
      });

      console.log('Email sent successfully:', result);
      
      setSubmitStatus('success');
      setFormData({
        name: '', email: '', phone: '', college: '', course: '', year: '',
        projectType: '', technology: '', timeline: '', budget: '', message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Web Application', 'Mobile App', 'Desktop Application', 'AI/ML Project',
    'IoT Project', 'Blockchain Project', 'Data Science Project', 'Game Development',
    'E-commerce Platform', 'Management System', 'Other'
  ];

  const technologies = [
    'React/Node.js', 'Python/Django', 'Java/Spring', 'PHP/Laravel',
    'Flutter/React Native', 'Angular/Vue.js', 'Machine Learning', 'Data Analytics',
    'Android/iOS', 'Blockchain', 'IoT/Arduino', 'Other'
  ];

  const courses = [
    'Computer Science Engineering', 'Information Technology', 'Electronics & Communication',
    'Electrical Engineering', 'BSC Computer Science', 'BSC Information Technology',
    'MCA', 'MSC Computer Science', 'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-navy to-slate-900">
      {/* Navigation */}
      <StudentNavbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal/10 to-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              <span className="block text-white">Your Final Year</span>
              <span className="block bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">
                Project Partner
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Transform your academic project into a professional-grade application that impresses your professors and future employers.
            </p>
            
            {/* Launch Offer Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <div className="bg-gradient-to-r from-teal to-purple text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="font-semibold">🎓 New Student Project Service - Professional Quality Guaranteed!</span>
              </div>
            </motion.div>
            
            {/* Value Proposition Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">🎓 Why Choose SwiftScale for Your Project?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-teal mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-white">Professional Quality</h4>
                    <p className="text-white/70 text-sm">Industry-standard code and documentation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-teal mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-white">Complete Support</h4>
                    <p className="text-white/70 text-sm">Development + Documentation + Presentation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-teal mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-white">Internship Opportunity</h4>
                    <p className="text-white/70 text-sm">Work with us on real projects</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
              Complete <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Project Solutions</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              From concept to completion, we provide everything you need for an outstanding final year project.
            </p>
            
            {/* Why Choose Us */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4 text-center">🎓 Why Students Choose SwiftScale</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal mb-2">8+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal mb-2">100%</div>
                  <div className="text-white/80 text-sm">Satisfaction Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal mb-2">24/7</div>
                  <div className="text-white/80 text-sm">WhatsApp Support</div>
                </div>
              </div>
              
              {/* Value Proposition */}
              <div className="mt-6 p-4 bg-teal/10 rounded-xl border border-teal/20">
                <p className="text-white/90 text-center">
                  <strong>Professional Development Team:</strong> Our experienced developers have worked on real-world projects and understand what makes a project stand out to professors and employers.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Complete Project Development",
                description: "Full application development with modern technologies. We deliver the complete project with source code.",
                features: ["Complete source code", "Modern UI/UX design", "Database integration", "API development", "Ready-to-run application"]
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Complete Documentation",
                description: "Comprehensive project documentation that meets academic standards. Perfect for presentations and submissions.",
                features: ["Technical documentation", "User manual", "System design", "Code comments", "Installation guide"]
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Project Explanation",
                description: "We provide detailed explanation of your project code and architecture for better understanding.",
                features: ["Code walkthrough", "Technology explanation", "Architecture overview", "Q&A session"]
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Presentation Support",
                description: "Professional presentation materials and demo preparation for your project defense.",
                features: ["PPT templates", "Demo preparation", "Q&A practice", "Visual aids", "Presentation tips"]
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                ),
                title: "Industry Recognition",
                description: "Get a professional internship certificate that adds real value to your resume. Plus, explore paid internship opportunities.",
                features: ["Professional certificate", "Resume enhancement", "Industry exposure", "Paid internship options", "Real project experience"]
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                ),
                title: "24/7 Support",
                description: "Round-the-clock support during your project development.",
                features: ["WhatsApp support", "Quick responses", "Technical help", "Deadline management"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/25"
              >
                <div className="text-teal mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold font-poppins mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-white/70">
                      <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gradient-to-br from-slate-900 to-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
              Student-Friendly <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Affordable pricing designed for students. Get professional-quality projects within your budget.
            </p>
            
            {/* Important Disclaimer */}
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 max-w-4xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-orange-400 mb-4">📋 Important Information</h3>
              <div className="text-white/90 space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-orange-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p><strong>Project Delivery:</strong> We develop and deliver complete projects with full documentation. You receive the final project ready for submission.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-orange-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p><strong>Documentation:</strong> Complete technical documentation, user manual, and installation guide included.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-orange-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p><strong>Internship Certificate:</strong> All students receive a professional internship certificate upon project completion.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-orange-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p><strong>Paid Internship:</strong> Exceptional students may be offered paid internship opportunities for real client projects.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-orange-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p><strong>100% Guarantee:</strong> If you're not satisfied with the project quality, we'll refund your money or redo the project.</p>
                </div>
              </div>
            </div>
            
            {/* Value Proposition */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">🎓 What You Get (Total Value: ₹50,000)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-white/90">Complete Development (₹30,000)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-white/90">Complete Documentation (₹8,000)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-white/90">Project Explanation (₹5,000)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-white/90">Internship Certificate (₹7,000)</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Total Value:</span>
                  <span className="text-2xl font-bold text-white">₹50,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal font-semibold">Student Price:</span>
                  <span className="text-2xl font-bold text-teal">₹20,000 - ₹50,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-semibold">You Save:</span>
                  <span className="text-xl font-bold text-green-400">₹10,000 - ₹30,000</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Basic Projects",
                price: "₹20,000 - ₹25,000",
                originalPrice: "₹30,000",
                description: "Simple applications with basic features",
                examples: ["To-Do List App", "Expense Tracker", "Library Management", "Weather App", "Resume Builder"],
                features: [
                  "Complete application development",
                  "Basic documentation",
                  "Code explanation",
                  "Internship certificate",
                  "WhatsApp support",
                  "1 month post-delivery assistance"
                ],
                popular: false
              },
              {
                name: "Standard Projects",
                price: "₹30,000 - ₹35,000",
                originalPrice: "₹45,000",
                description: "Medium complexity with database integration",
                examples: ["Event Management", "Blood Donation Portal", "Movie Recommendation", "House Price Prediction"],
                features: [
                  "Advanced application development",
                  "Database integration",
                  "Complete documentation",
                  "Code walkthrough",
                  "Professional internship certificate",
                  "2 months post-delivery assistance"
                ],
                popular: true,
                badge: "MOST POPULAR"
              },
              {
                name: "Premium Projects",
                price: "₹45,000 - ₹50,000",
                originalPrice: "₹70,000",
                description: "Complex applications with AI/ML or real-time features",
                examples: ["Smart Parking System", "E-Learning Portal", "AI Chatbot", "Secure File Sharing"],
                features: [
                  "Complex application development",
                  "AI/ML integration",
                  "Real-time features",
                  "Comprehensive documentation",
                  "Detailed code walkthrough",
                  "Presentation support",
                  "Professional internship certificate",
                  "Paid internship opportunity*",
                  "3 months post-delivery assistance",
                  "Future project guidance"
                ],
                popular: false,
                badge: "PREMIUM"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-teal/50 shadow-2xl shadow-teal/25' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal to-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold font-poppins text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    {plan.originalPrice && (
                      <div className="text-lg text-white/50 line-through mb-1">
                        {plan.originalPrice}
                      </div>
                    )}
                    <div className="text-3xl font-bold text-teal">
                      {plan.price}
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-green-400 font-semibold">
                        Save ₹{Math.floor((parseInt(plan.originalPrice.replace('₹', '').replace(',', '')) - parseInt(plan.price.split(' - ')[0].replace('₹', '').replace(',', ''))) / 1000)}K+
                      </div>
                    )}
                  </div>
                  <p className="text-white/70 mb-4">
                    {plan.description}
                  </p>
                  
                  {/* Project Examples */}
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-teal mb-2">Example Projects:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {plan.examples.map((example, exampleIndex) => (
                        <span key={exampleIndex} className="text-xs bg-teal/20 text-teal px-2 py-1 rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-white/80">
                      <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('student-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal to-purple text-white hover:shadow-lg hover:shadow-teal/25'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="student-form" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
                Start Your <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Project Journey</span>
              </h2>
              <p className="text-lg text-white/80">
                Tell us about your project requirements and let's build something amazing together.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-teal focus:bg-white/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-teal focus:bg-white/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-teal focus:bg-white/20 transition-all duration-300"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">College/University *</label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-teal focus:bg-white/20 transition-all duration-300"
                      placeholder="Your college name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Course *</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-teal focus:bg-white/20 transition-all duration-300"
                    >
                      <option value="">Select your course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course} className="bg-navy text-white">
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Current Year *</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-teal focus:bg-white/20 transition-all duration-300"
                    >
                      <option value="">Select year</option>
                      <option value="1st Year" className="bg-navy text-white">1st Year</option>
                      <option value="2nd Year" className="bg-navy text-white">2nd Year</option>
                      <option value="3rd Year" className="bg-navy text-white">3rd Year</option>
                      <option value="4th Year" className="bg-navy text-white">4th Year</option>
                      <option value="Final Year" className="bg-navy text-white">Final Year</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-teal focus:bg-white/20 transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-navy text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Preferred Technology *</label>
                    <select
                      name="technology"
                      value={formData.technology}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-teal focus:bg-white/20 transition-all duration-300"
                    >
                      <option value="">Select technology</option>
                      {technologies.map((tech, index) => (
                        <option key={index} value={tech} className="bg-navy text-white">
                          {tech}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-teal focus:bg-white/20 transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-2 months" className="bg-navy text-white">1-2 months</option>
                      <option value="2-3 months" className="bg-navy text-white">2-3 months</option>
                      <option value="3-4 months" className="bg-navy text-white">3-4 months</option>
                      <option value="4+ months" className="bg-navy text-white">4+ months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Budget Range *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-teal focus:bg-white/20 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="₹20,000 - ₹25,000" className="bg-navy text-white">₹20,000 - ₹25,000 (Basic Projects)</option>
                      <option value="₹30,000 - ₹35,000" className="bg-navy text-white">₹30,000 - ₹35,000 (Standard Projects)</option>
                      <option value="₹45,000 - ₹50,000" className="bg-navy text-white">₹45,000 - ₹50,000 (Premium Projects)</option>
                      <option value="₹50,000+" className="bg-navy text-white">₹50,000+ (Custom Projects)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Project Description *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-teal focus:bg-white/20 transition-all duration-300"
                    placeholder="Describe your project requirements, features needed, and any specific details..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-400">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="font-semibold">Thank you for your interest!</span>
                    </div>
                    <p className="mt-1 text-sm">We'll get back to you within 24 hours with a detailed project proposal.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-400">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span className="font-semibold">Something went wrong!</span>
                    </div>
                    <p className="mt-1 text-sm">Please try again or contact us directly via WhatsApp.</p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-teal to-purple text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-teal/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Submit Project Requirements'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal/10 to-purple/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6 text-white">
              Have Questions? <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Let's Chat!</span>
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Get instant answers to your project questions via WhatsApp. We're here to help you succeed!
            </p>
            
            <motion.a
              href="https://wa.me/918788155105?text=Hi%20SwiftScale!%20I'm%20a%20student%20interested%20in%20your%20final%20year%20project%20services.%20Can%20you%20help%20me?"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StudentProjects;
