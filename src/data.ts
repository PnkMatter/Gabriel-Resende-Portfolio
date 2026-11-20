const BASE = import.meta.env.BASE_URL

export const profile = {
  name: 'Gabriel Resende',
  role: 'Data & AI Engineer',
  location: 'Brazil · UTC-3 · works across any time zone',
  email: 'resengbr@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gabrielrresende/',
  github: 'https://github.com/PnkMatter',
  cv: `${BASE}Gabriel_Resende_CV.pdf`,
}

export const stats = [
  { value: '20', label: 'Group ESG KPIs served to the global Executive Board' },
  { value: '200+', label: 'leaders read my LLM-powered reports every month' },
  { value: '7', label: 'LATAM plants unified into one ESG dataset' },
  { value: '~8h', label: 'of manual reporting automated every month' },
]

export type CaseStudy = {
  tag: string
  title: string
  summary: string
  points: string[]
  stack: string[]
  size: 'lg' | 'md' | 'sm' | 'wide'
  accent: 'cyan' | 'violet' | 'gold'
}

export const enterprise: CaseStudy[] = [
  {
    tag: 'Schaeffler · Global',
    title: 'Group ESG Analytics Engine',
    summary:
      'A Microsoft Fabric lakehouse that consolidates 20 corporate ESG KPIs into a star schema served through Direct Lake to the Sustainability KPI Dashboard used by the Executive Board and the CEO.',
    points: [
      'Medallion architecture with PySpark and Delta Lake',
      'Monthly snapshot freezing for multi-year comparisons',
      '100% referential integrity: zero orphan keys',
      'KPI reconciliation with data owners before every Board release',
    ],
    stack: ['Microsoft Fabric', 'PySpark', 'Delta Lake', 'Power BI', 'DAX'],
    size: 'lg',
    accent: 'cyan',
  },
  {
    tag: 'Schaeffler · Americas',
    title: 'LLM Executive Reporting',
    summary:
      'Prompt pipelines, RAG and agent workflows built on OpenAI, Claude and Gemini, embedded in 5 monthly reports read by 200+ leaders.',
    points: ['Automated insight extraction', 'Multi-model by design', 'Human-reviewed before release'],
    stack: ['OpenAI', 'Claude', 'Gemini', 'RAG', 'Agents'],
    size: 'md',
    accent: 'violet',
  },
  {
    tag: 'Schaeffler · Americas Board',
    title: 'Market-to-Portfolio Intelligence',
    summary:
      'A multi-tier model linking macroeconomic indicators to end-use sectors, OEM platforms and the bearing portfolio, delivered as a web portal with AI analysis.',
    points: [],
    stack: ['Angular', 'REST API', 'LLM', 'Node.js'],
    size: 'md',
    accent: 'gold',
  },
  {
    tag: 'Schaeffler · South America',
    title: 'Macro Data Hub',
    summary:
      'Automated collection from FRED, BCB and INEGI APIs for 7 countries, with Gemini-generated briefings and typed Parquet feeds for Power BI. Migrated 18.7k legacy rows into a validated KPI catalog.',
    points: [],
    stack: ['Python', 'GitHub Actions', 'Gemini', 'Parquet', 'pytest'],
    size: 'sm',
    accent: 'cyan',
  },
  {
    tag: 'Schaeffler · LATAM',
    title: 'ESG & Market ETL Pipelines',
    summary:
      'Python pipelines that standardize ESG reports from 7 plants and 48k-row S&P automotive exports. They recovered 252 records previously lost to broken spreadsheet formulas.',
    points: [],
    stack: ['Python', 'pandas', 'Power BI'],
    size: 'sm',
    accent: 'violet',
  },
  {
    tag: 'Schaeffler · Americas Board',
    title: 'GPO Newsletter Automation',
    summary: 'An end-to-end newsletter workflow on the Power Platform for the Americas leadership.',
    points: [],
    stack: ['Power Apps', 'Power Automate'],
    size: 'wide',
    accent: 'gold',
  },
]

export type Product = {
  name: string
  role: string
  summary: string
  stack: string[]
}

export const products: Product[] = [
  {
    name: 'Lume',
    role: 'Co-founder',
    summary:
      'Multi-tenant SaaS for psychology practices: scheduling, clinical records and billing in one place, with Row-Level Security, audit triggers and role-based access.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS'],
  },
  {
    name: 'Nexo',
    role: 'Founder',
    summary:
      'Offline-first POS and retail management desktop app with multi-station LAN sync over certificate-pinned HTTPS and Ed25519 per-store licensing.',
    stack: ['Electron', 'React', 'TypeScript', 'SQLite/WASM', 'Drizzle'],
  },
]

export type Repo = {
  title: string
  summary: string
  metric?: string
  stack: string[]
  repo: string
  demo?: string
  image?: string
}

