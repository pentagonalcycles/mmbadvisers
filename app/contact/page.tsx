export default function ContactPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-2 text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
          Request a confidential briefing
        </h1>
        <div className="mt-6 card space-y-3 text-[var(--muted)]">
          <p>Email: contact@mmbadvisers.com</p>
          <p>Phone: +44 7505 181967</p>
          <p>
            This draft site is prepared for local review. Replace contact details and legal entity information before public launch.
          </p>
        </div>
      </div>
    </section>
  );
}
