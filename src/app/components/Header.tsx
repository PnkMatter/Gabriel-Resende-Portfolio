import { Terminal } from "lucide-react";
import { motion } from "motion/react";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "stacks", label: "Stacks" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#3a2d22] bg-[#120f0d]/90 backdrop-blur-md"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Terminal className="text-[#b8956a]" size={24} />
            <span className="font-mono text-lg text-[#d4b5a0]">{"Gabriel Resende"}</span>
          </motion.div>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#a68a64] hover:text-[#d4b5a0] transition-colors font-mono text-sm relative group"
                whileHover={{ y: -2 }}
              >
                <span className="text-[#b8956a]">_</span>
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-[#b8956a]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 border border-[#b8956a] text-[#b8956a] hover:bg-[#b8956a]/10 rounded font-mono text-sm transition-colors"
          >
            Contact
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
