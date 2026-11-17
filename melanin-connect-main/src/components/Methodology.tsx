import { CodeIcon, LayersIcon, SearchIcon, TrendingUpIcon, ZapIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  { icon: SearchIcon, title: "Discover", description: "Understand the business problem." },
  { icon: LayersIcon, title: "Design", description: "Develop the technology strategy." },
  { icon: CodeIcon, title: "Build", description: "Create the product or infrastructure." },
  { icon: ZapIcon, title: "Automate", description: "Integrate AI and automation." },
  { icon: TrendingUpIcon, title: "Scale", description: "Optimise and expand." },
];

export function Methodology() {
  return (
    <section className="bg-white py-20 sm:py-28" id="methodology">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our methodology"
          title={
            <>
              Discover. Design. Build. <span className="text-brand">Automate. Scale.</span>
            </>
          }
          align="center"
        >
          <p>
            Five clear steps take you from a business problem to a solution that keeps growing with
            you.
          </p>
        </SectionHeading>

        <div className="relative mt-12 sm:mt-16">
          {/* Connecting line: vertical on small screens, horizontal on large. */}
          <div
            className="absolute top-7 bottom-7 left-7 w-px bg-linear-to-b from-brand via-brand/40 to-brand/10 lg:right-[10%] lg:bottom-auto lg:left-[10%] lg:h-px lg:w-auto lg:bg-linear-to-r"
            aria-hidden="true"
          />
          <ol className="relative grid grid-cols-1 lg:grid-cols-5 lg:gap-6">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <li key={title} className="relative">
                <Reveal delay={index * 110}>
                  <div className="flex items-start gap-5 pb-8 lg:flex-col lg:items-center lg:pb-0 lg:text-center">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-white shadow-lg shadow-ink/20 ring-4 ring-white transition duration-300 hover:-translate-y-1 hover:bg-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="pt-1 lg:pt-0">
                      <p className="font-geist text-xs font-semibold tracking-widest text-brand-dark tabular-nums">
                        STEP {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 font-geist text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                        {title}
                      </h3>
                      <p className="mt-1 font-geist text-sm leading-relaxed text-gray-600 sm:text-base">
                        {description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
