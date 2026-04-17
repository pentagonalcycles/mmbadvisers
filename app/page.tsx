import Link from "next/link";
import { siteContent } from "@/content/site";

export default function Home() {
  return (
    <div>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="eyebrow">Turning Point Dates Capital Protection</p>
            <h1 className="mt-3 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
              {siteContent.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">{siteContent.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-[var(--accent)] px-5 py-2 text-white">
                Request a confidential briefing
              </Link>
              <Link href="/service" className="rounded-full border border-[var(--line)] px-5 py-2">
                Explore the service
              </Link>
            </div>
          </div>
          <div className="card">
            <p className="eyebrow">Core outcomes</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {siteContent.valuePoints.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--line)] bg-[color:var(--surface)]/60">
        <div className="container">
          <h2 className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            Ex-ante risk intelligence, not reactionary timing
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="card">
              <p className="font-semibold">Without TP Dates CP</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Ex-post decisions, panic-driven execution, larger drawdowns, and costly recovery years.
              </p>
            </article>
            <article className="card">
              <p className="font-semibold">With TP Dates CP</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Pre-identified high-risk windows, orderly hedge overlays, and tighter drawdown control.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
