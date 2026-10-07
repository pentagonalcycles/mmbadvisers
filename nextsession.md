# Next Session Notes (MMB Advisers)

Date: 2026-10-07
Repo: `pentagonalcycles/mmbadvisers`
Branch: `main`
Deployment: Vercel auto-deploy on push to `main`

## Current Status

- Website is live and publicly accessible.
- New dedicated `/disclaimer` page added (`app/disclaimer/page.tsx`) and linked from the global navigation (last item) and from the site-wide footer.
- About page (`app/about/page.tsx`) updated:
  - Current focus copy now frames the dual offering across the signal-frequency spectrum (low-frequency TP Dates CP to high-frequency Pod Strategy).
  - Added a download link for `public/downloads/cvMarcoBianchiPhD.pdf` below the one-page professional bio image.
- CV source file `cvMarcoBianchiPhD.tex` updated in the local `cvMarco` workspace to reflect the website-aligned positioning, EB Garamond font, domain email, and Opencode tooling.
- Local `npm run lint` and `npm run build` pass; Vercel deployments succeeded for all pushes.
- `README.md` and `nextsession.md` updated to reflect the disclaimer page, CV download, and About page changes.

## Previous Status (retained)

- New "DAX" page added (`app/dax/page.tsx`), listed after Pod Strategy and before About in the global navigation.
- The DAX page is titled "Combining the 12 TP candidate dates dial chart information with trendlines" and reports the DAX Heiken Ashi chart from 1 January 2026 to 25 September 2026 (`public/images/DAX.png`).
- Method page (`app/method/page.tsx`) has an `id="tp-dial-chart"` anchor so the DAX page links directly to the dial chart.
- Fixed a Vercel build failure caused by a Next.js 16 / Turbopack bug with `next/font/google` by loading Merriweather and Source Sans 3 via CSS `@import`.
- Pod Strategy page remains live at `https://mmb-advisers.com/pod-strategy`.
- One Pager page and PDF remain aligned with the revised disclaimer and copy.

## Today's Activity

- Updated About page current focus copy to emphasize the spectrum from low-frequency capital protection to high-frequency automated quant pod-type strategies.
- Added a CV PDF download link to the About page and copied `cvMarcoBianchiPhD.pdf` into `public/downloads/`.
- Created a dedicated `/disclaimer` page with comprehensive legal language covering:
  - Technical/quantitative/mathematical nature of the service.
  - No FCA registration and no regulated investment advice.
  - Client discretion and decision-making responsibility.
  - No liability for losses or profits.
  - Past observations and model limitations.
  - Recommendation to seek independent professional advice.
- Added "Disclaimer" as the last item in the global navigation.
- Updated the footer disclaimer to link to the full disclaimer page.
- Updated local CV files (`cvMarcoBianchiPhD.tex`, `cvMarcoBianchiPhD_Oli.tex`, `cvMarcoBianchiPhDOld.tex`) and compiled PDFs.
- Updated `README.md` and `nextsession.md`.

## Latest Commits

- `e05e27b` - feat: add dedicated disclaimer page with nav and footer links
- `142cff5` - feat: add CV PDF download link to About page
- `47d51c1` - content: refine About page to contrast low-frequency and high-frequency advisory spectrum
- `d8d226e` - content: update About page current focus to include automated quant pod-type strategies
- `b70b017` - content: update DAX page title
- `173bc87` - content: refine DAX page copy on TP dates and chart colours
- `5480fc5` - fix: load Google Fonts via CSS to avoid Turbopack build failure
- `97040c1` - content: link DAX page clusters to 12 TP Candidate Dates Dial Chart
- `d4887d3` - feat: add DAX page after Pod Strategy

## Files Recently Changed

- `app/disclaimer/page.tsx` (new)
- `app/about/page.tsx` (updated current focus copy and added CV download link)
- `components/nav.tsx` (added Disclaimer link)
- `components/footer.tsx` (added full disclaimer link)
- `public/downloads/cvMarcoBianchiPhD.pdf` (new)
- `README.md` (updated)
- `nextsession.md` (updated)

## Domain / DNS

- Domain: `mmb-advisers.com`
- Also configured: `www.mmb-advisers.com`
- Vercel status reached valid configuration.
- DNS note: A record was updated to Vercel recommended value `216.198.79.1`.

## Contact Details In Site

- Email in contact page: `marco@mmb-advisers.com`

## Working Tree Note

Local `images/` directory contains assets outside version control:

- `images/LogoPhotograph.jpeg`
- `images/MarcoBianchiOnePagerBio.png`
- `images/logo.png`

When resuming, check whether these should be kept, committed, or cleaned up.

## LaTeX Source

- `mytable.tex` is located at `/home/marco/Desktop/mytable.tex` (outside repo).
- Compiled to PNG via `pdftoppm -png -r 300` and placed in `public/images/mytable.png`.
- `public/downloads/mmb-advisers-onepager.tex` is the LaTeX source for the downloadable one-pager PDF; compiled with `pdflatex` to `public/downloads/mmb-advisers-onepager.pdf`.

## Suggested First Checks Next Session

1. Confirm the latest Vercel deployments of the About page and Disclaimer page are stable.
2. Verify the CV download link and disclaimer links (nav + footer) render correctly on the live site.
3. Review the disclaimer page wording with qualified UK regulatory/legal counsel before treating it as final.
4. Decide whether to commit/ignore the remaining local `images/` changes.
5. If contact form should send emails, implement backend handling (currently UI-only form).
