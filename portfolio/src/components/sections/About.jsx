import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Cloud, Brain, Award, Coffee } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';
import TiltCard from '../ui/TiltCard';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following industry best practices.',
      color: '#ff006e',
    },
    {
      icon: Database,
      title: 'Data-Driven',
      description: 'Designing efficient data pipelines and optimizing database performance for high-throughput systems.',
      color: '#8338ec',
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Building cloud-native applications with microservices architecture on AWS and Kubernetes.',
      color: '#00f5ff',
    },
    {
      icon: Brain,
      title: 'AI/ML Ready',
      description: 'Integrating machine learning models and AI solutions into production applications.',
      color: '#ffbe0b',
    },
  ];

  const stats = [
    { value: 3.5, suffix: '+', label: 'Years Experience', color: '#ff006e' },
    { value: 135, suffix: '+', label: 'User Stories Resolved', color: '#8338ec' },
    { value: 25, suffix: '+', label: 'APIs Built', color: '#ffbe0b' },
    { value: 40, suffix: '%', label: 'Performance Gain', color: '#00f5ff' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8338ec]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff006e]/10 rounded-full blur-[100px]" />

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
            className="inline-block px-4 py-2 rounded-full glass text-[#ff006e] text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            Passionate about{' '}
            <span className="text-gradient-sunset">building</span>
            <br />
            <span className="text-gradient-ocean">the future</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm a Software Engineer who loves turning complex problems into elegant solutions. 
            With expertise in distributed systems and AI/ML, I bridge the gap between innovation and implementation.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass rounded-2xl p-6 text-center group cursor-hover"
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 30px ${stat.color}30`
              }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                My journey in software engineering began during my time at{' '}
                <span className="text-[#00f5ff]">VIT Bhopal</span>, where I discovered my passion 
                for building scalable systems. The blend of theoretical knowledge and hands-on 
                projects laid the foundation for my career.
              </p>
              <p>
                Currently, I'm a{' '}
                <span className="text-[#ff006e]">Software Engineer 2 at Fiserv</span>, where I've 
                had the opportunity to work on mission-critical financial systems. From migrating 
                legacy Java applications to modern architectures to designing real-time data pipelines, 
                every challenge has been a learning opportunity.
              </p>
              <p>
                What drives me is the{' '}
                <span className="text-[#ffbe0b]">endless possibility of technology</span>. Whether 
                it's optimizing a microservice for better performance or integrating AI models 
                into production applications, I'm always excited to push boundaries.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: Award, text: '1st Place - Code Warrior' },
                { icon: Coffee, text: '1000+ Cups of Coffee' },
              ].map((fact, index) => (
                <motion.div
                  key={fact.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300"
                >
                  <fact.icon size={16} className="text-[#ffbe0b]" />
                  {fact.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                custom={index}
              >
                <TiltCard
                  className="h-full"
                  tiltAmount={8}
                  glowColor={`${item.color}30`}
                >
                  <div className="glass rounded-2xl p-6 h-full border border-white/5 hover:border-opacity-30 transition-colors cursor-hover" style={{ '--tw-border-opacity': 0.1, borderColor: item.color }}>
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon size={24} style={{ color: item.color }} />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="glass rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff006e]/20 to-[#8338ec]/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-gradient-sunset">VIT</span>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-white">Vellore Institute of Technology</h4>
              <p className="text-slate-400">B.Tech in Computer Science and Engineering</p>
              <p className="text-sm text-slate-500">2018 - 2022 • Bhopal, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
