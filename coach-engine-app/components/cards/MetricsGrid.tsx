import { MetricCard } from "@/components/cards/MetricCard";

type MetricItem = {
  label: string;
  value: string;
};

type MetricsGridProps = {
  items: MetricItem[];
};

export function MetricsGrid({ items }: MetricsGridProps) {
  return (
    <section className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <MetricCard key={item.label} label={item.label} value={item.value} />
      ))}
    </section>
  );
}
