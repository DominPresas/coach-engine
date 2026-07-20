import { Clock3, HeartPulse } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

type WorkoutCardProps = {
  title?: string;
  duration?: string;
  targetHr?: string;
};

export function WorkoutCard({
  title = "Threshold",
  duration = "58 min",
  targetHr = "150–168 bpm",
}: WorkoutCardProps) {
  return (
    <SurfaceCard className="space-y-6">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-zinc-500">
          Today’s workout
        </p>
        <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-white">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <Clock3 size={14} />
            <span className="text-[10px] font-medium uppercase tracking-[0.26em]">
              Duration
            </span>
          </div>
          <p className="mt-3 text-lg font-semibold text-white">{duration}</p>
        </div>

        <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <HeartPulse size={14} />
            <span className="text-[10px] font-medium uppercase tracking-[0.26em]">
              Target HR
            </span>
          </div>
          <p className="mt-3 text-lg font-semibold text-white">{targetHr}</p>
        </div>
      </div>
    </SurfaceCard>
  );
}
