import { createFileRoute } from "@tanstack/react-router";

import { AiAgents } from "@/components/AiAgents";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { HeroActions } from "@/components/HeroActions";
import { Methodology } from "@/components/Methodology";
import { NextSteps } from "@/components/NextSteps";
import { ProblemsSection } from "@/components/ProblemsSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { Testimonials } from "@/components/Testimonials";
import { ValueChain } from "@/components/ValueChain";
import { WhoWeServe } from "@/components/WhoWeServe";
import { images, pageHead } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Melanin Connect Ltd | Build Smarter. Automate Faster. Grow Digitally.",
      description:
        "Melanin Connect Ltd helps businesses transform operations and create scalable digital products using AI, automation and next-generation technology.",
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <section className="relative isolate min-h-svh w-full overflow-hidden bg-ink">
        <div
          className="absolute inset-0 -z-10 scale-105 animate-fade-in bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${images.heroHome}")` }}
          role="img"
          aria-label="Human and AI collaboration representing technology partnership"
        />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-b from-ink/70 via-ink/55 to-ink/85"
          aria-hidden="true"
        />

        <div className="flex min-h-svh w-full items-center pt-20 pb-12 sm:pt-24">
          <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mx-auto mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-geist text-xs font-medium text-white/90 backdrop-blur sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              AI · Automation · Digital commerce
            </p>
            <AnimatedHeadline
              className="mx-auto max-w-5xl px-2 font-geist text-4xl leading-[1.05] font-semibold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
              lines={[
                { text: "Build Smarter.", startDelay: 0.2 },
                { text: "Automate Faster.", startDelay: 0.55, className: "mt-1 sm:mt-2" },
                {
                  text: "Grow Digitally.",
                  startDelay: 0.95,
                  className: "mt-1 text-brand sm:mt-2",
                },
              ]}
            />
            <p
              className="mx-auto mt-6 max-w-2xl animate-character-reveal px-4 font-geist text-base text-pretty text-white/85 sm:mt-8 sm:text-lg md:text-xl"
              style={{ animationDelay: "1.4s" }}
            >
              Melanin Connect Ltd helps businesses transform operations and create scalable digital
              products using AI, automation and next-generation technology.
            </p>
            <div className="animate-character-reveal" style={{ animationDelay: "1.6s" }}>
              <HeroActions />
            </div>
          </div>
        </div>
      </section>

      <ProblemsSection />
      <ServicesOverview />
      <ValueChain />
      <Methodology />
      <AiAgents />
      <WhoWeServe />
      <Testimonials />
      <NextSteps />
    </main>
  );
}
