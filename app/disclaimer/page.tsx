export default function DisclaimerPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-2 text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
          Disclaimer
        </h1>

        <div className="mt-6 space-y-6 text-[var(--muted)]">
          <h2 className="text-lg font-semibold text-[var(--text)]">Nature of the service</h2>
          <p>
            The work carried out by MMB Advisers is of a technical, quantitative, and mathematical nature. It involves the research, development, and communication of systematic risk indicators, turning-point date estimates, and related analytics. Any outputs, reports, charts, tables, or written materials are derived from statistical and machine-learning models and are presented as research observations only.
          </p>

          <h2 className="text-lg font-semibold text-[var(--text)]">No regulated investment advice</h2>
          <p>
            MMB Advisers is not authorised or regulated by the Financial Conduct Authority (FCA) and does not provide regulated investment advice, financial advice, or tax advice. Nothing on this website, and no report, communication, or advisory deliverable produced by MMB Advisers, constitutes a personal recommendation, an invitation, or an inducement to enter into any transaction.
          </p>

          <h2 className="text-lg font-semibold text-[var(--text)]">Client discretion and decision-making</h2>
          <p>
            Any investment, hedging, or trading decision — including whether to act on, partially act on, or ignore any information provided by MMB Advisers — is made entirely at the discretion of the recipient, whether a member of the public or a professional or institutional investor. Recipients are responsible for their own due diligence, risk assessment, and compliance with applicable laws, regulations, and internal governance requirements.
          </p>

          <h2 className="text-lg font-semibold text-[var(--text)]">No liability for losses or profits</h2>
          <p>
            MMB Advisers, its director, and any associated parties accept no liability for any losses, damages, costs, or expenses arising directly or indirectly from the use of, reliance on, or failure to act on any information provided. Equally, MMB Advisers does not claim responsibility for, or entitlement to, any profits or gains that may result from decisions taken by recipients.
          </p>

          <h2 className="text-lg font-semibold text-[var(--text)]">Past observations and model limitations</h2>
          <p>
            Historical examples, backtests, case studies, and past turning-point date performance are presented for illustrative and research purposes only. They are not a guarantee of future outcomes. The models used by MMB Advisers have limitations, may produce false signals, and may not perform as expected in all market conditions.
          </p>

          <h2 className="text-lg font-semibold text-[var(--text)]">Seek independent professional advice</h2>
          <p>
            Anyone considering investment or hedging actions should seek advice from an appropriately authorised and qualified professional adviser.
          </p>
        </div>
      </div>
    </section>
  );
}
