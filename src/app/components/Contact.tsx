import { Mail, Linkedin, Github, FileText, Send } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/gabrielrresende/?locale=en_US",
      username: "/in/gabrielrresende",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/PnkMatter",
      username: "/PnkMatter",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:resengbr@gmail.com",
      username: "resengbr@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#1a1614]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <span className="text-[#b8956a] font-mono text-xl">05.</span>{" "}
              <span className="text-[#d4b5a0]">Let's talk?</span>
            </h2>
            <div className="h-[2px] w-32 bg-[#b8956a] mx-auto mb-6" />
            <p className="text-[#a68a64] max-w-2xl mx-auto leading-relaxed">
              I'm always open to discuss new projects, career opportunities
              or just share ideas about data engineering and AI. Feel free to contact me!
            </p>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 bg-[#120f0d] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-all"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-[#3a2d22] rounded-full group-hover:bg-[#4a3a2e] transition-colors"
                  >
                    <social.icon className="text-[#b8956a]" size={28} />
                  </motion.div>
                  <div>
                    <h3 className="text-lg text-[#d4b5a0] mb-1 font-mono">{social.name}</h3>
                    <p className="text-sm text-[#8b6f47] font-mono">{social.username}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 bg-[#120f0d] border border-[#3a2d22] rounded"
          >
            <h3 className="text-2xl text-[#c9a997] mb-6 font-mono">// Send a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#a68a64] mb-2 font-mono text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#1a1614] border border-[#3a2d22] rounded text-[#d4b5a0] placeholder-[#8b6f47] focus:outline-none focus:border-[#b8956a] transition-colors font-mono"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#a68a64] mb-2 font-mono text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#1a1614] border border-[#3a2d22] rounded text-[#d4b5a0] placeholder-[#8b6f47] focus:outline-none focus:border-[#b8956a] transition-colors font-mono"
                    placeholder="seu.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[#a68a64] mb-2 font-mono text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-[#1a1614] border border-[#3a2d22] rounded text-[#d4b5a0] placeholder-[#8b6f47] focus:outline-none focus:border-[#b8956a] transition-colors font-mono"
                  placeholder="Subject of the message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#a68a64] mb-2 font-mono text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1a1614] border border-[#3a2d22] rounded text-[#d4b5a0] placeholder-[#8b6f47] focus:outline-none focus:border-[#b8956a] transition-colors resize-none font-mono"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-[#b8956a] text-[#120f0d] rounded font-mono hover:bg-[#c9a997] transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#b8956a] text-[#b8956a] rounded font-mono hover:bg-[#b8956a]/10 transition-colors"
            >
              <FileText size={20} />
              Download CV / Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="max-w-6xl mx-auto mt-20 pt-8 border-t border-[#3a2d22] text-center"
      >
        <p className="text-[#8b6f47] font-mono text-sm">
          Developed with <span className="text-[#b8956a]">{"</>"}</span> and coffee ☕
        </p>
        <p className="text-[#8b6f47] font-mono text-sm mt-2">
          © 2026 Gabriel Resende. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
