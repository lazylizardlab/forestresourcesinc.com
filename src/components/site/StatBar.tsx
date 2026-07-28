import { RevealStagger } from "@/components/ui/Reveal";

interface StatBarProps {
  stats: { value: string; label: string }[];
  className?: string;
}

/**
 * The dark track-record strip that follows the hero on Home and About. Hairline
 * rules between cells, dropping to a 2×2 block on small screens.
 */
export function StatBar({ stats, className = "" }: StatBarProps) {
  return (
    <section className={`bg-night ${className}`}>
      <RevealStagger className="grid grid-cols-2 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`border-[rgba(240,220,174,.14)] px-6 py-6 sm:px-[30px] ${
              i % 2 === 0 ? "border-r" : ""
            } ${i < stats.length - 1 ? "sm:border-r" : "sm:border-r-0"} ${
              i < 2 ? "border-b sm:border-b-0" : ""
            }`}
          >
            <div className="font-slab text-[30px] uppercase leading-none text-gold sm:text-[36px]">
              {stat.value}
            </div>
            <div className="mt-[7px] font-display text-[11.5px] uppercase tracking-[0.16em] text-dust-4">
              {stat.label}
            </div>
          </div>
        ))}
      </RevealStagger>
    </section>
  );
}
