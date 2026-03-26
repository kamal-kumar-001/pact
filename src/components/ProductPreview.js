"use client";

import { motion } from "framer-motion";
import DashboardMobileMock from "./mock/DashboardMobileMock";
import AIMentorMobileMock from "./mock/AIMentorMobileMock";
import SquadMobileMock from "./mock/SquadMobileMock";
import LeaderboardMobileMock from "./mock/LeaderboardMobileMock";
import CommitmentMobileMock from "./mock/CommitmentMobileMock";

const previews = [
  {
    title: "Command your day in one dashboard",
    description:
      "See every commitment, track streaks, and spot penalties before they hit. Pact keeps your promises visible and urgent.",
    component: <DashboardMobileMock />,
  },
  {
    title: "An AI mentor that calls you out",
    description:
      "Daily analysis, accountability messaging, and adaptive difficulty to keep you honest when motivation fades.",
    component: <AIMentorMobileMock />,
  },
  {
    title: "Squads that make quitting expensive",
    description:
      "Join focused groups with shared goals, public streaks, and real social pressure.",
    component: <SquadMobileMock />,
  },
  {
    title: "Leaderboards that reward consistency",
    description:
      "Track public or private rankings with streaks and consistency scores that feel impossible to ignore.",
    component: <LeaderboardMobileMock />,
  },
  {
    title: "Commitment contracts with real stakes",
    description:
      "Lock a penalty and make the consequence real. Pact turns intention into action.",
    component: <CommitmentMobileMock />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductPreview() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_60%)]" />
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          Product preview
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          See the pact experience before launch.
        </h2>
      </div>

      <div className="mt-12 space-y-20">
        {previews.map((preview, index) => (
          <motion.div
            key={preview.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className={`grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] ${
              index % 2 === 1 ? "lg:grid-cols-[1.1fr_1fr]" : ""
            }`}
          >
            <div
              className={`space-y-4 ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-white">
                {preview.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-200">
                {preview.description}
              </p>
              <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Pact preview
              </div>
            </div>
            <motion.div
              className={`animate-float ${index % 2 === 1 ? "lg:order-1" : ""}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              {preview.component}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
