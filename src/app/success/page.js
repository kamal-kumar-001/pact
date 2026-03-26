import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Early Access Confirmed
        </p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          You&apos;re officially in the Pact early access.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-200">
          You&apos;ve taken the first step most people never do — committing.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
            Share with friends
          </button>
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
