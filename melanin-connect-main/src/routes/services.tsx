import { createFileRoute } from "@tanstack/react-router";

import { AiAgents } from "@/components/AiAgents";
import { HeroActions } from "@/components/HeroActions";
import { ArrowUpRightIcon } from "@/components/icons";
import { Methodology } from "@/components/Methodology";
import { NextSteps } from "@/components/NextSteps";
import { Reveal } from "@/components/Reveal";
import { ServicesOverview } from "@/components/ServicesOverview";
import { ValueChain } from "@/components/ValueChain";
import { images, pageHead } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Services | Melanin Connect",
      description:
        "AI and automation, digital products, digital commerce and blockchain solutions that help businesses lower costs and grow.",
      path: "/services",
    }),
  component: ServicesPage,
});

const caseStudies = [
  {
    stat: "3x",
    statLabel: "ROI Increase",
    title: "E-commerce Business",
    summary: "Reduced operational costs by 30% and increased ROI by 3x in the first quarter",
    category: "ROI Optimization",
  },
  {
    stat: "40%",
    statLabel: "More Customers",
    title: "SaaS Startup",
    summary: "Automated tools brought in 50% more customers with streamlined onboarding",
    category: "Customer Growth",
  },
  {
    stat: "15hrs",
    statLabel: "Saved/Week",
    title: "Digital Agency",
    summary: "Saved 15 hours per week on manual tasks, allowing focus on client work",
    category: "Time Savings",
  },
];

function ServicesPage() {
  return (
    <main>
      <section
        className="relative isolate flex min-h-120 items-center bg-cover bg-center bg-no-repeat pt-28 pb-16 sm:min-h-150 sm:pt-32 sm:pb-20 md:pb-28"
        style={{ backgroundImage: `url("${images.heroServices}")` }}
        role="img"
        aria-label="AI technology and digital interface representing advanced business solutions"
      >
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-ink/75 via-ink/60 to-ink/85" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-3xl text-center">
            <p className="mb-5 inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-geist text-xs font-medium text-white/90 backdrop-blur sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Our services
            </p>
            <h1
              className="mx-auto max-w-3xl animate-character-reveal px-2 font-geist text-4xl leading-[1.05] font-semibold tracking-tighter text-balance text-white sm:text-5xl md:text-6xl"
              style={{ animationDelay: "0.1s" }}
            >
              AI, automation and blockchain <span className="text-brand">built for growth</span>
            </h1>
            <p
              className="mx-auto mt-5 max-w-2xl animate-character-reveal px-4 font-geist text-base text-pretty text-white/85 sm:mt-6 sm:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Melanin Connect helps businesses automate operations, build intelligent digital
              products and modernise digital commerce with AI, automation and blockchain technology.
            </p>
            <div className="animate-character-reveal" style={{ animationDelay: "0.45s" }}>
              <HeroActions secondary="audit" />
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <AiAgents />
      <ValueChain />
      <Methodology />

      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-xl bg-linear-to-br from-gray-50 to-white px-3 py-4 sm:rounded-2xl sm:px-4 sm:py-6 md:rounded-3xl md:px-6 md:py-10 lg:p-14">
            <div className="mb-6 sm:mb-8">
              <p className="mb-2 font-geist text-[10px] font-light tracking-widest text-gray-500 uppercase sm:mb-3 sm:text-[11px] md:text-xs">
                Case Studies
              </p>
              <h2 className="font-geist text-xl font-light tracking-tighter text-ink sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Success Stories
              </h2>
              <p className="mt-2 font-geist text-sm text-gray-600 sm:mt-3 sm:text-base md:mt-4 md:text-lg lg:text-xl">
                Real results from businesses using our platform
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <article
                  key={study.title}
                  className="group overflow-hidden rounded-2xl bg-linear-to-br from-gray-50 to-white transition-colors sm:rounded-3xl"
                >
                  <div className="flex aspect-video items-center justify-center overflow-hidden bg-linear-to-br from-brand-soft to-orange-100">
                    <div className="p-4 text-center sm:p-6">
                      <div className="text-3xl font-bold text-brand sm:text-4xl">{study.stat}</div>
                      <div className="font-geist text-xs text-gray-600 sm:text-sm">
                        {study.statLabel}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="mb-1 font-geist text-sm font-semibold text-ink sm:mb-2 sm:text-base">
                      {study.title}
                    </h3>
                    <p className="font-geist text-xs text-gray-600 sm:text-sm">{study.summary}</p>
                    <div className="mt-3 flex items-center justify-between sm:mt-4">
                      <span className="font-geist text-xs text-brand sm:text-sm">
                        {study.category}
                      </span>
                      <button
                        type="button"
                        aria-label={`Read the ${study.title} case study`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-ink p-0 transition-colors hover:bg-brand"
                      >
                        <ArrowUpRightIcon className="h-3.5 w-3.5 text-white" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <NextSteps />
    </main>
  );
}
