import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: "Omkar Chougale",
      role: "Chief Executive Officer",
      description: "Visionary leader steering SwiftScale's growth and strategic direction. Drives company vision, builds key partnerships, and ensures every client engagement delivers measurable business impact.",
      initials: "OC",
      expertise: ["Business Strategy", "Leadership", "Partnerships", "Vision & Growth"]
    },
    {
      name: "Aniket Mahangade",
      role: "Chief Technology Officer",
      description: "Ex-Amazon engineer with 8+ years of experience architecting scalable systems. Leads all technical decisions, drives AI-enhanced development processes, and ensures delivery of enterprise-grade software.",
      initials: "AM",
      expertise: ["Full-Stack Development", "Enterprise Architecture", "AI-Enhanced Dev", "System Design"]
    },
    {
      name: "Soubhik Das",
      role: "Growth & Investor Relations",
      description: "The face of SwiftScale to the world. Pitches our product to clients and investors, builds compelling narratives around our solutions, and opens doors to funding and strategic growth opportunities.",
      initials: "SB",
      expertise: ["Product Pitching", "Investor Relations", "Business Development", "Brand Storytelling"]
    },
    {
      name: "Kunal Anarse",
      role: "Cloud Infrastructure Expert",
      description: "Owns SwiftScale's cloud strategy end-to-end. Designs and manages scalable, secure cloud environments that power our products with high availability, performance, and cost efficiency.",
      initials: "KA",
      expertise: ["Cloud Architecture", "AWS / Azure / GCP", "DevOps & CI/CD", "Infrastructure Scaling"]
    },
    {
      name: "Sameer Tate",
      role: "Product Manager & Marketing Lead",
      description: "The internal engine of SwiftScale. Finds and owns client relationships, leads internal meetings, drives product direction based on market needs, and ensures the team ships what customers actually want.",
      initials: "ST",
      expertise: ["Product Management", "Customer Acquisition", "Team Leadership", "Go-to-Market Strategy"]
    }
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-br from-slate-900 to-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Meet Our <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            A lean, high-impact team of specialists — from engineering and cloud to product and investor relations — united by a single mission: building software that scales businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/25 h-full flex flex-col">
                {/* Profile Image */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal to-purple rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {member.initials}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-5 h-5 bg-teal rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4 flex-grow">
                  <h3 className="text-lg font-bold font-poppins text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal font-semibold mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-white/80 text-xs leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-teal/20 text-teal text-xs rounded-full border border-teal/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold font-poppins text-white text-center mb-8">
            Our Team's Combined Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">30+</div>
              <div className="text-white/80">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">75+</div>
              <div className="text-white/80">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">150+</div>
              <div className="text-white/80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal mb-2">5</div>
              <div className="text-white/80">Team Members</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
