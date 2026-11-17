import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/ContactSection";
import { pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/contact-us")({
  head: () =>
    pageHead({
      title: "Contact Us | Melanin Connect",
      description:
        "Talk to Melanin Connect about AI, automation, digital products and digital commerce for your business.",
      path: "/contact-us",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-neutral-100 bg-white pt-20 pb-8 sm:pt-24 md:pt-28">
        <div
          className="pointer-events-none absolute top-0 left-0 w-full text-center select-none"
          aria-hidden="true"
        >
          <p className="mt-2 font-geist text-[20vw] leading-none font-semibold tracking-tighter text-neutral-100 sm:mt-4 sm:text-[15vw]">
            {site.name}
          </p>
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-4 flex justify-center sm:mb-8">
            <div className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96">
              <ConnectionMolecule />
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

function ConnectionMolecule() {
  return (
    <svg
      className="h-full w-full animate-molecule drop-shadow-2xl"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="28" fill="#1B1635" />
      <circle cx="60" cy="100" r="24" fill="#2A2450" />
      <circle cx="135" cy="65" r="20" fill="#F54E00" />
      <circle cx="135" cy="135" r="20" fill="#F54E00" />
      <line
        x1="100"
        y1="100"
        x2="60"
        y2="100"
        stroke="#2A2450"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="100"
        y1="100"
        x2="135"
        y2="65"
        stroke="#F54E00"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="100"
        y1="100"
        x2="135"
        y2="135"
        stroke="#F54E00"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}
