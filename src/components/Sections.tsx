import { ArrowUpRight, Building2, Check, Copy, ExternalLink, Mail, Rocket } from 'lucide-react'
import { useState } from 'react'
import { clients, enterprise, experience, openSource, products, profile, stack, stats } from '../data'
import { Chip, GithubIcon, LinkedinIcon, Reveal, SectionHeading, accentClass } from './ui'

const container = 'mx-auto max-w-6xl px-5 sm:px-8'

export function Impact() {
  return (
    <section aria-label="Impact" className={`${container} pb-8`}>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="bg-bg p-6 sm:p-8">
            <p className="text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Work() {
  const span = { lg: 'md:col-span-2 md:row-span-2', md: 'md:col-span-1 md:row-span-2', sm: 'md:col-span-1', wide: 'md:col-span-2' }
  return (
    <section id="work" className={`${container} py-24`}>
      <SectionHeading
        eyebrow="Selected work · Enterprise"
        title={
          <>
            Data products that reach the <span className="text-gradient">boardroom</span>
          </>
        }
        intro="Built inside Schaeffler, a global automotive and industrial supplier. The code is proprietary, so these are architecture and outcome summaries."
      />

      <div className="grid auto-rows-[minmax(150px,auto)] gap-4 md:grid-cols-3">
        {enterprise.map((c, i) => {
          const a = accentClass[c.accent]
          return (
            <Reveal key={c.title} delay={(i % 3) * 0.06} className={`${span[c.size]}`}>
              <article className="card group relative flex h-full flex-col overflow-hidden p-6 transition-colors hover:border-line-strong sm:p-7">
                <div className={`pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-gradient-to-br ${a.glow} to-transparent blur-2xl transition-opacity group-hover:opacity-100 md:opacity-60`} aria-hidden="true" />
                <p className={`relative mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider ${a.text}`}>
                  <Building2 className="size-3.5" aria-hidden="true" /> {c.tag}
                </p>
                <h3 className={`relative font-bold tracking-tight text-fg ${c.size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{c.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">{c.summary}</p>
                {c.points.length > 0 && (
                  <ul className="relative mt-5 space-y-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-silver">
                        <span className={`mt-2 size-1.5 shrink-0 rounded-full ${a.dot}`} aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="relative mt-auto flex flex-wrap gap-1.5 pt-6">
                  {c.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export function Products() {
  return (
    <section className={`${container} pb-24`}>
      <SectionHeading eyebrow="Products I build" title="Founder mode, after hours" intro="End-to-end products: data model, security, UX and shipping." />
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <article className="card relative h-full overflow-hidden p-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-cyan/20 text-fg">
                  <Rocket className="size-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-violet/40 bg-violet/10 px-3 py-1 font-mono text-[11px] text-violet">{p.role}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-fg">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function OpenSource() {
  const [first, second, ...rest] = openSource
  return (
    <section className={`${container} pb-24`}>
      <SectionHeading eyebrow="Open source" title="Code you can read" intro="Public projects on AI, ML and data engineering, with full source on GitHub." />

      <div className="grid gap-4 md:grid-cols-2">
        {[first, second].map((r, i) => (
          <Reveal key={r.title} delay={i * 0.08}>
            <a href={r.repo} target="_blank" rel="noreferrer" className="card group block h-full overflow-hidden transition-colors hover:border-cyan/40">
              {r.image && (
                <div className="aspect-[16/9] overflow-hidden border-b border-line bg-surface">
                  <img src={r.image} alt={`${r.title} screenshot`} loading="lazy" className="size-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-fg">{r.title}</h3>
                  <ArrowUpRight className="size-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.summary}</p>
                {r.metric && <p className="mt-4 font-mono text-xs text-cyan">{r.metric}</p>}
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {rest.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.06}>
            <article className="card flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <GithubIcon className="size-5 text-muted" />
                {r.metric && <span className="font-mono text-[11px] text-cyan">{r.metric}</span>}
              </div>
              <h3 className="mt-4 font-bold text-fg">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.summary}</p>
              <div className="mt-auto flex gap-4 pt-5 text-sm">
                <a href={r.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-fg hover:text-cyan">
                  Code <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
                {r.demo && (
                  <a href={r.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-fg hover:text-cyan">
                    Live demo <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-4">
        <div className="card p-6 sm:p-7">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-gold">Freelance · client work</p>
          <ul className="divide-y divide-line">
            {clients.map((c) => (
              <li key={c.name}>
                <a href={c.repo} target="_blank" rel="noreferrer" className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <span>
                    <span className="font-semibold text-fg group-hover:text-cyan">{c.name}</span>
                    <span className="ml-0 block text-sm text-muted sm:ml-3 sm:inline">{c.kind}</span>
                  </span>
                  <span className="flex items-center gap-2 font-mono text-xs text-muted">
                    {c.stack}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className={`${container} pb-24`}>
      <SectionHeading eyebrow="Experience" title="Where I've been shipping" />
      <ol className="relative border-l border-line pl-8">
        {experience.map((e, i) => (
          <Reveal key={e.title + e.period} delay={i * 0.05} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[37px] top-1.5 grid size-[17px] place-items-center rounded-full border border-line-strong bg-bg" aria-hidden="true">
              <span className={`size-[7px] rounded-full ${i === 0 ? 'bg-cyan' : 'bg-white/30'}`} />
            </span>
            <p className="font-mono text-xs text-muted">
              {e.period} · {e.type}
            </p>
            <h3 className="mt-1.5 text-lg font-bold text-fg">{e.title}</h3>
            <p className="text-sm font-medium text-silver">{e.org}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{e.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

export function Stack() {
  return (
    <section id="stack" className={`${container} pb-24`}>
      <SectionHeading eyebrow="Stack" title="Tools I use in production" />
      <div className="grid gap-4 sm:grid-cols-2">
        {stack.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.06}>
            <div className="card h-full p-6">
              <h3 className="mb-4 text-sm font-semibold text-fg">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-silver">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <section id="contact" className={`${container} pb-24`}>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line-strong p-8 sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan/15 via-violet/10 to-transparent" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">Contact</p>
            <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">Let's build your next data or AI product.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Open to remote full-time roles, B2B contracts and freelance projects in Data Engineering, AI Engineering and Analytics
              Engineering. Fluent English, any time zone.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="inline-flex h-12 items-center gap-2 rounded-xl bg-fg px-5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5">
                <Mail className="size-4" aria-hidden="true" /> {profile.email}
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-xl border border-line-strong px-4 text-sm font-medium text-fg transition-colors hover:border-cyan hover:text-cyan"
                aria-live="polite"
              >
                {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                {copied ? 'Copied' : 'Copy email'}
              </button>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl border border-line-strong px-4 text-sm font-medium text-fg transition-colors hover:border-cyan hover:text-cyan">
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl border border-line-strong px-4 text-sm font-medium text-fg transition-colors hover:border-cyan hover:text-cyan">
                <GithubIcon className="size-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className={`${container} flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted sm:flex-row`}>
        <p>© {new Date().getFullYear()} Gabriel Resende</p>
        <p className="font-mono text-xs">Built with React, Tailwind CSS &amp; Motion</p>
      </div>
    </footer>
  )
}
