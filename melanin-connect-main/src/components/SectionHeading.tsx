import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

/** Eyebrow, title and intro used at the top of every content section. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`inline-flex items-center gap-2 font-geist text-xs font-semibold tracking-[0.18em] uppercase ${dark ? "text-brand" : "text-brand-dark"}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-geist text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {children && (
        <div
          className={`mt-4 font-geist text-base leading-relaxed text-pretty sm:mt-5 sm:text-lg ${dark ? "text-white/70" : "text-gray-600"}`}
        >
          {children}
        </div>
      )}
    </Reveal>
  );
}
