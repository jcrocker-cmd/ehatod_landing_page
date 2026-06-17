import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the eHatod team for support, partnerships and general questions.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ehatod-50 to-white py-16 lg:py-20">
        <div className="section max-w-2xl text-center">
          <span className="eyebrow">Contact us</span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">We&apos;d love to hear from you</h1>
          <p className="mt-4 text-lg text-slate-600">Questions, support or partnerships — reach out and our team will respond.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
            <p className="mt-3 text-slate-600">Prefer to reach us directly? Use the details below.</p>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ehatod-50 text-ehatod-500">✉️</div>
                <div>
                  <div className="text-sm font-semibold text-slate-500">Email</div>
                  <a href={`mailto:${site.email}`} className="font-medium text-slate-900 hover:text-ehatod-600">{site.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ehatod-50 text-ehatod-500">📞</div>
                <div>
                  <div className="text-sm font-semibold text-slate-500">Phone</div>
                  <a href={`tel:${site.phone}`} className="font-medium text-slate-900 hover:text-ehatod-600">{site.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ehatod-50 text-ehatod-500">📍</div>
                <div>
                  <div className="text-sm font-semibold text-slate-500">Address</div>
                  <div className="font-medium text-slate-900">{site.address}</div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
