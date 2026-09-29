# Next Session Notes (MMB Advisers)

Date: 2026-09-29
Repo: `pentagonalcycles/mmbadvisers`
Branch: `main`
Deployment: Vercel auto-deploy on push to `main`

## Current Status

- Website is live and publicly accessible.
- New "One Pager" page added (`app/onepager/page.tsx`) before About in the global navigation.
- One Pager page reproduces the content of `/home/marco/Downloads/mmb-advisers-onepager.pdf`:
  - TP DATES CP header band
  - The Problem, The Solution, The Evidence (including the 2026 windows table)
  - Who Is Behind It (founder background)
  - Next Step / CTA with contact details and link to the contact form
  - Legal disclaimer
- One Pager page provides a download link for the PDF; the LaTeX source remains in the repo but is not exposed as a download link.
- PDF and `.tex` source copied into `public/downloads/` and committed.
- Custom domain setup completed in Vercel + Namecheap.
- Contact page updated with legal entity text, contact form, clickable logo.
- Track record page now displays dial and chart visuals for 2020, 2022, 2025, and 2026 Q1.
- Method page updated with Summary section cross-referencing all 4 core proprietary charts for 2026 predictions, plus final advisory service paragraph.
- Method page now includes tail-risk turning point candidates table as a PNG image at the bottom.
- Method page now includes an "Integration of TP Candidate Dates with Primary Trendlines Analysis" section at the bottom, with commentary and five DAX Heiken Ashi charts covering 31 Mar, 05-05, 18 Jun-19 Jul, 08-18, and 09 Sep 2026 signals.
- Method page copy further refined on 2026-09-28: fixed typos ("protectio", "and the the", "Dax"), improved sentence structure, and clarified tail-risk wording.
- Vercel auto-deploy succeeded for the latest `main` commit; live site at `https://mmb-advisers.com/method` reflects the updates.
- Two-factor authentication enabled on the Vercel account for extra dashboard security; recovery codes stored outside the repo.
- README and session notes updated to reflect the new method page section and image assets.
- Typos and grammar corrected across method, service, and site content files.

## Latest Commits

- `846560a` - fix: remove .tex source download link from One Pager page
- `4817c11` - fix: move One Pager link before About in navigation
- `db9b5a8` - docs: update README and session notes for One Pager
- `ca4fce9` - Add One Pager page, PDF and LaTeX source
- `2931c2d` - Edit and improve method page copy
- `cd59734` - Emphasize tail risk applies to entire 2026 calendar year
- `7c4916a` - Expand trend line rationale and add Q4 tail risk note
- `bc3f9d1` - fix: specify September 2026 in final sentence
- `f9bbccb` - fix: expand primary trend lines introduction
- `71d8f24` - fix: add RF oscillator cross-reference to 9 Sept sentence
- `a020b95` - fix: simplify 9 Sept trend line break wording
- `5b520bf` - fix: add as of end of September timing to final sentence
- `3fe3600` - fix: reword 05-05 TP commentary
- `3fe41bc` - fix: add retracement rationale for 19 Jul local low
- `ecaac23` - fix: expand hedge overlay removal rationale
- `cd9658a` - fix: shorten primary trend bull/bear wording
- `3bf79df` - fix: tighten final bear territory sentence
- `914e255` - fix: remove redundant red bar in chart below wording
- `ee19447` - fix: specify hedge overlay removal on that candle
- `4556c71` - fix: reword proceed to move forward in time
- `818dbee` - fix: reword sub trend lines as geometric expansions
- `9b53eb4` - fix: specify sloped trend lines
- `0c31703` - fix: clarify TP candidate dates trading day wording
- `89cfa32` - feat: replace trendline analysis charts with today's screenshots
- `46e4f3c` - feat: expand 31 March 2026 trendline commentary
- `0f30fd5` - feat: update method page section title and add trendline intro
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

- `app/onepager/page.tsx`
- `public/downloads/mmb-advisers-onepager.pdf`
- `public/downloads/mmb-advisers-onepager.tex`
- `components/nav.tsx`
- `app/method/page.tsx`
- `public/images/TrendlineAnalysis2026_01.png`
- `public/images/TrendlineAnalysis2026_02.png`
- `public/images/TrendlineAnalysis2026_03.png`
- `public/images/TrendlineAnalysis2026_04.png`
- `public/images/TrendlineAnalysis2026_05.png`
- `public/images/mytable.png`
- `app/service/page.tsx`
- `content/site.ts`
- `README.md`
- `nextsession.md`

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

1. Verify the new One Pager page renders correctly at `https://mmb-advisers.com/onepager`, including the PDF download link and navigation order.
2. Verify method page renders correctly with the updated copy at `https://mmb-advisers.com/method`.
3. Confirm the latest Vercel deployment remains stable and no new build errors appear.
4. Decide whether to commit/ignore the remaining local `images/` changes.
5. If contact form should send emails, implement backend handling (currently UI-only form).
