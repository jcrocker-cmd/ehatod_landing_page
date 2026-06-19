'use client'

import { useState } from 'react'
import Link from 'next/link'
import { site } from '@/lib/site'

type Props = { type: 'rider' | 'merchant' }
type Status = 'idle' | 'sending' | 'success' | 'error'

// Fields mirror the fda-backend signup validation (single source of truth):
//   POST /api/auth/rider/signup    + POST /api/auth/merchant/signup
export default function ApplicationForm({ type }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    // rider
    vehicle_type: '',
    plate_number: '',
    license_number: '',
    // merchant
    business_name: '',
    address: '',
    cuisine_type: '',
    description: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  function buildBody() {
    const common = {
      name: form.name,
      email: form.email,
      password: form.password,
      phone: form.phone || null,
    }
    if (type === 'rider') {
      return {
        ...common,
        vehicle_type: form.vehicle_type,
        plate_number: form.plate_number || null,
        license_number: form.license_number || null,
      }
    }
    return {
      ...common,
      business_name: form.business_name,
      address: form.address || null,
      cuisine_type: form.cuisine_type || null,
      description: form.description || null,
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch(`${site.apiBase}/api/auth/${type}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(buildBody()),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        // Laravel 422 returns { message, errors: { field: [msg] } }
        const firstError =
          data?.errors && typeof data.errors === 'object'
            ? (Object.values(data.errors)[0] as string[])?.[0]
            : undefined
        throw new Error(firstError || data?.message || `Request failed (${res.status})`)
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
          <h3 className="mt-4 text-xl font-bold text-slate-900">Account created!</h3>
          <p className="mt-2 text-slate-600">
            Thanks, {form.name || 'partner'}. Your {type} account is pending review — our team will
            verify and approve it, then you can log in to the eHatod {type === 'rider' ? 'Rider' : 'Merchant'} app.
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
              <input value={form.phone} onChange={set('phone')} type="tel" className="mt-1.5 input" placeholder="09XX XXX XXXX" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input value={form.email} onChange={set('email')} required type="email" className="mt-1.5 input" placeholder="you@email.com" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Password</span>
              <input value={form.password} onChange={set('password')} required minLength={8} type="password" className="mt-1.5 input" placeholder="Min. 8 characters" />
            </label>
          </div>

          {type === 'rider' && (
            <>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Vehicle type</span>
                <select value={form.vehicle_type} onChange={set('vehicle_type')} required className="mt-1.5 input">
                  <option value="" disabled>Select vehicle</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="bicycle">Bicycle</option>
                  <option value="car">Car</option>
                </select>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">
                    Plate number <span className="font-normal text-slate-400">(optional)</span>
                  </span>
                  <input value={form.plate_number} onChange={set('plate_number')} type="text" className="mt-1.5 input" placeholder="ABC 1234" />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">
                    License number <span className="font-normal text-slate-400">(optional)</span>
                  </span>
                  <input value={form.license_number} onChange={set('license_number')} type="text" className="mt-1.5 input" placeholder="N01-XX-XXXXXX" />
                </label>
              </div>
            </>
          )}

          {type === 'merchant' && (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Business name</span>
                  <input value={form.business_name} onChange={set('business_name')} required type="text" className="mt-1.5 input" placeholder="Aling Nena's Carinderia" />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">
                    Cuisine / type <span className="font-normal text-slate-400">(optional)</span>
                  </span>
                  <input value={form.cuisine_type} onChange={set('cuisine_type')} type="text" className="mt-1.5 input" placeholder="Filipino, Grocery, Pharmacy…" />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Business address <span className="font-normal text-slate-400">(optional)</span>
                </span>
                <input value={form.address} onChange={set('address')} type="text" className="mt-1.5 input" placeholder="Street, Barangay, City" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Description <span className="font-normal text-slate-400">(optional)</span>
                </span>
                <textarea value={form.description} onChange={set('description')} rows={3} className="mt-1.5 input" placeholder="Tell customers about your store…" />
              </label>
            </>
          )}

          {status === 'error' && <p className="text-sm font-medium text-red-600">{errorMsg}</p>}

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
            {status === 'sending' ? 'Creating account…' : type === 'rider' ? 'Apply as Rider' : 'Apply as Merchant'}
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
