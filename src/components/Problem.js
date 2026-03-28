const proofs = [
  {
    title: "Gym",
    body: "Upload photo, video, or GPS proof.",
    accent: "from-emerald-400/25 to-transparent",
  },
  {
    title: "Study",
    body: "Timer or screen verification required.",
    accent: "from-sky-400/25 to-transparent",
  },
  {
    title: "Running",
    body: "GPS tracking confirms completion.",
    accent: "from-indigo-400/25 to-transparent",
  },
  {
    title: "Deep Work",
    body: "App activity validation enforces focus.",
    accent: "from-emerald-400/20 to-transparent",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          Proof of work
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Proof Beats Motivation
        </h2>
        <p className="text-base leading-relaxed text-gray-200">
          Users don&apos;t track habits. They verify execution. Every pact demands
          proof before it counts.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {proofs.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20"
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
      <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
          <span>Proof upload</span>
          <span className="text-emerald-300">Live verification</span>
        </div>
        <div className="mt-3 h-2 rounded-full bg-white/10">
          <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
        </div>
        <p className="mt-3 text-xs text-gray-200">
          72% of pacts verified in the last 24 hours.
        </p>
      </div>
    </section>
  );
}
