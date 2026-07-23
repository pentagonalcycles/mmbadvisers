# Next Session Notes (MMB Advisers)

Date: 2026-07-23
Repo: `pentagonalcycles/mmbadvisers`
Branch: `main`
Deployment: Vercel auto-deploy on push to `main`

## Current Status

- Website is live and publicly accessible.
- Custom domain setup completed in Vercel + Namecheap.
- Contact page updated with legal entity text, contact form, clickable logo.
- Track record page now displays dial and chart visuals for 2020, 2022, 2025, and 2026 Q1.

## Latest Commits

- `eefe11f` - feat: add track record chart visuals for 2020, 2022, 2025, 2026
- `7bcd18d` - fix: update contact email domain
- `0f78342` - feat: make contact logo open full-size in new tab
- `97ce03f` - feat: update contact page details and add enquiry form

## Domain / DNS

- Domain: `mmb-advisers.com`
- Also configured: `www.mmb-advisers.com`
- Vercel status reached valid configuration.
- DNS note: A record was updated to Vercel recommended value `216.198.79.1`.

## Contact Details In Site

- Email in contact page: `marco@mmb-advisers.com`

## Files Recently Changed

- `app/track-record/page.tsx`
- `content/site.ts`
- `public/images/Dial*.png`
- `README.md`

## Working Tree Note

There are unrelated local image changes currently not committed (intentionally left out of recent commits):

- `images/LogoPhotograph.jpeg` (modified)
- `images/LogoPhotograph.png` (deleted)
- `images/MarcoBianchiOnePagerBio.png` (untracked)
- `images/logo.png` (untracked)

When resuming, check whether these should be kept, committed, or cleaned up.

## Suggested First Checks Next Session

1. Verify track record page renders correctly at `https://mmb-advisers.com/track-record`.
2. Confirm both dial and chart images display side by side and link to full-size versions.
3. Decide whether to commit/ignore the remaining local `images/` changes.
4. If contact form should send emails, implement backend handling (currently UI-only form).
