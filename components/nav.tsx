import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Service" },
  { href: "/method", label: "Method" },
  { href: "/track-record", label: "Track Record" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  return (
    <header className="border-b border-[var(--line)] bg-[color:var(--surface)]/80 backdrop-blur">
      <div className="container flex flex-wrap items-center justify-between gap-3 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="MMB Advisers logo"
            width={40}
            height={40}
            className="rounded-md border border-[var(--line)]"
          />
          <span className="font-semibold tracking-wide">MMB Advisers</span>
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--text)]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
