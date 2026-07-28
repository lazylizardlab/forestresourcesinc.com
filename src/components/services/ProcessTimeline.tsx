import { RevealStagger } from "@/components/ui/Reveal";
import type { ServiceStep } from "@/types";

interface ProcessTimelineProps {
  steps: ServiceStep[];
}

/**
 * "How it goes" — numbered markers straddling a wheat rail. The last step is
 * rust rather than moss so the sequence reads as arriving somewhere.
 */
export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <RevealStagger>
      {steps.map((step, i) => (
        <div
          key={step.title}
          className="ml-[26px] grid grid-cols-[54px_1fr] gap-4 border-l-[3px] border-[#d8c69b] pb-6 sm:gap-5"
        >
          <div
            className={`-ml-[27px] flex size-[54px] items-center justify-center rounded-full border-[3px] border-ink font-slab text-[22px] text-gold ${
              i === steps.length - 1 ? "bg-rust" : "bg-moss"
            }`}
          >
            {i + 1}
          </div>
          <div className="pt-1">
            <div className="mb-[7px] font-slab text-[18px] leading-snug sm:text-[19px]">
              {step.title}
            </div>
            <p className="text-[15.5px] leading-[1.65] text-body">{step.body}</p>
          </div>
        </div>
      ))}
    </RevealStagger>
  );
}
