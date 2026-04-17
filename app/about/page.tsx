export default function AboutPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <p className="eyebrow">About</p>
        <h1 className="mt-2 text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
          Marco Bianchi, PhD
        </h1>
        <div className="mt-6 space-y-4 text-[var(--muted)]">
          <p>
            30+ years in quantitative research and systematic trading across institutional environments, including roles at Barclays Capital, Citi, and the Bank of England.
          </p>
          <p>
            Former co-manager of a 250M USD long/short European equities fund and recipient of Eurohedge recognition for systematic strategies.
          </p>
          <p>
            Current focus is capital protection advisory for long-only and multi-asset investors exposed to major drawdown risk.
          </p>
        </div>
      </div>
    </section>
  );
}
