# eHatod Landing — TO-DO / Memory

Quick to-do list. Full details + field reference in [`LAUNCH.md`](LAUNCH.md).
All editable values live in [`src/lib/site.ts`](src/lib/site.ts).

## 🔴 Blockers (do first — site can't rank/work without these)
- [ ] Register domain (`ehatod.com` and/or `ehatod.ph`) — check availability
- [ ] Set `site.url` in `src/lib/site.ts` to the real domain (canonical / OG / sitemap depend on it)
- [ ] Deploy (Vercel, 1-click Next) + point domain DNS
- [ ] Real `email`, `phone`, `address` in `site.ts`
- [ ] Replace placeholder content — stats, testimonials, `serviceCities` are all fake
- [ ] Legal pages `/privacy` + `/terms` are DRAFT → lawyer review (RA 10173)

## 🟡 SEO setup (after deploy)
- [ ] Google Search Console — verify + submit `sitemap.xml`
- [ ] Google Business Profile (local SEO)
- [ ] OG share image (`app/opengraph-image`)
- [ ] Analytics (GA4 / Plausible)

## 🟢 Polish
- [ ] `appStore.*` links once apps publish (consumer / rider / merchant)
- [ ] Real `social.*` links (FB / IG / TikTok)
- [ ] Optimize logo PNGs (2000² ~1–2MB → shrink source for LCP)

## Forms / backend
- ✅ Rider/Merchant "Apply" forms now POST to the EXISTING fda-backend signup endpoints
      (single source of truth, same as Flutter apps): `POST {apiBase}/api/auth/rider/signup`
      and `/api/auth/merchant/signup`. Fields mirror the Laravel validation (incl. password min 8,
      vehicle_type enum bicycle|motorcycle|car). Creates account → admin approves (existing flow).
- `apiBase` = backend ROOT (no /api) via env `NEXT_PUBLIC_API_BASE`
      (default Render `https://fda-backend-vfmc.onrender.com`).
- ⏸ Contact form still posts to `{apiBase}/api/contact` — that endpoint does NOT exist yet (deferred).

## ⚠️ Dev rule
Run only ONE `npm run dev`. Two corrupt `.next` → Internal Server Error.
If broken: kill stray node → `rm -rf .next` → single `npm run dev`. Never `build` while `dev` is live.

## ℹ️ Notes
- Twin repo: `ehatod-landing` (Vue/vite-ssg) — same design; keep `site.ts` in sync if maintained.
- Route preloader = 1.3s on every nav (`MIN_MS` in `components/RouteTransitionLoader.tsx`).
