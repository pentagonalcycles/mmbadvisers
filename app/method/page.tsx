import Image from "next/image";

const charts = [
  {
    title: "The 12 TP Candidate Dates Dial Chart",
    image: "/images/Dial2026.png",
    alt: "TP Dates candidate dial for 2026",
  },
  {
    title: "The RF (Random Forest) Oscillator Chart",
    image: "/images/RFOscillatorChart.png",
    alt: "Random Forest oscillator chart",
  },
  {
    title: "The Horizontal Boxes Heatmap Chart",
    image: "/images/HorizontalBoxesHeatmapChart.png",
    alt: "Horizontal boxes heatmap chart",
  },
  {
    title: "The Special Situations Volatility Trend Reversal Chart",
    image: "/images/SpecialSituationsVolatilityTrendReversalChart.png",
    alt: "Special situations volatility trend reversal chart",
  },
];

export default function MethodPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <p className="eyebrow">Methodology</p>
        <h1 className="mt-2 text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
          High-level model framework
        </h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="card">
            <p className="font-semibold">Data layer</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Behavioral and market-structure indicators quantify greed-fear dynamics across the yearly cycle.
            </p>
          </article>
          <article className="card">
            <p className="font-semibold">Model layer</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              ML and pattern-recognition methods condense broad signal space into candidate turning-point windows.
            </p>
          </article>
          <article className="card">
            <p className="font-semibold">Advisory layer</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Portfolio managers receive clear risk-date outputs and structured hedge overlay guidance.
            </p>
          </article>
        </div>
        <div className="mt-10 space-y-6 text-[var(--muted)]">
          <p>
            Turning Point Dates for Capital Protection (TP Dates CP) is a risk-management
            overlay designed for long-only, long-term institutional investors. The system uses machine
            learning, pattern recognition, and behavioural-finance metrics to distil roughly 250 trading
            days per year into a small set of ex-ante candidate dates on which the probability of a major
            market correction is elevated. These turning-point windows are identified ahead of time,
            are registered and non-revisable (±1 day), and are mapped to corresponding time-based price
            thresholds that act as support/resistance levels.
          </p>
          <p>
            The methodology is rooted in the observation that investor greed and fear generate recurring,
            synchronised cyclical patterns that can be projected forward. Over more than two decades
            of back-testing, the approach has highlighted high-risk periods surrounding the COVID crash
            of 2020, the 2022 bear market, and the 2025 volatility episodes, while also providing opportunistic
            entry signals. The resulting overlay strategy is implemented with minimal intervention—
            typically via liquid futures and options—without liquidating core holdings or incurring major
            transaction costs.
          </p>
          <p>
            We rely on a set of four core proprietary indicators to map out an ex-ante roadmap for the most
            important risk periods faced by stock markets during the course of each calendar year. We have
            therefore a set of 4 core charts, all of which are calculated at the end of each calendar year,
            providing a roadmap view for the risks ahead in the new incoming year.
          </p>
        </div>

        <h2 className="mt-12 text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
          Proprietary Indicator Charts
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {charts.map((chart) => (
            <article key={chart.title} className="card">
              <p className="font-semibold">{chart.title}</p>
              <a
                href={chart.image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block"
                aria-label={`Open ${chart.title} full size`}
              >
                <Image
                  src={chart.image}
                  alt={chart.alt}
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-md border border-[var(--line)] transition hover:opacity-80"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
