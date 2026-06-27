import type { Metadata } from 'next'
import { getLegalPage } from '@/lib/pages'
import LegalPageView from '@/components/LegalPageView'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'eHatod Privacy Policy — what personal data we process, why, who receives it, and your rights under the Philippine Data Privacy Act (RA 10173).',
  alternates: { canonical: '/privacy' },
}

// Content is fetched from the fda-backend `pages` table (slug "data-policy") —
// the single source of truth shared with the eHatod apps.
export default async function PrivacyPage() {
  const page = await getLegalPage('data-policy')
  return <LegalPageView page={page} fallbackTitle="Privacy Policy" />
}
