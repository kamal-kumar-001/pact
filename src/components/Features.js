const features = [
  {
    title: "App blocking until task completion",
    body: "Distractions are locked until your proof is submitted.",
    accent: "from-emerald-400/30 via-emerald-400/10 to-transparent",
  },
  {
    title: "Time-based enforcement triggers",
    body: "PACT escalates when deadlines hit. No delays.",
    accent: "from-sky-400/30 via-sky-400/10 to-transparent",
  },
  {
    title: "Automatic failure if proof missing",
    body: "No proof means an automatic miss — instantly logged.",
    accent: "from-indigo-400/30 via-indigo-400/10 to-transparent",
  },
  {
    title: "Penalty execution engine",
    body: "Failures trigger real consequences immediately.",
    accent: "from-emerald-400/30 via-indigo-400/10 to-transparent",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          Enforcement engine
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          PACT Doesn&apos;t Remind. It Enforces.
        </h2>
        <p className="text-base leading-relaxed text-gray-200">
          Every pact is enforced by automation. No nudges. No loopholes. Just
          execution.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {features.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
            />
            <div className="relative z-10">
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
