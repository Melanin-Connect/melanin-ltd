import { createFileRoute } from "@tanstack/react-router";

import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { ContactSection } from "@/components/ContactSection";
import { HeroActions } from "@/components/HeroActions";
import { ServicesOverview } from "@/components/ServicesOverview";
import { SolutionsShowcase } from "@/components/SolutionsShowcase";
import { Testimonials } from "@/components/Testimonials";
import { images, pageHead } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Melanin Connect - AI and Blockchain Solutions for Business Growth",
      description:
        "AI-powered tools, blockchain payments, and personalized solutions for business growth.",
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <section className="relative z-1 min-h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${images.heroHome}")` }}
          role="img"
          aria-label="Human and AI collaboration representing technology partnership"
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex min-h-screen w-full items-center pt-16 sm:pt-20">
          <div className="relative mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedHeadline
              className="mx-auto max-w-3xl px-2 font-geist text-2xl leading-tight font-medium tracking-tighter text-white sm:text-3xl sm:leading-tight md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
              lines={[
                { text: "Empowering Your Business", startDelay: 0.2 },
                {
                  text: "With AI and Blockchain Solutions",
                  startDelay: 0.8,
                  className: "mt-2 text-white sm:mt-3 md:mt-4",
                },
              ]}
            />
            <p className="mx-auto mt-4 hidden max-w-3xl px-4 font-geist text-sm text-white/90 sm:mt-6 sm:block sm:text-base md:mt-8 md:text-lg lg:text-xl">
              Unlock the future of digital commerce with AI-powered tools, seamless blockchain
              payment systems, and personalized solutions designed to boost your brand and
              streamline your operations.
            </p>
            <HeroActions />
          </div>
        </div>
      </section>

      <ServicesOverview />
      <SolutionsShowcase />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
