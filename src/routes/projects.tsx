import { createFileRoute } from "@tanstack/react-router";
import { ProfileNav } from "@/components/ProfileNav";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Shreyans Jain" },
      {
        name: "description",
        content:
          "Selected projects: Banknote AI, Experts platform, product analytics, Coinzy, Afford Plan, and poornasatya.com.",
      },
      { property: "og:title", content: "Projects — Shreyans Jain" },
      {
        property: "og:description",
        content: "Production projects across React Native, Node.js, AWS, and Java.",
      },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    n: "01",
    title: "Banknote AI",
    tag: "Android · iOS · React Native",
    href: "https://trackzio.com/apps/banknotes",
    desc: "Consumer application for AI-based banknote identification, published on Google Play and the App Store. Covers catalogue, collections, marketplace, subscriptions, and expert evaluation.",
    bullets: [
      "Single React Native / TypeScript codebase for Android and iOS, with platform-specific billing (Google Play Billing, StoreKit) and push notifications (FCM, APNs).",
      "Identification flow: camera capture, document crop, model inference, and display of country, denomination, rarity, and historical context.",
      "Backend and data: Node.js APIs, Firebase Authentication, Firestore, Cloud Storage, Analytics, and AWS-hosted services.",
      "Published metrics: 40,000+ downloads, 7,000+ daily active users, 4.3+ rating, 25,000+ catalogue entries.",
      "Product events feed the internal BigQuery dashboard for DAU, identification success, and subscription conversion.",
    ],
    stack: ["React Native", "TypeScript", "Android", "iOS", "Node.js", "Firebase", "AWS"],
  },
  {
    n: "02",
    title: "Experts Platform",
    tag: "White-label · Node.js",
    desc: "Reusable expert-evaluation platform deployed independently for each Trackzio product, including Coinzy and Banknote AI.",
    bullets: [
      "Shared Node.js / Express service with MongoDB, Redis, Socket.IO, scheduled jobs, and AWS S3, branded per product through configuration.",
      "Admin console for expert accounts, credit adjustments, and report operations; expert workspace for queues, evaluations, drafts, and PDF export.",
      "Full request lifecycle: in-app purchase credits, allocation, acceptance windows, structured reports, and push notifications.",
      "Documented rollout process so mobile and frontend teams can integrate additional applications without forking core services.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Redis", "Socket.IO", "AWS S3", "Docker", "React"],
  },
  {
    n: "03",
    title: "Product Analytics Dashboard",
    tag: "BigQuery · React",
    desc: "Internal analytics application for Banknote AI and Coinzy. Firebase events are aggregated in BigQuery and served through a Node.js API to a React interface.",
    bullets: [
      "Daily summary pipeline from Firebase to BigQuery, with Redis caching and MongoDB-backed cohort LTV.",
      "Ten core KPIs including DAU, install-to-first-scan, identification success, quota usage, paywall conversion, and D1 / D4 / D7 retention.",
      "Application comparison, health reporting, event catalogue, SQL editor, and 30 / 90 / 180-day LTV views.",
      "Role-based access by application and page; Docker-based production deployment.",
    ],
    stack: ["BigQuery", "Node.js", "Express", "React", "MongoDB", "Redis", "Docker", "Firebase"],
  },
  {
    n: "04",
    title: "Coinzy",
    tag: "Android · Experts · Analytics",
    href: "https://trackzio.com/apps/coinzy",
    desc: "AI coin-identification product in the Trackzio portfolio. 120,000+ downloads. Shares the Experts platform and analytics stack with Banknote AI.",
    bullets: [
      "Expert evaluation on Android: credit purchases, media upload, request status, refunds, and report viewing.",
      "Branded Coinzy admin and expert dashboards on the shared white-label API.",
      "Firebase instrumentation for identification, subscription, and expert funnels used by the analytics dashboard.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Node.js", "Firebase", "AWS", "BigQuery"],
  },
  {
    n: "05",
    title: "poornasatya.com",
    tag: "Angular · Node.js · AWS",
    href: "https://poornasatya.com",
    desc: "Food-product comparison platform with recommendations, administration tools, and Redis-backed caching.",
    bullets: [
      "REST APIs in Node.js for catalogue data, user profiles, and comparisons.",
      "MySQL and TypeORM with JWT authentication and role-based access control.",
      "Redis caching and Docker deployment on AWS.",
    ],
    stack: ["Angular", "Node.js", "MySQL", "TypeORM", "Redis", "Docker", "AWS"],
  },
  {
    n: "06",
    title: "Afford Plan",
    tag: "Java 17 · Hibernate",
    desc: "Hospital reporting system covering monthly SOC packs, access control, and a Java 8 to Java 17 platform upgrade.",
    bullets: [
      "Monthly SOC reporting modules in Java 17, Hibernate 6, and MySQL, with filters for date range, facility, and department.",
      "Migrated the application from Java 8 and Hibernate 4.4 to Java 17 and Hibernate 6.6, including API compatibility fixes.",
      "Optimized queries for large monthly datasets and implemented role-based access for staff and administrators.",
      "CI/CD through Jenkins and GitHub Actions; Docker deployment on AWS; production support and release coordination.",
    ],
    stack: ["Java 17", "Hibernate 6", "Spring", "MySQL", "Docker", "Jenkins", "AWS"],
  },
  {
    n: "07",
    title: "job4jobless.com",
    tag: "Spring Boot · Angular",
    desc: "Job-board application with a Java Spring Boot backend, Angular frontend, and companion Node.js services.",
    bullets: [
      "End-to-end delivery of backend, frontend, and MongoDB data model.",
      "Node.js services for OTP, chat, and Firebase authentication.",
      "Remote-desktop Java service and CentOS production deployment.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "MongoDB", "Node.js", "CentOS"],
  },
];

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Projects</p>
      <h1 className="font-display text-5xl md:text-7xl text-balance leading-[1] mb-6">
        Selected projects
      </h1>
      <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
        Production systems spanning consumer mobile applications, white-label platforms, analytics,
        and Java enterprise reporting.
      </p>
      <ProfileNav className="mb-16" />

      <div className="space-y-6">
        {projects.map((p) => (
          <article
            key={p.n}
            className="group relative rounded-lg border border-border bg-card p-8 md:p-10 hover:border-primary/60 transition overflow-hidden"
          >
            <div className="relative grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <p className="font-mono text-xs text-primary mb-2">
                  {p.n} — {p.tag}
                </p>
                <h2 className="font-display text-3xl md:text-4xl mb-3">{p.title}</h2>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1"
                  >
                    Project link
                  </a>
                )}
              </div>
              <div className="md:col-span-8">
                <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1.5 size-1 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2 py-1 rounded border border-border">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
