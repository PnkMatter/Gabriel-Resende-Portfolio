import { motion } from "motion/react";
import { 
  Code2, 
  Database, 
  Cloud, 
  Wrench, 
  Sparkles,
  Server
} from "lucide-react";

export function Stacks() {
  const techCategories = [
    {
      title: "Linguagens",
      icon: Code2,
      color: "#b8956a",
      techs: ["Python", "SQL", "Scala", "R", "Bash/Shell"],
    },
    {
      title: "Big Data & Processing",
      icon: Sparkles,
      color: "#c9a997",
      techs: ["Apache Spark", "PySpark", "Databricks", "Azure Fabric", "Hadoop"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "#a68a64",
      techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Snowflake"],
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "#8b6f47",
      techs: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform"],
    },
    {
      title: "ETL & Data Tools",
      icon: Server,
      color: "#d4b5a0",
      techs: ["Apache Airflow", "dbt", "Kafka", "Azure Data Factory", "Fivetran"],
    },
    {
      title: "Ferramentas & Outros",
      icon: Wrench,
      color: "#c9a997",
      techs: ["Git", "Linux", "Jupyter", "Power BI", "Tableau"],
    },
  ];

  return (
    <section id="stacks" className="py-20 bg-[#120f0d]">
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
              <span className="text-[#b8956a] font-mono text-xl">02.</span>{" "}
              <span className="text-[#d4b5a0]">Stacks & Tecnologias</span>
            </h2>
            <div className="h-[2px] w-32 bg-[#b8956a]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-[#1a1614] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 bg-[#3a2d22] rounded group-hover:bg-[#4a3a2e] transition-colors"
                  >
                    <category.icon style={{ color: category.color }} size={24} />
                  </motion.div>
                  <h3 className="text-lg text-[#d4b5a0] font-mono">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-[#3a2d22] text-[#a68a64] rounded text-sm font-mono border border-transparent hover:border-[#b8956a] hover:text-[#d4b5a0] transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 bg-[#1a1614] border border-[#3a2d22] rounded"
          >
            <h3 className="text-xl text-[#d4b5a0] mb-6 font-mono">// Proficiência Principal</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { skill: "Python & PySpark", level: 95 },
                { skill: "SQL & Data Modeling", level: 90 },
                { skill: "Cloud Platforms (Azure/AWS)", level: 85 },
                { skill: "Data Pipelines & ETL", level: 92 },
              ].map((item, index) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#a68a64] font-mono text-sm">{item.skill}</span>
                    <span className="text-[#8b6f47] font-mono text-sm">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-[#3a2d22] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#8b6f47] to-[#b8956a] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
