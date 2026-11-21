# Export Business Website Template

A premium, production-ready website template for export/trading businesses. Built with Next.js 14, Tailwind CSS, Framer Motion, and TypeScript.

**Live demo:** [fastscalingai.com](https://fastscalingai.com)

## Features

- Premium design with scroll animations (Framer Motion)
- Fully responsive (mobile, tablet, desktop)
- Next.js App Router application with server-side contact form delivery
- SEO optimized (generated sitemap + robots, canonical URLs, Open Graph, Twitter Cards, JSON-LD)
- Contact form via Resend, with the API key kept server-side
- WhatsApp floating button
- 6 pages plus a privacy policy: Home, About, Products, Markets, Blog/Resources, Contact

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run start      # preview the production build
```

> Stop `npm run dev` before running `npm run build`. Both use `.next/`, and building while
> dev is running leaves the dev server serving pages without CSS. If that happens, stop dev,
> delete `.next/`, and start dev again.

## Customize for Your Business

All business content lives in **`site.config.ts`** and is imported through the `@site-config` alias:

| Field | What to change |
|-------|---------------|
| `companyName`, `tagline`, `domain` | Brand identity and canonical domain |
| `location`, `address` | Display address and JSON-LD postal address |
| `nav` | Navigation links (also used by the sitemap) |
| `emails`, `whatsapp` | Contact details (`whatsapp` uses digits with country code, no `+`) |
| `social` | Optional social profiles for JSON-LD `sameAs` |
| `seo`, `hero` | Metadata, social image, homepage hero |
| `stats`, `certifications`, `trustSignals` | Credibility sections |
| `products` | Product catalog (`shortDescription` and `featured` drive the homepage) |
| `markets` | Countries served |
| `about`, `articles` | Company story, milestones, and resource cards |
| `footerProducts`, `footerMarkets` | Footer quick links |
| `contactCountries`, `contactProducts` | Contact form dropdowns |

Page-specific copy (process steps, benefits, trade terms, section headings) lives in the page files under `src/app/`.

### Environment variables

Copy `.env.example` to `.env.local` for development, or set these in your host's build settings:

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — overrides `siteConfig.whatsapp`
- `NEXT_PUBLIC_GA_ID` — optional Google Analytics 4; leave empty to disable analytics
- `RESEND_API_KEY`, `NOTIFY_EMAIL`, `FROM_EMAIL` — server-only contact delivery settings

The Resend sender domain must be verified. The WhatsApp button stays hidden while the number is empty or still contains the `91XXXXXXXXXX` placeholder.

### Replace Images

Images are in `public/images/`:
- `heroes/` — Page hero backgrounds
- `products/` — Product photos
- `blog/` — Blog article images
- `logo.png` — Your company logo
- `og-image.jpg` — Social sharing image (1200x630)
- `favicon.ico` — Browser tab icon

### Update SEO

1. Edit `site.config.ts` → `seo` section and `domain`
2. Update `src/app/layout.tsx` metadata only if you need fields not covered by the config
3. `sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts` — do not add them to `public/`

## Deploy to Vercel

Import the GitHub repository in Vercel and use the default Next.js build settings. The application uses a server route for its contact form, so it must run on a Next.js host; GitHub Pages/static export is not supported. Configure `RESEND_API_KEY`, `NOTIFY_EMAIL`, and `FROM_EMAIL` in the Vercel project's Environment Variables for Preview and Production. `FROM_EMAIL` must use a domain verified in Resend.

For local development, copy `.env.example` to `.env.local`, replace the placeholders, then run `npm run dev`. The Resend API key is read only by the server route and must never use a `NEXT_PUBLIC_` prefix.

## Contact Form

The contact form posts to `/api/contact`. The server validates and bounds submitted values, checks the product and country against configured options, escapes email HTML, and sends through Resend. The browser never receives the Resend API key. The form also includes an origin check, request size limit, and honeypot field; configure rate limiting or bot protection at the hosting layer before exposing the endpoint to high-volume traffic.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + Playfair Display (Google Fonts)
- **Contact Form:** Resend server API
- **Language:** TypeScript

## Project Structure

```
├── public/
│   ├── images/          # All site images
│   ├── _headers         # Legacy static-host headers; Vercel uses its own headers config
│   └── ...              # Icons, logo, manifest, social image
├── src/
│   ├── app/
│   │   ├── page.tsx         # Homepage
│   │   ├── about/           # About page
│   │   ├── products/        # Products catalog
│   │   ├── markets/         # Markets served
│   │   ├── blog/            # Resources/blog
│   │   ├── contact/         # Contact page
│   │   ├── privacy/         # Privacy policy
│   │   ├── sitemap.ts       # Generated sitemap.xml
│   │   ├── robots.ts        # Generated robots.txt
│   │   ├── layout.tsx       # Root layout + SEO
│   │   └── globals.css      # Global styles
│   └── components/          # Navbar, Footer, ContactForm, cards, animation wrappers
├── site.config.ts       # ← Single source of truth for business content
├── tailwind.config.js   # Theme colors & design tokens
└── next.config.js       # Next.js config
```

## License

MIT — free to use for any business.
