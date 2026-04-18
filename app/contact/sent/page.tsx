export default function ContactSentPage({
  searchParams,
}: {
  searchParams?: { status?: string };
}) {
  const isSuccess = searchParams?.status !== "invalid";

  return (
    <section className="section">
      <div className="container max-w-2xl">
        <div className="card space-y-4">
          <p className="eyebrow">Contact</p>
          <h1 className="text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
            {isSuccess ? "Message sent" : "Message not sent"}
          </h1>
          <p className="text-[var(--muted)]">
            {isSuccess
              ? "Thank you. Your enquiry has been received and will be reviewed shortly."
              : "Please complete all fields and submit the form again."}
          </p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-[var(--accent)] px-5 py-2 font-medium text-white transition hover:opacity-90"
          >
            Back to contact form
          </a>
        </div>
      </div>
    </section>
  );
}
