export const site = {
  name: "Melanin Connect",
  legalName: "Melanin Connect Ltd",
  url: "https://melaninconnect.xyz",
  email: "info@melaninconnect.xyz",
  phone: "+233503659567",
  workHours: "Monday to Friday: 09:00 am – 05:00 pm",
  address: "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
  tagline: "Build Smarter. Automate Faster. Grow Digitally.",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact-us" },
] as const;

export const images = {
  logo: "/images/logo.png",
  logoLight: "/images/logo-light.png",
  mark: "/images/mark.png",
  heroHome: "/images/hero-home.jpg",
  heroServices: "/images/hero-services.jpg",
} as const;

/**
 * Calendly booking. Paste the scheduling link from Calendly (Scheduling > your event > Copy link).
 * Each topic can point at its own Calendly event type; leave `calendlyUrl` empty on a topic to
 * use `defaultCalendlyUrl`. While no link is set, the booking page falls back to email and phone.
 */
export const booking = {
  defaultCalendlyUrl: "",
  topics: [
    {
      id: "consultation",
      label: "Book a consultation",
      duration: "30 min",
      summary: "Talk through your business goals and where AI and automation can help.",
      calendlyUrl: "https://calendly.com/melaninconnect-app/30min",
    },
    {
      id: "project",
      label: "Start a project",
      duration: "45 min",
      summary: "Scope a product or platform, from idea and prototype to MVP and production.",
      calendlyUrl: "https://calendly.com/melaninconnect-app/30min",
    },
    {
      id: "audit",
      label: "Get an AI audit",
      duration: "30 min",
      summary: "Find the manual work, costs and bottlenecks that AI can remove first.",
      calendlyUrl: "https://calendly.com/melaninconnect-app/30min",
    },
  ],
} as const;

export type BookingTopic = (typeof booking.topics)[number]["id"];

type PageMeta = { title: string; description: string; path: string };

/** Builds the per-page <head> tags: title, description, Open Graph and Twitter cards. */
export function pageHead({ title, description, path }: PageMeta) {
  const url = `${site.url}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
