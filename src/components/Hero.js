"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ProofUploadMock from "./mock/ProofUploadMock";
import DashboardMobileMock from "./mock/DashboardMobileMock";
import SquadMobileMock from "./mock/SquadMobileMock";
import AIMentorMobileMock from "./mock/AIMentorMobileMock";
import CommitmentMobileMock from "./mock/CommitmentMobileMock";

const previews = [
  { title: "Proof upload", component: <ProofUploadMock /> },
  { title: "Enforcement warning", component: <DashboardMobileMock /> },
  { title: "Accountability graph", component: <SquadMobileMock /> },
  { title: "AI analysis cards", component: <AIMentorMobileMock /> },
  { title: "Recovery missions", component: <CommitmentMobileMock /> },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = previews.length;
  const touchStartX = useRef(null);
  const touchMoveX = useRef(null);
  const autoTimer = useRef(null);

  const current = previews[activeIndex];
  const nextIndex = (activeIndex + 1) % total;
  const next = previews[nextIndex];

  const dots = useMemo(() => Array.from({ length: total }), [total]);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(autoTimer.current);
  }, [total]);

  const handlePointerDown = (event) => {
    touchStartX.current = event.clientX;
    touchMoveX.current = null;
  };

  const handlePointerMove = (event) => {
    if (touchStartX.current == null) return;
    touchMoveX.current = event.clientX;
  };

  const handlePointerUp = () => {
    if (touchStartX.current == null || touchMoveX.current == null) return;
    const deltaX = touchStartX.current - touchMoveX.current;
    const threshold = 40;
    if (deltaX > threshold) goNext();
    if (deltaX < -threshold) goPrev();
    touchStartX.current = null;
    touchMoveX.current = null;
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl animate-glow" />
        <div className="absolute right-[-120px] top-24 h-[320px] w-[320px] rounded-full bg-emerald-500/20 blur-3xl animate-glow-delayed" />
        <div className="absolute bottom-[-200px] left-10 h-[360px] w-[360px] rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gray-400">
            Discipline enforcement system
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Stop Tracking Habits. Start Proving Them.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl">
              PACT enforces the promises you make to yourself.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200 animate-pulse-soft"
              href="/join"
            >
              Make Your First Pact
            </a>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
              No proof. No excuses. No loopholes.
            </div>
          </div>
          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            {[
              "Proof of Work",
              "Automatic Enforcement",
              "Real Accountability",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-col flex items-center justify-center">
          <div className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-gray-400">
            {current.title}
          </div>
          <div
            className="relative flex justify-center touch-pan-y"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div className="relative z-10 animate-float transition hover:scale-[1.02]">
              {current.component}
            </div>
            <div className="pointer-events-none absolute right-0 top-8 hidden w-[70%] translate-x-10 scale-[0.92] opacity-70 blur-[1.5px] lg:block">
              {next.component}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {dots.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === activeIndex
                    ? "bg-emerald-300"
                    : "bg-white/20"
                }`}
                aria-label={`Go to preview ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
