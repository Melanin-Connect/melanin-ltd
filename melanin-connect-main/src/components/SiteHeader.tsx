import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { BookLink } from "@/components/BookLink";
import { CalendarIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { images, navLinks, site } from "@/lib/site";
import { button } from "@/lib/ui";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-100 isolate border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link to="/" className="relative z-101 block leading-none" onClick={closeMenu}>
            <img
              src={images.logo}
              alt={site.legalName}
              width={731}
              height={240}
              className="block h-10 w-auto sm:h-12"
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          <nav className="relative z-101 hidden items-center gap-8 text-sm text-ink md:flex">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="relative font-geist text-gray-700 transition-colors after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 data-[status=active]:text-ink data-[status=active]:after:scale-x-100"
                activeOptions={{ exact: to === "/" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="relative z-101 hidden items-center gap-3 md:flex">
            <BookLink topic="consultation" className={`${button.primary} px-4! py-2.5! text-sm!`}>
              <CalendarIcon className="h-4 w-4" />
              Book a call
            </BookLink>
          </div>

          <button
            ref={menuButton}
            type="button"
            className="relative z-30 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-transparent p-0 text-ink transition hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="max-h-[calc(100dvh-64px)] animate-fade-in overflow-y-auto border-t border-gray-200 py-4 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="rounded-lg px-2 py-2 text-base text-gray-700 data-[status=active]:bg-brand-soft data-[status=active]:text-ink"
                  activeOptions={{ exact: to === "/" }}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-2">
                <BookLink
                  topic="consultation"
                  className={`${button.primary} w-full`}
                  onClick={closeMenu}
                >
                  <CalendarIcon className="h-4 w-4" />
                  Book a call
                </BookLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
