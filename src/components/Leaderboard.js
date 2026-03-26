const leaders = [
  { name: "Evelyn", streak: 28 },
  { name: "Marcus", streak: 24 },
  { name: "Riya", streak: 21 },
  { name: "Cole", streak: 19 },
];

export default function Leaderboard() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Leaderboards
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Turn progress into public proof.
          </h2>
          <p className="text-base leading-relaxed text-gray-200">
            Keep it private for focus or go public for accountability. Every streak
            is visible, every miss is clear.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Leaderboard</span>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 p-1 text-xs">
              <button className="rounded-full bg-white px-3 py-1 text-black">
                Public
              </button>
              <button className="rounded-full px-3 py-1 text-gray-400">
                Private
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {leaders.map((leader, index) => (
              <div
                key={leader.name}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs text-white">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {leader.name}
                    </div>
                    <div className="text-xs text-gray-400">Momentum track</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-emerald-300">
                  {leader.streak} day streak
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
