import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-2 text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
          Request a confidential briefing
        </h1>
        <div className="mt-6 card space-y-3 text-[var(--muted)]">
          <p>Email: marco@mmb-advisers.com</p>
          <p>Phone: +44 7505 181967</p>
          <p>MMB Advisers Ltd, registered in England & Wales, with company registration number 07722496</p>
        </div>

        <form className="mt-8 card space-y-4" action="#" method="post">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-[var(--muted)]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-[var(--line)] bg-white px-3 py-2 text-[var(--text)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-[var(--muted)]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-[var(--line)] bg-white px-3 py-2 text-[var(--text)]"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-[var(--muted)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-[var(--line)] bg-white px-3 py-2 text-[var(--text)]"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-[var(--accent)] px-5 py-2 font-medium text-white transition hover:opacity-90"
          >
            Send message
          </button>
        </form>

        <div className="mt-8 flex justify-center">
          <a href="/images/logo.png" target="_blank" rel="noopener noreferrer" aria-label="Open logo image">
            <Image src="/images/logo.png" alt="MMB Advisers logo" width={280} height={280} priority />
          </a>
        </div>
      </div>
    </section>
  );
}
