import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { CloseIcon, LogInIcon, MenuIcon } from "@/components/icons";
import { images, navLinks, site } from "@/lib/site";

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
        <div className="flex items-center justify-between py-1">
          <Link to="/" className="relative z-101 block leading-none" onClick={closeMenu}>
            <img
              src={images.logo}
              alt={site.name}
              width={200}
              height={60}
              className="block h-14 w-auto md:h-20"
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          <nav className="relative z-101 hidden items-center gap-8 text-sm text-gray-900 md:flex">
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} className="font-geist transition hover:text-gray-700">
                {label}
              </Link>
            ))}
          </nav>

          <div className="relative z-101 hidden items-center gap-3 md:flex">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 font-geist text-sm font-medium text-white transition"
            >
              <LogInIcon className="h-4 w-4" />
              Get Started!
            </Link>
          </div>

          <button
            ref={menuButton}
            type="button"
            className="relative z-30 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-transparent p-0 text-gray-900 transition md:hidden"
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
            className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-gray-200 py-4 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
              {navLinks.map(({ label, to }) => (
                <Link key={to} to={to} className="py-2 text-sm text-gray-900" onClick={closeMenu}>
                  {label}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-2">
                <Link
                  to="/contact-us"
                  className="flex items-center justify-center rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-white"
                  onClick={closeMenu}
                >
                  Get Started!
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
