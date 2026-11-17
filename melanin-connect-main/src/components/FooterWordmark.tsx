import type { CSSProperties } from "react";

import { site } from "@/lib/site";
import { useInView } from "@/lib/useInView";

/**
 * Oversized "Melanin Connect" wordmark that closes the footer. When it scrolls into view, each
 * letter rises out of a blur, one after another. The type is sized to its container (cqw), so it
 * spans the same share of the width on every screen.
 */
export function FooterWordmark() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "0px", threshold: 0.4 });
  const words = site.name.split(" ");
  let letterIndex = 0;

  return (
    <div
      ref={ref}
      data-wordmark=""
      data-shown={inView ? "" : undefined}
      className="relative select-none"
      aria-hidden="true"
    >
      <div className="wordmark-glow pointer-events-none absolute inset-0 bg-[radial-gradient(35%_80%_at_50%_100%,rgba(245,78,0,0.14),transparent_70%)]" />
      <div className="@container relative mx-auto max-w-xs overflow-hidden px-4 pt-6 sm:max-w-lg lg:max-w-2xl sm:px-6 lg:px-8">
        <p className="flex justify-center pb-[0.04em] font-geist text-[12cqw] leading-[0.9] font-semibold tracking-[-0.06em] whitespace-nowrap">
          {words.map((word, w) => (
            <span key={word} className={w > 0 ? "ml-[0.22em]" : undefined}>
              {[...word].map((char) => {
                const i = letterIndex++;
                return (
                  <span
                    key={i}
                    className={`wordmark-letter inline-block bg-linear-to-b bg-clip-text text-transparent ${w === 0 ? "from-white/85 via-white/65 to-white/15" : "from-brand via-brand/90 to-brand/30"}`}
                    style={{ "--i": i } as CSSProperties}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
