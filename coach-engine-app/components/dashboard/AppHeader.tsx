type AppHeaderProps = {
  title?: string;
  subtitle?: string;
  countdown?: string;
};

export function AppHeader({
  title = "Coach Engine",
  subtitle = "Road to Sub37",
  countdown = "82 days remaining",
}: AppHeaderProps) {
  return (
    <header className="flex items-start justify-between gap-4 pb-2 pt-1">
      <div className="space-y-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-zinc-500">
          {title}
        </p>
        <h1 className="text-[28px] font-semibold leading-none tracking-[-0.04em] text-white">
          {subtitle}
        </h1>
      </div>

      <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-medium tracking-[0.18em] text-zinc-300 shadow-[0_10px_30px_-18px_rgba(255,255,255,0.4)]">
        {countdown}
      </div>
    </header>
  );
}
