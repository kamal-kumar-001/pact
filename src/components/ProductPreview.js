"use client";

import { useMemo, useRef, useState } from "react";
import ProofUploadMock from "./mock/ProofUploadMock";
import DashboardMobileMock from "./mock/DashboardMobileMock";
import SquadMobileMock from "./mock/SquadMobileMock";
import AIMentorMobileMock from "./mock/AIMentorMobileMock";
import CommitmentMobileMock from "./mock/CommitmentMobileMock";

const previews = [
  {
    title: "Proof upload",
    description:
      "Every pact requires evidence. Upload photo, video, or GPS proof before the deadline.",
    component: <ProofUploadMock />,
  },
  {
    title: "Enforcement warning",
    description:
      "PACT escalates the moment proof is missing. Failures are automatic.",
    component: <DashboardMobileMock />,
  },
  {
    title: "Accountability graph",
    description:
      "Your trusted circle sees action, misses, and proof in real time.",
    component: <SquadMobileMock />,
  },
  {
    title: "AI analysis cards",
    description:
      "AI detects your weak days and adjusts pact difficulty automatically.",
    component: <AIMentorMobileMock />,
  },
  {
    title: "Recovery missions",
    description:
      "Fail once, unlock a recovery challenge that restores your streak.",
    component: <CommitmentMobileMock />,
  },
];

export default function ProductPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = previews.length;
  const touchStartX = useRef(null);
  const touchMoveX = useRef(null);

  const current = previews[activeIndex];
  const nextIndex = (activeIndex + 1) % total;
  const next = previews[nextIndex];

  const dots = useMemo(() => Array.from({ length: total }), [total]);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchMoveX.current = null;
  };

  const handleTouchMove = (event) => {
    touchMoveX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchMoveX.current == null) return;
    const deltaX = touchStartX.current - touchMoveX.current;
    const threshold = 50;
    if (deltaX > threshold) goNext();
    if (deltaX < -threshold) goPrev();
    touchStartX.current = null;
    touchMoveX.current = null;
  };

  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_60%)]" />
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          Product preview
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          See enforcement in action.
        </h2>
      </div>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">{current.title}</h3>
          <p className="text-base leading-relaxed text-gray-200">
            {current.description}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={goPrev}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white/30"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={goNext}
              className="rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-5 py-2 text-xs uppercase tracking-[0.3em] text-black shadow-[0_0_18px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5"
            >
              Next
            </button>
          </div>
          <div className="flex items-center gap-2 pt-3">
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

        <div
          className="relative flex justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative z-10 animate-float transition hover:scale-[1.02]">
            {current.component}
          </div>
          <div className="pointer-events-none absolute right-0 top-8 hidden w-[70%] translate-x-10 scale-[0.92] opacity-70 blur-[1.5px] lg:block">
            {next.component}
          </div>
        </div>
      </div>
    </section>
  );
}
