import { ExternalLink, Github, Database, Zap } from "lucide-react";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Industrial Predictive Maintenance AI",
      problem: "Reduce unplanned downtime by predicting machine failures using sensor data and machine learning.",
      technologies: ["Python", "XGBoost", "Scikit-Learn", "IoT Data"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "GenAI Technical Assistant (RAG)",
      problem: "Automating access to 'Lessons Learned' and technical manuals through a Generative AI chatbot for shop-floor engineers.",
      technologies: ["LangChain", "OpenAI / Llama 3", "ChromaDB", "Python"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Smart Energy Anomaly Detection",
      problem: "Identify energy waste and equipment malfunctions in manufacturing lines using unsupervised anomaly detection.",
      technologies: ["Python", "Isolation Forest", "Pandas", "Power BI"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Digital Twin & OEE Dashboard",
      problem: "Real-time monitoring of Overall Equipment Effectiveness (OEE) and production KPIs through a digital twin simulation.",
      technologies: ["Microsoft Fabric", "Power BI", "SQL", "PySpark"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Computer Vision Quality Inspector",
      problem: "Automating visual quality control on the production line to detect defects and reduce scrap rates.",
      technologies: ["OpenCV", "TensorFlow", "Python", "Docker"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Supply Chain Demand Forecaster",
      problem: "Optimizing inventory levels of critical raw materials using time-series forecasting to prevent stockouts.",
      technologies: ["Prophet", "Python", "Statsmodels", "Azure"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#1a1614]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <span className="text-[#b8956a] font-mono text-xl">03.</span>{" "}
              <span className="text-[#d4b5a0]">Featured Projects</span>
            </h2>
            <div className="h-[2px] w-32 bg-[#b8956a]" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative p-6 bg-[#120f0d] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-all ${project.featured ? "md:col-span-1" : ""
                  }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-3 py-1 bg-[#b8956a] text-[#120f0d] rounded text-xs font-mono flex items-center gap-1"
                    >
                      <Zap size={12} />
                      Featured
                    </motion.div>
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <Database className="text-[#b8956a]" size={32} />
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#8b6f47] hover:text-[#b8956a] transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.2 }}
                      className="text-[#8b6f47] hover:text-[#b8956a] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <h3 className="text-xl text-[#d4b5a0] mb-3 font-mono group-hover:text-[#b8956a] transition-colors">
                  {project.title}
                </h3>

                <div className="mb-4">
                  <p className="text-sm text-[#8b6f47] mb-1 font-mono">// Problem Solved:</p>
                  <p className="text-[#a68a64] leading-relaxed">{project.problem}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#3a2d22] text-[#c9a997] rounded text-xs font-mono border border-transparent group-hover:border-[#8b6f47] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="https://github.com/PnkMatter"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-[#b8956a] hover:text-[#d4b5a0] font-mono transition-colors group"
            >
              See all projects on Github
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
