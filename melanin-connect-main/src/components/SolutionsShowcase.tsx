import { Link } from "@tanstack/react-router";
import type { ComponentType } from "react";

import { ChatIcon, InboxIcon, SettingsIcon, SparkleIcon } from "@/components/icons";

type ShowcaseCard = {
  image: string;
  icon: ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  aspect: string;
  overlay: string;
};

const cards: ShowcaseCard[] = [
  {
    image: "/images/card-1.jpg",
    icon: InboxIcon,
    tag: "Priority",
    title: "Business insights",
    aspect: "aspect-[4/3]",
    overlay: "via-black/15",
  },
  {
    image: "/images/card-2.jpg",
    icon: SparkleIcon,
    tag: "AI",
    title: "AI content generation",
    aspect: "aspect-[4/3]",
    overlay: "via-black/20",
  },
  {
    image: "/images/card-3.jpg",
    icon: ChatIcon,
    tag: "Support",
    title: "Customer engagement",
    aspect: "aspect-[4/5]",
    overlay: "via-black/20",
  },
  {
    image: "/images/card-4.jpg",
    icon: SettingsIcon,
    tag: "Workflow",
    title: "Complete automation",
    aspect: "aspect-[4/5]",
    overlay: "via-black/20",
  },
];

const steps = [
  { title: "Smart automation", description: "AI optimizes your workflows for maximum efficiency" },
  { title: "Real-time analytics", description: "Track performance without the complexity" },
  { title: "Automated content creation", description: "Generate posts and content in seconds" },
];

const glassPill =
  "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 py-1.5 text-xs text-white/90 backdrop-blur";

export function SolutionsShowcase() {
  return (
    <section className="z-10 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2">
          <div className="relative order-1 grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:order-2">
            {cards.map(({ image, icon: Icon, tag, title, aspect, overlay }) => (
              <article
                key={title}
                className={`group relative overflow-hidden rounded-2xl bg-cover bg-center shadow-lg transition-transform duration-300 hover:scale-[1.02] ${aspect}`}
                style={{ backgroundImage: `url("${image}")` }}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-b from-black/0 to-black/60 transition-opacity duration-300 group-hover:opacity-90 ${overlay}`}
                />
                <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
                  <span className={`${glassPill} px-1.5`}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                </div>
                <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
                  <span className={`${glassPill} px-3`}>{tag}</span>
                </div>
                <div className="absolute right-2 bottom-2 left-2 transition-transform duration-300 group-hover:-translate-y-1 sm:right-3 sm:bottom-3 sm:left-3">
                  <p className="text-sm leading-tight font-medium tracking-tight text-white sm:text-base md:text-lg">
                    {title}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="order-2 flex min-h-full flex-col justify-between lg:order-1">
            <div>
              <span className="font-geist text-sm font-normal text-gray-500">Platform</span>
              <h2 className="mt-2 font-geist text-2xl leading-[1.1] tracking-tighter text-gray-900 sm:text-3xl sm:leading-[1.0] md:text-4xl md:leading-[0.9] lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Business solutions built for growth.
              </h2>

              <div className="relative mt-8">
                {/* Phone: compact list */}
                <div className="flex flex-col gap-3 text-gray-600 sm:hidden">
                  {steps.map((step) => (
                    <div key={step.title} className="flex items-start gap-3">
                      <div className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-brand bg-white" />
                      <div>
                        <span className="font-geist text-sm font-medium text-brand">
                          {step.title}
                        </span>
                        <p className="mt-0.5 font-geist text-xs text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tablet and up: connected timeline */}
                <div className="relative hidden flex-col gap-4 bg-transparent px-4 text-gray-600 sm:flex">
                  {steps.map((step, index) => {
                    const isLast = index === steps.length - 1;
                    return (
                      <div key={step.title} className="relative">
                        {!isLast && (
                          <div className="absolute top-8 bottom-0 left-2 w-px bg-brand" />
                        )}
                        <div className="flex items-start gap-4">
                          <div className="relative z-10 mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-white">
                            <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                          </div>
                          <div className={`flex-1 ${isLast ? "" : "pb-6"}`}>
                            <span className="font-geist text-sm font-medium text-brand">
                              {step.title}
                            </span>
                            <p className="mt-1 font-geist text-xs text-gray-500">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-10 w-full">
              <p className="font-geist text-sm font-medium tracking-tight text-gray-900">
                Transform your business operations
              </p>
              <p className="mt-1 max-w-sm font-geist text-sm text-gray-600">
                Smart automation, AI-powered tools, and comprehensive analytics that keep you
                focused on growth.
              </p>
              <Link
                to="/services"
                className="mt-4 inline-flex h-10 max-w-sm items-center justify-center gap-2 rounded-full bg-brand px-4 font-geist text-sm font-normal text-white transition"
              >
                Explore features
                <span className="inline-flex h-2 w-2 rounded-full bg-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
