const keyFacts = [
  { label: "Instrument", value: "DAX cash index" },
  { label: "Approach", value: "Fully automated trading strategy" },
  { label: "Trading frequency", value: "Approximately 3 trades per week" },
  { label: "Positioning range", value: "From 100% net short to 120% net long" }
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
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {keyFacts.map((fact) => (
            <div key={fact.label} className="card">
              <p className="text-sm font-semibold">{fact.label}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{fact.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4 text-[var(--muted)]">
          <p>
            The positioning of the strategy is restricted to the range from 100% net short to
            120% net long.
          </p>
          <p>
            The strategy has been backtested since the year 1960, but only the results for the
            most recent years are presented.
          </p>
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
