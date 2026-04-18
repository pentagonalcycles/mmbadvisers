# MMB Advisers Website

Minimal Next.js website for MMB Advisers risk management advisory service.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- ESLint

## Site structure

- `app/page.tsx` - Home page (value proposition, outcomes, CTA)
- `app/service/page.tsx` - Service overview for TP Dates CP
- `app/method/page.tsx` - High-level methodology framework
- `app/track-record/page.tsx` - Historical ex-ante windows and disclaimers
- `app/about/page.tsx` - Professional background and credibility
- `app/contact/page.tsx` - Contact details, enquiry form, and clickable logo preview
- `components/nav.tsx` - Global top navigation
- `components/footer.tsx` - Global footer + legal disclaimer
- `content/site.ts` - Shared copy (hero text, value points, timeline, disclaimer)
- `public/images/logo.png` - Website logo asset (used in nav and contact page full-size preview link)

## Legal and compliance notes

- `MMB Advisers is not FCA registered` is explicitly stated in the site-wide footer.
- Website content is informational only and does not constitute regulated investment advice.
- The site must not recommend specific trades, instruments, or transactions.
- Historical examples are presented as observations only and are not guarantees of future outcomes.

Before public launch, re-check all legal wording with qualified UK regulatory/legal counsel.

## Content rules

- Always define `TP Dates CP` as `Turning Point Dates for Capital Protection` on first use in key pages.
- Keep language advisory-focused (`risk management overlay`) and avoid promotional trading language.
- Keep disclaimers consistent between footer and page-level copy.

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

## Deployment workflow

- GitHub repo: `pentagonalcycles/mmbadvisers`
- Vercel project: `mmbadvisers`
- Push to `main` to trigger Vercel deployment.
- Use Vercel preview/production URLs for review; attach custom domains only when ready.
