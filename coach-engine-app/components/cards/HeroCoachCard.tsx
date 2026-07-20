import { ArrowUpRight } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

type HeroCoachCardProps = {
  greeting?: string;
  bodyLineOne?: string;
  bodyLineTwo?: string;
  buttonLabel?: string;
};

export function HeroCoachCard({
  greeting = "Good morning, Domin.",
  bodyLineOne = "Today we build.",
  bodyLineTwo = "We don't prove.",
  buttonLabel = "View workout",
}: HeroCoachCardProps) {
  return (
    <SurfaceCard className="space-y-7 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),linear-gradient(180deg,#141416_0%,#0a0a0b_100%)]">
      <div className="space-y-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-zinc-500">
          Daily focus
        </p>
        <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.04em] text-white">
          {greeting}
        </h2>
      </div>

      <div className="space-y-1.5 text-[17px] leading-8 text-zinc-300">
        <p>{bodyLineOne}</p>
        <p>{bodyLineTwo}</p>
      </div>

      <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black shadow-[0_16px_40px_-18px_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 active:translate-y-0">
        {buttonLabel}
        <ArrowUpRight size={16} />
      </button>
    </SurfaceCard>
  );
}
