import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Star, Coffee, Code2 } from 'lucide-react';

const HeroSection = () => {
  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-between pt-32 pb-16 px-4 sm:px-8 md:px-12 paper-texture overflow-hidden"
    >
      {/* Hand-Drawn Doodle Accents (SVG) */}
      <div className="absolute top-28 right-8 md:right-24 hidden sm:block pointer-events-none -rotate-6">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 L60 38 L90 40 L65 60 L75 90 L50 72 L25 90 L35 60 L10 40 L40 38 Z" stroke="#ff4d4d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="#fff9c4" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 my-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Block: Heading, Intro, CTAs (7 cols) */}
          <div className="md:col-span-7 flex flex-col items-start">
            {/* Status Sticky Tag */}
            <motion.div
              initial={{ opacity: 0, rotate: -4, y: 10 }}
              animate={{ opacity: 1, rotate: -2, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-[#fff9c4] border-2 border-[#2d2d2d] wobbly px-3.5 py-1 text-sm font-hand font-bold text-[#2d2d2d] sketch-shadow-sm mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d4d] animate-pulse" />
              <span>Available for high-impact backend & AI engineering! 🚀</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl text-[#2d2d2d] leading-[1.08] mb-6"
            >
              Hi, I&apos;m <span className="scribble-underline text-[#2d5da1]">Siddhant</span>.
              <br />
              I build <span className="text-[#ff4d4d]">scalable systems</span> & smart AI.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-hand text-lg sm:text-xl md:text-2xl text-[#2d2d2d]/85 leading-relaxed mb-8 max-w-xl"
            >
              Software Developer at <span className="font-bold text-[#2d5da1] underline decoration-wavy decoration-[#ff4d4d]">Everbridge</span> (previously Fiserv) in Bangalore. 4.2+ years crafting Java 21 microservices, Kafka pipelines, and edge computer vision.
            </motion.p>

            {/* Action Buttons with Hand-drawn Press Physics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#projects');
                }}
                className="bg-white border-[3px] border-[#2d2d2d] wobbly px-6 py-3 font-heading font-bold text-lg text-[#2d2d2d] sketch-shadow hover:bg-[#ff4d4d] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="/Portfolio/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e5e0d8] border-2 border-[#2d2d2d] wobbly px-5 py-3 font-hand text-lg text-[#2d2d2d] sketch-shadow hover:bg-[#2d5da1] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-2"
              >
                <Download size={18} />
                <span>Get CV (PDF)</span>
              </a>
            </motion.div>
          </div>

          {/* Right Block: Pinned Sticky Note & Sketch Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, rotate: 3, scale: 0.95 }}
            animate={{ opacity: 1, rotate: 2, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="bg-[#fff9c4] border-[3px] border-[#2d2d2d] wobbly-md p-6 sm:p-8 sketch-shadow-xl relative max-w-sm w-full -rotate-1 hover:rotate-0 transition-transform">
              {/* Thumbtack Pin */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 pin-tack" />

              {/* Sticky Note Content */}
              <div className="font-heading font-bold text-2xl text-[#2d2d2d] border-b-2 border-dashed border-[#2d2d2d]/30 pb-2 mb-4 flex items-center justify-between">
                <span>📌 Developer Profile</span>
                <span className="text-sm font-hand text-[#ff4d4d]">v4.2</span>
              </div>

              <ul className="font-hand text-lg sm:text-xl text-[#2d2d2d] space-y-2.5 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4d4d] font-bold">✓</span>
                  <span>Software Developer @ <strong className="text-[#2d5da1]">Everbridge</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4d4d] font-bold">✓</span>
                  <span>Ex-Software Engineer 2 @ <strong className="text-[#2d5da1]">Fiserv</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4d4d] font-bold">✓</span>
                  <span>B.Tech CSE @ <strong className="text-[#2d5da1]">VIT Bhopal</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4d4d] font-bold">✓</span>
                  <span>Winner 1st Place Code Warrior 🏆</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4d4d] font-bold">✓</span>
                  <span>Based in Bangalore, India 🇮🇳</span>
                </li>
              </ul>

              <div className="bg-white/80 border-2 border-[#2d2d2d] wobbly p-3 text-center font-hand text-sm text-[#2d2d2d]">
                ☕ 1000+ Cups of Coffee & Counting!
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Hand-Drawn Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: '4.2+', label: 'Years Experience', note: 'Distributed Backends', rot: '-rotate-1', bg: 'bg-white' },
            { value: '190+', label: 'Stories Resolved', note: 'High Reliability', rot: 'rotate-2', bg: 'bg-[#fff9c4]' },
            { value: '45+', label: 'APIs & Services', note: 'Java 21 / Spring', rot: '-rotate-2', bg: 'bg-white' },
            { value: '40%', label: 'Performance Gain', note: 'Latency Optimization', rot: 'rotate-1', bg: 'bg-[#e5e0d8]' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.bg} border-2 border-[#2d2d2d] wobbly p-4 sm:p-5 sketch-shadow ${stat.rot} hover:rotate-0 hover:-translate-y-1 transition-all text-center`}
            >
              <div className="font-heading font-bold text-3xl sm:text-4xl text-[#ff4d4d]">
                {stat.value}
              </div>
              <div className="font-hand font-bold text-base sm:text-lg text-[#2d2d2d] mt-1">
                {stat.label}
              </div>
              <div className="font-hand text-xs text-[#2d2d2d]/60">
                {stat.note}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
