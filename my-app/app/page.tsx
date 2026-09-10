import BackgroundStars from "@/components/BackgroundStars";
import BirthdayHero from "@/components/BirthdayHero";
import BirthdayMessage from "@/components/BirthdayMessage";
import BirthdayWishes from "@/components/BirthdayWishes";
import Memories from "@/components/Memories";
import BirthdaySurprise from "@/components/BirthdaySurprise";
import FinalMessage from "@/components/FinalMessage";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between selection:bg-pink-500/30 selection:text-white">
      {/* Ambient background particles & lighting */}
      <BackgroundStars />

      {/* Main birthday experience flow */}
      <div className="flex-1 flex flex-col space-y-12 sm:space-y-20">
        <BirthdayHero />
        <BirthdayMessage />
        <BirthdayWishes />
        <Memories />
        <BirthdaySurprise />
        <FinalMessage />
      </div>
    </main>
  );
}
