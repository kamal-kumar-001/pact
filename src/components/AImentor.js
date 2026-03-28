export default function AImentor() {
  return (
    <section
      id="ai-mentor"
      className="relative mx-auto w-full max-w-6xl px-6 py-20"
    >
      <div className="absolute left-10 top-10 -z-10 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-black/40 to-black/80 p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-gray-400">
              <span>Adaptive AI Mentor</span>
            </div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              AI That Learns Your Failure Patterns.
            </h2>
            <p className="text-base leading-relaxed text-gray-200">
              It detects your weak days, adjusts difficulty automatically, and
              recommends behavioral strategy changes that keep you executing.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Detects weak days",
                  body: "Flags patterns before they become misses.",
                },
                {
                  title: "Adaptive difficulty",
                  body: "Lowers the load when failure risk spikes.",
                },
                {
                  title: "Strategy shifts",
                  body: "Suggests new routines and triggers.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/40 p-5"
                >
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-200">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>AI Insight</span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-300">
                Live
              </span>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold text-white">
                  "You fail most on Sundays. Recommend lighter pact."
                </div>
                <div className="mt-2 text-xs text-gray-400">Pattern detection</div>
              </div>
              {[
                "Weak day detected · Sun",
                "Difficulty adjusted · -15%",
                "Strategy shift deployed",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="h-10 w-10 rounded-full border border-white/10 bg-white/10" />
                  <div className="text-sm text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
