/** Shared button styles so every call to action looks and moves the same way. */
const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-geist text-sm font-medium transition duration-200 ease-out sm:text-base";

export const button = {
  primary: `${base} bg-linear-to-r from-brand to-brand-dark px-5 py-3 text-white shadow-lg shadow-brand/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/30`,
  dark: `${base} bg-ink px-5 py-3 text-white hover:-translate-y-0.5 hover:bg-ink-soft`,
  outline: `${base} border border-gray-300 bg-white px-5 py-3 text-ink hover:-translate-y-0.5 hover:border-ink`,
  glass: `${base} border border-white/30 bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/20`,
} as const;
