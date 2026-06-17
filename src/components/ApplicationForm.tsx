'use client'

import { useState } from 'react'
import Link from 'next/link'
import { site } from '@/lib/site'

type Props = { type: 'rider' | 'merchant' }
type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ApplicationForm({ type }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    vehicle_type: '',
    business_name: '',
    business_type: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch(`${site.apiBase}/applications/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, type }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || `Request failed (${res.status})`)
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Try again.')
    }
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
      {status === 'success' ? (
        <div className="py-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ehatod-100">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6700" strokeWidth="2.5">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">Application received!</h3>
          <p className="mt-2 text-slate-600">
            Thanks, {form.name || 'partner'}. Our team will review and reach out via email or phone soon.
          </p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={submit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Full name</span>
              <input value={form.name} onChange={set('name')} required type="text" className="mt-1.5 input" placeholder="Juan Dela Cruz" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Mobile number</span>
              <input value={form.phone} onChange={set('phone')} required type="tel" className="mt-1.5 input" placeholder="09XX XXX XXXX" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input value={form.email} onChange={set('email')} required type="email" className="mt-1.5 input" placeholder="you@email.com" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">City</span>
              <input value={form.city} onChange={set('city')} required type="text" className="mt-1.5 input" placeholder="Cebu City" />
            </label>
          </div>

          {type === 'rider' && (
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Vehicle type</span>
              <select value={form.vehicle_type} onChange={set('vehicle_type')} required className="mt-1.5 input">
                <option value="" disabled>Select vehicle</option>
                <option>Motorcycle</option>
                <option>Bicycle</option>
                <option>Car</option>
                <option>Tricycle</option>
              </select>
            </label>
          )}

          {type === 'merchant' && (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Business name</span>
                <input value={form.business_name} onChange={set('business_name')} required type="text" className="mt-1.5 input" placeholder="Aling Nena's Carinderia" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Business type</span>
                <select value={form.business_type} onChange={set('business_type')} required className="mt-1.5 input">
                  <option value="" disabled>Select type</option>
                  <option>Restaurant / Food</option>
                  <option>Grocery / Mart</option>
                  <option>Pharmacy</option>
                  <option>Retail / Other</option>
                </select>
              </label>
            </div>
          )}

          <label className="block">
            <span className="text-sm font-semibold text-slate-700">
              Message <span className="font-normal text-slate-400">(optional)</span>
            </span>
            <textarea value={form.message} onChange={set('message')} rows={3} className="mt-1.5 input" placeholder="Tell us a bit more..." />
          </label>

          {status === 'error' && <p className="text-sm font-medium text-red-600">{errorMsg}</p>}

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
            {status === 'sending' ? 'Sending…' : type === 'rider' ? 'Apply as Rider' : 'Apply as Merchant'}
          </button>
          <p className="text-center text-xs text-slate-400">
            By applying you agree to our <Link href="/terms" className="underline">Terms</Link> and{' '}
            <Link href="/privacy" className="underline">Privacy Policy</Link>.
          </p>
        </form>
      )}
    </div>
  )
}
