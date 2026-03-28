export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            About Pact
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Pact is built for people who are tired of breaking promises to
            themselves.
          </h1>
          <p className="text-base leading-relaxed text-gray-200">
            PACT is a discipline enforcement system. It turns goals into
            contracts and demands proof before anything counts. Accountability
            is real because consequences are real.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold text-white">The Idea</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-200">
              PACT combines proof verification, enforcement triggers, and AI
              pattern detection to keep execution brutal and consistent. You
              define a pact, choose your stakes, and PACT enforces the outcome.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Real stakes",
                "Social pressure",
                "AI accountability",
                "Focused squads",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-gray-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/60 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-emerald-300 shadow-[0_0_22px_rgba(52,211,153,0.35)]">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
                  <path
                    d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M6 19c1.4-2.4 3.6-3.6 6-3.6s4.6 1.2 6 3.6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Kamal</h3>
                <p className="text-sm text-gray-200">
                  Founder · Product + Frontend
                </p>
                <p className="text-xs text-gray-400">mrkamal0120@gmail.com</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-200">
              I&apos;m building PACT for people who want execution, not motivation.
              If you have ideas, feedback, or want early access, reach out
              anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
