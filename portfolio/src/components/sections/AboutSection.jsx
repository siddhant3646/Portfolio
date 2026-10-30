import { useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import { Code2, Database, Cpu, Cloud, CheckSquare, Heart } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const corePillars = [
    {
      title: 'High-Concurrency Microservices',
      desc: 'Java 21, Spring Boot, and virtual threads for high-throughput enterprise event notifications.',
      icon: Code2,
      tag: 'Java 21 • Spring Boot',
      bg: 'bg-surface',
      rot: '-rotate-1',
    },
    {
      title: 'Distributed Event Streaming',
      desc: 'Designing real-time, fault-tolerant pipelines with Apache Kafka & Flink for sub-second processing.',
      icon: Database,
      tag: 'Kafka • Flink • Redis',
      bg: 'bg-postit',
      rot: 'rotate-1',
    },
    {
      title: 'GenAI, RAG & Edge Vision',
      desc: 'Architecting 5M+ vector RAG systems with LangChain/ChromaDB and deploying edge YOLOv10 models.',
      icon: Cpu,
      tag: 'RAG • ChromaDB • YOLOv10',
      bg: 'bg-surface',
      rot: 'rotate-2',
    },
    {
      title: 'Cloud Native & Security',
      desc: 'Automated CI/CD pipelines on AWS & Kubernetes with integrated Fortify SAST security scans.',
      icon: Cloud,
      tag: 'AWS • Docker • K8s',
      bg: 'bg-muted',
      rot: '-rotate-2',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 md:px-12 relative overflow-hidden paper-texture">
      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Section Header Notebook Card */}
        <div className="bg-surface border-[3px] border-outline wobbly-md p-6 sm:p-10 sketch-shadow-lg mb-12 relative">
          {/* Tape strip at top */}
          <div className="absolute -top-3.5 left-12 w-28 h-7 tape-strip -rotate-2" />
          <div className="absolute -top-3.5 right-12 w-28 h-7 tape-strip rotate-3" />

          <div className="max-w-3xl">
            <span className="font-hand text-sm uppercase tracking-widest text-red-pen font-bold block mb-2">
              📖 SECTION 01 — MY STORY
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-ink mb-4">
              Passionate about building resilient systems that actually scale.
            </h2>
            <p className="font-hand text-lg sm:text-xl text-secondary leading-relaxed">
              My engineering adventure started at <strong className="text-blue-pen">VIT Bhopal</strong>, where I dove deep into computer science fundamentals and competitive coding (winning 1st place in Code Warrior!).
            </p>
            <p className="font-hand text-lg sm:text-xl text-secondary leading-relaxed mt-3">
              Today at <strong className="text-blue-pen">Everbridge</strong> (and previously at <strong className="text-blue-pen">Fiserv</strong>), I spend my days solving complex concurrency puzzles, cutting dispute processing latencies to under 2 seconds, and making sure millions of critical alerts reach their destination without fail.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars Sketch Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {corePillars.map((pillar, index) => (
            <Motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${pillar.bg} border-2 border-outline wobbly-md p-6 sketch-shadow ${pillar.rot} hover:rotate-0 hover:-translate-y-1 transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-surface border-2 border-outline wobbly-circle flex items-center justify-center text-red-pen">
                    <pillar.icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink">
                    {pillar.title}
                  </h3>
                </div>
                <p className="font-hand text-base sm:text-lg text-secondary leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-3 border-t-2 border-dashed border-outline/40 font-hand text-sm font-bold text-blue-pen">
                🏷️ {pillar.tag}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
