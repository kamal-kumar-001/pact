const steps = [
  {
    title: "Commit to a goal",
    body: "Choose a habit with a clear, measurable finish line.",
    accent: "from-emerald-400/30 via-emerald-400/10 to-transparent",
    glow: "shadow-[0_0_40px_rgba(52,211,153,0.25)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M5 12h14M12 5v14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Attach a consequence",
    body: "Set the financial or social stake that keeps you honest.",
    accent: "from-sky-400/30 via-sky-400/10 to-transparent",
    glow: "shadow-[0_0_40px_rgba(56,189,248,0.25)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M6 8h12v10H6z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 8V6a3 3 0 0 1 6 0v2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Execute or pay",
    body: "Finish the streak or trigger the penalty. No excuses.",
    accent: "from-indigo-400/30 via-indigo-400/10 to-transparent",
    glow: "shadow-[0_0_40px_rgba(129,140,248,0.25)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M7 12l3 3 7-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-6xl px-6 py-20"
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          How it works
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          A three-step pact that keeps you moving.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="relative">
            {index !== steps.length - 1 && (
              <div className="absolute right-[-12px] top-10 hidden h-px w-full bg-gradient-to-r from-white/30 to-transparent md:block" />
            )}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
              />
              <div className="relative z-10 flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-white ${step.glow}`}
                >
                  {step.icon}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="relative z-10 mt-4 text-sm leading-relaxed text-gray-200">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
