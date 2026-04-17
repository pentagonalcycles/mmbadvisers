export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8 text-sm text-[var(--muted)]">
      <div className="container space-y-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>MMB Advisers, London.</p>
          <p>Risk management advisory for institutional investors.</p>
        </div>
        <p className="text-xs leading-relaxed">
          Legal disclaimer: MMB Advisers is not FCA registered and does not provide regulated investment advice. The content on this website is for information only and does not recommend or advise clients to enter into any specific trade, transaction, or investment action.
        </p>
      </div>
    </footer>
  );
}
