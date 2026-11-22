# AGENTS.md

Next.js 14 App Router marketing site deployed to Vercel as a server-rendered Next.js application. Content-driven, with a Resend-backed contact API route. This project is not a static export.

## Commands

- `npm install` then `npm run dev` (http://localhost:3000)
- `npm run build` → production Next.js build; runs typecheck + page generation
- `npm run typecheck` → `tsc --noEmit` for fast feedback
- Preview a production build with `npm run start`
- Never run `npm run build` while `npm run dev` is running. Both write `.next/`, and the build clobbers the dev server's stylesheet (pages then load with no CSS). If that happens: stop dev, `rm -rf .next`, restart dev.
- No ESLint config and no test suite. Don't run `next lint` (it would scaffold ESLint).
- CI runs `npm ci && npm run build` (`.github/workflows/ci.yml`, Node from `.nvmrc`)
- Deploy: Vercel with the standard Next.js build. Keep the contact API route on the Node.js runtime.

## Content lives in `site.config.ts`

`site.config.ts` is the single source of truth, imported via the `@site-config` alias. Products, markets, articles, nav, contact details, form dropdowns, hero copy, stats, certifications, and footer links all come from it. Edit there first; do not re-add hardcoded copies in pages.

Page-specific copy remains in `src/app/*/page.tsx`: process steps, benefits, trade terms, section headings, category colors, and icon mappings.

## Runtime constraints

- `next.config.js` uses the standard Next.js server output and `images.unoptimized: true`.
- `src/app/api/contact/route.ts` sends validated contact submissions through Resend. Keep `RESEND_API_KEY`, `NOTIFY_EMAIL`, and `FROM_EMAIL` server-only; never prefix secrets with `NEXT_PUBLIC_`.
- Do not set `GITHUB_PAGES` or `NEXT_PUBLIC_BASE_PATH`; the app no longer supports a static export.
- The contact form includes a honeypot, required same-origin check, JSON-only parsing, and bounded request/field sizes. Publish a Vercel Firewall rule for `POST /api/contact` limiting to 5 requests per 60 seconds per IP, and enable available bot protections before production traffic.
- `next/image` needs `unoptimized` (repo passes it everywhere) and assets under `public/images/`.
- Client components must keep `'use client'`: `FadeIn`, `PageHero`, `Navbar`, `ContactForm`, `WhatsAppButton`, `Footer` is server-side. Pages stay server components.

## SEO and headers

- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt` from config. Do not add these files under `public/`.
- Add `alternates: { canonical: '/path' }` to each page's `metadata`.
- Production security headers are configured in `next.config.js`; CSP with per-request nonces is configured in `middleware.ts`.
- `src/app/privacy/page.tsx` is linked from the footer and included in the sitemap.

## Content safety

- Never expose internal margins/costs on public pages. Product cards show product specifications, form, quotation-based MOQ, and packaging only.
- The WhatsApp button hides itself while `siteConfig.whatsapp` is empty or contains the `91XXXXXXXXXX` placeholder. Override with `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits, country code, no `+`).
- Resend credentials are runtime server environment variables and must never use a `NEXT_PUBLIC_` prefix.
- Business claims (certifications, rankings, stats) are owned by the business; don't invent new ones.

## Conventions

- Tailwind tokens: `brand` (slate), `accent` (teal, 500 = `#14b8a6`), `surface`; `font-display` = Playfair, `font-sans` = Inter (via `next/font` CSS vars in `layout.tsx`).
- Reuse utilities from `src/app/globals.css`: `hero-overlay`, `card-hover`, `gradient-text`, `shimmer`, `glass`, `glass-dark`, `dot-pattern`, `gradient-border`, `mesh-gradient`.
- Adding a page: create `src/app/<slug>/page.tsx` with `metadata` + canonical, add it to `siteConfig.nav` (which feeds the navbar and sitemap), and link it where needed.
- `out/`, `.next/`, and `next-env.d.ts` are gitignored build artifacts; don't commit them.
