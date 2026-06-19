'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoOrange from '@/assets/e-Hatod_orange.png'
import { site } from '@/lib/site'

const links = [
  { label: 'How it works', href: '/#how' },
  { label: 'Services', href: '/#services' },
  { label: 'Riders', href: '/riders' },
  { label: 'Merchants', href: '/merchants' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="section flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src={logoOrange} alt="eHatod" priority className="h-12 w-auto md:h-14" />
          <span className="text-2xl font-extrabold tracking-tight text-ehatod-600">eHatod</span>
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="btn-ghost">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/riders" className="btn-ghost text-ehatod-700">
            Become a rider
          </Link>
          <a href={site.appStore.consumerAndroid} className="btn-primary !py-2.5 !text-sm">
            Download App
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="section flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.appStore.consumerAndroid}
              className="btn-primary mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
