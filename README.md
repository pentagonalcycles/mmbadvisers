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
- `app/contact/page.tsx` - Contact details, enquiry form, server-action submit handling, and clickable logo preview
- `app/contact/sent/page.tsx` - Contact submission confirmation page (success/invalid states)
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
