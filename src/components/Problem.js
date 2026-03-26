const problems = [
  {
    title: "Habits collapse",
    body: "The initial burst of willpower fades and routines fall apart.",
    accent: "from-emerald-400/25 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M6 12h12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 6v12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Motivation is fragile",
    body: "Life gets messy, and motivation rarely survives the chaos.",
    accent: "from-sky-400/25 to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M6 15c2-3 4-4 6-4s4 1 6 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 8h10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "No real consequences",
    body: "Without stakes, promises to yourself are easy to ignore.",
    accent: "from-indigo-400/25 to-transparent",
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

export default function Problem() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          The real problem
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Most people know what to do. They just stop doing it.
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {problems.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20"
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
          </div>
        ))}
      </div>
    </section>
  );
}
