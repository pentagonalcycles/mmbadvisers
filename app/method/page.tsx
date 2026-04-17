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
      </div>
    </section>
  );
}
