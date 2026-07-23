import Image from "next/image";
import { siteContent } from "@/content/site";

export default function TrackRecordPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <p className="eyebrow">Track Record Examples</p>
        <h1 className="mt-2 text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
          Historical windows identified ex-ante
        </h1>
        <div className="mt-6 space-y-4">
          {siteContent.timeline.map((item) => (
            <article key={item.year} className="card">
              <p className="text-lg font-semibold">{item.year}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.detail}</p>
              {item.dialImage && item.chartImage && (
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <a href={item.dialImage} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.dialImage}
                      alt={`TP Dates candidates — ${item.year}`}
                      width={400}
                      height={400}
                      className="h-auto w-full rounded-md border border-[var(--line)] transition hover:opacity-80"
                    />
                  </a>
                  <a href={item.chartImage} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.chartImage}
                      alt={`Price tracking at TP Dates clusters — ${item.year}`}
                      width={400}
                      height={400}
                      className="h-auto w-full rounded-md border border-[var(--line)] transition hover:opacity-80"
                    />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-[var(--muted)]">{siteContent.disclaimer}</p>
      </div>
    </section>
  );
}
