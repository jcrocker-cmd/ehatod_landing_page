import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AppStoreButtons from '@/components/AppStoreButtons'
import logoWhite from '@/assets/e-Hatod_white.png'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Food, Padala & Pabili Delivery',
  description: site.description,
  alternates: { canonical: '/' },
}

const services = [
  { name: 'eHatod Food', desc: 'Crave it, tap it, get it. Hot meals from your favorite local spots delivered to your door.', icon: 'food' },
  { name: 'eHatod Padala', desc: 'Send packages, documents and parcels across town in minutes — same-day, tracked live.', icon: 'parcel' },
  { name: 'eHatod Pabili', desc: 'Forgot something? Our riders buy it for you — groceries, meds, anything from any store.', icon: 'cart' },
]

const steps = [
  { n: '01', title: 'Place your order', desc: 'Pick food, a padala, or a pabili in the eHatod app.' },
  { n: '02', title: 'Rider accepts', desc: 'A nearby eHatod rider is matched to you instantly.' },
  { n: '03', title: 'Track live', desc: 'Watch your rider on the map from pickup to your door.' },
  { n: '04', title: 'Receive & rate', desc: 'Pay by cash or online, then rate your delivery.' },
]

const stats = [
  { value: '5+', label: 'Cities served' },
  { value: '1,000+', label: 'Active riders' },
  { value: '500+', label: 'Partner merchants' },
  { value: '4.8★', label: 'Average rating' },
]

const why = [
  { title: 'Fast pickups', desc: 'Riders nearby mean shorter waits and quicker drop-offs.', icon: 'bolt' },
  { title: 'Fair prices', desc: 'Transparent fees up front. No surprises at checkout.', icon: 'tag' },
  { title: 'Local first', desc: 'Built for your barangay — we know the streets and shops.', icon: 'pin' },
  { title: 'Live tracking', desc: 'Real-time map tracking from order to doorstep.', icon: 'map' },
  { title: 'Cash or online', desc: 'Pay how you want — cash on delivery or e-wallet.', icon: 'wallet' },
  { title: 'Real support', desc: 'A local team ready to help when you need it.', icon: 'chat' },
]

const faqs = [
  { q: 'What areas does eHatod cover?', a: 'We currently serve select cities and are expanding fast. Open the app to check live coverage in your area.' },
  { q: 'How much does delivery cost?', a: 'Fees are shown up front before you confirm, based on distance and service. No hidden charges.' },
  { q: 'How do I pay?', a: 'Cash on delivery or online payment via supported e-wallets — your choice at checkout.' },
  { q: 'Can I track my order?', a: 'Yes. Once a rider accepts, you can track them live on the map until they reach your door.' },
  { q: 'How do I become a rider or merchant?', a: 'Tap Apply as Rider or Apply as Merchant on this site. Fill the short form and our team will reach out.' },
]

