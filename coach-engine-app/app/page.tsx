import { AppHeader } from "@/components/dashboard/AppHeader";
import { CoachMessageCard } from "@/components/cards/CoachMessageCard";
import { HeroCoachCard } from "@/components/cards/HeroCoachCard";
import { MetricsGrid } from "@/components/cards/MetricsGrid";
import { WorkoutCard } from "@/components/cards/WorkoutCard";
import { BottomNavigation } from "@/components/navigation/BottomNavigation";

const metrics = [
  { label: "Readiness", value: "86" },
  { label: "Fatigue", value: "31%" },
  { label: "Sleep", value: "7h42" },
  { label: "Weight", value: "87.0 kg" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] px-4 py-5 text-white">
      <div className="mx-auto flex max-w-sm flex-col gap-4 pb-24">
        <AppHeader title="Coach Engine" subtitle="Road to Sub37" countdown="82 days remaining" />

        <HeroCoachCard />

        <WorkoutCard />

        <MetricsGrid items={metrics} />

        <CoachMessageCard />

        <BottomNavigation />
      </div>
    </main>
  );
}
