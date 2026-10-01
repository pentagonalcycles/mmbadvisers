import Image from "next/image";

const keyFacts = [
  {
    label: "Instrument",
    value: "DAX cash index (the strategy can be applied to any major index)"
  },
  { label: "Approach", value: "Fully automated trading strategy" },
  { label: "Trading frequency", value: "Slightly less than one trade per day, on average" },
  { label: "Positioning range", value: "From 100% net short to 120% net long" },
  {
    label: "Average net exposure",
    value: "Approximately 20% net long (versus 100% for the benchmark)"
  },
  { label: "Backtest period", value: "Since 1960 (recent years presented below)" }
];

const results = [
  {
    title: "2007\u20132009: three years through the financial crisis",
    image: "/images/PodStrategy20072009.png",
    alt: "Pod Strategy versus DAX cash index, 2007 to 2009",
    description:
      "The first chart follows an investor who commits 100 euros at the beginning of 2007 and remains invested for a period of three years, through the global financial crisis. By the end of 2009 the same 100 euros held in the DAX cash index had fallen back to 90.31, while the Pod Strategy stood at 305.38. The strategy ran an average net exposure of 0.22 over the period, against a benchmark that remained 100% net long throughout.",
  },
  {
    title: "From 1 January 2010 to end-September 2026",
    image: "/images/PodStrategy20102026.png",
    alt: "Pod Strategy versus DAX cash index, 2010 to 2026",
    description:
      "The second chart follows an investor who started with 100 euros on 1 January 2010 and remained invested through to end-September 2026. Over that span the DAX cash index grew the initial 100 euros to 426.5, while the Pod Strategy reached 1173.37, with an average net exposure of 0.22 over the period.",
  },
  {
    title: "From 1 January 2020 to end-September 2026",
    image: "/images/PodStrategy20202026.png",
    alt: "Pod Strategy versus DAX cash index, 2020 to 2026",
    description:
      "The third chart follows an investor who started on 1 January 2020, encompassing the COVID-19 sell-off and the market cycles that followed. By end-September 2026 the DAX cash index stood at 191.78 and the Pod Strategy at 218.25, with an average net exposure of 0.21 over the period.",
  },
  {
    title: "From 1 January 2023 to the fall of 2026",
    image: "/images/PodStrategy20232026.png",
    alt: "Pod Strategy versus DAX cash index, 2023 to 2026",
    description:
      "The fourth chart covers 1 January 2023 to the fall of 2026, a period that has on balance been a rising market for equities. Consistent with the exposure profile described above, the fully invested benchmark outpaced the strategy over this window: 100 euros in the DAX cash index grew to 182.49, while the Pod Strategy reached 149.63 with an average net exposure of 0.2. The lower exposure is visible in the far shallower drawdowns along the blue line.",
  },
  {
    title: "2026 only (year to date)",
    image: "/images/PodStrategy2026.png",
    alt: "Pod Strategy versus DAX cash index, 2026 year to date",
    description:
      "The final chart isolates the 2026 calendar year to date, through end-September. It illustrates the bear-market point in compact form: during the March 2026 decline the benchmark fell to roughly 91, while the strategy\u2019s drawdown was far shallower. As markets recovered the benchmark closed much of the gap, and the period ends with the Pod Strategy modestly ahead at 105.24 versus 103.75 for the DAX cash index, with an average net exposure of 0.2.",
  },
];

const summaryRows = [
  { period: "1960 \u2013 1963 (appendix)", dax: "105.06", pod: "208.17", avg: "0.19" },
  { period: "2007 \u2013 2009 (3 years)", dax: "90.31", pod: "305.38", avg: "0.22" },
  { period: "2010 \u2013 25 Sep 2026", dax: "426.5", pod: "1173.37", avg: "0.22" },
  { period: "2020 \u2013 25 Sep 2026", dax: "191.78", pod: "218.25", avg: "0.21" },
  { period: "2023 \u2013 25 Sep 2026", dax: "182.49", pod: "149.63", avg: "0.20" },
  { period: "2026 \u2013 25 Sep 2026", dax: "103.75", pod: "105.24", avg: "0.20" }
];

