import type { Metadata } from 'next'
import ApplicationForm from '@/components/ApplicationForm'
import AppStoreButtons from '@/components/AppStoreButtons'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Apply as a Rider',
  description: 'Earn on your own schedule as an eHatod rider. Flexible hours, weekly payouts, in-app support. Apply in minutes.',
  alternates: { canonical: '/riders' },
}

const perks = [
  { title: 'Your own schedule', desc: 'Go online whenever you want. No fixed shifts, no boss looking over your shoulder.', icon: '🕒' },
  { title: 'Weekly payouts', desc: 'Get paid every week with clear, transparent fees on every delivery.', icon: '💸' },
  { title: 'More earning chances', desc: 'Food, padala and pabili orders all day — more ways to earn.', icon: '📈' },
  { title: 'In-app navigation', desc: 'Built-in maps and routing get you to pickup and drop-off fast.', icon: '🗺️' },
  { title: 'Real support', desc: 'A local team backing you up whenever you need help on the road.', icon: '🤝' },
  { title: 'Be your own boss', desc: 'Work as much or as little as you like — you are in control.', icon: '🛵' },
]

const requirements = [
  'At least 18 years old',
  'Own a motorcycle, bicycle or car',
  'Valid government ID',
  "Valid driver's license (for motor vehicles)",
  'Smartphone with mobile data',
  'Active mobile number and email',
]

const steps = [
  { n: '01', title: 'Apply online', desc: 'Fill out the short form below.' },
  { n: '02', title: 'Get verified', desc: 'We review your ID and documents.' },
  { n: '03', title: 'Download the app', desc: 'Install eHatod Rider and log in.' },
  { n: '04', title: 'Go online & earn', desc: 'Accept orders and start earning.' },
]

export default function RidersPage() {
  return (
    <>
      {/* hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 text-white lg:py-24">
        <div className="section grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-ehatod-400">eHatod Rider</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Be your own boss.<br /><span className="text-ehatod-400">Ride. Deliver. Earn.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-slate-300">
              Turn your bike or car into income. Set your own hours and get paid for every delivery you make with eHatod.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#apply" className="btn-primary">Apply now</a>
              <AppStoreButtons android={site.appStore.riderAndroid} variant="light" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-xs rounded-3xl bg-gradient-to-br from-ehatod-600 to-ehatod-700 p-8 text-center shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-white">Earn up to</p>
              <p className="mt-2 text-5xl font-extrabold">₱1,500+</p>
              <p className="mt-1 text-white/90">per day*</p>
              <p className="mt-6 text-xs text-white/80">*Earnings vary by hours, location and demand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* perks */}
      <section className="py-20 lg:py-28">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why ride with us</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Perks of being an eHatod rider</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-100 p-7 shadow-sm transition hover:border-ehatod-200 hover:shadow-lg">
                <div className="text-3xl">{p.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Getting started</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Start riding in 4 steps</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-3xl bg-white p-7 shadow-sm">
                <span className="text-5xl font-extrabold text-ehatod-600">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* apply + requirements */}
      <section id="apply" className="py-20 lg:py-28">
        <div className="section grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Requirements</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">What you&apos;ll need</h2>
            <p className="mt-4 text-slate-600">Have these ready to get verified faster:</p>
            <ul className="mt-8 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ehatod-100 text-sm font-bold text-ehatod-700">✓</span>
                  <span className="text-slate-700">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-slate-900">Apply as a Rider</h3>
            <ApplicationForm type="rider" />
          </div>
        </div>
      </section>
    </>
  )
}
