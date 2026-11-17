import { Link } from "@tanstack/react-router";

import {
  CalendarIcon,
  DribbbleIcon,
  EnvelopeIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import { navLinks, site } from "@/lib/site";

const pillLink =
  "inline-flex items-center rounded-full border border-white/10 bg-white text-gray-900 transition-colors duration-200 hover:bg-white/90";
const socialLink = `${pillLink} h-10 w-10 justify-center sm:h-12 sm:w-12`;
const footerLink = "font-geist font-medium tracking-tight hover:underline";

export function SiteFooter() {
  return (
    <footer className="mt-8 w-full bg-gray-900 sm:mt-10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="relative overflow-hidden p-4 text-white sm:p-6 md:p-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.06),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.05),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] bg-size-[20px_20px] opacity-15" />
          </div>

          <div className="relative">
            <h2 className="font-geist text-[12vw] leading-[0.95] font-semibold tracking-tighter sm:text-[10vw] sm:leading-[0.9] md:text-[8vw] lg:text-[7vw] xl:text-[9vw]">
              <span className="block">Ready to grow</span>
              <span className="block text-white/60">your business</span>
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
              <div className="sm:col-span-2 md:col-span-1">
                <p className="font-geist text-xs text-white/60 sm:text-sm">Email Address</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-flex items-center gap-2 font-geist text-base font-medium tracking-tight break-all text-white sm:gap-3 sm:text-xl md:text-2xl"
                >
                  <EnvelopeIcon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="break-all">{site.email}</span>
                </a>
              </div>

              <div className="sm:col-span-2 md:col-span-1">
                <p className="font-geist text-xs text-white/60 sm:text-sm">Phone Numbers</p>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href={`tel:${site.phone}`}
                    className={`${pillLink} w-full justify-center gap-2 px-4 py-2.5 text-xs font-medium tracking-tight sm:w-auto sm:justify-start sm:px-5 sm:py-3 sm:text-sm`}
                  >
                    <CalendarIcon size={18} />
                    <span className="font-geist">{site.phone}</span>
                  </a>
                </div>
              </div>

              <div className="sm:col-span-2 md:col-span-1">
                <p className="font-geist text-xs text-white/60 sm:text-sm">Follow Along</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                  <a
                    href="#"
                    aria-label="Twitter"
                    className={`${pillLink} gap-1.5 px-3 py-2.5 text-xs font-medium tracking-tight sm:gap-2 sm:px-4 sm:py-3 sm:text-sm`}
                  >
                    <TwitterIcon size={16} />
                    <span className="font-geist">2,843</span>
                  </a>
                  <a href="#" aria-label="Instagram" className={socialLink}>
                    <InstagramIcon size={20} />
                  </a>
                  <a href="#" aria-label="Dribbble" className={socialLink}>
                    <DribbbleIcon size={20} />
                  </a>
                  <a href="#" aria-label="YouTube" className={socialLink}>
                    <YoutubeIcon size={20} />
                  </a>
                  <a href="#" aria-label="LinkedIn" className={socialLink}>
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 sm:mt-8" />

            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6">
              <div>
                <p className="font-geist text-xs text-white/60 sm:text-sm">About</p>
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs sm:mt-3 sm:text-sm">
                  {navLinks.map(({ label, to }) => (
                    <Link key={to} to={to} className={footerLink}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-geist text-xs text-white/60 sm:text-sm">Useful Links</p>
                <div className="mt-2 grid grid-cols-1 gap-2 text-xs sm:mt-3 sm:text-sm">
                  <Link to="/privacy" className={footerLink}>
                    Privacy Policy
                  </Link>
                  <a href="/terms" className={footerLink}>
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 px-2 text-center font-geist text-[10px] text-white/70 sm:mt-6 sm:text-xs">
              © {new Date().getFullYear()} {site.name}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
