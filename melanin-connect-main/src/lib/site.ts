export const site = {
  name: "Melanin Connect",
  url: "https://melaninconnect.xyz",
  email: "info@melaninconnect.xyz",
  phone: "+233503659567",
  workHours: "Monday to Friday: 09:00 am – 05:00 pm",
  address: "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact-us" },
] as const;

export const images = {
  logo: "/images/logo.png",
  heroHome: "/images/hero-home.jpg",
  heroServices: "/images/hero-services.jpg",
} as const;

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
