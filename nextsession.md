# Next Session Notes (MMB Advisers)

Date: 2026-10-02
Repo: `pentagonalcycles/mmbadvisers`
Branch: `main`
Deployment: Vercel auto-deploy on push to `main`

## Current Status

- Website is live and publicly accessible.
- New "Pod Strategy" page added (`app/pod-strategy/page.tsx`), listed before About in the global navigation (after One Pager).
- The page reports the results of a backtest of a fully automated trading strategy applied to the DAX cash index (results expressed with reference to that market; the strategy can be applied to any other major index, e.g. SPX, NDX, Nikkei 225, India NIFTY 50):
  - Intro contrasts the advisory remit of the rest of the site (improved risk-adjusted returns via a very small number of key decisions per year) with this higher-frequency pod-type strategy; TP Dates CP (Turning Point Dates for Capital Protection) framed as 3-4 triggers per calendar year vs. slightly less than one trade per day on average; both extremes of the spectrum.
  - Key facts cards: instrument (DAX cash index, applicable to any major index), approach, trading frequency, positioning range (100% net short to 120% net long), average net exposure (~20% net long vs. 100% for the benchmark), backtest since 1960.
  - "Behaviour in bear markets" section: structural explanation of the exposure contrast, plus upside-capture / return-profile-asymmetry wording.
  - "Backtest results" section: summary table of end-of-period values for all windows (last date 25 Sep 2026; fee note: net of trading fees, management/performance fees excluded; disclaimer repeated at the bottom of the table card) and five clickable charts: 2007-2009 (three years), 2010-25 Sep 2026, 2020-25 Sep 2026, 2023-25 Sep 2026, 2026 YTD.
  - Closing observation-only disclaimer.
  - Appendix: additional windows of the backtest, with charts for the earliest window (1 January 1960 to end-1963) and the single calendar years 2020 and 2022.
- Pod Strategy charts were converted from R-generated PDFs in `/home/marco/Desktop/projects/trading/pods/LgNav64/` using `pdftoppm -png -r 200` (page 1). Note: those PDFs each contain 67 identical pages (R graphics artifact); PDF attachments cannot be read directly by the assistant, so on-disk copies are converted to PNG first.
- Chart values for reference (100 euros at each start date): 1960-63 DAX 105.06 / Pod 208.17 (avg 0.19); 2007-09 90.31 / 305.38 (0.22); 2010-Sep 2026 426.5 / 1173.37 (0.22); 2020-Sep 2026 191.78 / 218.25 (0.21); 2020 calendar year DAX 103.55 / Pod 111.42 (avg 0.20); 2022 calendar year DAX 87.65 / Pod 101.24 (avg 0.26); 2023-Sep 2026 182.49 / 149.63 (0.20); 2026 YTD 103.75 / 105.24 (0.20).
- Vercel auto-deploy succeeded for all Pod Strategy commits; live site at `https://mmb-advisers.com/pod-strategy`.
- Two-factor authentication enabled on the Vercel account; recovery codes stored outside the repo.
- README site structure and asset lists updated for the Pod Strategy page.
- One-pager source (`public/downloads/mmb-advisers-onepager.tex`) revised: header now includes "For professional investors only"; headline reworded to "flags high-risk windows before a drawdown"; hypothetical family-office illustration commented out; hedge-overlay bullet now notes that sizing and execution are the PM's decision. PDF recompiled from the updated source.
- One Pager web page (`app/onepager/page.tsx`) updated to match the revised PDF: header now includes "For professional investors only"; headline changed to "flags high-risk windows before a drawdown"; hedge-overlay bullet updated; hypothetical family-office illustration removed; footer updated to the longer FCA-authorisation disclaimer.

## Today's activity

- Verified the two Pod Strategy appendix charts (2020 and 2022 calendar years) against the images supplied in this session.
- Confirmed the supplied images are byte-for-byte identical to the existing files in `public/images/PodStrategy2020.png` and `public/images/PodStrategy2022.png`; no source or asset changes were required.
- `npm run lint` and `npm run build` both pass.

## Latest Commits

- `9dc7834` - content: refine Pod Strategy intro phrasing on advisory focus
- `0b30d4e` - content: add table disclaimer and precise end dates on Pod Strategy page
- `8de8863` - content: add Pod Strategy appendix, summary table and copy updates
- `1e716ec` - content: add 2023 and 2026 backtest charts to Pod Strategy page
- `8856e77` - content: add backtest charts and rewrite Pod Strategy page
- `29f5b5c` - feat: add Pod Strategy page before About in navigation
- `b2beebd` - content: add European Doctoral Programme to One Pager credentials
- `c2e323a` - content: update One Pager eyebrow to ONE PAGER (28 Sep 2026)
- `7b5fafd` - docs: clean up session notes for One Pager changes

## Files Recently Changed

- `app/pod-strategy/page.tsx` (updated)
- `app/onepager/page.tsx` (updated)
- `components/nav.tsx`
- `README.md`
- `nextsession.md`
- `public/images/PodStrategy20072009.png`, `PodStrategy20102026.png`, `PodStrategy20202026.png`, `PodStrategy20232026.png`, `PodStrategy2026.png`, `PodStrategy19601963.png`, `PodStrategy2020.png`, `PodStrategy2022.png`
- `public/downloads/mmb-advisers-onepager.tex` and `mmb-advisers-onepager.pdf` (revised and recompiled)

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

1. Confirm the latest Vercel deployment remains stable and no new build errors appear.
2. Verify the Pod Strategy page intro phrasing ("...on their portfolios by focusing on a very small number of key decisions during the course of the year") and the major-index applicability wording (SPX, NDX, Nikkei 225, India NIFTY 50).
3. Decide whether to commit/ignore the remaining local `images/` changes.
4. If contact form should send emails, implement backend handling (currently UI-only form).
