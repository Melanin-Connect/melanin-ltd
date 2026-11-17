import { QuoteIcon, VerifiedIcon } from "@/components/icons";

type Testimonial = { name: string; role: string; quote: string };

const topRow: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "E-commerce Founder, Seattle",
    quote:
      "Saved me 15 hours per week on operations. Now I can focus on growth. Revenue increased 3x in the first month.",
  },
  {
    name: "Michael Rodriguez",
    role: "Tech Startup CEO, Miami",
    quote:
      "The AI tools reduced manual work by 40%. Game changer for our business. Best investment we've made.",
  },
  {
    name: "Emily Johnson",
    role: "Digital Agency Owner, Boston",
    quote:
      "Blockchain payments brought in 50% more international clients. Setup took 15 minutes. Incredible results.",
  },
  {
    name: "James Wilson",
    role: "SaaS Founder, Austin",
    quote:
      "The unified dashboard shows everything I need. No more juggling multiple platforms. Highly recommended.",
  },
];

const bottomRow: Testimonial[] = [
  {
    name: "Lisa Martinez",
    role: "Consultant, Denver",
    quote:
      "The AI-generated content saves me hours every week. Engagement increased significantly. Love it!",
  },
  {
    name: "David Park",
    role: "Entrepreneur, Portland",
    quote:
      "ROI tracking is crystal clear now. I can see exactly which campaigns work. Data-driven decisions made easy.",
  },
  {
    name: "Rachel Kim",
    role: "Business Owner, San Francisco",
    quote:
      "Secure and easy to use. The automated reports keep me informed without the hassle. Perfect solution.",
  },
  {
    name: "Tom Anderson",
    role: "Startup Founder, Chicago",
    quote:
      "Customer acquisition increased by 40% in three months. The platform pays for itself. Outstanding results.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white pt-16 pb-16 sm:py-24" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="space-y-1">
            <p className="font-geist text-xs tracking-widest text-gray-500 uppercase">
              What clients say
            </p>
            <h2 className="font-geist text-2xl font-medium tracking-tighter text-gray-900 sm:text-3xl md:text-4xl">
              Testimonials
            </h2>
          </div>
          <div className="hidden items-center gap-2 text-gray-400 sm:flex">
            <QuoteIcon className="h-4 w-4" />
            <span className="font-geist text-sm">Real feedback from businesses</span>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent sm:w-40" />
          <MarqueeRow items={topRow} animation="animate-marquee-ltr" />
          <div className="border-t border-gray-200" />
          <MarqueeRow items={bottomRow} animation="animate-marquee-rtl" />
        </div>
      </div>
    </section>
  );
}

/**
 * Renders the list twice so a -50% translate loops seamlessly. Spacing uses a right
 * margin instead of `gap` so both halves are exactly the same width.
 */
function MarqueeRow({ items, animation }: { items: Testimonial[]; animation: string }) {
  return (
    <div className="relative py-6 sm:py-8">
      <div className={`flex w-max will-change-transform ${animation}`}>
        {[...items, ...items].map((item, index) => (
          <TestimonialCard key={index} {...item} hidden={index >= items.length} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, quote, hidden }: Testimonial & { hidden: boolean }) {
  return (
    <article
      aria-hidden={hidden || undefined}
      className="mr-4 w-70 shrink-0 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:mr-5 sm:w-90 md:w-105"
    >
      <div className="flex items-center gap-1">
        <span className="font-geist text-sm font-medium text-gray-900">{name}</span>
        <VerifiedIcon className="h-3.5 w-3.5 text-pink-500" />
      </div>
      <p className="font-geist text-xs text-gray-500">{role}</p>
      <p className="mt-4 font-geist text-sm text-gray-700 sm:text-base">{quote}</p>
    </article>
  );
}
