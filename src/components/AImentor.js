export default function AImentor() {
  return (
    <section id="ai-mentor" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-black/40 to-black/80 p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              AI mentor
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              A coach that adapts faster than your excuses.
            </h2>
            <p className="text-base leading-relaxed text-gray-200">
              Pact&apos;s AI mentor studies your behavior, adjusts difficulty, and checks in
              daily. It learns which patterns make you quit and interrupts them before
              they spiral.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Adaptive difficulty",
                  body: "Smart escalations that keep you challenged, not crushed.",
                },
                {
                  title: "Daily accountability",
                  body: "Tight check-ins that force you to answer the day.",
                },
                {
                  title: "Behavior analysis",
                  body: "Insights that reveal why you slip and how to fix it.",
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
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Mentor Console</span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-300">
                Active
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {["Morning check-in", "Pattern detected", "Adjustment deployed"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/10" />
                    <div>
                      <div className="text-sm font-semibold text-white">{item}</div>
                      <div className="text-xs text-gray-400">
                        AI prompt delivered
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
