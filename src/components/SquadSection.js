const avatars = ["AR", "JL", "SM", "TK", "VP"];

export default function SquadSection() {
  return (
    <section id="community" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Squads
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Build momentum with people who refuse to let you drift.
            </h2>
            <p className="text-base leading-relaxed text-gray-200">
              Create teams, share goals, and surface your progress. Social pressure
              becomes the fuel that keeps you consistent.
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
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Squad challenge
            </div>
            <div className="mt-4 space-y-4">
              {[
                "5AM deep work sprint",
                "30-day fitness pact",
                "No-scroll evening ritual",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="text-sm text-white">{item}</span>
                  <span className="text-xs text-gray-400">12 members</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
