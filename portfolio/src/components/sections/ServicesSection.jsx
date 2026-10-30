import { useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import { Server, Cpu, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const capabilities = [
    {
      title: 'Distributed Systems & Event Streams',
      subtitle: 'BACKEND ARCHITECTURE',
      desc: 'Architecting enterprise Spring Boot backends with Java 21, reactive event streaming with Apache Kafka & Flink, and PostgreSQL/Redis optimizations for sub-second responses.',
      features: [
        'Java 21 virtual threads migration (15% latency drop)',
        'Kafka & Flink stream processing for real-time reporting',
        'Spring Boot microservices reducing dispute time < 2s',
        'Robust REST & GraphQL APIs with comprehensive JUnit tests',
      ],
      bg: 'bg-surface',
      rot: '-rotate-1',
      tag: 'Java 21 • Kafka • Spring Boot',
    },
    {
      title: 'GenAI, RAG & Edge Vision',
      subtitle: 'APPLIED AI & MACHINE LEARNING',
      desc: 'Architecting multimodal RAG knowledge bases ingesting 5M+ documents, and deploying lightweight neural networks (YOLOv10, TF Lite) for real-time edge processing.',
      features: [
        'End-to-end RAG architecture ingesting 5M+ documents into ChromaDB',
        'Custom YOLOv10 object detection with 95% accuracy',
        'Quantized TensorFlow Lite deployment on Android devices',
        'Offline inference pipelines with zero cloud latency & data privacy',
      ],
      bg: 'bg-postit',
      rot: 'rotate-1',
      tag: 'LangChain • LlamaIndex • YOLOv10 • TF Lite',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-8 md:px-12 relative overflow-hidden paper-texture">
      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="font-hand text-sm uppercase tracking-widest text-red-pen font-bold block mb-1">
            🛠️ SECTION 03 — WHAT I DO
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-ink">
            Core Engineering Disciplines.
          </h2>
        </div>

        {/* 2 Big Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => (
            <Motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`${cap.bg} border-[3px] border-outline wobbly-md p-6 sm:p-8 sketch-shadow-lg relative ${cap.rot} hover:rotate-0 hover:-translate-y-1 transition-all flex flex-col justify-between`}
            >
              {/* Tape strip */}
              <div className="absolute -top-3.5 left-10 w-24 h-6 tape-strip" />

              <div>
                <span className="font-hand text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
                  {cap.subtitle}
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-ink mb-4">
                  {cap.title}
                </h3>
                <p className="font-hand text-base sm:text-lg text-secondary leading-relaxed mb-6">
                  {cap.desc}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6">
                  {cap.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 font-hand text-base text-ink">
                      <span className="text-red-pen font-bold">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Footer */}
              <div className="pt-4 border-t-2 border-dashed border-outline/40 font-hand text-sm font-bold text-blue-pen">
                🏷️ {cap.tag}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
