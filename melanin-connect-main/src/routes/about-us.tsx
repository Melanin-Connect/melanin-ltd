import { createFileRoute } from "@tanstack/react-router";

import { SolutionsShowcase } from "@/components/SolutionsShowcase";
import { Testimonials } from "@/components/Testimonials";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/about-us")({
  head: () =>
    pageHead({
      title: "About Us | Melanin Connect",
      description:
        "Discover Melanin Connect’s mission to empower businesses through AI and blockchain.",
      path: "/about-us",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="pt-20 sm:pt-24 md:pt-28">
      <div className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-geist text-4xl tracking-tight text-black sm:text-6xl md:text-7xl">
              Empowering Businesses <span className="text-black/70">Through AI and Blockchain</span>
            </h1>
            <p className="mt-5 font-geist text-base font-normal text-black/70 sm:text-lg">
              We leverage artificial intelligence and blockchain technology to revolutionize digital
              commerce. Our automated, data-driven solutions help businesses streamline operations,
              enhance customer experiences, and grow their brand—all while maintaining security and
              compliance.
            </p>
          </div>

          <SolutionsShowcase />

          <section className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="py-20 sm:py-28">
              <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <h2 className="font-geist text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                    Our mission
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="mb-6 font-geist text-2xl leading-tight font-semibold tracking-tight text-black sm:mb-8 sm:text-3xl lg:text-4xl xl:text-5xl">
                    To become the leading AI-powered platform for business growth and digital
                    transformation worldwide.
                  </p>
                  <p className="font-geist text-base leading-relaxed text-black/60 sm:text-lg lg:text-xl">
                    Our mission is to empower businesses to focus on growth while we deliver
                    sustainable results through intelligent automation, AI-driven tools, and secure
                    blockchain payment systems. We combine cutting-edge technology with business
                    expertise to help companies reduce operational costs, increase efficiency, and
                    improve their digital presence.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Testimonials />
    </main>
  );
}
