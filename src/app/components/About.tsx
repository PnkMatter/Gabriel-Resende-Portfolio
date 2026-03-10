import { GraduationCap, Briefcase, Code } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 bg-[#1a1614]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <span className="text-[#b8956a] font-mono text-xl">01.</span>{" "}
              <span className="text-[#d4b5a0]">About me</span>
            </h2>
            <div className="h-[2px] w-32 bg-[#b8956a]" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl text-[#c9a997] mb-4 font-mono">// Technical Bio</h3>
              <div className="space-y-4 text-[#a68a64] leading-relaxed">
                <p>
                  I am <strong>Data Scientist and AI Engineer</strong> passionate about transforming complex data into
                  predictive insights and intelligent solutions. Forming in <span className="text-[#d4b5a0]">Computer Engineering</span>,
                  my expertise combines advanced model development with scalable data architecture construction.
                </p>

                <p>
                  My journey evolved from infrastructure to intelligence, focusing on how Machine Learning and AI Generative
                  can anticipate trends and automate strategic decisions. I have dedicated myself to applying rigorous science to
                  Big Data and Cloud Computing ecosystems.
                </p>

                <p>
                  Currently, I leverage the power of <span className="text-[#b8956a]">Python</span>,
                  <span className="text-[#b8956a]"> PySpark</span> and <span className="text-[#b8956a]"> Databricks </span>
                  within the <span className="text-[#b8956a]">Azure Fabric</span> environment, developing models that extract real value
                  from high-volume data streams.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="p-6 bg-[#120f0d] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#3a2d22] rounded">
                    <GraduationCap className="text-[#b8956a]" size={24} />
                  </div>
                  <h4 className="text-xl text-[#d4b5a0] font-mono">Degree</h4>
                </div>
                <p className="text-[#a68a64] leading-relaxed">
                  <span className="text-[#c9a997]">Computer Engineering</span>
                  <br />
                  <span className="text-sm">University from Sorocaba (UNISO) - 2022</span>
                </p>
              </div>

              <div className="p-6 bg-[#120f0d] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#3a2d22] rounded">
                    <Briefcase className="text-[#b8956a]" size={24} />
                  </div>
                  <h4 className="text-xl text-[#d4b5a0] font-mono">Experience</h4>
                </div>
                <p className="text-[#a68a64] leading-relaxed">
                  <span className="text-[#c9a997]">3 years</span> working with
                  data engineering, analytics and cloud computing.
                </p>
              </div>

              <div className="p-6 bg-[#120f0d] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#3a2d22] rounded">
                    <Code className="text-[#b8956a]" size={24} />
                  </div>
                  <h4 className="text-xl text-[#d4b5a0] font-mono">Specialization</h4>
                </div>
                <p className="text-[#a68a64] leading-relaxed">
                  Data Engineering, ETL/ELT, Big Data, Cloud Architecture,
                  and Real-time Data Processing.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
