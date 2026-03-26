export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl animate-glow" />
        <div className="absolute right-[-120px] top-24 h-[320px] w-[320px] rounded-full bg-indigo-500/20 blur-3xl animate-glow-delayed" />
        <div className="absolute bottom-[-200px] left-10 h-[360px] w-[360px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-20">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gray-400">
          Built for ruthless follow-through
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Stop Breaking Promises to Yourself.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl">
            Commit to your goals. Put real stakes on your habits. Become unstoppable.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200 animate-pulse-soft"
            href="/join"
          >
            Join Early Access
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            href="#how-it-works"
          >
            See How It Works
          </a>
        </div>
        {/* <div className="grid gap-6 pt-10 sm:grid-cols-3">
          {[
            { label: "Avg. streak", value: "19 days" },
            { label: "Total commitments", value: "8,214" },
            { label: "On-time payoffs", value: "94%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white"
            >
              <div className="text-sm text-gray-400">{stat.label}</div>
              <div className="text-2xl font-semibold">{stat.value}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
