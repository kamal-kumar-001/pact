import PactLogo from "./PactLogo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.35)]">
            <PactLogo className="h-4 w-4" />
          </span>
          PACT
        </div>
        <div className="flex flex-wrap gap-6">
          <a className="transition hover:text-white" href="/about">
            About
          </a>
          <a className="transition hover:text-white" href="#">
            Privacy
          </a>
          <a className="transition hover:text-white" href="#">
            Contact
          </a>
          <a className="transition hover:text-white" href="#">
            Twitter
          </a>
        </div>
        <div className="text-xs text-gray-400">© 2026 PACT. All rights reserved.</div>
      </div>
    </footer>
  );
}
