import type { Metadata } from 'next'
import Link from 'next/link'
import { site, serviceCities } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'eHatod is a local-first delivery platform bringing food, padala and pabili to your doorstep — and livelihood to riders and merchants.',
  alternates: { canonical: '/about' },
}

const values = [
  { title: 'Local first', desc: 'We build for the neighborhoods we serve — riders and merchants from the same community.', icon: '📍' },
  { title: 'Fair for all', desc: 'Transparent fees for customers, fair earnings for riders, real growth for merchants.', icon: '⚖️' },
  { title: 'Fast & reliable', desc: 'Quick pickups, live tracking, and a team that shows up when it matters.', icon: '⚡' },
]

const stats = [
  { value: '5+', label: 'Cities served' },
  { value: '1,000+', label: 'Riders earning' },
  { value: '500+', label: 'Merchant partners' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ehatod-50 to-white py-16 lg:py-24">
        <div className="section max-w-3xl text-center">
          <span className="eyebrow">About eHatod</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Delivery that lifts the whole barangay
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            eHatod is a Filipino-built delivery platform connecting customers, riders and local merchants. We bring food, padala and pabili to your door — while creating flexible income for riders and new customers for neighborhood businesses.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl bg-slate-50 p-8 text-center">
              <div className="text-4xl font-extrabold text-ehatod-500">{s.value}</div>
              <div className="mt-2 font-medium text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our mission</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">What we stand for</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="text-3xl">{v.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="section max-w-3xl text-center">
          <span className="eyebrow">Where we operate</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Serving and growing</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {serviceCities.map((c) => (
              <span key={c} className="rounded-full bg-ehatod-50 px-5 py-2 font-semibold text-ehatod-600">{c}</span>
            ))}
          </div>
          <p className="mt-8 text-slate-600">More cities coming soon. Operated by {site.legalName}.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/riders" className="btn-primary">Become a rider</Link>
            <Link href="/merchants" className="btn-secondary">Partner as merchant</Link>
          </div>
        </div>
      </section>
    </>
  )
}
