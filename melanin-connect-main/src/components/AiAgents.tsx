import type { ComponentType } from "react";

import { BookLink } from "@/components/BookLink";
import {
  ArrowRightIcon,
  BookIcon,
  HeadsetIcon,
  PenIcon,
  SettingsIcon,
  TargetIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { button } from "@/lib/ui";

type Agent = { icon: ComponentType<{ className?: string }>; name: string; description: string };

const agents: Agent[] = [
  {
    icon: HeadsetIcon,
    name: "AI Customer Support Agent",
    description: "Handles FAQs, enquiries and lead qualification.",
  },
  {
    icon: TargetIcon,
    name: "AI Sales Agent",
    description: "Qualifies prospects and follows up automatically.",
  },
  {
    icon: PenIcon,
    name: "AI Content Agent",
    description: "Creates and distributes marketing content.",
  },
  {
    icon: SettingsIcon,
    name: "AI Operations Agent",
    description: "Automates repetitive internal processes.",
  },
  {
    icon: BookIcon,
    name: "AI Knowledge Agent",
    description: "Lets employees query company documentation and knowledge.",
  },
];

const cards = [
  { image: "/images/card-3.jpg", tag: "Support", title: "Customer Support Agent", tall: false },
  { image: "/images/card-2.jpg", tag: "Content", title: "Content Agent", tall: false },
  { image: "/images/card-1.jpg", tag: "Knowledge", title: "Knowledge Agent", tall: true },
  { image: "/images/card-4.jpg", tag: "Operations", title: "Operations Agent", tall: true },
];

export function AiAgents() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28" id="ai-agents">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Melanin Connect Ltd AI agents"
              title="AI agents that work alongside your team"
            >
              <p>
                Each agent takes on a specific job, so your people can focus on the work that grows
                the business.
              </p>
            </SectionHeading>

            <ul className="mt-8 space-y-3">
              {agents.map(({ icon: Icon, name, description }, index) => (
                <li key={name}>
                  <Reveal delay={index * 70}>
                    <div className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-4 shadow-sm transition duration-300 hover:border-brand/30 hover:shadow-md sm:p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-geist text-base font-semibold tracking-tight text-ink">
                          {name}
                        </h3>
                        <p className="mt-0.5 font-geist text-sm text-gray-600">{description}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal className="mt-8">
              <BookLink topic="audit" className={button.dark}>
                Find your first AI agent
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </BookLink>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {cards.map(({ image, tag, title, tall }) => (
                <article
                  key={title}
                  className={`group relative overflow-hidden rounded-2xl bg-ink shadow-lg sm:rounded-3xl ${tall ? "aspect-4/5" : "aspect-4/3"}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url("${image}")` }}
                    role="img"
                    aria-label={title}
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-ink/0 via-ink/15 to-ink/80" />
                  <span className="absolute top-3 right-3 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-geist text-xs text-white backdrop-blur">
                    {tag}
                  </span>
                  <p className="absolute right-3 bottom-3 left-3 font-geist text-sm leading-tight font-medium text-white transition-transform duration-300 group-hover:-translate-y-1 sm:text-base md:text-lg">
                    {title}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
