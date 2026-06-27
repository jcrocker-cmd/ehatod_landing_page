import { site } from './site'

export type LegalPage = {
  slug: string
  title: string
  content: string
  published_at: string | null
}

// Fetch a CMS legal page (Terms / Privacy) from the fda-backend `pages` table —
// the single source of truth shared with the mobile apps.
// ISR: cached and revalidated periodically, so edits in the DB show up without a redeploy.
export async function getLegalPage(slug: string): Promise<LegalPage | null> {
  try {
    const res = await fetch(`${site.apiBase}/api/pages/${slug}`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 3600 }, // re-check hourly
    })
    if (!res.ok) return null
    const json = await res.json()
    const data = json?.data
    if (!data?.content) return null
    return {
      slug: data.slug ?? slug,
      title: data.title ?? '',
      content: data.content,
      published_at: data.published_at ?? null,
    }
  } catch {
    return null
  }
}
