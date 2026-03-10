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
              <span className="text-[#d4b5a0]">Sobre Mim</span>
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
              <h3 className="text-2xl text-[#c9a997] mb-4 font-mono">// Bio Técnica</h3>
              <div className="space-y-4 text-[#a68a64] leading-relaxed">
                <p>
                  Sou um Engenheiro de Dados apaixonado por transformar dados complexos em 
                  soluções tangíveis. Formado em <span className="text-[#d4b5a0]">Engenharia de Computação</span>, 
                  venho desenvolvendo pipelines de dados escaláveis e arquiteturas de dados modernas.
                </p>
                <p>
                  Minha jornada na área de dados começou durante a graduação, onde descobri 
                  o poder dos dados para impulsionar decisões estratégicas. Desde então, tenho 
                  me dedicado a dominar tecnologias de Big Data e Cloud Computing.
                </p>
                <p>
                  Atualmente, trabalho com tecnologias como <span className="text-[#b8956a]">PySpark</span>, 
                  <span className="text-[#b8956a]"> Azure Fabric</span>, e <span className="text-[#b8956a]">Databricks</span>, 
                  construindo soluções que processam milhões de registros diariamente.
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
                  <h4 className="text-xl text-[#d4b5a0] font-mono">Formação</h4>
                </div>
                <p className="text-[#a68a64] leading-relaxed">
                  <span className="text-[#c9a997]">Engenharia de Computação</span>
                  <br />
                  <span className="text-sm">Universidade Federal - 2018</span>
                </p>
              </div>

              <div className="p-6 bg-[#120f0d] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#3a2d22] rounded">
                    <Briefcase className="text-[#b8956a]" size={24} />
                  </div>
                  <h4 className="text-xl text-[#d4b5a0] font-mono">Experiência</h4>
                </div>
                <p className="text-[#a68a64] leading-relaxed">
                  <span className="text-[#c9a997]">5+ anos</span> trabalhando com 
                  engenharia de dados, analytics e cloud computing.
                </p>
              </div>

              <div className="p-6 bg-[#120f0d] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#3a2d22] rounded">
                    <Code className="text-[#b8956a]" size={24} />
                  </div>
                  <h4 className="text-xl text-[#d4b5a0] font-mono">Especialização</h4>
                </div>
                <p className="text-[#a68a64] leading-relaxed">
                  Data Engineering, ETL/ELT, Big Data, Cloud Architecture, 
                  e Real-time Data Processing.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
