import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { LegalPage } from '@/lib/pages'
import { site } from '@/lib/site'

export default function LegalPageView({
  page,
  fallbackTitle,
}: {
  page: LegalPage | null
  fallbackTitle: string
}) {
  const title = page?.title || fallbackTitle

  return (
    <>
      <section className="bg-slate-50 py-14">
        <div className="section max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">{title}</h1>
        </div>
      </section>

      <article className="section my-14 max-w-3xl">
        {page ? (
          <div
            className="prose prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-slate-900
              prose-h2:mt-10 prose-h2:text-2xl
              prose-h3:mt-8 prose-h3:text-lg prose-h3:text-ehatod-700
              prose-a:text-ehatod-700 prose-strong:text-slate-900
              prose-li:my-1"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{page.content}</ReactMarkdown>
          </div>
        ) : (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
            This document is temporarily unavailable. Please try again shortly, or contact us at{' '}
            <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
          </div>
        )}
      </article>
    </>
  )
}
