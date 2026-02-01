import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Server, 
  Cloud, 
  Database, 
  Terminal,
  Cpu,
  Zap,
  GitBranch,
  Bot,
  Shield,
  Layout
} from 'lucide-react';
import TiltCard from '../ui/TiltCard';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      id: 'languages',
      icon: Code2,
      title: 'Languages',
      color: '#ff006e',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash/Shell'],
    },
    {
      id: 'frontend',
      icon: Palette,
      title: 'Frontend',
      color: '#8338ec',
      skills: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML5/CSS3', 'Jest', 'Material UI (MUI)'],
    },
    {
      id: 'backend',
      icon: Server,
      title: 'Backend',
      color: '#00f5ff',
      skills: ['Spring Boot', 'Node.js', 'Hibernate', 'REST APIs', 'GraphQL', 'JUnit / Mockito', 'Swagger / OpenAPI'],
    },
    {
      id: 'data',
      icon: Database,
      title: 'Data & Streaming',
      color: '#ffbe0b',
      skills: ['Apache Kafka', 'Apache Spark', 'PostgreSQL', 'MongoDB', 'Redis', 'Vector DB (Chroma/Pinecone)', 'Elasticsearch'],
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: '#39ff14',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD (Jenkins / GitHub Actions)', 'Prometheus', 'Ansible'],
    },
    {
      id: 'ai',
      icon: Bot,
      title: 'AI & Automation',
      color: '#ff6b6b',
      skills: ['LangChain', 'Ollama', 'Selenium / Playwright', 'LLM APIs (Gemini/OpenAI)'],
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security',
      color: '#f59e0b',
      skills: ['Spring Security', 'OAuth 2.0 / OIDC', 'JWT', 'SSL/TLS'],
    },
    {
      id: 'architecture',
      icon: Layout,
      title: 'System Design & Architecture',
      color: '#ec4899',
      skills: ['Microservices', 'Design Patterns', 'Distributed Systems', 'UML / Flowcharts'],
    },
    {
      id: 'tools',
      icon: Terminal,
      title: 'Tools',
      color: '#ff073a',
      skills: ['Git/GitHub', 'Splunk', 'Grafana', 'Jira', 'IntelliJ IDEA', 'Postman', 'Maven / Gradle'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00f5ff]/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass text-[#00f5ff] text-sm font-medium mb-4"
          >
            Technical Arsenal
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            Skills &{' '}
            <span className="text-gradient-ocean">Technologies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit honed through years of building production-grade applications.
          </p>
        </motion.div>

        {/* Skill Categories Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <TiltCard tiltAmount={5} glowColor={`${category.color}20`}>
                <div className="glass rounded-2xl p-6 h-full border border-white/5 hover:border-opacity-30 transition-all cursor-hover group">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <category.icon size={24} style={{ color: category.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-medium text-slate-300 glass"
                        style={{ 
                          borderColor: `${category.color}30`,
                          borderWidth: '1px' 
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Strengths Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Cpu, title: 'System Design', desc: 'Scalable Architecture', color: '#ff006e' },
            { icon: Zap, title: 'Performance', desc: 'Optimization Expert', color: '#8338ec' },
            { icon: GitBranch, title: 'Best Practices', desc: 'Clean Code Advocate', color: '#00f5ff' },
            { icon: Cloud, title: 'Cloud Native', desc: 'AWS & Kubernetes', color: '#ffbe0b' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center p-6 rounded-xl glass cursor-hover group"
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <item.icon size={24} style={{ color: item.color }} />
              </div>
              <h4 className="text-white font-semibold mb-1">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