export default function PodStrategyPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <p className="eyebrow">Pod Strategy</p>
        <h1 className="mt-2 text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
          A fully automated trading strategy on the DAX cash index
        </h1>

        <div className="mt-6 space-y-4 text-[var(--muted)]">
          <p>
            Whereas all other parts of this website focus on advisory work designed to enable
            clients to obtain improved risk-adjusted returns on their portfolios by focusing on
            a very small number of key targeted decisions during the course of the year, this page
            reports instead the results of a backtest of a fully automated trading strategy
            applied to the DAX cash index. The results presented here are expressed with
            reference to that market, but the strategy is not specific to it: it can be applied
            to any other major index, including the S&amp;P 500 (SPX), the Nasdaq 100 (NDX), the
            Nikkei 225, and India&rsquo;s NIFTY 50, among others.
          </p>
          <p>
            The TP Dates CP (Turning Point Dates for Capital Protection) model aims at
            identifying ex-ante the three or four situations in each calendar year when to
            &ldquo;pull the trigger&rdquo; in relation to protecting the portfolio against the
            eventuality of important market declines. The Pod Strategy, by contrast, has a much
            higher trading frequency, of slightly less than one trade per day, on average.
          </p>
          <p>
            The two therefore cover, to some extent, both extremes of the spectrum: infrequent,
            ex-ante capital-protection triggers at one end, and a higher-frequency, fully
            systematic pod-type strategy at the other.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {keyFacts.map((fact) => (
            <div key={fact.label} className="card">
              <p className="text-sm font-semibold">{fact.label}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{fact.value}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
          Behaviour in bear markets
        </h2>
        <div className="mt-6 space-y-4 text-[var(--muted)]">
          <p>
            In backtest, the strategy has performed well in general but particularly so in
            bear markets. That profile is
            structural rather than accidental. The strategy runs an average net exposure of
            approximately 20% net long, whereas the benchmark is 100% net long at all times and
            is therefore intrinsically much more risky. A permanently fully invested position
            absorbs the full force of every important market decline; the strategy is, on
            average, only lightly exposed on the long side, and it may move anywhere within a
            range that extends to 100% net short. Despite its light average net long exposure,
            the strategy has also shown itself capable of capturing upside movements, aided by
            its ability to detect recurring patterns behind price movements, and has therefore
            achieved a return profile that is highly asymmetrical relative to the exposure
            taken.
          </p>
        </div>

        <h2 className="mt-12 text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
          Backtest results
        </h2>
        <div className="mt-6 space-y-4 text-[var(--muted)]">
          <p>
            The strategy has been backtested since the year 1960; only the results for the most
            recent years are presented here. Each chart below follows a notional investment of
            100 euros placed on the same starting date in the DAX cash index (black line), used
            as the benchmark, and in the Pod Strategy (blue line).
          </p>
          <p>
            All figures shown are net of trading fees. Other fees &mdash; management and
            performance fees, for example &mdash; are excluded.
          </p>
        </div>

        <div className="card mt-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-[var(--muted)]">
                <th className="pb-2 font-semibold">Period</th>
                <th className="pb-2 text-right font-semibold">DAX cash index</th>
                <th className="pb-2 text-right font-semibold">Pod Strategy</th>
                <th className="pb-2 text-right font-semibold">Avg net long</th>
              </tr>
            </thead>
            <tbody>
              {summaryRows.map((row) => (
                <tr key={row.period} className="border-t border-[var(--line)]">
                  <td className="py-2 pr-4">{row.period}</td>
                  <td className="py-2 text-right tabular-nums text-[var(--muted)]">{row.dax}</td>
                  <td className="py-2 text-right font-semibold tabular-nums">{row.pod}</td>
                  <td className="py-2 text-right tabular-nums text-[var(--muted)]">{row.avg}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-[var(--muted)]">
            End-of-period values for a notional 100 euros invested at the start of each period.
            Avg net long is the average net exposure of the strategy over the period. See the
            charts below for the full track record of each window.
          </p>
          <p className="mt-2 text-xs text-[var(--muted)]">
            Backtested results are presented as observations only. They are not guarantees of
            future outcomes, and nothing on this page constitutes a recommendation to deal in
            any instrument or transaction.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {results.map((result) => (
            <article key={result.title} className="card">
              <p className="font-semibold">{result.title}</p>
              <a
                href={result.image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block"
                aria-label={`Open ${result.title} full size`}
              >
                <Image
                  src={result.image}
                  alt={result.alt}
                  width={2337}
                  height={1653}
                  className="h-auto w-full rounded-md border border-[var(--line)] transition hover:opacity-80"
                />
              </a>
              <p className="mt-4 text-sm text-[var(--muted)] text-justify">{result.description}</p>
              <p className="mt-3 text-xs text-[var(--muted)]">
                Black line: DAX cash index benchmark. Blue line: DAX Pod Strategy. Click the
                chart to open it full size in a separate tab.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 space-y-4 text-[var(--muted)]">
          <p>
            Backtested results are presented as observations only. They are not guarantees of
            future outcomes, and nothing on this page constitutes a recommendation to deal in
            any instrument or transaction.
          </p>
        </div>

        <h2 className="mt-12 text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
          Appendix: the earliest years of the backtest
        </h2>
        <div className="mt-6 space-y-4 text-[var(--muted)]">
          <p>
            For completeness, the earliest window of the backtest is presented here as an
            appendix: the strategy has been backtested since 1960, and the chart below follows
            an investor who started on 1 January 1960 and remained invested until the end of
            1963.
          </p>
        </div>
        <div className="mt-8">
          <article className="card">
            <p className="font-semibold">From 1 January 1960 to the end of 1963</p>
            <a
              href="/images/PodStrategy19601963.png"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block"
              aria-label="Open From 1 January 1960 to the end of 1963 full size"
            >
              <Image
                src="/images/PodStrategy19601963.png"
                alt="Pod Strategy versus DAX cash index, 1960 to 1963"
                width={2337}
                height={1653}
                className="h-auto w-full rounded-md border border-[var(--line)] transition hover:opacity-80"
              />
            </a>
            <p className="mt-4 text-sm text-[var(--muted)] text-justify">
              Over those four years the DAX cash index ended at 105.06, while the Pod Strategy
              ended at 208.17, with an average net exposure of 0.19. The window contains the
              1962 bear market, in which the benchmark fell to roughly 75 before recovering
              &mdash; a further illustration of the bear-market behaviour described earlier on
              this page.
            </p>
            <p className="mt-3 text-xs text-[var(--muted)]">
              Black line: DAX cash index benchmark. Blue line: DAX Pod Strategy. Click the
              chart to open it full size in a separate tab.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
