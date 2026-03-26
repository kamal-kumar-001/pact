const features = [
  {
    title: "Habit Tracker",
    body: "A simple, serious dashboard that turns goals into daily proof.",
  },
  {
    title: "Financial Commitment Contracts",
    body: "Lock money to every habit. If you slip, it funds the mission.",
  },
  {
    title: "Public/Private Leaderboards",
    body: "Compete quietly or loudly. Visibility creates pressure.",
  },
  {
    title: "AI Accountability Mentor",
    body: "Your personal coach that reacts to your patterns in real time.",
  },
  {
    title: "Squads & Group Challenges",
    body: "Move with a crew that keeps you honest and consistent.",
  },
  {
    title: "Anti-Goal Penalty System",
    body: "Break the pact and trigger a penalty you actually feel.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Core features
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Everything you need to keep the promise.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                <span className="text-lg">✦</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.body}</p>
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-500">
              Pact system
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
