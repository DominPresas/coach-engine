type SurfaceCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className = "" }: SurfaceCardProps) {
  return (
    <section
      className={`rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-5 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.04)_inset] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 ${className}`}
    >
      {children}
    </section>
  );
}
