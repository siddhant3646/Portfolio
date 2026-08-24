import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Award, GraduationCap, Users, ShieldCheck, Cpu } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      role: 'Software Engineer - 2',
      company: 'Everbridge',
      location: 'Bangalore, India',
      duration: 'Jun 2026 - Present',
      type: 'Full-time',
      bg: 'bg-white',
      rot: '-rotate-1',
      bullets: [
        'Collaborated with cross-functional Agile teams to design and ship 3 new crisis communication features and third-party system integrations, expanding response-plan automation capabilities.',
        'Strengthened platform security by integrating Fortify scans into CI/CD pipelines and supporting FedRAMP and SOC 2 compliance audits, proactively resolving 7+ pre-release vulnerabilities.',
        'Configuring and customizing an open-source, AWS-backed AI-SDLC platform, tailoring automation workflows and tool integrations for internal engineering.',
      ],
      tech: ['Java 21', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'Fortify', 'CI/CD', 'FedRAMP', 'SOC 2'],
    },
    {
      role: 'Software Engineer - 2',
      company: 'Fiserv',
      location: 'Noida, India',
      duration: 'Jun 2022 - May 2026',
      type: 'Full-time',
      bg: 'bg-[#fff9c4]',
      rot: 'rotate-1',
      bullets: [
        'Architected and built an end-to-end Retrieval-Augmented Generation (RAG) system ingesting 5+ document types (PDF, DOCX, Excel, Visio/VSDX, Java) into a unified vector knowledge base using ChromaDB, LangChain, and LlamaIndex.',
        'Resolved 135+ user stories and 35 complex technical defects, improving service reliability by 40% and reducing user-reported issues by 60%.',
        'Designed scalable data streaming workflows integrating Apache Kafka with Apache Flink and Spark, improving settlement reporting reliability by 40% and eliminating data inconsistencies across distributed ledgers.',
        'Migrated production services from Java 8 to Java 21, leveraging virtual threads and Spring reactive stacks to improve application response time by 15%.',
        'Engineered highly scalable Spring Boot microservices, accelerating transaction dispute processing to under 2 seconds and elevating system efficiency scores by 35%.',
        'Architected HLD for event-driven microservices processing 10M+ daily transactions, applying LLD (SOLID, Design Patterns) to optimize resource efficiency by 30% for 15+ toolkit clients. Built 15 new scalable services from scratch.',
        'Deployed and managed microservices on AWS (EC2, S3, Lambda, RDS, CloudWatch) with automated CI/CD pipelines. Engineered high-throughput data processing pipelines using Spark, Flink, Airflow, and DBT for Dispute Expert Toolkit clients.',
      ],
      tech: ['Java 21', 'Spring Boot', 'Kafka', 'Spark', 'Flink', 'Airflow', 'DBT', 'ChromaDB', 'LangChain', 'LlamaIndex', 'AWS', 'ReactJS'],
    },
  ];

  const leadership = [
    {
      title: '1st Place — Secure Code Warrior',
      org: 'Fiserv Competition (500+ Participants)',
      desc: 'Won first place among 500+ engineers, validating elite security-first software development and secure coding practices.',
      icon: Award,
      bg: 'bg-white',
    },
    {
      title: 'Android Team Lead',
      org: 'Google Developer Student Club (GDSC)',
      desc: 'Led a 10-member Android engineering team, driving innovative mobile app development and conducting campus workshops.',
      icon: Users,
      bg: 'bg-[#fff9c4]',
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 md:px-12 relative overflow-hidden paper-texture">
      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="font-hand text-sm uppercase tracking-widest text-[#ff4d4d] font-bold block mb-1">
            💼 SECTION 04 — WORK EXPERIENCE
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#2d2d2d]">
            Career Experience & Leadership.
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 mb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`${exp.bg} border-[3px] border-[#2d2d2d] wobbly-md p-6 sm:p-8 sketch-shadow-lg relative ${exp.rot} hover:rotate-0 transition-transform`}
            >
              {/* Tape strip */}
              <div className="absolute -top-3.5 left-8 w-24 h-6 tape-strip" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b-2 border-dashed border-[#2d2d2d]/30">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#2d2d2d]">
                      {exp.role}
                    </h3>
                    <span className="bg-[#e5e0d8] border border-[#2d2d2d] wobbly px-2 py-0.5 font-hand text-xs text-[#2d2d2d]">
                      {exp.type}
                    </span>
                  </div>
                  <div className="font-hand text-xl font-bold text-[#2d5da1]">
                    @ {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-hand text-base text-[#2d2d2d]/70">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} className="text-[#ff4d4d]" />
                    {exp.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} className="text-[#2d5da1]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-6">
                {exp.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-2.5 font-hand text-base sm:text-lg text-[#2d2d2d]/90 leading-relaxed">
                    <span className="text-[#ff4d4d] font-bold mt-0.5">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-dashed border-[#2d2d2d]/30">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-white border-2 border-[#2d2d2d] wobbly px-2.5 py-0.5 font-hand text-sm text-[#2d2d2d]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Leadership Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white border-[3px] border-[#2d2d2d] wobbly-md p-6 sketch-shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 bg-[#fff9c4] border-2 border-[#2d2d2d] wobbly-circle flex items-center justify-center text-[#ff4d4d] mb-3">
                <GraduationCap size={20} />
              </div>
              <h4 className="font-heading font-bold text-lg text-[#2d2d2d]">
                B.Tech in Computer Science
              </h4>
              <p className="font-hand text-base text-[#2d2d2d]/70 mt-1">
                Vellore Institute of Technology (VIT), Bhopal
              </p>
            </div>
            <div className="font-hand text-sm text-[#2d5da1] font-bold mt-4 pt-2 border-t border-dashed border-[#2d2d2d]/30">
              📅 Jun 2018 - May 2022
            </div>
          </motion.div>

          {/* Leadership Cards */}
          {leadership.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + idx * 0.1 }}
              className={`${item.bg} border-[3px] border-[#2d2d2d] wobbly-md p-6 sketch-shadow-lg flex flex-col justify-between`}
            >
              <div>
                <div className="w-10 h-10 bg-white border-2 border-[#2d2d2d] wobbly-circle flex items-center justify-center text-[#2d5da1] mb-3">
                  <item.icon size={20} />
                </div>
                <h4 className="font-heading font-bold text-lg text-[#2d2d2d]">
                  {item.title}
                </h4>
                <div className="font-hand text-xs font-bold text-[#ff4d4d] mb-2">
                  {item.org}
                </div>
                <p className="font-hand text-sm text-[#2d2d2d]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
