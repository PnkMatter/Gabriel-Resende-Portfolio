import { Briefcase, Award, Languages } from "lucide-react";
import { motion } from "motion/react";

export function Experience() {
  const experiences = [
    {
      period: "2022 - Presente",
      role: "Senior Data Engineer",
      company: "Tech Corp",
      achievements: [
        "Liderei migração de infraestrutura on-premise para Azure, reduzindo custos em 45%",
        "Implementei data lakehouse com Delta Lake processando 50TB+ de dados diários",
        "Desenvolvi framework de data quality que reduziu erros em 80%",
      ],
    },
    {
      period: "2020 - 2022",
      role: "Data Engineer",
      company: "Data Solutions Inc",
      achievements: [
        "Construí pipelines de ETL em PySpark processando 10M+ registros/hora",
        "Automatizei 90% dos processos manuais usando Apache Airflow",
        "Otimizei queries SQL resultando em 60% de redução no tempo de execução",
      ],
    },
    {
      period: "2018 - 2020",
      role: "Junior Data Engineer",
      company: "Analytics First",
      achievements: [
        "Desenvolvi dashboards em Power BI para análise de KPIs executivos",
        "Implementei pipelines de dados usando Python e PostgreSQL",
        "Participei da criação do primeiro data warehouse da empresa",
      ],
    },
  ];

  const certifications = [
    { name: "Azure Data Engineer Associate", issuer: "Microsoft", year: "2023" },
    { name: "Databricks Certified Data Engineer", issuer: "Databricks", year: "2023" },
    { name: "AWS Certified Big Data - Specialty", issuer: "Amazon", year: "2022" },
    { name: "Apache Spark Developer", issuer: "Databricks", year: "2021" },
  ];

  const languages = [
    { name: "Português", level: "Nativo", percentage: 100 },
    { name: "Inglês", level: "Fluente", percentage: 90 },
    { name: "Alemão", level: "Intermediário", percentage: 60 },
  ];

  return (
    <section id="experience" className="py-20 bg-[#120f0d]">
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
              <span className="text-[#b8956a] font-mono text-xl">04.</span>{" "}
              <span className="text-[#d4b5a0]">Experiência & Formação</span>
            </h2>
            <div className="h-[2px] w-32 bg-[#b8956a]" />
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl text-[#c9a997] mb-8 font-mono flex items-center gap-3">
              <Briefcase className="text-[#b8956a]" size={28} />
              // Experiência Profissional
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-[#3a2d22]" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 md:pl-20"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="absolute left-[-6px] md:left-[26px] top-2 w-4 h-4 bg-[#b8956a] rounded-full border-4 border-[#120f0d]"
                    />

                    <div className="p-6 bg-[#1a1614] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-all group">
                      <div className="flex flex-wrap items-start justify-between mb-3">
                        <div>
                          <h4 className="text-xl text-[#d4b5a0] group-hover:text-[#b8956a] transition-colors font-mono">
                            {exp.role}
                          </h4>
                          <p className="text-[#a68a64]">{exp.company}</p>
                        </div>
                        <span className="text-sm text-[#8b6f47] font-mono bg-[#3a2d22] px-3 py-1 rounded">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-[#a68a64] flex gap-2">
                            <span className="text-[#b8956a]">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Languages Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl text-[#c9a997] mb-6 font-mono flex items-center gap-3">
                <Award className="text-[#b8956a]" size={28} />
                // Certificações
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="p-4 bg-[#1a1614] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-all cursor-pointer"
                  >
                    <h4 className="text-[#d4b5a0] mb-1">{cert.name}</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-[#8b6f47]">{cert.issuer}</p>
                      <span className="text-xs text-[#8b6f47] font-mono bg-[#3a2d22] px-2 py-1 rounded">
                        {cert.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl text-[#c9a997] mb-6 font-mono flex items-center gap-3">
                <Languages className="text-[#b8956a]" size={28} />
                // Idiomas
              </h3>
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-[#d4b5a0]">{lang.name}</span>
                      <span className="text-sm text-[#8b6f47] font-mono">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-[#3a2d22] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        className="h-full bg-gradient-to-r from-[#8b6f47] to-[#b8956a] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
