import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Github, Star, ExternalLink, Cpu, Database, Eye, Bot } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Real-Time Edge Vision Agent',
      tag: 'EDGE AI & COMPUTER VISION',
      desc: 'Completely private, offline video tracking system using YOLOv10 and Spring Boot to monitor posture and generate instant automated alerts with zero cloud latency.',
      specs: ['Offline Edge Inference', 'Instant Alert Dispatch', 'Zero Data Leakage'],
      tech: ['YOLOv10', 'Spring Boot', 'Python', 'OpenCV', 'Java'],
      github: 'https://github.com/siddhant3646',
      bg: 'bg-white',
      rot: '-rotate-1',
      icon: Eye,
    },
    {
      title: 'Detox — Smart City Waste',
      tag: 'FULL STACK & COMPUTER VISION',
      desc: 'Smart city waste management application in Java for Android, featuring real-time YOLOv10 garbage detection and automated cleanup dispatch via Firebase backend and ReactJS admin dashboard.',
      specs: ['Automated Dispatch', 'Live Geo-Tracking', 'React Admin Dashboard'],
      tech: ['Android', 'Java', 'ReactJS', 'Firebase', 'YOLOv10'],
      github: 'https://github.com/siddhant3646',
      bg: 'bg-[#fff9c4]',
      rot: 'rotate-1',
      icon: Cpu,
    },
    {
      title: 'Multimodal Vector RAG System',
      tag: 'GENAI & KNOWLEDGE RETRIEVAL',
      desc: 'End-to-end Retrieval-Augmented Generation system ingesting 5+ document formats (PDF, DOCX, Excel, Visio/VSDX, Java) into a unified ChromaDB vector store with LangChain and LlamaIndex.',
      specs: ['5+ Document Formats', 'ChromaDB Vector Store', 'LangChain & LlamaIndex'],
      tech: ['LangChain', 'LlamaIndex', 'ChromaDB', 'Python', 'Local LLMs'],
      github: 'https://github.com/siddhant3646',
      bg: 'bg-white',
      rot: 'rotate-2',
      icon: Bot,
    },
    {
      title: 'Dispute Expert Engine (10M+ Txns)',
      tag: 'DISTRIBUTED DATA STREAMING',
      desc: 'Event-driven microservices processing 10M+ daily transactions, dropping dispute resolution latencies to under 2s with Kafka, Spark, Flink, Airflow, and DBT on AWS.',
      specs: ['10M+ Daily Transactions', '< 2s Latency', 'Kafka & Spark Streams'],
      tech: ['Java 21', 'Spring Boot', 'Apache Kafka', 'Spark', 'Flink', 'Airflow', 'DBT', 'AWS'],
      github: 'https://github.com/siddhant3646',
      bg: 'bg-[#e5e0d8]',
      rot: '-rotate-2',
      icon: Database,
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 md:px-12 relative overflow-hidden paper-texture">
      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-hand text-sm uppercase tracking-widest text-[#ff4d4d] font-bold block mb-1">
              🚀 SECTION 05 — FEATURED BUILDS
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#2d2d2d]">
              Featured Projects & Systems.
            </h2>
          </div>
          <a
            href="https://github.com/siddhant3646"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-[#2d2d2d] wobbly px-4 py-2 font-hand text-base text-[#2d2d2d] sketch-shadow hover:bg-[#2d5da1] hover:text-white transition-all flex items-center gap-2 w-fit"
          >
            <Github size={18} />
            <span>GitHub Profile</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* 2x2 Grid for Rich Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`${p.bg} border-[3px] border-[#2d2d2d] wobbly-md p-6 sm:p-8 sketch-shadow-lg relative ${p.rot} hover:rotate-0 hover:-translate-y-1 transition-all flex flex-col justify-between`}
            >
              {/* Tape strip */}
              <div className="absolute -top-3.5 left-10 w-24 h-6 tape-strip" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-hand text-xs font-bold text-[#ff4d4d] tracking-wider uppercase">
                    {p.tag}
                  </span>
                  <p.icon size={20} className="text-[#2d5da1]" />
                </div>

                <h3 className="font-heading font-bold text-2xl text-[#2d2d2d] mb-3">
                  {p.title}
                </h3>
                <p className="font-hand text-base sm:text-lg text-[#2d2d2d]/85 leading-relaxed mb-6">
                  {p.desc}
                </p>

                {/* Specs List */}
                <div className="space-y-1.5 mb-6">
                  {p.specs.map((s) => (
                    <div key={s} className="flex items-center gap-2 font-hand text-base text-[#2d2d2d]">
                      <span className="text-[#2d5da1] font-bold">★</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t-2 border-dashed border-[#2d2d2d]/30">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-white border border-[#2d2d2d] wobbly px-2.5 py-0.5 font-hand text-xs text-[#2d2d2d]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
