export default function ServicePage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <p className="eyebrow">Service</p>
        <h1 className="mt-2 text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
          TP Dates CP advisory overlay
        </h1>
        <div className="mt-6 space-y-4 text-[var(--muted)]">
          <p>
            The challenge: 95% of the risk tools available out there are reactive --- they tell you AFTER the damage.
          </p>
          <p>
            The service we provide places ourselves in the 5% tail.
          </p>
          <p>
            TP Dates CP (Turning Point Dates for Capital Protection) is a risk management advisory service designed to identify time windows EX-ANTE with elevated market crash risk and support minimal-intervention protective hedging.
          </p>
          <p>
            The service integrates into existing institutional workflows through daily or weekly custom reports, preserving long-term portfolio construction while improving crisis readiness.
          </p>
          <p>
            Typical overlay implementation cadence is capped and deliberate, using futures and options when risk conditions align.
          </p>
        </div>
      </div>
    </section>
  );
}
