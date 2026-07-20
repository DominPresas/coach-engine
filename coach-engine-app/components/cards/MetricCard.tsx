import { SurfaceCard } from "@/components/ui/SurfaceCard";

type MetricCardProps = {
  label: string;
  value: string;
};

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <SurfaceCard className="space-y-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
        {label}
      </p>
      <p className="text-[26px] font-semibold leading-none tracking-[-0.04em] text-white">
        {value}
      </p>
    </SurfaceCard>
  );
}
