import IphoneFrame from "./IphoneFrame";

export default function ProofUploadMock() {
  return (
    <IphoneFrame>
      <div className="flex min-h-[600px] flex-col gap-4 bg-gradient-to-b from-[#0f172a] via-[#0b0f1c] to-[#0a0c16] px-5 pb-6 pt-10 text-white">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>9:41 AM</span>
          <span>Proof Upload</span>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Proof of work
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Upload verification
          </h3>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">Gym Pact</p>
          <p className="mt-1 text-xs text-gray-400">
            Submit photo or GPS proof within 30 min.
          </p>
          <div className="mt-4 rounded-xl border border-dashed border-white/20 bg-black/50 px-4 py-6 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.35)]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M12 5v14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M5 12h14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="mt-3 text-xs text-gray-200">Tap to upload proof</p>
          </div>
        </div>
        <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
          Deadline in 18:24. No proof = auto-fail.
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
              <div key={tab} className={index === 1 ? "text-emerald-300" : ""}>
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </IphoneFrame>
  );
}
