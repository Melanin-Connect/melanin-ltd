import { BookLink } from "@/components/BookLink";
import { ArrowUpRightIcon, CalendarIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { booking, site } from "@/lib/site";

/** "What should I do next?" Three ways to start, each opening the booking page. */
export function NextSteps() {
  return (
    <section className="bg-white pt-4 pb-20 sm:pb-28" id="next-steps">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl bg-brand-soft px-5 py-12 sm:px-10 sm:py-16 lg:px-16">
          <SectionHeading
            eyebrow="What should I do next?"
            title="Choose how you'd like to start"
            align="center"
          >
            <p>
              Pick a time that suits you. Every conversation is with our team, not a sales script.
            </p>
          </SectionHeading>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-3">
            {booking.topics.map((topic, index) => (
              <Reveal key={topic.id} delay={index * 100} className="h-full">
                <BookLink
                  topic={topic.id}
                  className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/15 hover:ring-brand/30 sm:p-7"
                >
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-ink/5 px-3 py-1 font-geist text-xs font-medium text-ink">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    {topic.duration}
                  </span>
                  <span className="mt-5 font-geist text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {topic.label}
                  </span>
                  <span className="mt-2 flex-1 font-geist text-sm leading-relaxed font-normal text-gray-600 sm:text-base">
                    {topic.summary}
                  </span>
                  <span className="mt-6 inline-flex items-center gap-2 font-geist text-sm font-semibold text-brand-dark">
                    Choose a time
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </span>
                  </span>
                </BookLink>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center font-geist text-sm text-gray-600">
            Prefer email?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-ink underline decoration-brand underline-offset-4"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
