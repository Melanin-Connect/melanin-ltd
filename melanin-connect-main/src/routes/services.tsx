import { createFileRoute } from "@tanstack/react-router";

import { HeroActions } from "@/components/HeroActions";
import { ArrowUpRightIcon } from "@/components/icons";
import { ServicesOverview } from "@/components/ServicesOverview";
import { images, pageHead } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Services | Melanin Connect",
      description:
        "Explore AI automation, business analytics, and secure blockchain payment solutions.",
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
        className="relative min-h-100 bg-cover bg-center bg-no-repeat pt-20 pb-12 sm:min-h-125 sm:pt-24 sm:pb-16 md:pt-28 md:pb-24"
        style={{ backgroundImage: `url("${images.heroServices}")` }}
        role="img"
        aria-label="AI technology and digital interface representing advanced business solutions"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h1 className="mx-auto max-w-3xl px-2 font-geist text-2xl leading-tight font-medium tracking-tighter text-white sm:text-3xl sm:leading-tight md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              All-in-One AI and Blockchain Platform for Business Growth
            </h1>
            <p className="mx-auto mt-3 max-w-2xl px-4 font-geist text-sm text-white/90 sm:mt-4 sm:text-base md:mt-6 md:text-lg">
              Automated tools, secure blockchain payments, personalized solutions, and comprehensive
              analytics—all designed to help your business grow while you focus on what matters
              most.
            </p>
            <HeroActions />
          </div>
        </div>
      </section>

      <section className="pt-8 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl bg-linear-to-br from-gray-50 to-white px-3 py-4 sm:rounded-2xl sm:px-4 sm:py-6 md:rounded-3xl md:px-6 md:py-10 lg:p-14">
            <div className="mb-6 sm:mb-8">
              <p className="mb-2 font-geist text-[10px] font-light tracking-widest text-gray-500 uppercase sm:mb-3 sm:text-[11px] md:text-xs">
                Case Studies
              </p>
              <h2 className="font-geist text-xl font-light tracking-tighter text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
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
                  <div className="flex aspect-video items-center justify-center overflow-hidden bg-linear-to-br from-pink-50 to-pink-100">
                    <div className="p-4 text-center sm:p-6">
                      <div className="text-3xl font-bold text-brand sm:text-4xl">{study.stat}</div>
                      <div className="font-geist text-xs text-gray-600 sm:text-sm">
                        {study.statLabel}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="mb-1 font-geist text-sm font-semibold text-gray-900 sm:mb-2 sm:text-base">
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
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 p-0 transition-colors hover:bg-gray-700"
                      >
                        <ArrowUpRightIcon className="h-3.5 w-3.5 text-white" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
    </main>
  );
}
