import { Link } from "@tanstack/react-router";

import { BookLink } from "@/components/BookLink";
import { ArrowUpRightIcon } from "@/components/icons";
import { button } from "@/lib/ui";

/** "Start a Project" plus a secondary action, shown on the hero banners. */
export function HeroActions({ secondary = "solutions" }: { secondary?: "solutions" | "audit" }) {
  return (
    <div className="mt-8 flex flex-col items-stretch justify-center gap-3 px-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
      <BookLink topic="project" className={`${button.primary} sm:min-w-44`}>
        Start a Project
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 transition-transform duration-200 group-hover:rotate-45">
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </span>
      </BookLink>
      {secondary === "solutions" ? (
        <Link to="/services" className={`${button.glass} sm:min-w-44`}>
          Explore Solutions
        </Link>
      ) : (
        <BookLink topic="audit" className={`${button.glass} sm:min-w-44`}>
          Get an AI audit
        </BookLink>
      )}
    </div>
  );
}
