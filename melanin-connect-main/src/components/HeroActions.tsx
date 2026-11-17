import { Link } from "@tanstack/react-router";

import { ArrowUpRightIcon } from "@/components/icons";

/** The "Get started" and "Our work" buttons shown on the hero banners. */
export function HeroActions() {
  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-3 px-4 sm:mt-8 sm:flex-row sm:gap-4">
      <Link
        to="/contact-us"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand to-brand-dark px-4 py-2.5 font-geist text-sm font-medium text-white shadow-lg shadow-pink-600/20 transition duration-150 ease-out hover:-translate-y-0.5 sm:w-auto sm:min-w-35 sm:gap-3 sm:px-6 sm:py-3 sm:text-base"
      >
        Get started
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 sm:h-7 sm:w-7">
          <ArrowUpRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </span>
      </Link>
      <Link
        to="/services"
        className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2.5 font-geist text-sm font-medium text-white transition-colors hover:bg-white/20 sm:w-auto sm:min-w-35 sm:px-6 sm:py-3 sm:text-base"
      >
        Our work
      </Link>
    </div>
  );
}
