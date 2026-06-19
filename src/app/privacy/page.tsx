import type { Metadata } from 'next'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'eHatod Privacy Policy — how we collect, use and protect your information.',
  alternates: { canonical: '/privacy' },
}

const updated = 'June 17, 2026'

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-slate-50 py-14">
        <div className="section max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Privacy Policy</h1>
          <p className="mt-3 text-slate-500">Last updated: {updated}</p>
        </div>
      </section>

      <article className="section my-14 max-w-3xl space-y-8 leading-relaxed text-slate-700">
        {/* NOTE: Placeholder legal copy — have legal counsel review before launch (NPC / RA 10173 compliance). */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          ⚠️ Draft template — review with legal counsel for Philippine Data Privacy Act (RA 10173) compliance before publishing.
        </div>

        <section>
          <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
          <p className="mt-3">
            {site.legalName} (&quot;eHatod&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what data we collect when you use the eHatod apps and website, how we use it, and your rights under the Philippine Data Privacy Act of 2012 (RA 10173).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">2. Information we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Account data:</strong> name, mobile number, email, and password.</li>
            <li><strong>Location data:</strong> to match riders, route deliveries and enable live tracking.</li>
            <li><strong>Order data:</strong> items, addresses, payment method and delivery history.</li>
            <li><strong>Rider/merchant data:</strong> IDs, documents and business details for verification.</li>
            <li><strong>Device &amp; usage data:</strong> app interactions, device type and diagnostics.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">3. How we use your information</h2>
          <p className="mt-3">
            To provide and improve delivery services, match orders with riders, process payments, verify riders and merchants, provide support, ensure safety, and comply with law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">4. Sharing</h2>
          <p className="mt-3">
            We share data only as needed to complete deliveries (e.g. rider and customer see limited contact and location details), with payment providers, and where required by law. We do not sell your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">5. Your rights</h2>
          <p className="mt-3">
            You may access, correct, or request deletion of your data, and object to certain processing. Contact us at <a href={`mailto:${site.email}`} className="text-ehatod-700 underline">{site.email}</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">6. Data retention &amp; security</h2>
          <p className="mt-3">
            We keep data only as long as needed for the purposes above or as required by law, and we apply reasonable safeguards to protect it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">7. Contact</h2>
          <p className="mt-3">
            Questions about this policy? Email <a href={`mailto:${site.email}`} className="text-ehatod-700 underline">{site.email}</a> or call {site.phone}.
          </p>
        </section>
      </article>
    </>
  )
}
