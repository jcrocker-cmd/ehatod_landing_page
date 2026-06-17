import type { Metadata } from 'next'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'eHatod Terms of Service — the rules for using our delivery platform.',
  alternates: { canonical: '/terms' },
}

const updated = 'June 17, 2026'

export default function TermsPage() {
  return (
    <>
      <section className="bg-slate-50 py-14">
        <div className="section max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Terms of Service</h1>
          <p className="mt-3 text-slate-500">Last updated: {updated}</p>
        </div>
      </section>

      <article className="section my-14 max-w-3xl space-y-8 leading-relaxed text-slate-700">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          ⚠️ Draft template — review with legal counsel before publishing.
        </div>

        <section>
          <h2 className="text-xl font-bold text-slate-900">1. Agreement</h2>
          <p className="mt-3">
            By using the eHatod apps or website, you agree to these Terms with {site.legalName}. If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">2. The service</h2>
          <p className="mt-3">
            eHatod is a platform that connects customers with independent riders and partner merchants for food, parcel (padala) and errand (pabili) delivery. We facilitate orders; riders and merchants provide the underlying services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">3. Accounts</h2>
          <p className="mt-3">
            You must provide accurate information and keep your account secure. You are responsible for activity under your account. You must be of legal age to use the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">4. Orders &amp; payments</h2>
          <p className="mt-3">
            Prices and delivery fees are shown before you confirm. You agree to pay the total shown, by cash or supported online payment. Some orders may be non-refundable once prepared or dispatched.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">5. Riders &amp; merchants</h2>
          <p className="mt-3">
            Riders and merchants are independent and must comply with applicable laws and our partner guidelines. eHatod may suspend accounts that violate these Terms or compromise safety.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">6. Acceptable use</h2>
          <p className="mt-3">Do not misuse the service, attempt fraud, harass others, or use it for unlawful purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">7. Limitation of liability</h2>
          <p className="mt-3">
            To the extent permitted by law, eHatod is not liable for indirect or consequential damages arising from use of the platform. Nothing limits liability that cannot be excluded by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">8. Changes &amp; contact</h2>
          <p className="mt-3">
            We may update these Terms; continued use means acceptance. Questions? Email <a href={`mailto:${site.email}`} className="text-ehatod-600 underline">{site.email}</a>.
          </p>
        </section>
      </article>
    </>
  )
}
