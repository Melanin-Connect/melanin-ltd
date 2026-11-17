import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { pageHead, site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | Melanin Connect",
      description:
        "Read how Melanin Connect collects, uses, and safeguards your personal information.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="pt-16 pb-16 sm:pt-20">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 font-geist text-4xl font-bold text-ink sm:text-5xl">Privacy Policy</h1>
        <div className="space-y-6 font-geist leading-relaxed text-gray-700">
          <p className="mb-8 text-sm text-gray-500">Last updated: November 16, 2026</p>

          <PolicySection title="1. Introduction">
            <p>
              Welcome to Melanin Connect ("we," "our," or "us"). We are committed to protecting your
              privacy and ensuring you have a positive experience on our website and in using our
              products and services.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website and use our services.
            </p>
          </PolicySection>

          <PolicySection title="2. Information We Collect">
            <h3 className="mb-3 text-xl font-semibold text-ink">2.1 Information You Provide</h3>
            <p>We may collect information that you provide directly to us, including:</p>
            <PolicyList
              items={[
                "Name and contact information (email address, phone number)",
                "Company information",
                "Messages and communications you send to us",
                "Information provided when you register for our services",
              ]}
            />
            <h3 className="mt-6 mb-3 text-xl font-semibold text-ink">
              2.2 Automatically Collected Information
            </h3>
            <p>
              We may automatically collect certain information about your device and usage patterns,
              including:
            </p>
            <PolicyList
              items={[
                "IP address",
                "Browser type and version",
                "Device information",
                "Usage data and analytics",
                "Cookies and similar tracking technologies",
              ]}
            />
          </PolicySection>

          <PolicySection title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <PolicyList
              items={[
                "Provide, maintain, and improve our services",
                "Process your requests and transactions",
                "Send you technical notices and support messages",
                "Respond to your comments and questions",
                "Monitor and analyze trends and usage",
                "Detect, prevent, and address technical issues",
                "Comply with legal obligations",
              ]}
            />
          </PolicySection>

          <PolicySection title="4. Information Sharing and Disclosure">
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information only in the following circumstances:
            </p>
            <PolicyList
              items={[
                "With your consent",
                "To comply with legal obligations",
                "To protect our rights and safety",
                "With service providers who assist us in operating our website",
              ]}
            />
          </PolicySection>

          <PolicySection title="5. Data Security">
            <p>
              We implement appropriate technical and organizational security measures to protect
              your personal information. However, no method of transmission over the internet or
              electronic storage is 100% secure.
            </p>
          </PolicySection>

          <PolicySection title="6. Your Rights">
            <p>
              Depending on your location, you may have certain rights regarding your personal
              information, including:
            </p>
            <PolicyList
              items={[
                "The right to access your personal information",
                "The right to correct inaccurate information",
                "The right to request deletion of your information",
                "The right to object to processing of your information",
                "The right to data portability",
              ]}
            />
          </PolicySection>

          <PolicySection title="7. Cookies">
            <p>
              We use cookies and similar tracking technologies to track activity on our website and
              hold certain information. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent.
            </p>
          </PolicySection>

          <PolicySection title="8. Changes to This Privacy Policy">
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </PolicySection>

          <PolicySection title="9. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">
              <strong>Email:</strong> {site.email}
              <br />
              <strong>Address:</strong> {site.address}
            </p>
          </PolicySection>
        </div>
      </div>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-ink">{title}</h2>
      {children}
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="ml-4 list-inside list-disc space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
