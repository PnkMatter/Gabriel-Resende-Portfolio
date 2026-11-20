import { useEffect, useState } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { profile } from '../data'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/75 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight text-fg">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-violet font-mono text-xs font-bold text-bg">
            GR
          </span>
          <span className="hidden sm:inline">Gabriel Resende</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 rounded-lg border border-line-strong px-3.5 py-2 text-sm font-medium text-fg transition-colors hover:border-cyan hover:text-cyan sm:inline-flex"
          >
            <FileDown className="size-4" aria-hidden="true" /> Resume
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg text-fg md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-5 pb-4 pt-2 md:hidden">
          {[...links, { href: profile.cv, label: 'Download resume' }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-base text-fg hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
