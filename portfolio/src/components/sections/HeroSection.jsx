import { motion as Motion } from 'framer-motion';
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
          <path d="M50 10 L60 38 L90 40 L65 60 L75 90 L50 72 L25 90 L35 60 L10 40 L40 38 Z" stroke="var(--color-red-pen)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="var(--color-postit)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 my-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Block: Heading, Intro, CTAs (7 cols) */}
          <div className="md:col-span-7 flex flex-col items-start">
            {/* Status Sticky Tag */}
            <Motion.div
              initial={{ opacity: 0, rotate: -4, y: 10 }}
              animate={{ opacity: 1, rotate: -2, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-postit border-2 border-outline wobbly px-3.5 py-1 text-sm font-hand font-bold text-ink sketch-shadow-sm mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-pen animate-pulse" />
              <span>Available for high-impact backend & AI engineering! 🚀</span>
            </Motion.div>

            {/* Main Headline */}
            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl text-ink leading-[1.08] mb-6"
            >
              Hi, I&apos;m <span className="scribble-underline text-blue-pen">Siddhant</span>.
              <br />
              I build <span className="text-red-pen">scalable systems</span> & smart AI.
            </Motion.h1>

            {/* Subtext */}
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-hand text-lg sm:text-xl md:text-2xl text-secondary leading-relaxed mb-8 max-w-xl"
            >
              Software Engineer at <span className="font-bold text-blue-pen underline decoration-wavy decoration-red-pen">Everbridge</span> (previously Fiserv) in Bangalore. 4.2+ years crafting distributed microservices, 10M+ transaction pipelines, and 5M+ document RAG architectures.
            </Motion.p>

            {/* Action Buttons with Hand-drawn Press Physics */}
            <Motion.div
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
                className="bg-surface border-[3px] border-outline wobbly px-6 py-3 font-heading font-bold text-lg text-ink sketch-shadow hover:bg-red-pen hover:text-on-red hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-shadow)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="/Portfolio/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted border-2 border-outline wobbly px-5 py-3 font-hand text-lg text-ink sketch-shadow hover:bg-blue-pen hover:text-on-blue hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-shadow)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-2"
              >
                <Download size={18} />
                <span>Get CV (PDF)</span>
              </a>
            </Motion.div>
          </div>

          {/* Right Block: Pinned Sticky Note & Sketch Card (5 cols) */}
          <Motion.div
            initial={{ opacity: 0, rotate: 3, scale: 0.95 }}
            animate={{ opacity: 1, rotate: 2, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="bg-postit border-[3px] border-outline wobbly-md p-6 sm:p-8 sketch-shadow-xl relative max-w-sm w-full -rotate-1 hover:rotate-0 transition-transform">
              {/* Thumbtack Pin */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 pin-tack" />

              {/* Sticky Note Content */}
              <div className="font-heading font-bold text-2xl text-ink border-b-2 border-dashed border-outline/40 pb-2 mb-4 flex items-center justify-between">
                <span>📌 Developer Profile</span>
                <span className="text-sm font-hand text-red-pen">v4.2</span>
              </div>

              <ul className="font-hand text-lg sm:text-xl text-ink space-y-2.5 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-pen font-bold">✓</span>
                  <span>Software Developer @ <strong className="text-blue-pen">Everbridge</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-pen font-bold">✓</span>
                  <span>Ex-Software Engineer 2 @ <strong className="text-blue-pen">Fiserv</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-pen font-bold">✓</span>
                  <span>B.Tech CSE @ <strong className="text-blue-pen">VIT Bhopal</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-pen font-bold">✓</span>
                  <span>Winner 1st Place Code Warrior 🏆</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-pen font-bold">✓</span>
                  <span>Based in Bangalore, India 🇮🇳</span>
                </li>
              </ul>

              <div className="bg-surface/80 border-2 border-outline wobbly p-3 text-center font-hand text-sm text-ink">
                ☕ 1000+ Cups of Coffee & Counting!
              </div>
            </div>
          </Motion.div>
        </div>

        {/* 4 Hand-Drawn Stats Cards */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: '4.2+', label: 'Years Experience', note: 'Distributed Backends', rot: '-rotate-1', bg: 'bg-surface' },
            { value: '190+', label: 'Stories Resolved', note: 'High Reliability', rot: 'rotate-2', bg: 'bg-postit' },
            { value: '45+', label: 'APIs & Services', note: 'Java 21 / Spring', rot: '-rotate-2', bg: 'bg-surface' },
            { value: '40%', label: 'Performance Gain', note: 'Latency Optimization', rot: 'rotate-1', bg: 'bg-muted' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.bg} border-2 border-outline wobbly p-4 sm:p-5 sketch-shadow ${stat.rot} hover:rotate-0 hover:-translate-y-1 transition-all text-center`}
            >
              <div className="font-heading font-bold text-3xl sm:text-4xl text-red-pen">
                {stat.value}
              </div>
              <div className="font-hand font-bold text-base sm:text-lg text-ink mt-1">
                {stat.label}
              </div>
              <div className="font-hand text-xs text-secondary">
                {stat.note}
              </div>
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
