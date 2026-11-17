import type { ComponentType } from "react";

import {
  ChartBarIcon,
  CheckIcon,
  CurrencyCircleIcon,
  QuestionCircleIcon,
} from "@/components/icons";

type Service = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features?: string[];
};

const services: Service[] = [
  {
    icon: ChartBarIcon,
    title: "See everything in one unified dashboard",
    description:
      "Track sales, customer engagement, active campaigns, and business metrics—all from a single dashboard.",
    features: ["Real-time metrics", "Campaign overview", "Customer insights"],
  },
  {
    icon: QuestionCircleIcon,
    title: "AI-powered business tools",
    description:
      "Leverage AI to automate content creation, customer support, and business processes. Focus on what matters most.",
  },
  {
    icon: CurrencyCircleIcon,
    title: "Secure blockchain payments",
    description:
      "Accept payments seamlessly with blockchain technology. Fast, secure, and transparent transactions.",
    features: ["Instant transactions", "Low fees", "Global reach"],
  },
  {
    icon: ChartBarIcon,
    title: "Track every metric and dollar",
    description:
      "See which campaigns drive results and calculate ROI automatically. Make data-driven decisions with confidence.",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-white pb-16 sm:pb-24" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col gap-6 border-b border-gray-200 pb-8 sm:mt-12 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-left font-geist text-xl font-medium tracking-tight text-gray-900 sm:mb-4 sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl xl:text-5xl">
              We provide a wide range of
              <span className="text-brand"> business services</span>
            </h2>
            <p className="mt-2 text-left font-geist text-sm leading-relaxed text-gray-600 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
              From AI-powered tools to blockchain payment systems, our platform provides everything
              you need to boost your brand and streamline operations.
            </p>
          </div>
        </div>

        <div className="my-8 overflow-hidden sm:my-12">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {services.map(({ icon: Icon, title, description, features }) => (
              <div
                key={title}
                className="group/card relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10 sm:rounded-3xl sm:p-8 lg:p-10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 transition-transform duration-300 group-hover/card:scale-110 sm:mb-6">
                  <Icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mb-3 font-geist text-2xl font-semibold tracking-tight text-gray-900 sm:mb-4 sm:text-3xl">
                  {title}
                </h3>
                <p
                  className={`font-geist text-base leading-relaxed text-gray-600 sm:text-lg ${features ? "mb-6 sm:mb-8" : ""}`}
                >
                  {description}
                </p>
                {features && (
                  <ul className="space-y-3 sm:space-y-4">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 font-geist text-sm font-medium text-gray-700 sm:text-base"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                          <CheckIcon className="h-3 w-3 text-brand" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
