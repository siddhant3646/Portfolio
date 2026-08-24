import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Terminal, Zap, Shield } from 'lucide-react';

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="philosophy" className="py-24 px-4 sm:px-8 md:px-12 relative overflow-hidden paper-texture">
      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="font-hand text-sm uppercase tracking-widest text-[#ff4d4d] font-bold block mb-1">
            🧠 SECTION 02 — HOW I THINK
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#2d2d2d]">
            Engineering Philosophy & Mindset.
          </h2>
        </div>

        {/* 2 Column Whiteboard Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-[#fff9c4] border-[3px] border-[#2d2d2d] wobbly-md p-6 sm:p-8 sketch-shadow-lg relative -rotate-1 hover:rotate-0 transition-transform flex flex-col justify-between"
          >
            {/* Tape strip */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 tape-strip" />

            <div>
              <div className="flex items-center gap-2.5 font-heading font-bold text-2xl text-[#2d2d2d] mb-4">
                <Lightbulb size={24} className="text-[#ff4d4d]" />
                <span>Architectural Integrity</span>
              </div>
              <p className="font-hand text-lg sm:text-xl text-[#2d2d2d]/85 leading-relaxed mb-4">
                Every software breakthrough starts with clarity of architecture. At <strong>Everbridge</strong> and <strong>Fiserv</strong>, I treat concurrency not as an afterthought, but as the primary foundation of every service.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-dashed border-[#2d2d2d]/30 font-hand text-sm text-[#2d2d2d]/70 italic">
              &quot;If you can&apos;t explain the system flow on a napkin, it&apos;s too complicated.&quot;
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white border-[3px] border-[#2d2d2d] wobbly-md p-6 sm:p-8 sketch-shadow-lg relative rotate-1 hover:rotate-0 transition-transform flex flex-col justify-between"
          >
            {/* Pin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 pin-tack" />

            <div>
              <div className="flex items-center gap-2.5 font-heading font-bold text-2xl text-[#2d2d2d] mb-4">
                <Zap size={24} className="text-[#2d5da1]" />
                <span>Continuous Optimization</span>
              </div>
              <p className="font-hand text-lg sm:text-xl text-[#2d2d2d]/85 leading-relaxed mb-4">
                From migrating microservices to Java 21 virtual threads to training lightweight YOLOv10 computer vision networks for edge mobile phones, true elegance is delivering maximum performance with minimal overhead.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-dashed border-[#2d2d2d]/30 font-hand text-sm text-[#2d2d2d]/70 italic">
              &quot;Measure twice, optimize once, automate always.&quot;
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
