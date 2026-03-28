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

const proofOptions = [
  "Photo",
  "Video",
  "GPS Tracking",
  "Screen Tracking",
  "Manual Check-in Only",
];

const sectionBadge = (label) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gray-400">
    <span className="h-2 w-2 rounded-full bg-emerald-400" />
    {label}
  </div>
);

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
    proofPreference: "",
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
      <div className="relative mx-auto flex w-full max-w-4xl flex-col px-6 py-20">
        <div className="absolute left-1/2 top-8 -z-10 h-48 w-80 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="flex flex-col gap-4">
          {sectionBadge("Pact early access")}
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Reserve your spot in the pact.
          </h1>
          <p className="text-base leading-relaxed text-gray-200">
            Serious founders and professionals are already committing. Answer the
            questions below to join the waitlist.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {["Step 1", "Step 2", "Step 3"].map((step, index) => (
            <div
              key={step}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-xs uppercase tracking-[0.25em] text-gray-200"
            >
              {step}
              <span className="ml-2 text-[10px] text-gray-400">
                {index === 0 ? "Basics" : index === 1 ? "Validation" : "Psych"}
              </span>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(56,189,248,0.08)] sm:p-10"
        >
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.35)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M6 7h12M6 12h12M6 17h8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Basic info</h2>
                <p className="text-sm text-gray-400">
                  Help us tailor your accountability plan.
                </p>
              </div>
            </div>
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
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.35)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M5 12h14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 5v14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Habit struggle validation
                </h2>
                <p className="text-sm text-gray-400">
                  Tell us what keeps slipping.
                </p>
              </div>
            </div>
            <label className="flex flex-col gap-2 text-sm text-gray-200">
              What action do you struggle to prove consistently?
              <textarea
                value={form.habit}
                onChange={(event) => updateField("habit", event.target.value)}
                className="min-h-[120px] rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-white/40"
                placeholder="Example: daily deep work, gym sessions, morning run"
              />
            </label>
            <div className="space-y-2 text-sm text-gray-200">
              <p>How many times have you failed to prove it?</p>
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
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-indigo-300 shadow-[0_0_18px_rgba(129,140,248,0.35)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M7 8h10v8H7z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M9 8V6a3 3 0 0 1 6 0v2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Commitment psychology
                </h2>
                <p className="text-sm text-gray-400">
                  This helps us calibrate your stakes.
                </p>
              </div>
            </div>
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
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.35)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M6 7h12M6 12h12M6 17h8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Feature interest</h2>
                <p className="text-sm text-gray-400">
                  What should we prioritize first?
                </p>
              </div>
            </div>
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
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-indigo-300 shadow-[0_0_18px_rgba(129,140,248,0.35)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M6 12h12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 6v12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Proof preference
                </h2>
                <p className="text-sm text-gray-400">
                  What type of proof would you submit?
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {proofOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition ${
                    form.proofPreference === option
                      ? "border-white/40 bg-white/10 text-white"
                      : "border-white/10 text-gray-400"
                  }`}
                >
                  <span>{option}</span>
                  <input
                    type="radio"
                    name="proofPreference"
                    value={option}
                    checked={form.proofPreference === option}
                    onChange={(event) =>
                      updateField("proofPreference", event.target.value)
                    }
                    className="h-4 w-4 rounded border-white/40 bg-black"
                  />
                </label>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.35)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M6 12h12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 6v12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Your deal-breaker feature
                </h2>
                <p className="text-sm text-gray-400">
                  What makes Pact impossible to quit?
                </p>
              </div>
            </div>
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
