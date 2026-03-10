import { ExternalLink, Github, Database, Zap } from "lucide-react";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Real-time Data Pipeline",
      problem: "Processar e analisar 10M+ eventos por dia em tempo real para detecção de fraudes.",
      technologies: ["PySpark", "Kafka", "Azure", "Databricks"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Data Lakehouse Architecture",
      problem: "Consolidar dados de múltiplas fontes em uma arquitetura moderna de Data Lakehouse.",
      technologies: ["Azure Fabric", "Delta Lake", "Python", "SQL"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "ETL Orchestration Platform",
      problem: "Automatizar pipelines de ETL complexos com monitoramento e alertas em tempo real.",
      technologies: ["Apache Airflow", "Python", "PostgreSQL", "Docker"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "ML Feature Store",
      problem: "Construir feature store escalável para alimentar modelos de ML em produção.",
      technologies: ["Databricks", "MLflow", "PySpark", "Redis"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Data Quality Framework",
      problem: "Implementar framework de qualidade de dados com validações automáticas e dashboards.",
      technologies: ["Python", "Great Expectations", "dbt", "Power BI"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Cloud Cost Optimization",
      problem: "Reduzir custos de cloud em 40% otimizando queries e arquitetura de dados.",
      technologies: ["Azure", "Snowflake", "Terraform", "Python"],
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
              <span className="text-[#d4b5a0]">Projetos em Destaque</span>
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
                className={`group relative p-6 bg-[#120f0d] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-all ${
                  project.featured ? "md:col-span-1" : ""
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
                  <p className="text-sm text-[#8b6f47] mb-1 font-mono">// Problema Resolvido:</p>
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
              href="#"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-[#b8956a] hover:text-[#d4b5a0] font-mono transition-colors group"
            >
              Ver todos os projetos no GitHub
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
