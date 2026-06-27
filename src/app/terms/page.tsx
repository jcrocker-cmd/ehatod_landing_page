import type { Metadata } from 'next'
import { getLegalPage } from '@/lib/pages'
import LegalPageView from '@/components/LegalPageView'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'eHatod Terms of Use — the rules for using the eHatod delivery platform.',
  alternates: { canonical: '/terms' },
}

// Content is fetched from the fda-backend `pages` table (slug "terms-and-conditions") —
// the single source of truth shared with the eHatod apps.
export default async function TermsPage() {
  const page = await getLegalPage('terms-and-conditions')
  return <LegalPageView page={page} fallbackTitle="Terms of Use" />
}