export const openSource: Repo[] = [
  {
    title: 'Industrial GenAI Assistant',
    summary: 'A RAG assistant over industrial lessons-learned PDFs. It answers technical troubleshooting questions with cited context.',
    metric: 'RAG · Gemini',
    stack: ['Python', 'RAG', 'Vector DB', 'Gemini'],
    repo: 'https://github.com/PnkMatter/industrial-genai-assistant',
    image: `${BASE}images/genai-assistant.png`,
  },
  {
    title: 'Predictive Maintenance Platform',
    summary: 'Random Forest failure forecasting from multi-sensor data, with a live sensor simulator and a Streamlit dashboard.',
    metric: '~92% accuracy · −35% false positives',
    stack: ['scikit-learn', 'Streamlit', 'Python'],
    repo: 'https://github.com/PnkMatter/industrial-predictive-maintenance',
    image: `${BASE}images/predictive-maintenance.png`,
  },
  {
    title: 'Large-Scale NLP Pipeline',
    summary: 'Benchmarks classical ML (TF-IDF, SVM) against fine-tuned Transformers (DistilBERT, RoBERTa) on 100K+ records.',
    metric: '94% F1',
    stack: ['Transformers', 'Hugging Face', 'scikit-learn'],
    repo: 'https://github.com/PnkMatter/Large-Scale-NLP-Sentiment-Classification-Pipeline',
  },
  {
    title: 'Market Intelligence Hub',
    summary: 'Commodity and index tracking with Gemini-generated executive briefings and an interactive dashboard.',
    metric: 'Live demo',
    stack: ['Python', 'Gemini', 'Streamlit'],
    repo: 'https://github.com/PnkMatter/The-Market-Intelligence-Hub',
    demo: 'https://the-market-intelligence.streamlit.app/',
  },
  {
    title: 'LATAM Bearing Import Collector',
    summary: 'Unifies HS 8482 import data from six government open-data sources (CKAN, Socrata, REST) into one dataset.',
    metric: '6 countries',
    stack: ['Python', 'ETL', 'APIs'],
    repo: 'https://github.com/PnkMatter/bearing-import',
  },
]

export const clients = [
  { name: 'Clínica Reflexão Psicanalítica', kind: 'Clinic landing page · Figma to code', stack: 'React · Vite · Tailwind', repo: 'https://github.com/PnkMatter/clinica-reflexao-psicanalitica' },
  { name: 'Barbearia AeroWeb', kind: 'Premium barbershop landing page', stack: 'React · Vite · Tailwind v4', repo: 'https://github.com/PnkMatter/barbearia-aeroweb' },
  { name: 'The Tech Drop', kind: 'Editorial tech-news experience', stack: 'Next.js 16 · shadcn/ui', repo: 'https://github.com/PnkMatter/The-Tech-Drop-New' },
]

export const experience = [
  {
    period: 'Sep 2026 — Present',
    title: 'Business Development, Sustainability & Program Office',
    org: 'Schaeffler',
    type: 'Full-time',
    text: 'Data and AI engineering for Business Development, Corporate Strategy and Sustainability across the Americas, with outputs reaching the global Executive Board.',
  },
  {
    period: '2026 — Present',
    title: 'Independent Software Engineer',
    org: 'Products & Freelance',
    type: 'Self-employed',
    text: 'Co-founder of Lume, builder of Nexo, and production websites for paying clients.',
  },
  {
    period: 'Feb 2025 — Aug 2026',
    title: 'Data & Analytics Intern',
    org: 'Schaeffler',
    type: 'Internship',
    text: 'Built ETL pipelines, macroeconomic data automation, Power Platform solutions and dashboards for the South America Board.',
  },
  {
    period: '2022 — 2026',
    title: 'B.Eng. Computer Engineering',
    org: 'University of Sorocaba (UNISO)',
    type: 'Education',
    text: 'Coursework in software engineering, databases and machine learning.',
  },
]

export const stack = [
  { group: 'Data Engineering', items: ['Python', 'PySpark', 'SQL', 'Microsoft Fabric', 'Delta Lake', 'Databricks', 'Medallion', 'Star Schema', 'ETL/ELT', 'Parquet'] },
  { group: 'AI & ML', items: ['OpenAI', 'Claude', 'Gemini', 'RAG', 'AI Agents', 'Vector DBs', 'scikit-learn', 'Transformers', 'MLflow'] },
  { group: 'Cloud & DevOps', items: ['Azure', 'Docker', 'GitHub Actions', 'CI/CD', 'Git', 'pytest'] },
  { group: 'Apps & BI', items: ['TypeScript', 'React', 'Next.js', 'Angular', 'FastAPI', 'Supabase', 'PostgreSQL', 'Power BI', 'Power Automate'] },
]
