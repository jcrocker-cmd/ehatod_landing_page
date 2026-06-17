'use client'

import { useState } from 'react'
import { site } from '@/lib/site'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch(`${site.apiBase}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
      {status === 'success' ? (
        <div className="py-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ehatod-100 text-2xl">✅</div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">Message sent!</h3>
          <p className="mt-2 text-slate-600">Thanks for reaching out. We&apos;ll get back to you soon.</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={submit}>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Name</span>
            <input value={form.name} onChange={set('name')} required type="text" className="mt-1.5 input" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Email</span>
            <input value={form.email} onChange={set('email')} required type="email" className="mt-1.5 input" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Subject</span>
            <input value={form.subject} onChange={set('subject')} required type="text" className="mt-1.5 input" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Message</span>
            <textarea value={form.message} onChange={set('message')} required rows={4} className="mt-1.5 input" />
          </label>
          {status === 'error' && <p className="text-sm font-medium text-red-600">{errorMsg}</p>}
          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </div>
  )
}
