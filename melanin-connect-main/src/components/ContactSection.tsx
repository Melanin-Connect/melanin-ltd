import type { ComponentType, ReactNode } from "react";

import { BookLink } from "@/components/BookLink";
import { CalendarIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { button } from "@/lib/ui";

const fieldClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-geist text-black placeholder-gray-400 transition-all duration-200 focus:outline-none";
const inputClass = `${fieldClass} focus:border-transparent focus:ring-2 focus:ring-brand`;
const labelClass = "mb-2 block font-geist text-sm font-medium text-black";

export function ContactSection() {
  return (
    <section className="bg-white pb-16 sm:pb-24" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-3 font-geist text-2xl font-medium tracking-tight text-ink sm:mb-4 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl">
              Get In Touch
            </h2>
            <p className="mb-4 font-geist text-sm text-gray-600 sm:mb-6 sm:text-base md:mb-8 md:text-lg">
              Tell us about your business and what you want to achieve. Fill out the form, reach out
              directly, or book a call at a time that suits you.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <ContactDetail icon={MailIcon} title="Email Address">
                {site.email}
              </ContactDetail>
              <ContactDetail icon={PhoneIcon} title="Phone Numbers">
                {site.phone}
              </ContactDetail>
              <ContactDetail icon={MapPinIcon} title="Work Hours">
                {site.workHours}
              </ContactDetail>
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-ink p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-geist text-lg font-semibold text-white">
                  Prefer to talk it through?
                </p>
                <p className="mt-1 font-geist text-sm text-white/70">
                  Pick a time and speak with our team directly.
                </p>
              </div>
              <BookLink topic="consultation" className={`${button.primary} shrink-0`}>
                <CalendarIcon className="h-4 w-4" />
                Book a call
              </BookLink>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5 md:rounded-4xl md:p-6 lg:p-8 xl:p-10">
            {/* Visual only: no submission service is connected yet. */}
            <form className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <label className={labelClass} htmlFor="name">
                  Full Name*
                </label>
                <input
                  className={inputClass}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email Address*
                </label>
                <input
                  className={inputClass}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="company">
                  Company Name (Optional)
                </label>
                <input
                  className={inputClass}
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="message">
                  Message*
                </label>
                <textarea
                  className={`${fieldClass} resize-none`}
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-brand px-4 font-geist text-sm font-normal text-white transition"
              >
                Send Message
                <span className="inline-flex h-2 w-2 rounded-full bg-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  icon: Icon,
  title,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft sm:h-12 sm:w-12">
        <Icon className="h-4 w-4 text-brand sm:h-5 sm:w-5" />
      </div>
      <div>
        <h3 className="mb-1 font-geist text-sm font-semibold text-ink">{title}</h3>
        <p className="font-geist text-gray-600">{children}</p>
      </div>
    </div>
  );
}
