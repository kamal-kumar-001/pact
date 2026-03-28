import IphoneFrame from "./IphoneFrame";

export default function DashboardMobileMock() {
  return (
    <IphoneFrame>
      <div className="flex min-h-[640px] flex-col gap-4 bg-gradient-to-b from-[#0f172a] via-[#0b0f1c] to-[#0a0c16] px-5 pb-6 pt-10 text-white">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>9:41 AM</span>
          <span>Enforcement</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Enforcement warning
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Proof missing
          </h3>
        </div>

        <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm text-amber-200">
          No proof submitted. Failure triggers in 22:18.
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">Deep Work Pact</p>
          <p className="mt-1 text-xs text-gray-400">
            App blocking enforced until proof is verified.
          </p>
          <div className="mt-4 rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-gray-200">
            Productivity apps locked · 2 remaining
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Penalty engine
          </p>
          <p className="mt-2 text-sm text-gray-200">
            Automatic failure if proof is missing at deadline.
          </p>
        </div>

        <div className="mt-auto rounded-2xl border border-white/10 bg-black/50 px-4 py-3">
          <div className="grid grid-cols-5 text-center text-[10px] uppercase tracking-[0.25em] text-gray-400">
            {[
              "Home",
              "Proof",
              "Mentor",
              "Graph",
              "Profile",
            ].map((tab, index) => (
              <div key={tab} className={index === 0 ? "text-emerald-300" : ""}>
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </IphoneFrame>
  );
}
