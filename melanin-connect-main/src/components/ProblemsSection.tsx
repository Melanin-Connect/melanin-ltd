import { BookLink } from "@/components/BookLink";
import {
  ArrowRightIcon,
  ClockIcon,
  CoinsIcon,
  CreditCardIcon,
  FrownIcon,
  HistoryIcon,
  TrendingUpIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { button } from "@/lib/ui";

const problems = [
  { icon: ClockIcon, text: "Too many manual processes?" },
  { icon: CoinsIcon, text: "High operating costs?" },
  { icon: HistoryIcon, text: "Outdated systems?" },
  { icon: FrownIcon, text: "Poor customer experience?" },
  { icon: TrendingUpIcon, text: "Difficulty scaling?" },
  { icon: CreditCardIcon, text: "Complex payment infrastructure?" },
];

export function ProblemsSection() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28" id="problems">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Is your business ready for the next stage of digital growth?"
        />

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {problems.map(({ icon: Icon, text }, index) => (
            <li key={text}>
              <Reveal delay={index * 70} className="h-full">
                <div className="group flex h-full items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 sm:p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="font-geist text-lg font-medium tracking-tight text-ink">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-6 sm:mt-8">
          <div className="flex flex-col gap-5 rounded-3xl bg-ink p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="max-w-2xl font-geist text-xl font-medium tracking-tight text-white sm:text-2xl">
              Once you identify the problem,{" "}
              <span className="text-brand">Melanin Connect Ltd can build the solution.</span>
            </p>
            <BookLink topic="audit" className={`${button.primary} shrink-0`}>
              Get an AI audit
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </BookLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
