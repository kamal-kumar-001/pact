import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import AImentor from "../components/AImentor";
import SquadSection from "../components/SquadSection";
import Leaderboard from "../components/Leaderboard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#05060a] text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <AImentor />
        <SquadSection />
        <Leaderboard />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
