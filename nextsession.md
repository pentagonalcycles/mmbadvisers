# Next Session Notes (MMB Advisers)

Date: 2026-10-06
Repo: `pentagonalcycles/mmbadvisers`
Branch: `main`
Deployment: Vercel auto-deploy on push to `main`

## Current Status

- Website is live and publicly accessible.
- New "DAX" page added (`app/dax/page.tsx`), listed after Pod Strategy and before About in the global navigation.
- The page is titled "Combining the 12 TP candidate dates dial chart information with trendlines" and reports the DAX Heiken Ashi chart from 1 January 2026 to 25 September 2026 (`public/images/DAX.png`):
  - Explains how the TP Dates CP framework identifies candidate turning-point clusters and how they interact with primary trendline analysis.
  - Highlights Cluster #1 (27 Feb high to 23 Mar low) and Cluster #2 (June window with four TP dates).
  - Links the clusters back to the "12 TP Candidate Dates Dial Chart" on the Method page (`/method#tp-dial-chart`).
  - Notes that the 12 TP candidate dates appear in blue in the chart sub-title and the corresponding price bars are in dark red.
  - Mentions the last TP cluster for the year: 24 Oct to 30 Nov 2026, a time window with high risk of decline.
  - Reports the last OHLC values on 25 September 2026 and the full list of 12 TP candidate dates.
  - Includes the standard observation-only disclaimer.
- Method page (`app/method/page.tsx`) updated to add an `id="tp-dial-chart"` anchor to the first chart card so the DAX page can link directly to it.
- Fixed a Vercel build failure caused by a Next.js 16 / Turbopack bug with `next/font/google`:
  - Removed `next/font/google` from `app/layout.tsx`.
  - Loaded Merriweather and Source Sans 3 via a CSS `@import` in `app/globals.css`.
  - Defined `--font-heading` and `--font-body` as CSS variables in `:root`.
  - Local `npm run lint` and `npm run build` pass; Vercel deployment succeeded after the fix.
- README site structure and asset lists updated for the DAX page.

## Previous Status (retained)

- Pod Strategy page remains live at `https://mmb-advisers.com/pod-strategy`.
- One Pager page and PDF remain aligned with the revised disclaimer and copy.

## Today's Activity

- Added the DAX page (`app/dax/page.tsx`) and the `public/images/DAX.png` asset.
- Added the DAX link to `components/nav.tsx` after Pod Strategy.
- Refined the DAX page copy across several iterations:
  - Linked the TP clusters to the Method page dial chart.
  - Added notes on the 12 TP candidate dates in the sub-title and dark red price bars.
  - Added the last TP cluster note (24 Oct to 30 Nov 2026).
  - Removed the projected price levels from the TP dates list.
  - Updated the page title to "Combining the 12 TP candidate dates dial chart information with trendlines".
- Added the `tp-dial-chart` anchor to the Method page.
- Diagnosed and fixed the Vercel/Turbopack Google Fonts build failure.
- Updated `README.md` and `nextsession.md`.

## Latest Commits

- `b70b017` - content: update DAX page title
- `173bc87` - content: refine DAX page copy on TP dates and chart colours
- `5480fc5` - fix: load Google Fonts via CSS to avoid Turbopack build failure
- `97040c1` - content: link DAX page clusters to 12 TP Candidate Dates Dial Chart
- `d4887d3` - feat: add DAX page after Pod Strategy

## Files Recently Changed

- `app/dax/page.tsx` (new)
- `app/method/page.tsx` (added `tp-dial-chart` anchor)
- `app/layout.tsx` (removed `next/font/google`)
- `app/globals.css` (added Google Fonts import and CSS variables)
- `components/nav.tsx` (added DAX link)
- `README.md` (updated)
- `nextsession.md` (updated)
- `public/images/DAX.png` (new)

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

1. Confirm the latest Vercel deployment of the DAX page remains stable.
2. Verify the DAX page title, Method page anchor link, and copy are rendering correctly on the live site.
3. Decide whether to commit/ignore the remaining local `images/` changes.
4. If contact form should send emails, implement backend handling (currently UI-only form).
