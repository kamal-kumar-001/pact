import IphoneFrame from "./IphoneFrame";

const messages = [
  {
    role: "ai",
    text: "Your consistency dropped this week. Let’s correct it today.",
    time: "08:04",
  },
  {
    role: "user",
    text: "I missed two mornings. I’m slipping.",
    time: "08:06",
  },
  {
    role: "ai",
    text: "Recommend reducing goal difficulty by 10% and shifting check-in to 6:30 AM.",
    time: "08:07",
  },
];

const tabs = [
  { label: "Home" },
  { label: "Squad" },
  { label: "Mentor", active: true },
  { label: "Leaderboard" },
  { label: "Profile" },
];

export default function AIMentorMobileMock() {
  return (
    <IphoneFrame>
      <div className="flex min-h-[640px] flex-col gap-4 bg-gradient-to-b from-[#0f172a] via-[#0b0f1c] to-[#0a0c16] px-5 pb-6 pt-10 text-white">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>9:41 AM</span>
          <span>Mentor Online</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            AI Mentor
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Accountability thread
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
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-gray-200">
            <div className="flex items-center gap-1">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="h-2 w-2 rounded-full bg-emerald-400/80"
                  style={{ animation: "pulse 1.5s ease-in-out infinite", animationDelay: `${dot * 0.2}s` }}
                />
              ))}
            </div>
            <span>Mentor is typing</span>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Daily analysis
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-200">
              Morning focus improved 12% after earlier bedtime prompts.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Consistency score
            </p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-2xl font-semibold text-white">78</span>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                /100
              </span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-2 w-[78%] rounded-full bg-indigo-400/80" />
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
