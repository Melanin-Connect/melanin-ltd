import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { CheckIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { button } from "@/lib/ui";

/** Calendly colours (hex without #) so the scheduler matches the Melanin Connect Ltd brand. */
const BRAND_COLORS = { background_color: "ffffff", text_color: "1b1635", primary_color: "f54e00" };

type Status = "loading" | "ready" | "scheduled";

/**
 * Inline Calendly scheduler. The iframe is created only in the browser, so the page renders
 * without third-party code on the server. Calendly reports progress through postMessage;
 * when a booking completes we swap in our own confirmation.
 */
export function CalendlyEmbed({
  url,
  topicId,
  topicLabel,
}: {
  url: string;
  topicId: string;
  topicLabel: string;
}) {
  const [host, setHost] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => setHost(window.location.host), []);

  const src = useMemo(() => {
    if (!host) return null;
    const embed = new URL(url);
    const params = {
      embed_domain: host,
      embed_type: "Inline",
      hide_gdpr_banner: "1",
      ...BRAND_COLORS,
      // UTM fields are stored on each booking, so the team can see which option was chosen.
      utm_source: "website",
      utm_medium: "booking-page",
      utm_campaign: topicId,
    };
    for (const [key, value] of Object.entries(params)) embed.searchParams.set(key, value);
    return embed.toString();
  }, [host, url, topicId]);

  useEffect(() => {
    setStatus("loading");
    setHeight(null);
    // Safety net: reveal the scheduler even if Calendly never reports that it loaded.
    const timer = window.setTimeout(() => setStatus((s) => (s === "loading" ? "ready" : s)), 6000);
    return () => window.clearTimeout(timer);
  }, [src]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!/^https:\/\/([a-z0-9-]+\.)*calendly\.com$/.test(event.origin)) return;
      const data = event.data as { event?: string; payload?: { height?: string } } | undefined;
      if (data?.event === "calendly.event_type_viewed") setStatus("ready");
      if (data?.event === "calendly.event_scheduled") setStatus("scheduled");
      if (data?.event === "calendly.page_height") {
        const value = Number.parseInt(data.payload?.height ?? "", 10);
        if (value > 0) setHeight(value);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (status === "scheduled") return <BookingConfirmed topicLabel={topicLabel} />;

  return (
    <div className="relative">
      {status === "loading" && <SchedulerSkeleton />}
      {src && (
        <iframe
          key={src}
          src={src}
          title={`Schedule: ${topicLabel} with ${site.name}`}
          className={`block w-full border-0 transition-opacity duration-500 ${status === "loading" ? "h-0 opacity-0" : "h-270 opacity-100 md:h-175"}`}
          style={status === "loading" ? undefined : { height: height ?? undefined }}
          allow="payment"
          onLoad={() =>
            window.setTimeout(() => setStatus((s) => (s === "loading" ? "ready" : s)), 1200)
          }
        />
      )}
    </div>
  );
}

function SchedulerSkeleton() {
  return (
    <div className="animate-pulse p-6 sm:p-8" role="status" aria-label="Loading the scheduler">
      <div className="h-5 w-40 rounded-full bg-gray-200" />
      <div className="mt-3 h-4 w-64 max-w-full rounded-full bg-gray-100" />
      <div className="mt-8 grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }, (_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-full ${i % 5 === 2 ? "bg-brand/15" : "bg-gray-100"}`}
          />
        ))}
      </div>
      <div className="mt-8 space-y-2">
        <div className="h-11 rounded-xl bg-gray-100" />
        <div className="h-11 rounded-xl bg-gray-100" />
      </div>
    </div>
  );
}

function BookingConfirmed({ topicLabel }: { topicLabel: string }) {
  return (
    <div className="animate-fade-in px-6 py-14 text-center sm:px-10 sm:py-20" role="status">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30">
        <CheckIcon className="h-8 w-8" />
      </span>
      <h2 className="mt-6 font-geist text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        You're booked in
      </h2>
      <p className="mx-auto mt-3 max-w-md font-geist text-base text-gray-600">
        Thanks for scheduling "{topicLabel}". A confirmation and calendar invite are on their way to
        your inbox. We look forward to speaking with you.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/services" className={button.dark}>
          Explore our services
        </Link>
        <Link to="/" className={button.outline}>
          Back to home
        </Link>
      </div>
    </div>
  );
}

/** Shown until a Calendly link is configured in src/lib/site.ts. */
export function BookingFallback({ topicLabel }: { topicLabel: string }) {
  const subject = encodeURIComponent(`${topicLabel}: ${site.name} website`);
  return (
    <div className="px-6 py-14 text-center sm:px-10 sm:py-20">
      <h2 className="font-geist text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Let's find a time
      </h2>
      <p className="mx-auto mt-3 max-w-md font-geist text-base text-gray-600">
        Send us a note with a few times that suit you and we'll confirm a call within one working
        day.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={`mailto:${site.email}?subject=${subject}`} className={button.primary}>
          <MailIcon className="h-4 w-4" />
          Email {site.email}
        </a>
        <a href={`tel:${site.phone}`} className={button.outline}>
          <PhoneIcon className="h-4 w-4" />
          {site.phone}
        </a>
      </div>
    </div>
  );
}
