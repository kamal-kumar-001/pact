const features = [
  {
    title: "Habit Tracker",
    body: "A simple, serious dashboard that turns goals into daily proof.",
    accent: "from-emerald-400/30 via-emerald-400/10 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M5 6h14v12H5z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 10h8M8 14h5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Financial Commitment Contracts",
    body: "Lock money to every habit. If you slip, it funds the mission.",
    accent: "from-sky-400/30 via-sky-400/10 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M7 6h10v12H7z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 9h6M9 12h6M9 15h4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Public/Private Leaderboards",
    body: "Compete quietly or loudly. Visibility creates pressure.",
    accent: "from-indigo-400/30 via-indigo-400/10 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M6 18V10M12 18V6M18 18v-8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "AI Accountability Mentor",
    body: "Your personal coach that reacts to your patterns in real time.",
    accent: "from-emerald-400/30 via-sky-400/10 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M7 8h10v6H7z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 16h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Squads & Group Challenges",
    body: "Move with a crew that keeps you honest and consistent.",
    accent: "from-sky-400/30 via-indigo-400/10 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <circle cx="8" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4 18c1.5-2 4-3 6-3s4.5 1 6 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Anti-Goal Penalty System",
    body: "Break the pact and trigger a penalty you actually feel.",
    accent: "from-indigo-400/30 via-emerald-400/10 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 5v14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 10h10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          Core features
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Everything you need to keep the promise.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
            />
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-white shadow-[0_0_24px_rgba(56,189,248,0.2)]">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-200">
                {item.body}
              </p>
            </div>
            <div className="relative z-10 mt-6 text-xs uppercase tracking-[0.2em] text-gray-400">
              Pact system
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
