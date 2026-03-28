import IphoneFrame from "./IphoneFrame";

export default function CommitmentMobileMock() {
  return (
    <IphoneFrame>
      <div className="flex min-h-[640px] flex-col gap-4 bg-gradient-to-b from-[#0f172a] via-[#0b0f1c] to-[#0a0c16] px-5 pb-6 pt-10 text-white">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>9:41 AM</span>
          <span>Recovery</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Recovery mission
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Restore your streak
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">
            Missed: Morning Run Pact
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Complete this recovery within 24 hours.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Recovery challenge
          </p>
          <p className="mt-2 text-sm text-gray-200">
            30-minute incline walk + proof upload
          </p>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div className="h-2 w-[40%] rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Grace tokens
          </p>
          <p className="mt-2 text-sm text-gray-200">
            1 token remaining this month.
          </p>
        </div>

        <button className="mt-auto rounded-2xl bg-gradient-to-r from-emerald-400 to-sky-400 px-4 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(52,211,153,0.35)] transition hover:scale-[1.01]">
          Start Recovery
        </button>
      </div>
    </IphoneFrame>
  );
}
