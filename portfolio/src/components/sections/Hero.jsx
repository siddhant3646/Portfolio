import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { TypewriterText, TextReveal } from '../ui/AnimatedText';
import { MagneticButton } from '../ui/TiltCard';

const Hero = () => {
  const roles = ['Software Engineer', 'Full Stack Developer', 'AI/ML Enthusiast', 'Problem Solver'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#ff006e]/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8338ec]/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f5ff]/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
        >
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 cursor-hover"
                whileHover={{ scale: 1.05 }}
                data-cursor-text="Available"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-400"
                />
                <span className="text-sm font-medium text-slate-300">Available for opportunities</span>
                <Sparkles size={16} className="text-[#ffbe0b]" />
              </motion.div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-4">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="text-gradient-sunset">Siddhant</span>
                <span className="text-gradient-ocean"> Singh</span>
              </h1>
            </motion.div>

            {/* Typewriter Role */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-300">
                <span className="text-slate-500">I'm a </span>
                <span className="font-semibold text-[#ff006e]">
                  <TypewriterText words={roles} typingSpeed={80} deletingSpeed={40} pauseTime={2000} />
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Software Engineer 2 at <span className="text-[#00f5ff]">Fiserv</span>, specializing in building
              scalable microservices, optimizing high-throughput data pipelines, and exploring the 
              frontiers of <span className="text-[#ffbe0b]">AI/ML</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <motion.a
                href="#experience"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#ff006e] to-[#8338ec] text-white font-semibold flex items-center gap-3 cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-text="View"
              >
                <span>View My Work</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.a>

              <motion.a
                href="/Portfolio/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-full glass text-white font-semibold flex items-center gap-3 border border-white/10 cursor-hover"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 0, 110, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-8">
              {[
                { value: '3.5+', label: 'Years Experience' },
                { value: '80+', label: 'User Stories Resolved' },
                { value: '25+', label: 'APIs Built' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient-sunset">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex-shrink-0"
          >
            <motion.div
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff006e] via-[#8338ec] to-[#00f5ff] rounded-full blur-3xl opacity-30 animate-pulse" />
              
              {/* Decorative Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#ff006e]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-dashed border-[#8338ec]/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />

              {/* Main Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden glass-strong glow-purple">
                <img
                  src="/Portfolio/profile.jpg"
                  alt="Siddhant Singh"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://github.com/siddhant3646.png';
                  }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass bg-[#ff006e]/20 border-[#ff006e]/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-sm font-semibold text-[#ff006e]">SE-2</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass bg-[#00f5ff]/20 border-[#00f5ff]/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-sm font-semibold text-[#00f5ff]">@Fiserv</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#ff006e] to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
