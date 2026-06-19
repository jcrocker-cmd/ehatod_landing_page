import type { Metadata } from 'next'
import ApplicationForm from '@/components/ApplicationForm'
import AppStoreButtons from '@/components/AppStoreButtons'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Partner as a Merchant',
  description: 'List your store on eHatod and reach more customers in your city. Simple onboarding, fast go-live, more orders. Apply today.',
  alternates: { canonical: '/merchants' },
}

const benefits = [
  { title: 'Reach more customers', desc: 'Get discovered by hungry, nearby customers searching the eHatod app every day.', icon: '📣' },
  { title: 'We handle delivery', desc: 'Our rider network picks up and delivers — you focus on your products.', icon: '🛵' },
  { title: 'Fast onboarding', desc: 'Sign up, get listed, and go live in days, not weeks.', icon: '⚡' },
  { title: 'Order dashboard', desc: 'Manage incoming orders, menu and hours from one simple app.', icon: '📊' },
  { title: 'Grow your sales', desc: 'Tap a new sales channel without opening another branch.', icon: '📈' },
  { title: 'Local support', desc: 'A partner team to help you set up and succeed.', icon: '🤝' },
]

const requirements = [
  'Registered or operating business (carinderia, restaurant, store, pharmacy, etc.)',
  'Business name and location',
  'Menu or product list with prices',
  'Active mobile number and email',
  'Bank or e-wallet account for payouts',
]

const steps = [
  { n: '01', title: 'Apply online', desc: 'Submit the partner form below.' },
  { n: '02', title: 'Get onboarded', desc: 'We set up your store and menu.' },
  { n: '03', title: 'Go live', desc: 'Your store appears in the eHatod app.' },
  { n: '04', title: 'Receive orders', desc: 'Start taking orders and growing.' },
]

export default function MerchantsPage() {
  return (
    <>
      {/* hero */}
      <section className="bg-gradient-to-br from-ehatod-600 to-ehatod-700 py-16 text-white lg:py-24">
        <div className="section grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white">eHatod Merchant</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Grow your business.<br />Reach more customers.
            </h1>
            <p className="mt-5 max-w-md text-lg text-white/90">
              List your store on eHatod and tap into new customers across your city. We bring the orders and handle delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#apply" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ehatod-700 shadow-lg transition hover:bg-ehatod-50">Become a partner</a>
              <AppStoreButtons android={site.appStore.merchantAndroid} variant="light" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-xs rounded-3xl bg-white p-8 text-center shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-ehatod-700">Partners report</p>
              <p className="mt-2 text-5xl font-extrabold text-slate-900">+30%</p>
              <p className="mt-1 text-slate-500">more orders*</p>
              <p className="mt-6 text-xs text-slate-500">*Indicative. Results vary by store and location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* benefits */}
      <section className="py-20 lg:py-28">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why partner with us</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Built to help your store grow</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-slate-100 p-7 shadow-sm transition hover:border-ehatod-200 hover:shadow-lg">
                <div className="text-3xl">{b.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
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
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Go live in 4 steps</h2>
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
            <p className="mt-4 text-slate-600">Have these ready to onboard faster:</p>
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
            <h3 className="mb-4 text-xl font-bold text-slate-900">Apply as a Merchant</h3>
            <ApplicationForm type="merchant" />
          </div>
        </div>
      </section>
    </>
  )
}
