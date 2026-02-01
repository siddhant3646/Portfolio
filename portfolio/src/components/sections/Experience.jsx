import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'Fiserv',
      role: 'Software Engineer - 2',
      location: 'Noida, India',
      duration: 'Jan 2022 - Present',
      type: 'Full-time',
      color: '#ff006e',
      achievements: [
        'Migrated production services from Java 8 to Java 21, improving response time by 15% using virtual threads',
        'Resolved 135+ user stories and 35 complex defects, improving service reliability by 40%',
        'Designed data streaming workflows with Apache Kafka/Flink, increasing reporting reliability by 40%',
        'Engineered scalable Spring Boot microservices, reducing dispute processing time to under 2 seconds',
        'Revamped frontend from legacy HTML/JS to React.js/TypeScript, achieving 40% performance gain',
        'Integrated Fortify scans into GitLab CI/CD, reducing security risks by 75%',
        'Developed internal tools for monitoring microservices health and performance',
        'Contributed to API documentation and testing frameworks',
      ],
      tech: ['Java 21', 'Spring Boot', 'React', 'Kafka', 'AWS', 'Docker', 'JUnit', 'Git'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff006e]/10 rounded-full blur-[150px]" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass text-[#ffbe0b] text-sm font-medium mb-4"
          >
            Career Journey
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            Work{' '}
            <span className="text-gradient-fire">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and key achievements.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff006e] via-[#8338ec] to-[#00f5ff]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-12 sm:pl-20 pb-16 last:pb-0"
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-2 sm:left-6 top-2 w-4 h-4 rounded-full border-4 border-[#0a0a0f]"
                style={{ backgroundColor: exp.color }}
                whileInView={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              />

              {/* Content Card */}
              <motion.div
                className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden group cursor-hover"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 0 40px ${exp.color}20`
                }}
              >
                {/* Gradient Overlay */}
                <div 
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: exp.color }}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${exp.color}20` }}
                        >
                          <Briefcase size={20} style={{ color: exp.color }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <p className="text-lg font-medium" style={{ color: exp.color }}>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                        <span 
                          className="px-2 py-1 rounded-full text-xs font-medium"
                          style={{ 
                            backgroundColor: `${exp.color}20`,
                            color: exp.color 
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, aIndex) => (
                      <motion.li
                        key={aIndex}
                        className="flex items-start gap-3 text-slate-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: aIndex * 0.1 }}
                      >
                        <ChevronRight 
                          size={16} 
                          className="mt-1 flex-shrink-0" 
                          style={{ color: exp.color }}
                        />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium glass"
                        style={{ 
                          borderColor: `${exp.color}30`,
                          color: exp.color 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Mini Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-6 flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff006e]/20 to-[#8338ec]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-gradient-sunset">VIT</span>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">B.Tech in Computer Science</h4>
              <p className="text-slate-400">Vellore Institute of Technology, Bhopal</p>
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-slate-400 text-sm">2018 - 2022</p>
              <p className="text-[#00f5ff] text-sm font-medium">Graduated</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
