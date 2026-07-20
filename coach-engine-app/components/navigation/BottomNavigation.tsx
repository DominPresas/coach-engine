import {
  ChartNoAxesCombined,
  CircleUserRound,
  Goal,
  House,
  ScrollText,
} from "lucide-react";

const items = [
  { label: "Home", icon: House },
  { label: "Coach Book", icon: ScrollText },
  { label: "Analytics", icon: ChartNoAxesCombined },
  { label: "Goals", icon: Goal },
  { label: "Profile", icon: CircleUserRound },
];

export function BottomNavigation() {
  return (
    <nav className="sticky bottom-0 mt-6 rounded-[24px] border border-white/10 bg-zinc-950/80 p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.95)] backdrop-blur-xl">
      <ul className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.label === "Home";

          return (
            <li key={item.label}>
              <button
                className={`flex w-full flex-col items-center gap-1 rounded-[18px] px-2 py-2 text-[10px] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-[0_10px_30px_-18px_rgba(255,255,255,0.8)]"
                    : "text-zinc-400 hover:-translate-y-0.5 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
