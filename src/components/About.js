import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Long-term Partnerships",
      description: "We build lasting relationships with our clients, providing ongoing support and maintenance for years to come."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Reliable Support",
      description: "From development to maintenance, we ensure your digital presence stays updated, secure, and performing optimally."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Scalable Solutions",
      description: "We create solutions that grow with your business, from student projects to enterprise applications."
    }
  ];

  return (
    <section id="about" className="section-padding bg-navy">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Company Story */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
              About <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">SwiftScale</span>
            </h2>
            
            <div className="space-y-6 text-white/90 leading-relaxed">
              <p className="text-lg">
                Founded in 2020 in Pune, India, SwiftScale Software emerged from a simple belief: technology should empower businesses, not complicate them. Led by an ex-Amazon employee with 8+ years of experience, we started as a team of passionate developers focused on building lasting partnerships.
              </p>
              
              <p>
                We specialize in creating professional websites, mobile applications, and custom software solutions. But what sets us apart is our commitment to long-term partnerships. We don't just deliver projects and disappear – we provide ongoing maintenance, updates, and support to ensure your digital presence continues to grow and evolve.
              </p>
              
              <p>
                Our mission is to be your trusted technology partner for years to come. From initial development to ongoing maintenance, from student projects to enterprise solutions, we're here to support your digital journey every step of the way.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-teal flex-shrink-0 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-poppins mb-2">{value.title}</h3>
                    <p className="text-white/80">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Founder Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="glass-card max-w-md">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal to-purple p-1">
                  <div className="w-full h-full rounded-full bg-navy flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">AM</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-poppins mb-2">Aniket Mahangade</h3>
                <p className="text-teal font-semibold mb-4">Founder & Lead Developer</p>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  With over 8 years of experience in the software industry, Aniket founded SwiftScale in Pune to help businesses leverage technology for growth. He's passionate about clean code, user experience, and building solutions that scale globally.
                </p>
                
                <div className="flex justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://www.linkedin.com/in/aniket-mahangade-193b21130/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-teal/20 rounded-full flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="w-10 h-10 bg-teal/20 rounded-full flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
