import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import { DownloadDocs } from "@/components/DownloadDocs";
import { PROFILE } from "@/lib/resume";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shreyans Jain" },
      {
        name: "description",
        content: "Contact Shreyans Jain — Senior Full Stack Engineer, Bengaluru.",
      },
      { property: "og:title", content: "Contact — Shreyans Jain" },
      {
        property: "og:description",
        content: "Email, phone, LinkedIn, and company profile.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref },
  { label: "LinkedIn", value: PROFILE.linkedinLabel, href: PROFILE.linkedinHref },
  { label: "GitHub", value: PROFILE.githubLabel, href: PROFILE.githubHref },
  { label: "Company profile", value: PROFILE.trackzioLabel, href: PROFILE.trackzioHref },
];

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 md:py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Contact</p>
      <h1 className="font-display text-4xl leading-[1] text-balance sm:text-5xl md:text-7xl">
        Get in touch
      </h1>

      <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
        Open to senior full-stack engineering roles. Based in Bengaluru. Typical response time is
        within one business day.
      </p>

      <div className="mt-8">
        <DownloadDocs />
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-4">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex min-w-0 items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 transition hover:border-primary/60 sm:p-6"
          >
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
                {c.label}
              </p>
              <p className="break-words font-display text-base group-hover:text-primary transition sm:text-lg">{c.value}</p>
            </div>
            <span className="shrink-0 text-muted-foreground group-hover:text-primary transition">→</span>
          </a>
        ))}
      </div>

      <div className="mt-16">
        <ContactForm />
      </div>
    </div>
  );
}
