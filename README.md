# MMB Advisers Website

Minimal Next.js website for MMB Advisers risk management advisory service.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- ESLint

## Site structure

- `app/page.tsx` - Home page (value proposition, outcomes, CTA)
- `app/service/page.tsx` - Service overview for TP Dates CP
- `app/method/page.tsx` - High-level methodology framework with 4 core proprietary indicator charts, commentaries, summary cross-referencing all indicators, tail-risk turning point candidates table, and an "Integration of TP Candidate Dates with Primary Trendlines Analysis" walk-through with DAX Heiken Ashi charts
- `app/track-record/page.tsx` - Historical ex-ante windows with dial and chart visuals (2020, 2022, 2025, 2026)
- `app/about/page.tsx` - Professional background and credibility
- `app/onepager/page.tsx` - One-page summary of TP Dates CP (problem, solution, evidence, founder background, CTA), with a download link for the PDF; listed before About in the global navigation
- `app/pod-strategy/page.tsx` - Backtest results of a fully automated trading strategy on the DAX cash index (applicable to any major index, e.g. SPX, NDX, Nikkei 225, India NIFTY 50; slightly less than one trade per day on average, positioning from 100% net short to 120% net long, average net exposure ~20% net long, backtested since 1960 with only recent years presented), with five clickable backtest charts (2007-2009, 2010-2026, 2020-2026, 2023-2026, 2026 YTD) plus appendix charts for 1960-1963, 2020, and 2022, and a summary table of end-of-period values for all windows; complements the low-frequency TP Dates CP approach and is listed before About in the global navigation
- `app/dax/page.tsx` - "Combining the 12 TP candidate dates dial chart information with trendlines": DAX Heiken Ashi chart from 1 January 2026 to 25 September 2026, annotated with TP Dates CP clusters, primary trendlines, entry/exit signals, and key levels; links to the 12 TP Candidate Dates Dial Chart on the Method page; listed after Pod Strategy and before About in the global navigation
- `app/contact/page.tsx` - Contact details, enquiry form, server-action submit handling, and clickable logo preview
- `app/contact/sent/page.tsx` - Contact submission confirmation page (success/invalid states)
- `app/disclaimer/page.tsx` - Full legal disclaimer covering the technical/quantitative nature of the service, client discretion, and liability limitations
- `components/nav.tsx` - Global top navigation
- `components/footer.tsx` - Global footer + short legal disclaimer with link to full disclaimer page
- `content/site.ts` - Shared copy (hero text, value points, timeline, disclaimer)
- `public/images/logo.png` - Website logo asset (used in nav and contact page full-size preview link)
- `public/images/Dial*.png` - Track record dial and chart images for 2020, 2022, 2025, 2026 (clickable, open full-size)
- `public/images/RFOscillatorChart.png` - Random Forest Oscillator chart (Method page)
- `public/images/HorizontalBoxesHeatmapChart.png` - Horizontal Boxes Heatmap Gantt chart (Method page)
- `public/images/SpecialSituationsVolatilityTrendReversalChart.png` - Special Situations Volatility Fast Price Reversal chart (Method page)
- `public/images/mytable.png` - Tail-risk turning point candidates table for 2026 (Method page)
- `public/images/TrendlineAnalysis2026_01.png` through `TrendlineAnalysis2026_05.png` - DAX Heiken Ashi charts for the "Integration of TP Candidate Dates with Primary Trendlines Analysis" walk-through (Method page): 31 March 2026 hedge overlay removal signal, 05-05 turning point, 18 June-19 July TP cluster, 08-18 turning point, and 9 September trend line break / bear scenario
- `public/images/PodStrategy20072009.png`, `PodStrategy20102026.png`, `PodStrategy20202026.png`, `PodStrategy20232026.png`, `PodStrategy2026.png`, `PodStrategy19601963.png`, `PodStrategy2020.png`, `PodStrategy2022.png` - Pod Strategy backtest charts (Pod Strategy page): 100 euros invested in the DAX cash index versus the Pod Strategy from 2007 (three years), 2010, 2020, 2023, 2026 year to date, 1960-1963 (appendix), and the 2020 and 2022 calendar years (appendix)
- `public/images/DAX.png` - DAX Heiken Ashi chart from 1 January 2026 to 25 September 2026, annotated with TP date clusters, trendlines, entry/exit signals, and key levels (DAX page)
- `public/downloads/mmb-advisers-onepager.pdf` - Printable one-pager PDF (linked from the One Pager page)
- `public/downloads/mmb-advisers-onepager.tex` - LaTeX source for the one-pager PDF (kept in repo but not exposed as a download link)
- `public/downloads/cvMarcoBianchiPhD.pdf` - Marco Bianchi's CV PDF (linked from the About page)

## Legal and compliance notes

- `MMB Advisers is not FCA registered` is explicitly stated in the site-wide footer.
- Website content is informational only and does not constitute regulated investment advice.
- The site must not recommend specific trades, instruments, or transactions.
- Historical examples are presented as observations only and are not guarantees of future outcomes.

Before public launch, re-check all legal wording with qualified UK regulatory/legal counsel.

## Content rules

- Always define `TP Dates CP` as `Turning Point Dates for Capital Protection` on first use in key pages.
- Keep language advisory-focused (`risk management overlay`) and avoid promotional trading language.
- Legal disclaimer appears in the site-wide footer and on the dedicated `/disclaimer` page.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Contact form behavior

- The contact form submits through a Next.js server action in `app/contact/page.tsx`.
- Current behavior: validates required fields, logs enquiry payload server-side, and redirects to `/contact/sent`.
- This avoids browser POST-to-page `405` errors by handling submit on the server action endpoint.
- Email delivery is not yet wired in code; SMTP/API integration is a separate step.

## Domain email (Zoho EU)

- Domain mail provider: Zoho Mail EU (`zoho.eu`).
- Active mailbox: `marco@mmb-advisers.com`.
- DNS records required in Namecheap:
  - MX: `mx.zoho.eu` (10), `mx2.zoho.eu` (20), `mx3.zoho.eu` (50)
  - SPF TXT (`@`): `v=spf1 include:zoho.eu ~all`
  - DKIM TXT: selector from Zoho admin (for example `zmail._domainkey`) with Zoho-provided `v=DKIM1; ...` value
- Zoho setup steps `Email Migration` and `Go Mobile` are optional unless migration/mobile client setup is needed.

## Deployment workflow

- GitHub repo: `pentagonalcycles/mmbadvisers`
- Vercel project: `mmbadvisers`
- Push to `main` to trigger Vercel deployment.
- Use Vercel preview/production URLs for review; attach custom domains only when ready.
