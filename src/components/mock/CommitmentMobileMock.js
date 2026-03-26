import IphoneFrame from "./IphoneFrame";

const tabs = [
  { label: "Home" },
  { label: "Squad" },
  { label: "Mentor" },
  { label: "Leaderboard" },
  { label: "Profile" },
];

export default function CommitmentMobileMock() {
  return (
    <IphoneFrame>
      <div className="flex min-h-[640px] flex-col gap-4 bg-gradient-to-b from-[#0f172a] via-[#0b0f1c] to-[#0a0c16] px-5 pb-6 pt-10 text-white">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>9:41 AM</span>
          <span>Commitment</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Create pact
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Choose your commitment
          </h3>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Goal
            </p>
            <p className="mt-2 text-sm text-gray-200">Wake up at 6 AM</p>
            <p className="mt-1 text-xs text-gray-400">Daily · 14 days</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Penalty amount
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-2xl font-semibold text-white">₹500</span>
              <span className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-200">
                Locked
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Destination
            </p>
            <div className="mt-3 grid gap-2">
              {[
                "Friend",
                "Charity",
                "Anti-Goal Organization",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center justify-between rounded-xl border px-3 py-2 text-xs uppercase tracking-[0.2em] ${
                    index === 0
                      ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                      : "border-white/10 bg-black/40 text-gray-200"
                  }`}
                >
                  <span>{item}</span>
                  <span>{index === 0 ? "✔" : ""}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            If you fail, funds will be transferred automatically.
          </div>
        </div>

        <button className="mt-auto rounded-2xl bg-gradient-to-r from-emerald-400 to-sky-400 px-4 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(52,211,153,0.35)] transition hover:scale-[1.01]">
          Confirm Pact
        </button>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/50 px-4 py-3">
          <div className="grid grid-cols-5 text-center text-[10px] uppercase tracking-[0.25em] text-gray-400">
            {tabs.map((tab) => (
              <div key={tab.label}>{tab.label}</div>
            ))}
          </div>
        </div>
      </div>
    </IphoneFrame>
  );
}
