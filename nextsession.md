# Next Session Notes (MMB Advisers)

Date: 2026-09-27
Repo: `pentagonalcycles/mmbadvisers`
Branch: `main`
Deployment: Vercel auto-deploy on push to `main`

## Current Status

- Website is live and publicly accessible.
- Custom domain setup completed in Vercel + Namecheap.
- Contact page updated with legal entity text, contact form, clickable logo.
- Track record page now displays dial and chart visuals for 2020, 2022, 2025, and 2026 Q1.
- Method page updated with Summary section cross-referencing all 4 core proprietary charts for 2026 predictions, plus final advisory service paragraph.
- Method page now includes tail-risk turning point candidates table as a PNG image at the bottom.
- Method page now includes a new "RULES FOR REMOVAL OF HEDGE OVERLAY PROTECTION" section at the bottom, with commentary and five DAX Heiken Ashi charts covering 31 Mar, 05-05, 18 Jun-19 Jul, 08-18, and 09 Sep 2026 signals.
- README and session notes updated to reflect the new method page section and image assets.
- Typos and grammar corrected across method, service, and site content files.

## Latest Commits

- `a85d998` - feat: add September trend line break chart and bear scenario conclusion to method page
- `56974f7` - feat: add 08-18 turning point chart and commentary to method page
- `e0cbb3f` - feat: add June-July TP cluster chart and commentary to method page
- `dd3bb91` - feat: add 05-05 turning point chart and commentary to method page
- `311246e` - fix: match rules heading style to core indicators title
- `f26d920` - fix: change chart wording from taken to seen
- `7fd95d7` - feat: add hedge overlay removal rules section to method page
- `037f8e0` - fix: remove redundant heading above table image
- `03d90cf` - fix: replace PDF embed with PNG image for tail-risk table
- `0967f04` - feat: add tail-risk turning point candidates table to method page
- `f8b344b` - fix: amend advisory service phrasing and add comma
- `24a60af` - fix: add tail-risk prefix to predictions
- `d8a9758` - fix: replace particularly bad with particularly severe
- `a4a2001` - fix: add timeframe to bear market pressure note
- `da40b9e` - fix: correct typos and grammar across site, service, and method pages

## Domain / DNS

- Domain: `mmb-advisers.com`
- Also configured: `www.mmb-advisers.com`
- Vercel status reached valid configuration.
- DNS note: A record was updated to Vercel recommended value `216.198.79.1`.

## Contact Details In Site

- Email in contact page: `marco@mmb-advisers.com`

## Files Recently Changed

- `app/method/page.tsx`
- `public/images/DAXHeikenAshi2026Q1.png`
- `public/images/DAXHeikenAshi2026May05.png`
- `public/images/DAXHeikenAshi2026JunJul.png`
- `public/images/DAXHeikenAshi2026Aug18.png`
- `public/images/DAXHeikenAshi2026Sep09.png`
- `README.md`
- `nextsession.md`
- `public/images/mytable.png`
- `app/service/page.tsx`
- `content/site.ts`

## Working Tree Note

Local `images/` directory contains assets outside version control:

- `images/LogoPhotograph.jpeg`
- `images/MarcoBianchiOnePagerBio.png`
- `images/logo.png`

When resuming, check whether these should be kept, committed, or cleaned up. `LogoPhotograph.png` no longer exists in the directory.

## LaTeX Source

- `mytable.tex` is located at `/home/marco/Desktop/mytable.tex` (outside repo).
- Compiled to PNG via `pdftoppm -png -r 300` and placed in `public/images/mytable.png`.

## Suggested First Checks Next Session

1. Verify method page renders correctly with the new RULES FOR REMOVAL OF HEDGE OVERLAY PROTECTION section and all five DAX Heiken Ashi charts at `https://mmb-advisers.com/method`.
2. Confirm all text reads cleanly without typos.
3. Decide whether to commit/ignore the remaining local `images/` changes.
4. If contact form should send emails, implement backend handling (currently UI-only form).
