import Link from 'next/link'
import Image from 'next/image'
import logoOrange from '@/assets/e-Hatod_orange.png'

export default function NotFound() {
  return (
    <section className="section flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Image src={logoOrange} alt="eHatod" className="h-24 w-auto" />
      <h1 className="mt-6 text-6xl font-extrabold text-slate-900">404</h1>
      <p className="mt-3 text-lg text-slate-600">Oops — this delivery took a wrong turn.</p>
      <Link href="/" className="btn-primary mt-8">Back home</Link>
    </section>
  )
}
