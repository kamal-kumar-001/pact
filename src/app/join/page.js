"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const occupationOptions = [
  "Student",
  "Working Professional",
  "Founder",
  "Other",
];

const failureOptions = ["<5", "5–10", "10+"];

const riskOptions = ["Yes", "Maybe", "No"];

const maxRiskOptions = [
  "₹50",
  "₹100",
  "₹500",
  "₹1000+",
  "I would not risk money",
];

const motivationOptions = [
  "Losing money",
  "Public accountability",
  "Competition",
  "Rewards",
];

const featureOptions = [
  "AI Mentor",
  "Squads / Accountability Teams",
  "Leaderboards",
  "Financial Commitment Contracts",
  "Community Challenges",
];

export default function JoinPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    occupation: "",
    habit: "",
    failures: "",
    riskMoney: "",
    maxRisk: "",
    motivation: "",
    desiredFeature: "",
    features: [],
  });

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFeature = (feature) => {
    setForm((prev) => {
      const exists = prev.features.includes(feature);
      return {
        ...prev,
        features: exists
          ? prev.features.filter((item) => item !== feature)
          : [...prev.features, feature],
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!form.email || !form.riskMoney || !form.maxRisk || !form.motivation) {
      setError("Please complete the required fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      router.push("/success");
    } catch (err) {
      setError("We couldn't save your response. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col px-6 py-20">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Pact Early Access
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Reserve your spot in the pact.
          </h1>
          <p className="text-base leading-relaxed text-gray-200">
            Serious founders and professionals are already committing. Answer the
            questions below to join the waitlist.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          {[
            { label: "Step 1", active: true },
            { label: "Step 2", active: true },
            { label: "Step 3", active: true },
          ].map((step) => (
            <div
              key={step.label}
              className={`flex-1 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-center ${
                step.active
                  ? "bg-white/10 text-white"
                  : "bg-transparent text-gray-400"
              }`}
            >
              {step.label}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-10 rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10"
        >
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Basic info</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-gray-200">
                Name
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-white/40"
                  placeholder="Your full name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-gray-200">
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-white/40"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-gray-200">
              Occupation
              <select
                value={form.occupation}
                onChange={(event) => updateField("occupation", event.target.value)}
                className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-white/40"
              >
                <option value="">Select one</option>
                {occupationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              Habit struggle validation
            </h2>
            <label className="flex flex-col gap-2 text-sm text-gray-200">
              What habit do you struggle to maintain?
              <textarea
                value={form.habit}
                onChange={(event) => updateField("habit", event.target.value)}
                className="min-h-[120px] rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-white/40"
                placeholder="Example: daily deep work, running, learning a language"
              />
            </label>
            <div className="space-y-2 text-sm text-gray-200">
              <p>How many times have you failed building this habit?</p>
              <div className="flex flex-wrap gap-3">
                {failureOptions.map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                      form.failures === option
                        ? "border-white bg-white/10 text-white"
                        : "border-white/10 text-gray-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="failures"
                      value={option}
                      checked={form.failures === option}
                      onChange={(event) =>
                        updateField("failures", event.target.value)
                      }
                      className="hidden"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              Commitment psychology
            </h2>
            <div className="space-y-3 text-sm text-gray-200">
              <p>Would you risk money to stay accountable?</p>
              <div className="flex flex-wrap gap-3">
                {riskOptions.map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                      form.riskMoney === option
                        ? "border-white bg-white/10 text-white"
                        : "border-white/10 text-gray-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="riskMoney"
                      value={option}
                      checked={form.riskMoney === option}
                      onChange={(event) =>
                        updateField("riskMoney", event.target.value)
                      }
                      className="hidden"
                      required
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-200">
              <p>Maximum amount you would risk per failed commitment?</p>
              <div className="flex flex-wrap gap-3">
                {maxRiskOptions.map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                      form.maxRisk === option
                        ? "border-white bg-white/10 text-white"
                        : "border-white/10 text-gray-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="maxRisk"
                      value={option}
                      checked={form.maxRisk === option}
                      onChange={(event) =>
                        updateField("maxRisk", event.target.value)
                      }
                      className="hidden"
                      required
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-200">
              <p>What motivates you more?</p>
              <div className="flex flex-wrap gap-3">
                {motivationOptions.map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                      form.motivation === option
                        ? "border-white bg-white/10 text-white"
                        : "border-white/10 text-gray-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="motivation"
                      value={option}
                      checked={form.motivation === option}
                      onChange={(event) =>
                        updateField("motivation", event.target.value)
                      }
                      className="hidden"
                      required
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Feature interest</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {featureOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition ${
                    form.features.includes(option)
                      ? "border-white/40 bg-white/10 text-white"
                      : "border-white/10 text-gray-400"
                  }`}
                >
                  <span>{option}</span>
                  <input
                    type="checkbox"
                    checked={form.features.includes(option)}
                    onChange={() => toggleFeature(option)}
                    className="h-4 w-4 rounded border-white/40 bg-black"
                  />
                </label>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              Your deal-breaker feature
            </h2>
            <label className="flex flex-col gap-2 text-sm text-gray-200">
              What feature would make Pact impossible for you to quit?
              <textarea
                value={form.desiredFeature}
                onChange={(event) =>
                  updateField("desiredFeature", event.target.value)
                }
                className="min-h-[140px] rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-white/40"
                placeholder="Tell us the one thing that would lock you in."
              />
            </label>
          </section>

          {error ? (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Reserving..." : "Reserve My Spot"}
          </button>
        </form>
      </div>
    </div>
  );
}
