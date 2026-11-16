# Export Business Website Template

A premium, production-ready website template for export/trading businesses. Built with Next.js 14, Tailwind CSS, Framer Motion, and TypeScript.

**Live demo:** [fastscalingai.com](https://fastscalingai.com)

## Features

- Premium design with scroll animations (Framer Motion)
- Fully responsive (mobile, tablet, desktop)
- Static export — deploys anywhere (Netlify, Cloudflare Pages, Vercel)
- SEO optimized (generated sitemap + robots, canonical URLs, Open Graph, Twitter Cards, JSON-LD)
- Contact form via Web3Forms (free, no backend needed)
- WhatsApp floating button
- 6 pages plus a privacy policy: Home, About, Products, Markets, Blog/Resources, Contact

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build      # static site in out/
npm run typecheck  # tsc --noEmit
npx serve out      # preview the production build
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
| `web3formsKey` | Your free key from [web3forms.com](https://web3forms.com) |
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
- `NEXT_PUBLIC_WEB3FORMS_KEY` — rotate the public form key without editing source
- `NEXT_PUBLIC_GA_ID` — optional Google Analytics 4; leave empty to disable analytics

`NEXT_PUBLIC_*` values are inlined at build time, so rebuild after changing them. The WhatsApp button stays hidden while the number is empty or still contains the `91XXXXXXXXXX` placeholder.

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

## Deploy to Netlify

```bash
npm run build
npx netlify deploy --prod --dir=out
```

Or connect the repository and set the publish directory to `out` with build command `npm run build`. Security and cache headers are defined in `public/_headers`, which Netlify copies to the publish root.

## Deploy to Cloudflare Pages

```bash
npm run build
npx wrangler pages project create your-project-name --production-branch main
npx wrangler pages deploy out --project-name your-project-name
```

Subsequent deploys: `npm run build && npx wrangler pages deploy out --project-name your-project-name`. Cloudflare Pages also reads `_headers` from the publish root.

## Deploy to Vercel

```bash
npx vercel
```

## Contact Form

The form posts directly to Web3Forms from the browser; there is no backend in this template. `src/app/api/contact/route.ts` is a Resend prototype that is **not deployed** while `output: 'export'` is enabled. For a production backend on Netlify, implement it as a Netlify Function and keep the Resend API key in Netlify's environment settings.

## Tech Stack

- **Framework:** Next.js 14 (Static Export)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + Playfair Display (Google Fonts)
- **Contact Form:** Web3Forms
- **Language:** TypeScript

## Project Structure

```
├── public/
│   ├── images/          # All site images
│   ├── _headers         # Security + cache headers (Netlify / Cloudflare Pages)
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
└── next.config.js       # Next.js config (static export)
```

## License

MIT — free to use for any business.
