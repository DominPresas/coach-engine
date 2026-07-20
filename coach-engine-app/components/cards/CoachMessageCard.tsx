import { SurfaceCard } from "@/components/ui/SurfaceCard";

type CoachMessageCardProps = {
  message?: string;
};

export function CoachMessageCard({
  message = "Today's patience becomes tomorrow's speed.",
}: CoachMessageCardProps) {
  return (
    <SurfaceCard className="border border-white/10 bg-white/[0.04]">
      <p className="text-[17px] leading-8 text-zinc-200">{message}</p>
    </SurfaceCard>
  );
}
