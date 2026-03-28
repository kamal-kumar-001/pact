import IphoneFrame from "./IphoneFrame";

const messages = [
  {
    role: "ai",
    text: "You fail most on Sundays. Recommend lighter pact.",
    time: "08:04",
  },
  {
    role: "user",
    text: "I can handle that. Adjust it.",
    time: "08:05",
  },
  {
    role: "ai",
    text: "Done. Sunday target reduced by 15%.",
    time: "08:06",
  },
];

export default function AIMentorMobileMock() {
  return (
    <IphoneFrame>
      <div className="flex min-h-[640px] flex-col gap-4 bg-gradient-to-b from-[#0f172a] via-[#0b0f1c] to-[#0a0c16] px-5 pb-6 pt-10 text-white">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>9:41 AM</span>
          <span>AI Insight</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Failure patterns
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Adaptive analysis
          </h3>
        </div>

        <div className="space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[78%] rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-white/10 bg-black/60 text-gray-200"
                }`}
              >
                <p>{message.text}</p>
                <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  {message.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Weak day detected
            </p>
            <p className="mt-2 text-sm text-gray-200">Sunday · 68% fail rate</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Adjustment
            </p>
            <p className="mt-2 text-sm text-gray-200">
              Reduced target by 15% for Sunday.
            </p>
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
              <div key={tab} className={index === 2 ? "text-emerald-300" : ""}>
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </IphoneFrame>
  );
}
