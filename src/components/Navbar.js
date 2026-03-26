export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          pact
        </a>
        <div className="hidden items-center gap-8 text-sm text-zinc-200 md:flex">
          <a className="transition hover:text-white" href="#features">
            Features
          </a>
          <a className="transition hover:text-white" href="#community">
            Community
          </a>
          <a className="transition hover:text-white" href="#ai-mentor">
            AI Mentor
          </a>
          <a
            className="rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-white/40 hover:bg-white/10"
            href="#waitlist"
          >
            Join Waitlist
          </a>
        </div>
        <a
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/10 md:hidden"
          href="#waitlist"
        >
          Join Waitlist
        </a>
      </nav>
    </header>
  );
}
