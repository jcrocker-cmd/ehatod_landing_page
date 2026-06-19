# eHatod Landing — Config & Launch Reference

Single source of truth for what to change before going live. All site-wide values live in
[`src/lib/site.ts`](src/lib/site.ts) — edit there once, every page/component picks it up.

> There are two twin projects: **`ehatod-landing-next`** (Next.js, SEO/marketing — THIS one, primary)
> and **`ehatod-landing`** (Vue + vite-ssg). Keep `site.ts` in sync if you maintain both.

---

## `site.ts` field reference

| Field | What uses it | Priority before launch |
|---|---|---|
| `name` | brand name in copy | locked: `eHatod` |
| `legalName` | footer copyright, Privacy/Terms pages | locked: DTI name `eHatod Express Utility and Services` |
| `tagline` | brand line | optional |
| `description` | **SEO meta description**, OG/Twitter, footer text | tune for SEO |
| `url` | **SEO: canonical URLs, OG, sitemap.xml, robots.txt** | ⚠️ MUST = real domain or SEO breaks |
| `email` | Contact page, Privacy/Terms, footer `mailto:` | ⚠️ real email |
| `phone` | Contact page `tel:` | ⚠️ real phone |
| `address` | Contact page | ⚠️ real address |
| `appStore.consumerIos / consumerAndroid` | all "Download App" buttons (navbar, hero, footer, CTA) | when consumer app is published |
| `appStore.riderAndroid` | Riders page download button | when eHatod Rider app is published |
| `appStore.merchantAndroid` | Merchants page download button | when eHatod Merchant app is published |
| `apiBase` | where Rider/Merchant/Contact **forms POST** | set via env `NEXT_PUBLIC_API_BASE` |
| `social.facebook / instagram / tiktok` | footer social icons | real profile links |
| `serviceCities` (separate export) | About page city chips | real cities |

Placeholders to replace: every `#` and every `// TODO`. Buttons with `#` currently go nowhere.

---

## Pre-launch checklist

**Blockers (site can't rank / function without these):**
- [ ] Register real domain (`ehatod.com` and/or `ehatod.ph`) — check availability first
- [ ] Set `site.url` to the real domain (drives canonical / OG / sitemap)
- [ ] Deploy (Vercel = free, 1-click Next) and point domain DNS at it
- [ ] Real `email`, `phone`, `address`
- [ ] Replace placeholder content — stats (riders/cities/₱ earnings), testimonials, service cities are fake
- [ ] Legal pages (`/privacy`, `/terms`) are DRAFT templates → lawyer review (PH Data Privacy Act RA 10173)

**SEO setup (after deploy):**
- [ ] Google Search Console — verify domain, submit `sitemap.xml`
- [ ] Google Business Profile (local SEO — big for PH ranking)
- [ ] Add an OG share image (`app/opengraph-image`) — previews are bare without it
- [ ] Analytics (GA4 / Plausible)

**Polish:**
- [ ] Fill `appStore.*` links once apps publish
- [ ] Real `social.*` profile links
- [ ] Optimize logo PNGs (currently 2000×2000 ~1–2 MB source → hurts LCP; `next/image` resizes but shrink the source)

---

## SEO status (already done — on-page/technical)

- ✅ Static prerender (crawlable HTML, fast first load)
- ✅ Per-page `metadata` (title / description / canonical)
- ✅ OpenGraph + Twitter card tags
- ✅ JSON-LD structured data: Organization, WebSite, FAQPage (`app/page.tsx`)
- ✅ `sitemap.xml` (`app/sitemap.ts`) + `robots.txt` (`app/robots.ts`)
- ✅ One `<h1>` per page, semantic sections, mobile-responsive, `next/font`

**Reality check:** on-page SEO is necessary, not sufficient. Beating Grab/foodpanda on head terms
("food delivery Philippines") needs backlinks, domain authority, content/blog, and time. Realistic
early wins = branded ("eHatod") + local long-tail ("food delivery <city>", "rider job <city>").

---

## Forms / backend (DEFERRED)

Rider, Merchant and Contact forms POST to the fda-backend Laravel API:
- `POST {apiBase}/applications/rider`
- `POST {apiBase}/applications/merchant`
- `POST {apiBase}/contact`

These endpoints are **not built yet** (reverted on purpose). Forms will fail until the backend
adds them. `apiBase` defaults to `http://localhost:8000/api`; override with `NEXT_PUBLIC_API_BASE`.

---

## Dev gotcha (important)

**Run only ONE `npm run dev` at a time.** Two dev servers write the same `.next` and corrupt it →
`Internal Server Error` / "Cannot find module './xxx.js'". If it happens:
1. Kill stray node next-dev processes (check `Get-Process node` / port 3000 owner)
2. `rm -rf .next`
3. Start a single `npm run dev`

Also never run `npm run build` while `npm run dev` is live — same `.next` conflict.
