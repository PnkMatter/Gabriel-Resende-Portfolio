import { ChevronDown, Database, Code2 } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-[#120f0d] pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3a2d2215_1px,transparent_1px),linear-gradient(to_bottom,#3a2d2215_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Code2 className="text-[#b8956a]" size={24} />
              </motion.div>
              <span className="font-mono text-sm text-[#a68a64]">
                // Engenheiro de Dados
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <span className="text-[#a68a64]">Olá, sou</span>
            <br />
            <span className="text-[#d4b5a0] font-semibold">Seu Nome</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl text-[#b8956a] mb-4 font-mono">
              Data Engineer & Solutions Architect
            </h2>
            <p className="text-lg text-[#8b6f47] max-w-2xl leading-relaxed">
              Especialista em construir pipelines de dados escaláveis e arquiteturas robustas 
              que transformam dados brutos em insights estratégicos para o negócio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#b8956a] text-[#120f0d] rounded font-mono hover:bg-[#c9a997] transition-colors flex items-center gap-2"
            >
              <Database size={20} />
              Ver Projetos
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-[#b8956a] text-[#b8956a] rounded font-mono hover:bg-[#b8956a]/10 transition-colors"
            >
              Entre em Contato
            </motion.a>
          </motion.div>

          {/* Tech Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3 text-sm font-mono"
          >
            {["Python", "PySpark", "SQL", "Azure Fabric", "Databricks"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="px-3 py-1 bg-[#3a2d22] text-[#c9a997] rounded border border-[#4a3a2e] hover:border-[#b8956a] transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#8b6f47] hover:text-[#b8956a] transition-colors"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
