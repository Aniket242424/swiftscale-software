import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "COVID-19 Live Data Tracker",
      description: "Real-time coronavirus data visualization and tracking application built during the pandemic",
      tech: ["React", "JavaScript", "API Integration", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://corona-virus-live-data.vercel.app/",
      year: "2020"
    },
    {
      title: "Weather App Pro",
      description: "Professional weather application with global coverage, 7-day forecasts, and real-time updates",
      tech: ["React", "JavaScript", "Weather API", "Geolocation", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://weather-app-sand-pi-48.vercel.app/",
      year: "2024"
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features - Currently in development",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "in-progress"
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive banking application - Currently in development",
      tech: ["React Native", "Firebase", "TypeScript"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "in-progress"
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
            Our <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/25">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3 className="text-xl sm:text-2xl font-semibold font-poppins">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.year && (
                        <span className="text-sm text-teal font-medium bg-teal/10 px-2 py-1 rounded-full">
                          {project.year}
                        </span>
                      )}
                      {project.status === 'in-progress' && (
                        <span className="text-sm text-orange-400 font-medium bg-orange-400/10 px-2 py-1 rounded-full border border-orange-400/30">
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-teal/20 text-teal text-sm rounded-full border border-teal/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (project.liveUrl) {
                        window.open(project.liveUrl, '_blank');
                      } else if (project.status === 'in-progress') {
                        alert('This project is currently in development. Please contact us for more details!');
                      } else {
                        alert('Project details coming soon!');
                      }
                    }}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      project.liveUrl 
                        ? 'bg-gradient-to-r from-teal to-purple text-white hover:shadow-lg hover:shadow-teal/25' 
                        : project.status === 'in-progress'
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-lg hover:shadow-orange-500/25'
                        : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:shadow-lg hover:shadow-gray-500/25'
                    }`}
                  >
                    {project.liveUrl 
                      ? 'View Live Project' 
                      : project.status === 'in-progress' 
                      ? 'In Development' 
                      : 'Coming Soon'
                    }
                  </motion.button>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
