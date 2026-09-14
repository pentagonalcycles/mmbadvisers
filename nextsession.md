# Next Session Notes (MMB Advisers)

Date: 2026-09-14
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
- Typos and grammar corrected across method, service, and site content files.

## Latest Commits

- `037f8e0` - fix: remove redundant heading above table image
- `03d90cf` - fix: replace PDF embed with PNG image for tail-risk table
- `0967f04` - feat: add tail-risk turning point candidates table to method page
- `f8b344b` - fix: amend advisory service phrasing and add comma
- `24a60af` - fix: add tail-risk prefix to predictions
- `d8a9758` - fix: replace particularly bad with particularly severe
- `a4a2001` - fix: add timeframe to bear market pressure note
- `da40b9e` - fix: correct typos and grammar across site, service, and method pages
- `aad7dc9` - fix: add line break and In summary prefix to hedge overlay dates
- `442a5b6` - fix: add comma after horizontal boxes
- `ac1445d` - fix: remove comma in summary text
- `86511a0` - fix: add date range for Fall cluster
- `9640e9a` - fix: amend summary text and add line break
- `777994e` - fix: add line break before Special Situations paragraph
- `9fd2b8f` - fix: clarify early summer cluster in method summary
- `36b9be9` - feat: add summary section to method page

## Domain / DNS

- Domain: `mmb-advisers.com`
- Also configured: `www.mmb-advisers.com`
- Vercel status reached valid configuration.
- DNS note: A record was updated to Vercel recommended value `216.198.79.1`.

## Contact Details In Site

- Email in contact page: `marco@mmb-advisers.com`

## Files Recently Changed

- `app/method/page.tsx`
- `public/images/mytable.png`
- `app/service/page.tsx`
- `content/site.ts`

## Working Tree Note

There are unrelated local image changes currently not committed (intentionally left out of recent commits):

- `images/LogoPhotograph.jpeg` (modified)
- `images/LogoPhotograph.png` (deleted)
- `images/MarcoBianchiOnePagerBio.png` (untracked)
- `images/logo.png` (untracked)

When resuming, check whether these should be kept, committed, or cleaned up.

## LaTeX Source

- `mytable.tex` is located at `/home/marco/Desktop/mytable.tex` (outside repo).
- Compiled to PNG via `pdftoppm -png -r 300` and placed in `public/images/mytable.png`.

## Suggested First Checks Next Session

1. Verify method page renders correctly with tail-risk table image at `https://mmb-advisers.com/method`.
2. Confirm all text reads cleanly without typos.
3. Decide whether to commit/ignore the remaining local `images/` changes.
4. If contact form should send emails, implement backend handling (currently UI-only form).
