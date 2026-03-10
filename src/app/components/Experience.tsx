import { Briefcase, Award, Languages } from "lucide-react";
import { motion } from "motion/react";

export function Experience() {
  const experiences = [
    {
      period: "2025 - Presente",
      role: "Business Development & Strategy",
      company: "Schaeffler",
      achievements: [
        "Contributed to the development and governance of the SuMa (Sustainability Manager) global project, implementing ETL pipelines with PySpark and Microsoft Fabric for global executive reporting.",
        "Developed and automated the SMMA (Automotive Market Analysis System), streamlining data processing to provide critical insights into market trends and competitiveness.",
        "Engineered a Macroeconomics Report for the Americas region, utilizing Web Scraping and AI-driven processing to automate data collection and visualization in Power BI.",
      ],
    },
    {
      period: "2023 - Presente",
      role: "Independent Data Solution Developer",
      company: "Freelance / Personal Portfolio",
      achievements: [
        "Architected end-to-end Machine Learning pipelines using Python and Scikit-Learn, focusing on predictive modeling and cost reduction for operational workflows.",
        "Developed Generative AI solutions utilizing RAG (Retrieval-Augmented Generation) and Vector Databases to automate knowledge retrieval from complex technical documentation.",
        "Implemented anomaly detection algorithms for time-series data, aiming to optimize resource allocation and improve industrial utility efficiency.",
        "Designed and deployed interactive data visualization environments to transform raw structured data into actionable business insights for diverse stakeholders."],
    },
  ];

  const certifications = [
    { name: "Azure Data Engineer Associate", issuer: "Microsoft", year: "2023" },
    { name: "Databricks Certified Data Engineer", issuer: "Databricks", year: "2023" },
    { name: "AWS Certified Big Data - Specialty", issuer: "Amazon", year: "2022" },
    { name: "Apache Spark Developer", issuer: "Databricks", year: "2021" },
  ];

  const languages = [
    { name: "Portuguese", level: "Native", percentage: 100 },
    { name: "English", level: "Fluent", percentage: 90 },
    { name: "Spanish", level: "Intermediate", percentage: 80 },
    { name: "German", level: "Novice", percentage: 5 },
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
              <span className="text-[#d4b5a0]">Experience & Education</span>
            </h2>
            <div className="h-[2px] w-32 bg-[#b8956a]" />
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl text-[#c9a997] mb-8 font-mono flex items-center gap-3">
              <Briefcase className="text-[#b8956a]" size={28} />
              // Professional Experience
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
                // Certifications
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
                // Languages
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
