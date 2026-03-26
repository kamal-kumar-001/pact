import IphoneFrame from "./IphoneFrame";

const leaders = [
  { rank: 1, name: "Ishaan", streak: 31, score: 92 },
  { rank: 2, name: "Sana", streak: 27, score: 89 },
  { rank: 3, name: "Dev", streak: 25, score: 87 },
  { rank: 4, name: "Leila", streak: 22, score: 84 },
];

const tabs = [
  { label: "Home" },
  { label: "Squad" },
  { label: "Mentor" },
  { label: "Leaderboard", active: true },
  { label: "Profile" },
];

export default function LeaderboardMobileMock() {
  return (
    <IphoneFrame>
      <div className="flex min-h-[640px] flex-col gap-4 bg-gradient-to-b from-[#0f172a] via-[#0b0f1c] to-[#0a0c16] px-5 pb-6 pt-10 text-white">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>9:41 AM</span>
          <span>Rankings</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Leaderboard
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Consistency ranks
            </h3>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 p-1 text-[10px] uppercase tracking-[0.2em] text-gray-400">
            <button className="rounded-full bg-white px-3 py-1 text-black">
              Public
            </button>
            <button className="rounded-full px-3 py-1">Private</button>
          </div>
        </div>

        <div className="space-y-3">
          {leaders.map((leader) => (
            <div
              key={leader.rank}
              className="rounded-2xl border border-white/10 bg-white/5 p-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs">
                    {leader.rank}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {leader.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      Streak {leader.streak} days
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                  {leader.score}
                </span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-emerald-400/80"
                  style={{ width: `${leader.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto rounded-2xl border border-white/10 bg-black/50 px-4 py-3">
          <div className="grid grid-cols-5 text-center text-[10px] uppercase tracking-[0.25em] text-gray-400">
            {tabs.map((tab) => (
              <div
                key={tab.label}
                className={tab.active ? "text-emerald-300" : ""}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </IphoneFrame>
  );
}
