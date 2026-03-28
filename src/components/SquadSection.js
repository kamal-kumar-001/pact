const avatars = ["AR", "JL", "SM", "TK", "VP"];

export default function SquadSection() {
  return (
    <section
      id="community"
      className="relative mx-auto w-full max-w-6xl px-6 py-20"
    >
      <div className="absolute left-1/2 top-10 -z-10 h-40 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-gray-400">
              <span>Accountability Graph</span>
            </div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Small circles. Daily proof. Visible pressure.
            </h2>
            <p className="text-base leading-relaxed text-gray-200">
              Trusted circles of 2–5 people see each other&apos;s actions daily. The
              pressure is real because the proof is public.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {avatars.map((initials) => (
                <div
                  key={initials}
                  className="-ml-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xs font-semibold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-[0_0_40px_rgba(56,189,248,0.1)]">
            <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Live signals
            </div>
            <div className="mt-4 space-y-4">
              {[
                "Rahul missed his pact today.",
                "Anya uploaded proof at 6:12 AM.",
                "Kiran failed to submit proof.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="text-sm text-white">{item}</span>
                  <span className="text-xs text-gray-400">just now</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
