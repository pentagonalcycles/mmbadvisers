import Link from "next/link";

export default function OnePagerPage() {
  return (
    <div>
      {/* Header band mirroring the one-pager PDF */}
      <section className="bg-[#1B3A5C] py-10 text-white">
        <div className="container max-w-5xl">
          <h1
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            TP DATES CP
          </h1>
          <p className="mt-2 text-sm/relaxed text-white/90 md:text-base">
            Turning Point Dates for Capital Protection · Tail risk advisory for family offices and institutional investors
          </p>
          <p className="mt-2 text-sm text-[#C9A84C]">
            MMB Advisers Ltd · London · www.mmb-advisers.com · For professional investors only
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-5xl space-y-10">
          {/* Headline + downloads */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="eyebrow">ONE PAGER (28 Sep 2026)</p>
              <h2
                className="mt-2 text-3xl md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Protecting capital against market meltdowns
              </h2>
              <p className="mt-4 max-w-2xl text-[var(--muted)]">
                An ex-ante tail risk service that flags high-risk windows{" "}
                <strong>before</strong> a drawdown, not after, so they can act in
                an orderly way instead of reacting under pressure.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href="/downloads/mmb-advisers-onepager.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#1B3A5C] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* The Problem */}
          <div className="card">
            <h3
              className="text-xl font-bold text-[#1B3A5C]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Problem
            </h3>
            <div className="mt-2 h-0.5 w-full bg-[#C9A84C]" />
            <p className="mt-4 text-[var(--muted)]">
              Upside participation remains attractive, but valuations are stretched, leadership is
              concentrated in a handful of mega-caps, and geopolitical shocks arrive with little warning.
              Most risk tools are reactive: they confirm the damage after it has happened. And losses compound:
            </p>
            <div className="mt-4 rounded-lg bg-[#F5F5F5] p-4 text-center text-sm font-semibold text-[var(--text)]">
              a <strong>-20%</strong> drawdown needs <strong>+25%</strong> to recover; a{" "}
              <strong>-50%</strong> drawdown needs <strong>+100%</strong>.
            </div>
          </div>

          {/* The Solution */}
          <div className="card">
            <h3
              className="text-xl font-bold text-[#1B3A5C]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Solution
            </h3>
            <div className="mt-2 h-0.5 w-full bg-[#C9A84C]" />
            <p className="mt-4 text-[var(--muted)]">
              Each year MMB publishes, in advance, a calendar of{" "}
              <strong>12 candidate turning-point dates</strong> grouped into two or three high-risk
              windows. The calendar is set at the end of the prior year and{" "}
              <strong>not revised</strong> (±1 day). Four proprietary indicators (built on behavioural
              greed–fear cycles and machine learning) cross-check each window; conviction is highest
              where they agree.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-[var(--muted)]">
              <li>
                Hedge overlay via liquid futures and options,{" "}
                <strong>up to three times a year</strong>; sizing and execution are the PM&apos;s
                decision
              </li>
              <li>
                No liquidation of core long-term holdings (unless specifically preferred by the PM)
              </li>
            </ul>
          </div>

          {/* The Evidence */}
          <div className="card">
            <h3
              className="text-xl font-bold text-[#1B3A5C]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Evidence
            </h3>
            <div className="mt-2 h-0.5 w-full bg-[#C9A84C]" />
            <p className="mt-4 text-sm italic text-[var(--muted)]">
              Live forecasts: the 2026 calendar was published at the end of 2025.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1B3A5C] text-left text-white">
                    <th className="px-3 py-2 font-semibold">2026 window</th>
                    <th className="px-3 py-2 font-semibold">Dates</th>
                    <th className="px-3 py-2 font-semibold">What happened</th>
                    <th className="px-3 py-2 font-semibold">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#F5F5F5]">
                    <td className="px-3 py-3 align-top">Q1 · Period 3</td>
                    <td className="px-3 py-3 align-top">26 Feb – 25 Mar</td>
                    <td className="px-3 py-3 align-top">
                      Tariff-driven correction: S&P 500 c. -10%, DAX -13.6%
                    </td>
                    <td className="px-3 py-3 align-top font-semibold text-green-700">Captured</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-3 py-3 align-top">Q2 · Period 2</td>
                    <td className="px-3 py-3 align-top">18 Jun – 19 Jul</td>
                    <td className="px-3 py-3 align-top">
                      Modest dip in the S&P 500 (-3.2%); sharper falls in the Nasdaq 100 (c. -10%) and KOSPI (c. -30%)
                    </td>
                    <td className="px-3 py-3 align-top font-semibold text-[#E65100]">
                      Timing right; size varied by market
                    </td>
                  </tr>
                  <tr className="bg-[#F5F5F5]">
                    <td className="px-3 py-3 align-top">Q4 · Period 1</td>
                    <td className="px-3 py-3 align-top">24 Oct – 30 Nov</td>
                    <td className="px-3 py-3 align-top">
                      Flagged by the Dial, RF Oscillator and heatmap; November viewed as particularly severe
                    </td>
                    <td className="px-3 py-3 align-top font-semibold text-[#1B3A5C]">
                      Highest conviction: ahead
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-[var(--muted)]">
              <strong>Back-tests:</strong> flagged the 2020 COVID crash window and the 2025 tariff
              correction (S&P 500 -21%). In 2022 the model caught the Q1 and September declines but{" "}
              <strong>missed the April–June fall</strong>; that limit is disclosed and has not been
              fitted away.
            </p>
          </div>

          {/* Bottom: Who + CTA */}
          <div className="grid gap-6 md:grid-cols-[1.6fr_1fr]">
            <div className="card">
              <h3
                className="text-xl font-bold text-[#1B3A5C]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Who Is Behind It
              </h3>
              <div className="mt-2 h-0.5 w-full bg-[#C9A84C]" />
              <p className="mt-4 font-semibold text-[var(--text)]">
                Marco Bianchi, PhD · Founder, MMB Advisers Ltd
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--muted)]">
                <li>
                  30+ years in quantitative research and risk management; PhD in Statistics &
                  Econometrics, London School of Economics (European Doctoral Programme)
                </li>
                <li>
                  Former Bank of England, Barclays Capital (Director) and Citi (VP); co-manager of a
                  $250M long/short European equity fund at Thames River Capital
                </li>
                <li>
                  Eurohedge Award winner (2003) and runner-up (2006) for systematic strategies:{" "}
                  <strong>20% return / 0.50% max drawdown</strong> (Newman & Ragazzi, 2003);{" "}
                  <strong>18.82% / 2.04%</strong> (Thames River, 2006)
                </li>
                <li>
                  Published in the <em>American Economic Review</em>,{" "}
                  <em>Journal of Applied Econometrics</em> and{" "}
                  <em>Journal of Business & Economic Statistics</em>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-start">
              <div className="rounded-2xl bg-[#1B3A5C] p-6 text-white">
                <p className="font-bold text-[#C9A84C]">NEXT STEP</p>
                <p className="mt-3 text-sm leading-relaxed">
                  Request a confidential briefing, including the current Q4 2026 outlook.
                </p>
                <p className="mt-3 text-sm">Full methodology and track record</p>
                <p className="mt-4 font-semibold">
                  <a
                    href="https://www.mmb-advisers.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.mmb-advisers.com
                  </a>
                </p>
                <p className="mt-1 text-sm">
                  <a href="mailto:marco@mmb-advisers.com" className="hover:underline">
                    marco@mmb-advisers.com
                  </a>
                </p>
                <p className="mt-1 text-sm">
                  <a href="tel:+447505181967" className="hover:underline">
                    +44 7505 181967
                  </a>
                </p>
                <div className="mt-5">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-[#C9A84C] px-5 py-2.5 text-sm font-semibold text-[#1B3A5C] shadow-sm transition hover:opacity-90"
                  >
                    Request a briefing
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs leading-relaxed text-[#666666]">
            MMB Advisers Ltd, registered in England & Wales (No. 07722496). MMB Advisers is not
            authorised or regulated by the Financial Conduct Authority. Its research is general and
            impersonal, is provided on the same basis to all subscribers, does not take account of
            any recipient&apos;s circumstances and does not constitute a personal recommendation.
            Hedging, sizing and execution decisions remain with the client and its regulated
            advisers. For professional investors only; not for retail clients. This document is for
            information only. Back-tested and illustrative results are hypothetical and do not
            represent actual client outcomes. Past performance is not a guide to future results.
          </p>
        </div>
      </section>
    </div>
  );
}
