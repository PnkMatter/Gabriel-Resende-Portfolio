import { ExternalLink, Github, Database, Zap, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  problem: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  image?: string;
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1a1614] border border-[#3a2d22] rounded-lg shadow-2xl"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#3a2d22 transparent",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#120f0d]/80 border border-[#3a2d22] text-[#8b6f47] hover:text-[#b8956a] hover:border-[#b8956a] transition-all cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Image Area */}
        <div className="relative w-full h-48 md:h-64 bg-[#120f0d] border-b border-[#3a2d22] overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <Database className="text-[#3a2d22]" size={56} />
              <span className="text-[#3a2d22] font-mono text-sm">
                // screenshot coming soon
              </span>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1614] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#b8956a]/15 text-[#b8956a] rounded text-xs font-mono mb-3 border border-[#b8956a]/30">
                  <Zap size={12} />
                  In Development
                </span>
              )}
              <h3
                className="text-2xl md:text-3xl text-[#d4b5a0] font-mono"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {project.title}
              </h3>
            </div>
            <div className="flex gap-3 ml-4 mt-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded border border-[#3a2d22] text-[#8b6f47] hover:text-[#b8956a] hover:border-[#b8956a] transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded border border-[#3a2d22] text-[#8b6f47] hover:text-[#b8956a] hover:border-[#b8956a] transition-all"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-[#3a2d22] mb-6" />

          {/* Problem */}
          <div className="mb-6">
            <p className="text-sm text-[#8b6f47] mb-2 font-mono">
              // Problem Solved:
            </p>
            <p className="text-[#c9a997] leading-relaxed text-base">
              {project.problem}
            </p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-sm text-[#8b6f47] mb-2 font-mono">
              // About this project:
            </p>
            <p className="text-[#a68a64] leading-relaxed text-base">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights.length > 0 && (
            <div className="mb-6">
              <p className="text-sm text-[#8b6f47] mb-3 font-mono">
                // Key Highlights:
              </p>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight
                      className="text-[#b8956a] mt-1 shrink-0"
                      size={14}
                    />
                    <span className="text-[#a68a64] leading-relaxed text-sm">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Divider */}
          <div className="h-[1px] w-full bg-[#3a2d22] mb-6" />

          {/* Technologies */}
          <div>
            <p className="text-sm text-[#8b6f47] mb-3 font-mono">
              // Tech Stack:
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[#3a2d22]/60 text-[#c9a997] rounded text-xs font-mono border border-[#8b6f47]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Industrial Predictive Maintenance AI",
      problem:
        "Reduce unplanned downtime by predicting machine failures using sensor data and machine learning.",
      description:
        "An end-to-end machine learning pipeline that ingests real-time sensor data (vibration, temperature, pressure) from CNC machines and hydraulic presses on the shop floor. The system preprocesses noisy IoT streams, engineers time-domain and frequency-domain features, and trains gradient-boosted models to predict remaining useful life (RUL) and flag imminent failures before they cause costly unplanned stops.",
      highlights: [
        "Achieved 92% precision in predicting failures 48 hours in advance, enabling proactive maintenance scheduling",
        "Reduced unplanned downtime by an estimated 35% during pilot phase on a critical bottleneck machine",
        "Implemented feature engineering pipeline extracting rolling statistics, FFT-based spectral features, and lag variables from raw sensor signals",
        "Developed a model retraining scheduler that detects concept drift and triggers automated re-calibration",
      ],
      technologies: ["Python", "XGBoost", "Scikit-Learn", "IoT Data"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 2,
      title: "GenAI Technical Assistant (RAG)",
      problem:
        "Automating access to 'Lessons Learned' and technical manuals through a Generative AI chatbot for shop-floor engineers.",
      description:
        "A Retrieval-Augmented Generation (RAG) chatbot designed for the manufacturing floor. It ingests hundreds of technical manuals, maintenance SOPs, and historical 'Lessons Learned' documents, chunks and embeds them into a vector database, and enables engineers to ask natural-language questions and receive precise, source-cited answers in seconds — replacing hours of manual document searching.",
      highlights: [
        "Built an ingestion pipeline processing 500+ PDF technical manuals with intelligent chunking and metadata tagging",
        "Integrated ChromaDB as the vector store with cosine similarity search for high-precision document retrieval",
        "Supports both OpenAI GPT-4 and locally-hosted Llama 3 models for flexible deployment (cloud vs. on-premise)",
        "Implemented citation tracking so every answer links back to its source document and page number for auditability",
      ],
      technologies: ["LangChain", "OpenAI / Llama 3", "ChromaDB", "Python"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Predictive Market Share & Gap Analysis",
      problem:
        "Identifying gaps and active prospecting opportunities by cross-referencing S&P Global vehicle production forecasts with internal sales history (SOCO).",
      description:
        "A strategic business intelligence tool that cross-references external vehicle production forecasts (S&P Global / IHS Markit) with internal sales and quotation data (SOCO) to reveal untapped market opportunities. The system identifies gaps between total addressable market and current penetration, ranks prospecting opportunities by revenue potential, and forecasts market share evolution across vehicle platforms and regions.",
      highlights: [
        "Automated the ingestion and normalization of S&P Global production forecast data across 50+ OEMs and 300+ vehicle platforms",
        "Built a gap analysis engine that highlights the top revenue-opportunity gaps segmented by product family and region",
        "Developed predictive models (XGBoost + Prophet) to forecast market share trajectories 3–5 years ahead",
        "Enabled the commercial team to prioritize prospecting efforts, contributing to a 15% increase in new business pipeline value",
      ],
      technologies: [
        "Python",
        "SQL",
        "Pandas",
        "XGBoost",
        "Prophet",
        "Time Series Analysis",
      ],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 4,
      title: "E-Mobility Transition Forecaster",
      problem:
        "Assessing product portfolio risk and guiding sustainable development by predicting the tipping point for electrification across specific regions and powertrain types.",
      description:
        "A forecasting and clustering platform that models the trajectory of electrification adoption across global automotive markets. Using vehicle production data segmented by powertrain (ICE, HEV, PHEV, BEV, FCEV), the system identifies when and where the tipping point to electric mobility will occur — enabling strategic decisions around product development, R&D investment, and manufacturing footprint.",
      highlights: [
        "Applied K-Means clustering to segment markets by electrification maturity, identifying early-adopter vs. laggard regions",
        "Built Random Forest and logistic regression models to predict the year of ICE-to-EV crossover for each market cluster",
        "Created scenario analysis dashboards (optimistic, baseline, conservative) reflecting different policy and adoption assumptions",
        "Enabled R&D leadership to align product roadmap priorities with electrification timelines per region",
      ],
      technologies: [
        "Python",
        "Scikit-Learn",
        "Random Forest",
        "K-Means Clustering",
        "Matplotlib",
        "Seaborn",
      ],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Hybrid RAG Engine for Multi-Format Technical Documentation",
      problem:
        "Enabling fast, accurate answers from complex technical PDFs and spreadsheets using hybrid search (semantic + keyword) with source-cited responses.",
      description:
        "A Retrieval-Augmented Generation system built around a hybrid search architecture that combines dense semantic embeddings with sparse keyword matching (BM25). The engine ingests complex multi-format technical documents — including heavily formatted PDFs, nested spreadsheets, and engineering diagrams — and answers natural-language queries with direct source citations, dramatically reducing the time engineers spend searching through documentation.",
      highlights: [
        "Implemented advanced chunking strategies (recursive, parent-child, semantic) tailored to different document structures for optimal retrieval quality",
        "Built a hybrid retrieval pipeline combining dense vector search (ChromaDB) with BM25 keyword matching and reciprocal rank fusion",
        "Integrated a re-ranking layer using cross-encoder models to boost precision on top-k retrieved passages before LLM synthesis",
        "Achieved measurable improvements in retrieval accuracy (MRR@10) compared to pure semantic search baselines",
      ],
      technologies: ["Python", "LangChain", "ChromaDB", "Pinecone", "RAG"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 6,
      title: "LLM Hallucination Benchmarking & Evaluation Framework",
      problem:
        "Measuring and comparing hallucination rates and response fidelity across multiple LLM providers to ensure Responsible AI deployment.",
      description:
        "An experimental evaluation framework designed to rigorously benchmark large language models against curated test suites. The system submits identical prompts to multiple model providers, measures hallucination rates, factual accuracy, and response fidelity using NLP metrics, and presents the results in a comparative dashboard — enabling data-driven model selection for production AI systems.",
      highlights: [
        "Designed a structured test suite with ground-truth annotations covering factual recall, reasoning, and domain-specific knowledge",
        "Automated multi-provider evaluation using OpenAI, Anthropic, and open-source model APIs with standardized prompt formatting",
        "Implemented NLP evaluation metrics (ROUGE, BLEU, F1-Score) alongside custom hallucination detection heuristics",
        "Built a comparative dashboard visualizing model performance across accuracy, latency, and cost dimensions",
      ],
      technologies: ["Python", "NLP Metrics", "Multi-Provider APIs", "Responsible AI"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 7,
      title: "Multi-Agent Orchestrator for Autonomous Tech Research",
      problem:
        "Automating the discovery and synthesis of AI technology trends by orchestrating collaborative autonomous agents.",
      description:
        "A multi-agent system where specialized AI agents collaborate autonomously to perform end-to-end technology research. A 'Researcher' agent scans academic repositories, arXiv papers, and tech blogs for emerging AI trends, while a 'Synthesizer' agent distills the findings into structured technical reports — demonstrating autonomous decision-making workflows with minimal human intervention.",
      highlights: [
        "Architected a multi-agent workflow using CrewAI/LangGraph with clearly defined roles, goals, and inter-agent communication protocols",
        "Integrated external search tools (Tavily API, Semantic Scholar) for real-time academic and industry trend discovery",
        "Implemented autonomous decision loops where agents iteratively refine search queries based on intermediate findings",
        "Generated formatted technical reports with trend categorization, relevance scoring, and actionable recommendations",
      ],
      technologies: ["CrewAI", "LangGraph", "Python", "Tavily API", "AI Agents"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 8,
      title: "Large-Scale NLP Sentiment Classification Pipeline",
      problem:
        "Processing and classifying sentiment in large volumes of raw text data using experimental ML pipelines with validated model comparisons.",
      description:
        "An end-to-end NLP pipeline that processes large-scale raw text datasets through cleaning, entity extraction, and intent classification stages. The system benchmarks traditional machine learning approaches (TF-IDF + classical classifiers) against modern Transformer-based models, providing rigorous performance comparisons to guide model selection for production sentiment analysis use cases.",
      highlights: [
        "Built a scalable text preprocessing pipeline handling tokenization, stopword removal, lemmatization, and entity extraction on 100K+ records",
        "Compared traditional ML models (Logistic Regression, SVM with TF-IDF) against fine-tuned Transformer models (DistilBERT, RoBERTa)",
        "Achieved 94% F1-Score with the Transformer approach vs. 87% with classical ML, with detailed error analysis per category",
        "Documented the full experimental methodology with reproducible Jupyter notebooks and performance visualizations",
      ],
      technologies: ["Python", "Scikit-Learn", "Hugging Face Transformers", "Pandas", "NLP"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 9,
      title: "Secure API Gateway for Enterprise LLM Integration",
      problem:
        "Creating a secure, cost-controlled intermediary layer for exposing LLMs to enterprise applications with prompt sanitization and usage logging.",
      description:
        "A production-grade API gateway that acts as a secure proxy between enterprise applications and LLM providers. The system implements cost controls (rate limiting, token budgets), prompt sanitization to prevent injection attacks, structured logging for auditability, and a unified interface that abstracts away provider-specific API differences — enabling safe, scalable AI integration across the organization.",
      highlights: [
        "Designed a RESTful API proxy with FastAPI featuring authentication, rate limiting, and per-department token budget enforcement",
        "Implemented prompt sanitization middleware to detect and block prompt injection patterns and sensitive data leakage",
        "Built a comprehensive usage logging system tracking tokens consumed, latency, costs, and error rates per consumer",
        "Containerized the entire stack with Docker and Docker Compose for reproducible, environment-agnostic deployments",
      ],
      technologies: ["FastAPI", "Python", "Docker", "API Security", "Prompt Engineering"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 10,
      title: "Vision-to-Technical Documentation Lab",
      problem:
        "Transforming photos of hardware components and engineering diagrams into structured technical documentation using multimodal AI.",
      description:
        "A proof-of-concept prototyping lab that explores the frontier of multimodal AI. The system receives images of physical hardware components, circuit boards, or engineering diagrams and leverages vision-language models (GPT-4o, Gemini Pro Vision) to automatically generate structured technical documentation — converting unstructured visual data into actionable engineering knowledge.",
      highlights: [
        "Integrated multimodal vision APIs (GPT-4o, Gemini Pro Vision) with custom prompting strategies optimized for technical image understanding",
        "Built an automated pipeline that processes component photos and outputs structured Markdown documentation with specifications and descriptions",
        "Implemented few-shot prompting techniques to improve the accuracy of component identification and parameter extraction",
        "Explored the boundary of what multimodal models can reliably extract, documenting failure modes and confidence thresholds",
      ],
      technologies: ["Python", "GPT-4o", "Gemini Pro Vision", "Multimodal AI", "Markdown"],
      github: "#",
      demo: "#",
      featured: true,
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
            <h2
              className="text-4xl md:text-5xl mb-3"
              style={{ fontFamily: "var(--font-sans)" }}
            >
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
                onClick={() => setSelectedProject(project)}
                className={`group relative p-6 bg-[#120f0d] border border-[#3a2d22] rounded hover:border-[#b8956a] transition-all cursor-pointer ${project.featured ? "md:col-span-1" : ""
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
                      In Development
                    </motion.div>
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <Database className="text-[#b8956a]" size={32} />
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#8b6f47] hover:text-[#b8956a] transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      onClick={(e) => e.stopPropagation()}
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
                  <p className="text-sm text-[#8b6f47] mb-1 font-mono">
                    // Problem Solved:
                  </p>
                  <p className="text-[#a68a64] leading-relaxed">
                    {project.problem}
                  </p>
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

                {/* Click hint */}
                <div className="mt-4 pt-3 border-t border-[#3a2d22]/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs text-[#8b6f47] font-mono flex items-center gap-1">
                    Click to see details
                    <ChevronRight size={12} />
                  </p>
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
