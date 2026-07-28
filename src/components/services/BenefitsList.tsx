import { RevealStagger } from "@/components/ui/Reveal";
import type { ServiceBenefit } from "@/types";

interface BenefitsListProps {
  benefits: ServiceBenefit[];
}

/** "Why bother" — outcome cards on raised paper. */
export function BenefitsList({ benefits }: BenefitsListProps) {
  return (
    <RevealStagger className="grid gap-4 sm:grid-cols-2">
      {benefits.map((benefit) => (
        <div
          key={benefit.head}
          className="rounded-[10px] border-[2.5px] border-ink bg-cream-3 px-5 py-[18px] shadow-[0_4px_0_rgba(28,21,16,.25)]"
        >
          <div className="mb-1.5 font-slab text-base text-moss">
            {benefit.head}
          </div>
          <p className="text-sm leading-[1.55] text-body-soft">{benefit.body}</p>
        </div>
      ))}
    </RevealStagger>
  );
}
