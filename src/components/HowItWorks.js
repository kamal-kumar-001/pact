const recoverySteps = [
  {
    title: "Grace Tokens",
    body: "Earn limited passes to absorb rare misses without losing momentum.",
    accent: "from-emerald-400/30 via-emerald-400/10 to-transparent",
  },
  {
    title: "Recovery Missions",
    body: "Fail once, unlock a challenge that restores your streak.",
    accent: "from-sky-400/30 via-sky-400/10 to-transparent",
  },
  {
    title: "Controlled forgiveness",
    body: "PACT forgives only if you prove recovery behavior.",
    accent: "from-indigo-400/30 via-indigo-400/10 to-transparent",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="recovery"
      className="mx-auto w-full max-w-6xl px-6 py-20"
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          Recovery system
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Discipline Without Burnout.
        </h2>
        <p className="text-base leading-relaxed text-gray-200">
          PACT enforces discipline, but it also protects longevity. Fail once,
          prove recovery, and keep executing.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {recoverySteps.map((step) => (
          <div
            key={step.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
            />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-200">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-5">
        <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Recovery flow
        </div>
        <div className="mt-3 flex flex-col gap-2 text-sm text-white">
          <span>User fails → recovery challenge unlocked.</span>
          <span>Complete recovery → streak restored.</span>
        </div>
      </div>
    </section>
  );
}