const testimonials = [
  { quote: 'Driving with eHatod lets me set my own hours and still earn enough for my family.', name: 'Mark R.', role: 'Rider, Cebu City' },
  { quote: 'Since partnering with eHatod, our carinderia reaches customers we never could before.', name: 'Aling Nena', role: 'Merchant' },
  { quote: 'Pabili saved me on a busy day — they bought my groceries and brought them in 30 minutes.', name: 'Joy T.', role: 'Customer' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      description: site.description,
      email: site.email,
      areaServed: 'PH',
    },
    {
      '@type': 'WebSite',
      name: site.name,
      url: site.url,
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ehatod-50 via-white to-white pt-10 sm:pt-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-ehatod-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-ehatod-100/60 blur-3xl" />

        <div className="section relative grid items-center gap-12 pb-16 lg:grid-cols-2 lg:pb-24">
          <div className="animate-fade-up">
            <span className="eyebrow">🛵 Fast · Fair · Local</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              eHatod na!<br />
              <span className="text-ehatod-600">Food, padala &amp; pabili</span><br />
              delivered to your door.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
              eHatod connects you with nearby riders to deliver meals, parcels and errands —
              fast, affordable and built for your city.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <AppStoreButtons android={site.appStore.consumerAndroid} ios={site.appStore.consumerIos} />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/riders" className="btn-secondary">Become a rider →</Link>
              <Link href="/merchants" className="btn-ghost text-slate-700">Partner as merchant →</Link>
            </div>
          </div>

          {/* phone mockup */}
          <div className="relative mx-auto w-full max-w-sm animate-fade-up lg:max-w-md">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[2.5rem] border-[10px] border-slate-900 bg-gradient-to-b from-ehatod-600 to-ehatod-700 shadow-2xl">
              <div className="absolute left-1/2 top-3 h-5 w-28 -translate-x-1/2 rounded-full bg-slate-900" />
              <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center text-white">
                <Image src={logoWhite} alt="eHatod" priority className="h-40 w-auto" />
                <p className="text-2xl font-extrabold">Your order is on the way</p>
                <p className="text-white/90">Rider Mark · 6 mins away</p>
                <div className="mt-2 w-full rounded-2xl bg-white/15 p-4 backdrop-blur">
                  <div className="flex items-center justify-between text-sm">
                    <span>Lechon Manok + Rice</span><span className="font-bold">₱180</span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-white/25">
                    <div className="h-2 w-2/3 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="border-t border-slate-100 bg-white">
          <div className="section grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-ehatod-600 sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm font-medium text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 lg:py-28">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What we deliver</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">One app. Everything delivered.</h2>
            <p className="mt-4 text-lg text-slate-600">From cravings to errands — eHatod riders have it covered.</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-ehatod-200 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ehatod-50 text-ehatod-500 transition group-hover:bg-ehatod-500 group-hover:text-white">
                  {s.icon === 'food' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 3v7a2 2 0 0 0 2 2h0v9M6 3v6M9 3v6M18 3c-1.5 1-2 3-2 6v3h3M19 12v9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
                  {s.icon === 'parcel' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8Z" strokeLinejoin="round" /><path d="M3 8l9 5 9-5M12 13v8" strokeLinejoin="round" /></svg>
                  )}
                  {s.icon === 'cart' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h2.5l2 12h11l2-8H6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{s.name}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-slate-50 py-20 lg:py-28">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Delivered in four taps</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n} className="relative rounded-3xl bg-white p-7 shadow-sm">
                <span className="text-5xl font-extrabold text-ehatod-600">{step.n}</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EHATOD */}
      <section className="py-20 lg:py-28">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why eHatod</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Built for your neighborhood</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-2xl p-6 transition hover:bg-ehatod-50/60">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ehatod-500 text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon === 'bolt' && <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />}
                    {f.icon === 'tag' && <path d="M3 11V3h8l10 10-8 8L3 11Z M7 7h.01" />}
                    {f.icon === 'pin' && <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z M12 10h.01" />}
                    {f.icon === 'map' && <path d="m9 4 6 2 6-2v14l-6 2-6-2-6 2V6l6-2Zm0 0v14m6-12v14" />}
                    {f.icon === 'wallet' && <path d="M3 7a2 2 0 0 1 2-2h12v4M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H7M17 13h.01" />}
                    {f.icon === 'chat' && <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10Z" />}
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RIDER BAND */}
      <section className="section">
        <div className="overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 sm:px-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-ehatod-400">For riders</span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Be your own boss.<br />Ride. Deliver. Earn.</h2>
              <p className="mt-4 max-w-md text-lg text-slate-300">
                Set your own hours, keep more of what you earn, and get paid for every delivery. Join thousands of eHatod riders.
              </p>
              <ul className="mt-6 space-y-2 text-slate-300">
                <li className="flex items-center gap-2"><span className="text-ehatod-400">✓</span> Flexible schedule — work when you want</li>
                <li className="flex items-center gap-2"><span className="text-ehatod-400">✓</span> Weekly payouts, transparent fees</li>
                <li className="flex items-center gap-2"><span className="text-ehatod-400">✓</span> In-app navigation and support</li>
              </ul>
              <Link href="/riders" className="btn-primary mt-8">Apply as Rider</Link>
            </div>
            <div className="flex justify-center">
              <div className="rounded-3xl bg-gradient-to-br from-ehatod-500 to-ehatod-700 p-10 text-center text-white shadow-2xl">
                <div className="text-5xl font-extrabold">₱</div>
                <p className="mt-2 text-lg font-semibold">Earn on your schedule</p>
                <p className="mt-1 text-sm text-white/90">Cash out weekly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MERCHANT BAND */}
      <section className="section mt-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-ehatod-600 to-ehatod-700 px-8 py-14 sm:px-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 flex justify-center lg:order-1">
              <div className="rounded-3xl bg-white p-10 text-center shadow-2xl">
                <div className="text-5xl">🏪</div>
                <p className="mt-2 text-lg font-bold text-slate-900">Reach more customers</p>
                <p className="mt-1 text-sm text-slate-500">Go live in days</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white">For merchants</span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Grow your business.<br />Reach more customers.</h2>
              <p className="mt-4 max-w-md text-lg text-white/90">
                List your store on eHatod and tap into new customers in your area. We handle delivery — you focus on what you do best.
              </p>
              <ul className="mt-6 space-y-2 text-white/90">
                <li className="flex items-center gap-2">✓ More orders, wider reach</li>
                <li className="flex items-center gap-2">✓ Simple onboarding, fast go-live</li>
                <li className="flex items-center gap-2">✓ Dashboard to manage orders</li>
              </ul>
              <Link href="/merchants" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ehatod-700 shadow-lg transition hover:bg-ehatod-50">
                Apply as Merchant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-20 lg:py-28">
        <div className="section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">🛡️ Safety</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Safety is non-negotiable</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Every rider is verified before they hit the road. Live trip tracking, in-app support and ratings keep every delivery accountable — for customers, riders and merchants alike.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 p-6">
                <div className="text-2xl">✅</div>
                <h3 className="mt-3 font-bold text-slate-900">Verified riders</h3>
                <p className="mt-2 text-sm text-slate-600">ID and document checks before activation.</p>
              </div>
              <div className="rounded-2xl border border-slate-100 p-6">
                <div className="text-2xl">📍</div>
                <h3 className="mt-3 font-bold text-slate-900">Live tracking</h3>
                <p className="mt-2 text-sm text-slate-600">Follow every trip in real time on the map.</p>
              </div>
              <div className="rounded-2xl border border-slate-100 p-6">
                <div className="text-2xl">⭐</div>
                <h3 className="mt-3 font-bold text-slate-900">Two-way ratings</h3>
                <p className="mt-2 text-sm text-slate-600">Accountability after every delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Loved locally</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">From the eHatod community</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="text-ehatod-700">★★★★★</div>
                <blockquote className="mt-4 leading-relaxed text-slate-700">&quot;{t.quote}&quot;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ehatod-100 font-bold text-ehatod-700">{t.name.charAt(0)}</div>
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="section max-w-3xl">
          <div className="text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Questions, answered</h2>
          </div>
          <div className="mt-12 divide-y divide-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  {f.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-45 group-open:bg-ehatod-500 group-open:text-white">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* APP DOWNLOAD CTA */}
      <section className="section pb-20 lg:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ehatod-600 via-ehatod-600 to-ehatod-700 px-8 py-16 text-center shadow-xl sm:px-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Get the eHatod app today</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Food, padala and pabili — all in one app. Download now and get your first delivery moving.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreButtons android={site.appStore.consumerAndroid} ios={site.appStore.consumerIos} variant="light" />
          </div>
        </div>
      </section>
    </>
  )
}
