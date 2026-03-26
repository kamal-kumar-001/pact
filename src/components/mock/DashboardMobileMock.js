import IphoneFrame from "./IphoneFrame";

const habits = [
  { title: "Wake up at 6 AM", streak: 9, status: "On track" },
  { title: "Deep work 90 min", streak: 5, status: "Due today" },
];

const tabs = [
  { label: "Home", active: true },
  { label: "Squad" },
  { label: "Mentor" },
  { label: "Leaderboard" },
  { label: "Profile" },
];

export default function DashboardMobileMock() {
  return (
    <IphoneFrame>
      <div className="flex min-h-[640px] flex-col gap-4 bg-gradient-to-b from-[#0f172a] via-[#0b0f1c] to-[#0a0c16] px-5 pb-6 pt-10 text-white">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>9:41 AM</span>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>5G</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Today
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Keep the pact.
            </h3>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs">
            AR
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Streak
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-semibold">9</span>
              <span className="text-xs text-gray-400">days</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-amber-300">
              <span>🔥</span>
              <span>Personal best</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Progress
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[conic-gradient(#34d399_0deg,#34d399_280deg,rgba(255,255,255,0.1)_280deg)] p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0b0f1c] text-xs font-semibold">
                  78%
                </div>
              </div>
              <p className="text-xs text-gray-400">Weekly completion</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-3 text-sm text-amber-200">
          Upcoming penalty in 2 missed check-ins.
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Today&apos;s habits
          </p>
          {habits.map((habit) => (
            <div
              key={habit.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {habit.title}
                  </p>
                  <p className="text-xs text-gray-400">Streak {habit.streak}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-200">
                  {habit.status}
                </span>
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
