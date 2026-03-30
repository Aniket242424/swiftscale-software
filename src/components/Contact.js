import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  // Toast notification effect
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const showSuccessToast = () => {
    setShowToast(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    console.log('Validating form data:', formData);
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      console.log('Validation failed: Name is empty');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      console.log('Validation failed: Email is empty');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      console.log('Validation failed: Email format is invalid');
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      console.log('Validation failed: Phone is empty');
    } else {
      // Remove all non-digits and check if it's a valid phone number
      const phoneDigits = formData.phone.replace(/\D/g, '');
      console.log('Phone validation - Country Code:', formData.countryCode, 'Phone:', formData.phone, 'Digits only:', phoneDigits);
      
      // Validate based on country code
      if (formData.countryCode === '+91' && !/^[6-9]\d{9}$/.test(phoneDigits)) {
        newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
        console.log('Validation failed: Indian phone format is invalid');
      } else if (formData.countryCode === '+1' && !/^\d{10}$/.test(phoneDigits)) {
        newErrors.phone = 'Please enter a valid 10-digit US phone number';
        console.log('Validation failed: US phone format is invalid');
      } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
        newErrors.phone = 'Please enter a valid phone number';
        console.log('Validation failed: Phone number length is invalid');
      }
    }
    
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      console.log('Validation failed: Message is empty');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      console.log('Validation failed: Message too short');
    }
    
    console.log('Validation errors:', newErrors);
    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    console.log('Form validation result:', isValid);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form submitted!', formData);
    
    // Validate form before submission
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }
    
    console.log('Form validation passed, starting submission...');
    setIsSubmitting(true);
    setSubmitStatus('');
    setErrors({});

    try {
      console.log('Attempting to send email via EmailJS...');
      
      // EmailJS configuration - using your existing setup
      const serviceId = 'service_9g3nhzl';
      const templateId = 'template_qknt74a';
      const publicKey = 'Wq1KCQz6S9BnCCZOU';

      console.log('EmailJS Config:', { serviceId, templateId, publicKey });

      // Initialize EmailJS
      emailjs.init(publicKey);

      // Send email using EmailJS with correct template variables
      const fullPhoneNumber = `${formData.countryCode} ${formData.phone}`;
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: fullPhoneNumber,
          message: formData.message,
          preferred_date: formData.preferredDate,
          preferred_time: formData.preferredTime,
          name: formData.name,
          email: formData.email,
        }
      );

      console.log('Email sent successfully via EmailJS:', result);
      setSubmitStatus('success');
      showSuccessToast();
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+91',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending email via EmailJS:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    console.log('Form submission completed');
  };

  const projectTypes = [
    'Book a Demo',
    'QraftAI Pro Access',
    'Enterprise Pricing',
    'CI/CD Integration Help',
    'Cross-Browser Testing Help',
    'General Inquiry'
  ];

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-4 right-4 z-[9999] bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className="font-semibold">Success!</p>
            <p className="text-sm">Demo request sent! We'll be in touch within 24 hours.</p>
          </div>
        </motion.div>
      )}

      <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Book a <span className="bg-gradient-to-r from-white to-teal bg-clip-text text-transparent">Free Demo</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-4">
            See QraftAI in action — live. We'll walk you through the product, answer your questions, and help you evaluate if it's the right fit for your team.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              No commitment required
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              30-minute live walkthrough
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Response within 24 hours
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
          >
            <div
              className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
              data-url="https://calendly.com/swift-scale2409/30min?hide_gdpr_banner=1&background_color=0f172a&text_color=ffffff&primary_color=0ea5a4"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-6">Get in touch</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Whether you want a live demo of QraftAI, need help getting started, or want to explore Enterprise pricing — our team is ready. Expect a response within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-white/80">soubhik.das@swiftscalesoftware.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Phone</p>
                  <div className="flex items-center space-x-3">
                    <p className="text-white/80">+91 8788155105</p>
                    <motion.a
                      href="https://wa.me/918788155105?text=Hi%20SwiftScale%20Software!%20I%20would%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-white/80">Pune, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-white/80 mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    href={social.name === 'LinkedIn' ? 'https://www.linkedin.com/company/109686950/' : '#'}
                    target={social.name === 'LinkedIn' ? '_blank' : '_self'}
                    rel={social.name === 'LinkedIn' ? 'noopener noreferrer' : ''}
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white/80 hover:bg-teal/20 hover:text-teal transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
