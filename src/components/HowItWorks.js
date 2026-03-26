const steps = [
  {
    title: "Commit to a goal",
    body: "Choose a habit with a clear, measurable finish line.",
  },
  {
    title: "Attach a consequence",
    body: "Set the financial or social stake that keeps you honest.",
  },
  {
    title: "Execute or pay",
    body: "Finish the streak or trigger the penalty. No excuses.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-6xl px-6 py-20"
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          How it works
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          A three-step pact that keeps you moving.
        </h2>
      </div>
      <div className="mt-12">
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index !== steps.length - 1 && (
                <div className="absolute right-[-12px] top-8 h-px w-full bg-gradient-to-r from-white/40 to-transparent" />
              )}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-3 text-sm font-semibold text-zinc-400">
                  Step {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-6 md:hidden">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 text-sm font-semibold text-zinc-400">
                Step {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
