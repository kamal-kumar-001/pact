import PactLogo from "./PactLogo";

export default function Navbar() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "Community", href: "#community" },
    { label: "AI Mentor", href: "#ai-mentor" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.35)]">
            <PactLogo className="h-4 w-4" />
          </span>
          PACT
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-200 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-gray-200 transition hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-emerald-300 after:shadow-[0_0_12px_rgba(52,211,153,0.6)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-5 py-2 text-sm font-semibold text-black shadow-[0_0_20px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5 md:inline-flex animate-pulse-soft"
            href="/join"
          >
            Join Pact
          </a>
          <a
            className="rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-4 py-2 text-xs font-semibold text-black shadow-[0_0_20px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5 md:hidden animate-pulse-soft"
            href="/join"
          >
            Join Pact
          </a>
        </div>
      </nav>
    </header>
  );
}
