import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouter,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import appCss from "@/styles.css?url";

const description =
  "Melanin Connect Ltd helps businesses automate operations, build intelligent digital products and modernise digital commerce with AI, automation and blockchain technology.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: site.name },
      { name: "description", content: description },
      { name: "author", content: site.legalName },
      { name: "theme-color", content: "#1B1635" },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${site.url}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${site.url}/og-image.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://calendly.com" },
    ],
  }),
  shellComponent: RootDocument,
  component: SiteLayout,
  notFoundComponent: NotFound,
  errorComponent: RouteError,
});

const revealScript = "document.documentElement.classList.add('js')";

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Marks the document as scripted before paint, enabling the scroll-reveal styles. */}
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteLayout() {
  return (
    <div className="min-h-screen w-full bg-white">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}

function NotFound() {
  return (
    <StatusPage title="404" message="The page you're looking for doesn't exist or has been moved.">
      <Link to="/" className="btn-pill bg-brand text-white">
        Go home
      </Link>
    </StatusPage>
  );
}

function RouteError({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  console.error(error);

  return (
    <StatusPage
      title="This page didn't load"
      message="Something went wrong on our end. You can try refreshing or head back home."
    >
      <button
        type="button"
        className="btn-pill bg-brand! text-white"
        onClick={() => {
          router.invalidate();
          reset();
        }}
      >
        Try again
      </button>
      <Link to="/" className="btn-pill border border-gray-300 text-ink">
        Go home
      </Link>
    </StatusPage>
  );
}

function StatusPage({
  title,
  message,
  children,
}: {
  title: string;
  message: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">{title}</h1>
        <p className="mt-3 text-sm text-gray-600">{message}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">{children}</div>
      </div>
    </main>
  );
}
