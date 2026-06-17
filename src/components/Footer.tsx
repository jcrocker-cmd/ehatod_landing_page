import Link from 'next/link'
import Image from 'next/image'
import logoWhite from '@/assets/e-Hatod_white.png'
import AppStoreButtons from './AppStoreButtons'
import { site } from '@/lib/site'

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'eHatod Food', href: '/#services' },
      { label: 'eHatod Padala', href: '/#services' },
      { label: 'eHatod Pabili', href: '/#services' },
      { label: 'How it works', href: '/#how' },
    ],
  },
  {
    title: 'Earn with us',
    links: [
      { label: 'Apply as Rider', href: '/riders' },
      { label: 'Apply as Merchant', href: '/merchants' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-slate-900 text-slate-300">
      <div className="section py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* brand + apps */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logoWhite} alt="eHatod" className="h-14 w-auto" />
              <span className="text-2xl font-extrabold tracking-tight text-white">
                e<span className="text-ehatod-400">Hatod</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{site.description}</p>
            <div className="mt-5">
              <AppStoreButtons android={site.appStore.consumerAndroid} ios={site.appStore.consumerIos} />
            </div>
          </div>

          {/* link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-slate-400 transition hover:text-ehatod-400">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={site.social.facebook} aria-label="Facebook" className="hover:text-ehatod-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h2.7l.4-3H13V9.1c0-.9.3-1.5 1.6-1.5H16V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H7.5v3H10v8h3Z" /></svg>
            </a>
            <a href={site.social.instagram} aria-label="Instagram" className="hover:text-ehatod-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href={site.social.tiktok} aria-label="TikTok" className="hover:text-ehatod-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.1 1.5 3.6 3.5 3.8V9c-1.3.1-2.5-.3-3.5-1v6.5A5.5 5.5 0 1 1 10.5 9v2.6a2.9 2.9 0 1 0 2.9 2.9V3H16Z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
