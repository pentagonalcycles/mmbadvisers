import Image from "next/image";

const keyFacts = [
  { label: "Instrument", value: "DAX cash index" },
  { label: "Approach", value: "Fully automated trading strategy" },
  { label: "Trading frequency", value: "Approximately 3 trades per week" },
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
            clients to obtain improved risk-adjusted returns on their portfolios, this page
            reports instead the results of a backtest of a fully automated trading strategy
            applied to the DAX cash index.
          </p>
          <p>
            The TP Dates CP (Turning Point Dates for Capital Protection) model aims at
            identifying ex-ante the three or four situations in each calendar year when to
            &ldquo;pull the trigger&rdquo; in relation to protecting the portfolio against the
            eventuality of important market declines. The Pod Strategy, by contrast, has a much
            higher trading frequency, of approximately 3 trades per week.
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
            In backtest, the strategy has performed well in bear markets. That profile is
            structural rather than accidental. The strategy runs an average net exposure of
            approximately 20% net long, whereas the benchmark is 100% net long at all times and
            is therefore intrinsically much more risky. A permanently fully invested position
            absorbs the full force of every important market decline; the strategy is, on
            average, only lightly exposed on the long side, and it may move anywhere within a
            range that extends to 100% net short.
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
      </div>
    </section>
  );
}
