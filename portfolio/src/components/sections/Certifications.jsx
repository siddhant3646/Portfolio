import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Star, Award, TrendingUp } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      title: 'Best Team Performer Award',
      organization: 'Fiserv',
      year: '2024',
      description: 'Recognized for exceptional contribution to team success, delivering high-quality solutions, and mentoring junior developers.',
      icon: Trophy,
      color: '#ff006e',
      highlight: 'Top Performer',
    },
    {
      title: '1st Place - Code Warrior',
      organization: 'Fiserv',
      year: '2021',
      description: 'Won first place in university-level competitive programming competition.',
      icon: Star,
      color: '#8338ec',
      highlight: 'Champion',
    },
    {
      title: '40% Performance Improvement',
      organization: 'Fiserv',
      year: '2023',
      description: 'Achieved significant system performance gains through optimization and modernization initiatives.',
      icon: TrendingUp,
      color: '#00f5ff',
      highlight: 'Impact',
    },
    {
      title: '135+ User Stories Delivered',
      organization: 'Fiserv',
      year: '2022-2024',
      description: 'Consistently delivered high-quality features and resolved complex production issues.',
      icon: Award,
      color: '#ffbe0b',
      highlight: 'Delivery',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="achievements" className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-[#ffbe0b]/5 to-transparent">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff006e]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#8338ec]/10 rounded-full blur-[120px]" />

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
            Recognition
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            Notable{' '}
            <span className="text-gradient-sunset">Achievements</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Milestones and recognitions that mark my professional journey.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={achievement.title} variants={itemVariants}>
              <TiltCard tiltAmount={5} glowColor={`${achievement.color}20`}>
                <div className="glass rounded-2xl p-8 h-full border border-white/5 hover:border-opacity-30 transition-all cursor-hover relative overflow-hidden group">
                  {/* Background Gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${achievement.color}10, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${achievement.color}20` }}
                      >
                        <achievement.icon size={28} style={{ color: achievement.color }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                        <p className="text-slate-400 text-sm">{achievement.organization}</p>
                      </div>
                    </div>

                    {/* Highlight Badge */}
                    <div className="mb-4">
                      <span 
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ 
                          backgroundColor: `${achievement.color}30`,
                          color: achievement.color 
                        }}
                      >
                        <Star size={12} />
                        {achievement.highlight}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
