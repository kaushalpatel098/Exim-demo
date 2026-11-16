# Wide-screen layout utilization plan

## Goal
Use available width on large desktop displays while preserving current mobile/tablet responsiveness and readable line lengths for long-form content.

## Constraints / decisions
- **Approach (confirmed):** widen page containers and add selective grid/layout tweaks at wide breakpoints; do not merely stretch prose.
- **Readability guardrails:** keep constrained widths for long-form/body-copy blocks (privacy content, hero subtitles/intro copy, section subheadlines, about story text blocks) and avoid making paragraphs span ultra-wide.
- **No behavior/content changes:** layout/styling only; do not alter copy, data sourcing from `site.config.ts`, routes, SEO metadata, form logic, or static-export constraints.
- **Respect existing patterns:** reuse Tailwind utilities and `src/app/globals.css` helpers; keep pages server components unless already client.

## Current state (key boundaries)
- Shared shell/layout wrappers: `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/app/layout.tsx` (main wrapper minimal).
- Reusable section wrappers: `src/components/PageHero.tsx`, `src/components/SectionHeader.tsx`.
- Pages with repeated container pattern `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` and/or narrower CTA/prose containers: `src/app/page.tsx`, `about/page.tsx`, `products/page.tsx`, `markets/page.tsx`, `blog/page.tsx`, `contact/page.tsx`, `privacy/page.tsx`.
- Cards/components affected by grid density: `src/components/ProductCard.tsx` (layout fine, grid controlled by pages), grids in home/products/markets/blog/about/trust/stats sections.
- No custom `container` config in `tailwind.config.js`; widths are applied via per-section utility classes.

## Implementation plan
1. **Define wide-screen container strategy (single-source where practical)**
   - Introduce consistent responsive container utilities for primary sections, e.g. keep base `px-4 sm:px-6 lg:px-8` and add `xl:px-10 2xl:px-12` (or similar) plus widened caps such as `max-w-7xl xl:max-w-screen-xl 2xl:max-w-[90rem]`/`2xl:max-w-screen-2xl` depending on visual fit with existing design.
   - Prefer adding a small reusable class in `src/app/globals.css` under `@layer components` (e.g. `.site-container`, `.site-container-wide`, `.site-container-narrow`) **or** a documented utility string pattern applied consistently—choose the option that minimizes churn and keeps intent clear. Do not add a Tailwind `container` plugin/config unless necessary.
   - Keep/introduce narrow containers for prose-focused sections (`privacy` body, timeline/about story constraints as appropriate) so text measure remains readable.

2. **Update shared chrome and reusable section components**
   - `Navbar.tsx`: widen nav inner container and horizontal padding on `xl/2xl` while preserving `h-[72px]`, mobile menu behavior, and alignment.
   - `Footer.tsx`: widen CTA strip and main footer grid containers/padding; keep 4-column footer layout readable (consider `gap` increase on large screens, not extra columns).
   - `PageHero.tsx`: widen outer content container; keep subtitle `max-w-*` capped for readability and hero text balance.
   - `SectionHeader.tsx`: allow wider header block on large screens only where appropriate (e.g. bump cap slightly on `2xl` or make configurable) but preserve comfortable line length for subheadlines.

3. **Widen and rebalance page layouts**
   - `src/app/page.tsx` (highest impact):
     - Hero: widen container, keep headline/subheadline max widths readable.
     - Stats strip: allow more horizontal spread (`max-w`/padding/gap tweaks); optionally `lg:grid-cols-4` remains but increase card padding/gap on `xl/2xl` or add `2xl` sizing—preserve 2-col mobile.
     - Products preview: expand grid at wide breakpoints (e.g. keep `grid-cols-2 md:grid-cols-3`, add `xl:grid-cols-4`/`2xl:grid-cols-6` only if cards remain legible) or increase card height/gap; avoid tiny cards.
     - Process: keep 3-step layout but widen container/gaps; evaluate `xl:grid-cols-3` spacing rather than extra columns.
     - Trust signals: use extra width (`xl:grid-cols-3` already implicit? currently `md:grid-cols-3`; consider `2xl:grid-cols-6` or adjusted gaps/width) without harming scanability.
     - CTA: widen container slightly, keep text block readable.
   - `products/page.tsx`: widen container; expand product grid on large screens (e.g. `lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4/5` based on card width) while keeping 1/2-col small behavior intact.
   - `markets/page.tsx`: widen containers; countries grid can add `xl`/`2xl` column(s); keep "Why Africa" 4-up readable with larger gaps; trade-terms two-column section can gain width/gap but remain two columns for clarity.
   - `blog/page.tsx`: widen container; article grid can add `xl:grid-cols-4` if card proportions hold; keep excerpt/title readable.
   - `about/page.tsx`: widen containers; keep story text column readable (max measure), timeline/prose sections may remain narrower by design.
   - `contact/page.tsx`: widen overall container and allow form/sidebar area to use space (`lg:grid-cols-3` gap/padding) while keeping form fields usable.
   - `privacy/page.tsx`: widen outer/hero-adjacent wrappers only as needed but **keep body/content column narrow** (`max-w-prose`/existing `max-w-3xl`) for readability.

4. **Polish responsive details**
   - Audit for any hard `max-w-*` on text blocks that should remain (hero/section descriptions, CTA paragraphs, privacy prose) vs containers that should widen.
   - Ensure grids/cards do not become overly sparse: adjust `gap`, card padding, and image heights only if needed at `xl/2xl`.
   - Verify no horizontal overflow/regressions on mobile (320px+), tablet, and common desktop widths.

## Data flow / integration
- No runtime data-flow changes. Edits are limited to Tailwind classes/CSS utilities in UI layer (`src/app/**`, `src/components/**`, optionally `globals.css`/`tailwind.config.js` if a token/utility is needed).

## Risks / edge cases
- **Overly wide text:** mitigated by preserving narrow max-widths on prose and subtitles.
- **Sparse grids on ultrawide:** mitigated by capping container max-width (e.g. ~1440–1600px) and/or limiting added columns.
- **Inconsistent spacing:** mitigated by applying a shared container/padding convention.
- **Mobile regressions:** mitigated by changing only `lg/xl/2xl`-scoped utilities and rechecking small breakpoints.

## Validation (implementation phase)
- `npm run typecheck`
- `npm run build` (ensure dev server not running) to confirm static export still succeeds.
- Manual responsive spot-check in browser/devtools: ~375px, 768px, 1024px, 1280px, 1536px, 1920px+ on home, products, markets, blog, about, contact, privacy (nav/footer/hero/cards/prose).

## Out of scope
- Redesigning visual theme, typography scale, or content.
- Adding new breakpoints/tokens beyond what is necessary for this layout adjustment.
- Fixing unrelated UI issues not caused by this change.
