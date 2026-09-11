import { createFileRoute } from "@tanstack/react-router";
import { DownloadDocs } from "@/components/DownloadDocs";
import { ProfileNav } from "@/components/ProfileNav";
import { PROFILE } from "@/lib/resume";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shreyans Jain" },
      {
        name: "description",
        content:
          "Professional profile of Shreyans Jain, Senior Full Stack Engineer and Founding Member at Trackzio. Bengaluru, India.",
      },
      { property: "og:title", content: "About — Shreyans Jain" },
      {
        property: "og:description",
        content: "Senior Full Stack Engineer based in Bengaluru, India.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Profile</p>
      <h1 className="font-display text-5xl md:text-7xl text-balance leading-[1]">
        Professional summary
      </h1>
      <ProfileNav className="mt-8" />

      <div className="mt-12 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Senior Full Stack Engineer with <span className="text-foreground">5+ years</span> of
            experience building and operating production applications across mobile, web, and
            backend systems. Primary stack:{" "}
            <span className="text-foreground">React Native, Node.js, and AWS</span>, with
            additional depth in <span className="text-foreground">Java and Spring Boot</span>.
          </p>
          <p>
            Currently a Founding Member and Senior Full Stack Engineer at{" "}
            <a
              href="https://trackzio.com/about/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-2 hover:underline"
            >
              Trackzio
            </a>
            . Responsible for engineering delivery across identification products including
            Banknote AI, Coinzy, and Rockzy, and for coordinating mobile, backend, and dashboard
            teams.
          </p>
          <p>
            Designed the company’s white-label Experts platform (APIs, admin console, and expert
            workspace) and an internal analytics dashboard on Firebase and BigQuery. Earlier roles
            covered Java hospital reporting, Spring Boot services, and Node.js / Angular products
            deployed on AWS.
          </p>
        </div>

        <aside className="space-y-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Location
            </p>
            <p className="font-display text-xl">Bengaluru, India</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Education
            </p>
            <p className="font-display text-xl">MCA, Computer Applications</p>
            <p className="text-sm text-muted-foreground">Chandigarh University</p>
            <p className="text-sm text-muted-foreground mb-4">Pursuing · Expected 2027</p>
            <p className="font-display text-xl">BCA, Computer Science</p>
            <p className="text-sm text-muted-foreground">MDS University, Ajmer</p>
            <p className="text-sm text-muted-foreground">2020 — 2023</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Current role
            </p>
            <p className="font-display text-xl">Trackzio</p>
            <p className="text-sm text-muted-foreground">
              Senior Full Stack Engineer
              <br />
              Founding Member
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              LinkedIn
            </p>
            <a
              href={PROFILE.linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-foreground underline-offset-2 hover:underline break-all"
            >
              {PROFILE.linkedinLabel}
            </a>
          </div>
          <DownloadDocs className="flex-col sm:flex-row" />
        </aside>
      </div>

      <a
        href="https://trackzio.com/about/"
        target="_blank"
        rel="noreferrer"
        className="mt-16 block rounded-lg border border-border bg-card p-6 md:p-8 hover:border-primary/60 transition group"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
          Company profile
        </p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-2xl">Trackzio — Leadership team</p>
            <p className="mt-2 text-muted-foreground">
              Official listing: Shreyans Jain, Senior Full Stack Engineer and Founding Member.
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
            trackzio.com/about
          </span>
        </div>
      </a>

      <div className="mt-20">
        <h2 className="font-display text-2xl mb-6">Areas of responsibility</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Multi-product engineering leadership",
            "White-label platform architecture",
            "React Native (Android and iOS)",
            "Node.js services and AWS operations",
            "Java / Spring production systems",
            "Analytics and product instrumentation",
          ].map((s) => (
            <div
              key={s}
              className="flex items-center gap-3 p-4 rounded-md border border-border bg-card"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-sm">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
