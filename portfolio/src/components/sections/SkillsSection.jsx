import { useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import { Code2, Database, Cpu, Cloud, Terminal, Shield, Sparkles, Layers } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Languages & Core Backend',
      icon: Code2,
      bg: 'bg-surface',
      rot: '-rotate-1',
      skills: [
        'Java (8 - 21)',
        'Python',
        'JavaScript / TypeScript',
        'Spring Boot & Spring Cloud',
        'Hibernate',
        'Virtual Threads & Reactive',
        'System Design (HLD/LLD)',
        'SOLID & Design Patterns',
        'Data Structures & Algorithms',
        'REST & GraphQL APIs',
        'JUnit & Mockito',
      ],
    },
    {
      category: 'Big Data, Streaming & Pipelines',
      icon: Database,
      bg: 'bg-postit',
      rot: 'rotate-1',
      skills: [
        'Apache Kafka',
        'Apache Spark',
        'Apache Flink',
        'Apache Storm',
        'Apache Airflow',
        'DBT (Data Build Tool)',
        'PostgreSQL',
        'MySQL & Oracle SQL',
        'Redis Caching',
        'NoSQL Databases',
      ],
    },
    {
      category: 'GenAI, RAG & Computer Vision',
      icon: Cpu,
      bg: 'bg-surface',
      rot: 'rotate-2',
      skills: [
        'Retrieval-Augmented Gen (RAG)',
        'LangChain & LlamaIndex',
        'ChromaDB Vector Store',
        'YOLOv10 Object Detection',
        'MediaPipe',
        'Local LLMs (Gemma 3, Qwen, DeepSeek)',
        'Ollama Edge Runtime',
        'AI-SDLC Workflow Automation',
        '5M+ Multimodal Document Ingestion (PDF, VSDX, Java)',
      ],
    },
    {
      category: 'Cloud, DevOps & Security',
      icon: Cloud,
      bg: 'bg-muted',
      rot: '-rotate-2',
      skills: [
        'AWS (EC2, S3, Lambda, RDS, CloudWatch)',
        'Docker & Kubernetes',
        'GitLab CI/CD Pipelines',
        'Microsoft Azure & GCP',
        'Pivotal Cloud Foundry (PCF)',
        'Fortify SAST Security',
        'FedRAMP & SOC 2 Audits',
        'Splunk & Grafana Monitoring',
        'Maven & Gradle',
      ],
    },
  ];

  const devTools = [
    'IntelliJ IDEA', 'VS Code', 'Cursor', 'Antigravity', 'Claude Code', 'Codex',
    'GitHub Copilot', 'Postman', 'Git / GitLab / GitHub', 'Jira', 'Confluence', 'Oracle SQL Developer'
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 md:px-12 relative overflow-hidden paper-texture">
      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="font-hand text-sm uppercase tracking-widest text-red-pen font-bold block mb-1">
            ⚡ SECTION 02 — TECHNICAL TOOLKIT
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-ink">
            Skills, Frameworks & AI Stack.
          </h2>
          <p className="font-hand text-lg sm:text-xl text-secondary mt-1">
            Production-tested technologies honed through enterprise deployments at scale.
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {skillCategories.map((cat, idx) => (
            <Motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${cat.bg} border-[3px] border-outline wobbly-md p-6 sm:p-8 sketch-shadow-lg relative ${cat.rot} hover:rotate-0 hover:-translate-y-1 transition-all`}
            >
              {/* Tape strip at top */}
              <div className="absolute -top-3 left-8 w-24 h-6 tape-strip" />

              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-dashed border-outline/40">
                <div className="w-10 h-10 bg-surface border-2 border-outline wobbly-circle flex items-center justify-center text-red-pen">
                  <cat.icon size={20} />
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Pill Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-surface border-2 border-outline wobbly px-3 py-1 font-hand text-base text-ink hover:bg-red-pen hover:text-on-red transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Developer Productivity & AI Tools Sticky Bar */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-surface border-[3px] border-outline wobbly-md p-6 sm:p-8 sketch-shadow-lg relative"
        >
          <div className="flex items-center gap-2 font-heading font-bold text-xl text-ink mb-4">
            <Sparkles size={20} className="text-blue-pen" />
            <span>Developer Tooling & AI-Assisted Engineering</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {devTools.map((tool) => (
              <span
                key={tool}
                className="bg-postit border-2 border-outline wobbly px-3 py-1 font-hand text-base font-bold text-ink"
              >
                🛠️ {tool}
              </span>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
