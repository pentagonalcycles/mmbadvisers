import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container max-w-5xl">
        <p className="eyebrow">About</p>
        <h1 className="mt-2 text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
          Marco Bianchi, PhD
        </h1>
        <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="space-y-4 text-[var(--muted)]">
            <p>
              30+ years in quantitative research and risk management across institutional environments, including roles at Barclays Capital, Citi, and the Bank of England.
            </p>
            <p>
              Former co-manager of a 250M USD long/short European equities fund and recipient of Eurohedge recognition for systematic strategies.
            </p>
            <p>
              Current focus is capital protection advisory for long-only and multi-asset investors exposed to major drawdown risk.
            </p>
          </div>
          <figure className="card">
            <a
              href="/images/marco-bianchi-one-pager-bio.png"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="Open Marco Bianchi one-page professional bio in a new tab"
            >
              <Image
                src="/images/marco-bianchi-one-pager-bio.png"
                alt="Marco Bianchi one-page professional bio"
                width={1400}
                height={1980}
                className="h-auto w-full rounded-md border border-[var(--line)] transition hover:opacity-95"
                priority
              />
            </a>
            <figcaption className="mt-3 text-xs text-[var(--muted)]">
              One-page professional bio. Click the image to open full size in a separate tab for easier reading.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
