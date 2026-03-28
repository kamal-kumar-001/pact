import IphoneFrame from "./IphoneFrame";

const members = ["AS", "RH", "MN", "KB", "JL"];

export default function SquadMobileMock() {
  return (
    <IphoneFrame>
      <div className="flex min-h-[640px] flex-col gap-4 bg-gradient-to-b from-[#0f172a] via-[#0b0f1c] to-[#0a0c16] px-5 pb-6 pt-10 text-white">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>9:41 AM</span>
          <span>Graph</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Accountability Graph
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Circle: Alpha
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
          <span className="text-xs text-gray-400">5 people</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">
            Rahul missed his pact today.
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Your circle can see this miss.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Daily visibility
          </p>
          <div className="mt-3 space-y-2 text-sm text-gray-200">
            <div className="flex justify-between">
              <span>Anya</span>
              <span className="text-emerald-300">Proof submitted</span>
            </div>
            <div className="flex justify-between">
              <span>Rahul</span>
              <span className="text-amber-300">Missed</span>
            </div>
            <div className="flex justify-between">
              <span>You</span>
              <span className="text-sky-300">Pending</span>
            </div>
          </div>
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
              <div key={tab} className={index === 3 ? "text-emerald-300" : ""}>
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </IphoneFrame>
  );
}
