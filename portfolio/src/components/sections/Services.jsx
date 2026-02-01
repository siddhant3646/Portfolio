import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Code, 
  Cloud, 
  Database, 
  Cpu, 
  Smartphone, 
  LineChart,
  ArrowRight
} from 'lucide-react';
import TiltCard from '../ui/TiltCard';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end application development with React, Spring Boot, and modern architectures.',
      features: ['React & TypeScript', 'Spring Boot', 'Microservices', 'REST & GraphQL APIs'],
      color: '#ff006e',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud-native applications and infrastructure on AWS with Kubernetes orchestration.',
      features: ['AWS Services', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
      color: '#8338ec',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'High-throughput data pipelines using Apache Kafka, Spark, and Flink.',
      features: ['Apache Kafka', 'Apache Spark', 'Real-time Streaming', 'Data Processing'],
      color: '#00f5ff',
    },
    {
      icon: Cpu,
      title: 'AI/ML Integration',
      description: 'Integrating machine learning models into production applications.',
      features: ['TensorFlow & PyTorch', 'Model Deployment', 'Computer Vision', 'NLP Solutions'],
      color: '#ffbe0b',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with React Native and Android native.',
      features: ['React Native', 'Android Native', 'Firebase', 'Push Notifications'],
      color: '#39ff14',
    },
    {
      icon: LineChart,
      title: 'Performance Optimization',
      description: 'System optimization for better response times and resource utilization.',
      features: ['Code Profiling', 'Database Tuning', 'Caching Strategies', 'Load Testing'],
      color: '#ff073a',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-[#ff006e]/5 to-transparent">
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
            className="inline-block px-4 py-2 rounded-full glass text-[#8338ec] text-sm font-medium mb-4"
          >
            What I Offer
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            Services &{' '}
            <span className="text-gradient-sunset">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From concept to deployment, I provide comprehensive solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <TiltCard
                tiltAmount={5}
                glowColor={`${service.color}20`}
                className="h-full"
              >
                <div 
                  className="glass rounded-2xl p-8 h-full border transition-all duration-300 cursor-hover"
                  style={{
                    borderColor: hoveredIndex === index ? service.color : 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}20` }}
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <service.icon size={28} style={{ color: service.color }} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: hoveredIndex === index ? 1 : 0.7,
                          x: 0 
                        }}
                        transition={{ delay: fIndex * 0.05 }}
                      >
                        <span 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: service.color }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>


                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            Have a project in mind? Let's discuss how I can help.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff006e] to-[#8338ec] text-white font-semibold cursor-hover"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 0, 110, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
