import IphoneFrame from "./IphoneFrame";

const members = ["AS", "RH", "MN", "KB", "JL"];

const tabs = [
  { label: "Home" },
  { label: "Squad", active: true },
  { label: "Mentor" },
  { label: "Leaderboard" },
  { label: "Profile" },
];

export default function SquadMobileMock() {
  return (
    <IphoneFrame>
      <div className="flex min-h-[640px] flex-col gap-4 bg-gradient-to-b from-[#0f172a] via-[#0b0f1c] to-[#0a0c16] px-5 pb-6 pt-10 text-white">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>9:41 AM</span>
          <span>Squad Live</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Squad
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            GATE 2027 Warriors
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {members.map((initials) => (
            <div
              key={initials}
              className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs"
            >
              {initials}
            </div>
          ))}
          <span className="text-xs text-gray-400">12 members</span>
        </div>

        <div className="grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Shared goal
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-200">
              120 minutes of focused study daily
            </p>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-2 w-[76%] rounded-full bg-emerald-400/80" />
            </div>
            <p className="mt-2 text-xs text-gray-400">76% completion</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Group streak
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-white">14</span>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                days
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[conic-gradient(#38bdf8_0deg,#38bdf8_240deg,rgba(255,255,255,0.1)_240deg)] p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0b0f1c] text-xs font-semibold">
                  68%
                </div>
              </div>
              <p className="text-xs text-gray-400">Challenge progress</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Countdown
            </p>
            <div className="mt-3 flex items-center justify-between text-sm text-gray-200">
              <span>Challenge ends in</span>
              <span className="font-semibold text-white">6d 04h</span>
            </div>
          </div>
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
