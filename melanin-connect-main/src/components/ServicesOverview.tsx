import type { ComponentType } from "react";

import { BotIcon, DevicesIcon, LinkIcon, ShoppingBagIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type Service = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  includes: string[];
};

const services: Service[] = [
  {
    icon: BotIcon,
    title: "AI & Automation",
    description: "Automate repetitive work and deploy intelligent workflows.",
    includes: [
      "AI agents",
      "Workflow automation",
      "Customer-service automation",
      "Content automation",
      "Business intelligence",
      "Internal knowledge systems",
    ],
  },
  {
    icon: DevicesIcon,
    title: "Digital Products",
    description: "Turn business ideas into scalable web and mobile platforms.",
    includes: [
      "Web applications",
      "Mobile applications",
      "SaaS platforms",
      "AI-powered platforms",
      "Marketplaces",
      "Customer portals",
      "Internal business systems",
    ],
  },
  {
    icon: ShoppingBagIcon,
    title: "Digital Commerce",
    description: "Build modern commerce, payment and customer systems.",
    includes: ["Commerce platforms", "Payment systems", "Customer systems"],
  },
  {
    icon: LinkIcon,
    title: "Blockchain",
    description:
      "Deploy secure blockchain-based infrastructure where it provides genuine business value.",
    includes: ["Payment infrastructure", "Secure transactions"],
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-white py-20 sm:py-28" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              We help businesses <span className="text-brand">automate operations</span>, build
              intelligent digital products and modernise digital commerce.
            </>
          }
        >
          <p>
            Melanin Connect Ltd is a digital technology company helping businesses use AI,
            automation and blockchain to improve operations, digital commerce and growth.
          </p>
        </SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description, includes }, index) => (
            <Reveal key={title} delay={(index % 2) * 90} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 sm:p-8 lg:p-10">
                <div
                  className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white transition-colors duration-300 group-hover:bg-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-geist text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-3 font-geist text-base leading-relaxed text-gray-600 sm:text-lg">
                  {description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-geist text-xs font-medium text-gray-700 sm:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
