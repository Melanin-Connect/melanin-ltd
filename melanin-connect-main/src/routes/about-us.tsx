import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { BookLink } from "@/components/BookLink";
import { ArrowRightIcon, BotIcon, GlobeIcon, ShoppingBagIcon } from "@/components/icons";
import { Methodology } from "@/components/Methodology";
import { NextSteps } from "@/components/NextSteps";
import { Reveal } from "@/components/Reveal";
import { WhoWeServe } from "@/components/WhoWeServe";
import { pageHead } from "@/lib/site";
import { button } from "@/lib/ui";

export const Route = createFileRoute("/about-us")({
  head: () =>
    pageHead({
      title: "About Us | Melanin Connect",
      description:
        "Melanin Connect serves businesses connected to African and diaspora markets with AI, digital commerce and African and global market expertise.",
      path: "/about-us",
    }),
  component: AboutPage,
});

const pillars = [
  { icon: BotIcon, label: "AI" },
  { icon: ShoppingBagIcon, label: "Digital commerce" },
  { icon: GlobeIcon, label: "African & global market expertise" },
];

const productPath = ["Idea", "Prototype", "MVP", "Production"];

const products = [
  "Web applications",
  "Mobile applications",
  "SaaS platforms",
  "AI-powered platforms",
  "Marketplaces",
  "Customer portals",
  "Internal business systems",
];

function AboutPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div
          className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-120 w-240 -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="inline-flex animate-fade-in items-center gap-2 font-geist text-xs font-semibold tracking-[0.18em] text-brand-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            About Melanin Connect Ltd
          </p>
          <h1
            className="mt-5 animate-character-reveal font-geist text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-ink sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Technology for businesses connected to <span className="text-brand">Africa</span> and
            the world
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl animate-character-reveal font-geist text-base leading-relaxed text-pretty text-gray-600 sm:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Melanin Connect serves businesses connected to African markets and diaspora markets. We
            help them automate operations, build digital products and modernise digital commerce.
          </p>
          <ul
            className="mt-10 flex animate-character-reveal flex-wrap items-center justify-center gap-2 sm:gap-3"
            style={{ animationDelay: "0.45s" }}
          >
            {pillars.map(({ icon: Icon, label }, index) => (
              <li key={label} className="flex items-center gap-2 sm:gap-3">
                {index > 0 && (
                  <span className="font-geist text-xl font-light text-brand" aria-hidden="true">
                    +
                  </span>
                )}
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 font-geist text-sm font-medium text-ink shadow-sm">
                  <Icon className="h-4 w-4 text-brand" />
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-4 px-4 sm:space-y-6 sm:px-6 lg:px-8">
          <Question number="01" question="Who are you?">
            <p>
              A digital technology company helping businesses use AI, automation and blockchain to
              improve operations, digital commerce and growth. We combine AI and digital commerce
              with African and global market expertise.
            </p>
          </Question>

          <Question number="02" question="What problem do you solve?">
            <p>
              We help businesses automate operations, build digital products and modernise digital
              commerce. Once you identify the problem, Melanin Connect can build the solution.
            </p>
            <ol className="mt-6 flex flex-wrap items-center gap-2">
              {productPath.map((stage, index) => (
                <li key={stage} className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-4 py-2 font-geist text-sm font-semibold ${index === productPath.length - 1 ? "bg-brand text-white" : "bg-ink text-white"}`}
                  >
                    {stage}
                  </span>
                  {index < productPath.length - 1 && (
                    <ArrowRightIcon className="h-4 w-4 text-brand" />
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm font-semibold text-ink">Products we build include</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {products.map((product) => (
                <li
                  key={product}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700"
                >
                  {product}
                </li>
              ))}
            </ul>
          </Question>

          <Question number="03" question="What should I do next?">
            <p>Book a consultation, start a project or get an AI audit. Each takes a few clicks.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <BookLink topic="consultation" className={button.primary}>
                Book a consultation
              </BookLink>
              <BookLink topic="project" className={button.dark}>
                Start a project
              </BookLink>
              <BookLink topic="audit" className={button.outline}>
                Get an AI audit
              </BookLink>
            </div>
          </Question>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="inline-flex items-center gap-2 font-geist text-xs font-semibold tracking-[0.18em] text-brand-dark uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                Our mission
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="font-geist text-2xl leading-tight font-semibold tracking-tight text-balance text-ink sm:text-3xl lg:text-4xl xl:text-5xl">
                To become the leading AI-powered partner for business growth and{" "}
                <span className="text-brand">digital transformation worldwide.</span>
              </p>
              <p className="mt-6 font-geist text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
                Melanin Connect serves businesses connected to African markets and diaspora markets,
                bringing together AI, digital commerce and African and global market expertise.
              </p>
              <p className="mt-4 font-geist text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
                We empower businesses to focus on growth while we deliver sustainable results
                through intelligent automation, AI-driven tools and secure blockchain payment
                systems. We combine technology with business expertise to help companies reduce
                operational costs, increase efficiency and improve their digital presence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <WhoWeServe />
      <Methodology />
      <NextSteps />
    </main>
  );
}

function Question({
  number,
  question,
  children,
}: {
  number: string;
  question: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <article className="grid grid-cols-1 gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <span className="font-geist text-sm font-semibold text-brand tabular-nums">{number}</span>
          <h2 className="mt-2 font-geist text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {question}
          </h2>
        </div>
        <div className="font-geist text-base leading-relaxed text-gray-600 sm:text-lg lg:col-span-8">
          {children}
        </div>
      </article>
    </Reveal>
  );
}
