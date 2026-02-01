import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Paddy Disease Detection',
      description: 'AI-powered Android application for detecting common paddy diseases with 95% accuracy using YOLOv10 and TensorFlow Lite.',
      image: '🌾',
      tech: ['Android', 'Java', 'YOLOv10', 'TensorFlow Lite', 'Python'],
      color: '#39ff14',
      highlights: ['95% Detection Accuracy', 'Real-time Processing', 'Offline Capability'],
      demo: '#',
      featured: true,
    },
    {
      title: 'Detox - Smart City Waste',
      description: 'Automated garbage detection and cleanup dispatch system with an admin dashboard for smart city waste management.',
      image: '♻️',
      tech: ['Android', 'Java', 'ReactJS', 'Firebase', 'YOLOv10'],
      color: '#00f5ff',
      highlights: ['Automated Dispatch', 'Real-time Tracking', 'Admin Dashboard'],
      demo: '#',
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-[#8338ec]/5 to-transparent">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8338ec]/10 rounded-full blur-[150px]" />
      
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
            className="inline-block px-4 py-2 rounded-full glass text-[#39ff14] text-sm font-medium mb-4"
          >
            Featured Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            Projects &{' '}
            <span className="text-gradient-sunset">Innovations</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my work combining AI/ML with full-stack development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 mb-8"
        >
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <TiltCard tiltAmount={8} glowColor={`${project.color}30`} className="h-full">
                <div 
                  className="glass rounded-2xl overflow-hidden h-full group cursor-hover border border-white/5 hover:border-opacity-50 transition-all"
                  style={{ borderColor: hoveredIndex === index ? project.color : undefined }}
                >
                  {/* Image/Icon Area */}
                  <div 
                    className="h-48 flex items-center justify-center text-6xl relative overflow-hidden"
                    style={{ backgroundColor: `${project.color}10` }}
                  >
                    <motion.span
                      animate={{ 
                        scale: hoveredIndex === index ? 1.2 : 1,
                        rotate: hoveredIndex === index ? 10 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {project.image}
                    </motion.span>
                    
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ backgroundColor: `${project.color}90` }}
                    >
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#ff006e] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="flex items-center gap-1 px-2 py-1 rounded-full text-xs"
                          style={{ 
                            backgroundColor: `${project.color}20`,
                            color: project.color 
                          }}
                        >
                          <Star size={10} />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs glass text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass rounded-xl p-6 group cursor-hover hover:border-[#8338ec]/50 transition-all border border-white/5"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  {project.image}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#8338ec] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full text-xs glass text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.demo && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={project.demo} className="p-2 rounded-lg glass text-slate-400 hover:text-white inline-flex items-center gap-2">
                      <ExternalLink size={18} />
                      <span className="text-sm">View Demo</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Projects;
