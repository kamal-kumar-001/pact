export default function CTA() {
  return (
    <section
      id="waitlist"
      className="relative mx-auto w-full max-w-6xl px-6 py-24"
    >
      <div className="absolute left-1/2 top-10 -z-10 h-36 w-72 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-10 text-center sm:p-14">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Are You Serious About Change?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-200">
          Pact is for people who don&apos;t want another motivational app. Make a real
          commitment and prove it.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/join"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200 animate-pulse-soft"
          >
            Join the Waitlist
          </a>
          <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
            No spam. No excuses.
          </div>
        </div>
      </div>
    </section>
  );
}
