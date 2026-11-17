import { CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const journey = [
  "Business problems",
  "AI & automation",
  "Digital products",
  "Payments & commerce",
  "Blockchain & payment infrastructure",
  "Deployment",
  "Growth implementation",
  "Recurring technology services",
];

const outcomes = [
  "Lower operating costs",
  "Automation",
  "Better customer experiences",
  "New revenue channels",
  "Faster processes",
  "Secure transactions",
  "Better data",
  "Scalable digital infrastructure",
];

/** The end-to-end journey from business problem to recurring growth, and what it delivers. */
export function ValueChain() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 sm:py-28" id="journey">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-40 -left-40 h-120 w-120 rounded-full bg-brand/20 blur-[120px]" />
        <div className="absolute -right-40 -bottom-40 h-120 w-120 rounded-full bg-ink-soft blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff14_1px,transparent_1px)] bg-size-[22px_22px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="End to end"
          title="From business problem to recurring growth"
          tone="dark"
        >
          <p>One partner across the whole journey, so every step builds on the last.</p>
        </SectionHeading>

        <ol className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((step, index) => (
            <li key={step}>
              <Reveal delay={index * 60} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:border-brand/60 hover:bg-white/10">
                  <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="font-geist text-sm font-semibold text-brand tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-geist text-base font-medium tracking-tight text-white sm:text-lg">
                    {step}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-14 sm:mt-20">
          <h3 className="font-geist text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            What your business gains
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-center gap-3 font-geist text-white/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {outcome}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
