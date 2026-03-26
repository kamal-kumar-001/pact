export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-white">pact</div>
        <div className="flex flex-wrap gap-6">
          <a className="transition hover:text-white" href="#">
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
        <div className="text-xs text-gray-400">© 2026 pact. All rights reserved.</div>
      </div>
    </footer>
  );
}
