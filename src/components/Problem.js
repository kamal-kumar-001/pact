const problems = [
  {
    title: "Habits collapse",
    body: "The initial burst of willpower fades and routines fall apart.",
  },
  {
    title: "Motivation is fragile",
    body: "Life gets messy, and motivation rarely survives the chaos.",
  },
  {
    title: "No real consequences",
    body: "Without stakes, promises to yourself are easy to ignore.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
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
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
              <span className="text-lg">◎</span>
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
