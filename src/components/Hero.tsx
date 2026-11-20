import { motion } from 'motion/react'
import { ArrowRight, FileDown, Mail, MapPin } from 'lucide-react'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon } from './ui'

const stages = [
  { key: 'raw', label: 'Raw', note: 'APIs · Excel · telemetry', color: '#64748b' },
  { key: 'bronze', label: 'Bronze', note: 'Ingested to Delta Lake', color: '#c98b5a' },
  { key: 'silver', label: 'Silver', note: 'Cleaned · conformed · tested', color: '#cbd5e1' },
  { key: 'gold', label: 'Gold', note: 'Star schema · Direct Lake', color: '#f5b544' },
  { key: 'ai', label: 'AI', note: 'LLM insights → Executive Board', color: '#22d3ee' },
]

function Pipeline() {
  const rowH = 64
  const h = rowH * (stages.length - 1)
  return (
    <div className="card relative overflow-hidden p-6 shadow-2xl shadow-cyan/5">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-[11px] text-muted">medallion_pipeline.py</span>
      </div>

      <div className="relative">
        <svg
          className="absolute left-[11px]"
          style={{ top: rowH / 2 }}
          width="2"
          height={h}
          viewBox={`0 0 2 ${h}`}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pipe" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={h}>
              <stop offset="0" stopColor="#64748b" />
              <stop offset="0.5" stopColor="#cbd5e1" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <line x1="1" y1="0" x2="1" y2={h} stroke="url(#pipe)" strokeOpacity="0.25" strokeWidth="2" />
          <line className="flow-line" x1="1" y1="0" x2="1" y2={h} stroke="url(#pipe)" strokeWidth="2" />
        </svg>

        <ol className="relative space-y-0">
          {stages.map((s, i) => (
            <motion.li
              key={s.key}
              className="flex items-center gap-4"
              style={{ height: rowH }}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" className="relative shrink-0" aria-hidden="true">
                <circle className="pulse-ring" cx="12" cy="12" r="6" fill={s.color} opacity="0.5" style={{ animationDelay: `${i * 0.4}s` }} />
                <circle cx="12" cy="12" r="6" fill={s.color} />
              </svg>
              <div className="flex min-w-0 flex-1 items-baseline justify-between gap-3 ">
                <span className="font-semibold text-fg">{s.label}</span>
                <span className="truncate font-mono text-xs text-muted">{s.note}</span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="mt-2 rounded-xl border border-cyan/20 bg-cyan/5 p-4 font-mono text-xs leading-relaxed text-silver">
        <span className="text-cyan">›</span> 20 KPIs refreshed · 0 orphan keys · report sent to 200+ leaders
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan/20 via-violet/20 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 text-xs text-silver transition-colors hover:border-cyan/50"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for remote &amp; contract work
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-fg sm:text-6xl"
          >
            I turn messy enterprise data into <span className="text-gradient">decisions</span>, and{' '}
            <span className="text-gradient">AI</span> that executives actually read.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            <strong className="font-semibold text-fg">{profile.role}</strong> at Schaeffler. I build lakehouse pipelines on Microsoft
            Fabric &amp; Azure and LLM-powered reporting for 200+ leaders, including the Group CEO.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-fg px-5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              See selected work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-line-strong px-5 text-sm font-semibold text-fg transition-colors hover:border-cyan hover:text-cyan"
            >
              <FileDown className="size-4" aria-hidden="true" /> Resume (PDF)
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-11 place-items-center rounded-xl text-muted transition-colors hover:text-fg">
                <GithubIcon className="size-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-11 place-items-center rounded-xl text-muted transition-colors hover:text-fg">
                <LinkedinIcon className="size-5" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="grid size-11 place-items-center rounded-xl text-muted transition-colors hover:text-fg">
                <Mail className="size-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-muted">
            <MapPin className="size-3.5" aria-hidden="true" /> {profile.location}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Pipeline />
        </motion.div>
      </div>
    </section>
  )
}
