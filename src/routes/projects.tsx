import { createFileRoute } from "@tanstack/react-router";
import { ProfileNav } from "@/components/ProfileNav";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () =>
    pageHead({
      title: "Projects — Shreyans Jain | Banknote AI, Coinzy, React Native",
      description:
        "Projects by Shreyans Jain: Banknote AI, Coinzy, Experts platform, product analytics, Afford Plan, poornasatya.com, and job4jobless.com.",
      path: "/projects",
      keywords:
        "Shreyans Jain projects, Banknote AI, Coinzy, poornasatya, job4jobless, React Native app, Node.js, AWS, Java",
    }),
  component: Projects,
});

const projects = [
  {
    n: "01",
    images: ["/work/apps/banknote-1.jpg", "/work/apps/banknote-2.jpg"],
    title: "Banknote AI",
    tag: "Android · iOS · React Native",
    href: "https://trackzio.com/apps/banknotes",
    desc: "Consumer application for AI-based banknote identification, published on Google Play and the App Store. Covers catalogue, collections, marketplace, subscriptions, and expert evaluation.",
    bullets: [
      "Single React Native / TypeScript codebase for Android and iOS, with platform-specific billing (Google Play Billing, StoreKit) and push notifications (FCM, APNs).",
      "Identification flow: camera capture, document crop, model inference, and a result screen for the note.",
      "Backend and data: Node.js APIs, Firebase Authentication, Firestore, Cloud Storage, and AWS-hosted services.",
      "Live on Google Play and the App Store.",
    ],
    stack: ["React Native", "TypeScript", "Android", "iOS", "Node.js", "Firebase", "AWS"],
  },
  {
    n: "02",
    image: "/work/platform.jpg",
    title: "Experts Platform",
    tag: "White-label · Node.js",
    desc: "Reusable expert-evaluation platform deployed independently for each Trackzio product, including Coinzy and Banknote AI.",
    bullets: [
      "Shared Node.js / Express service with MongoDB, Redis, Socket.IO, scheduled jobs, and AWS S3, branded per product through configuration.",
      "Admin console for expert accounts and report operations; expert workspace for queues, evaluations, drafts, and PDF export.",
      "Request lifecycle covering assignment, structured reports, and push notifications.",
      "Documented rollout process so mobile and frontend teams can integrate additional applications without forking core services.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Redis", "Socket.IO", "AWS S3", "Docker", "React"],
  },
  {
    n: "03",
    image: "/work/analytics.jpg",
    title: "Product Analytics Dashboard",
    tag: "BigQuery · React",
    desc: "Internal analytics application for the identification products. Firebase events are aggregated in BigQuery and served through a Node.js API to a React interface.",
    bullets: [
      "Aggregation from Firebase into BigQuery, with a Node.js API and Redis caching in front of the UI.",
      "Shared views so product and engineering can compare applications in one place.",
      "Role-based access and Docker-based production deployment.",
    ],
    stack: ["BigQuery", "Node.js", "Express", "React", "MongoDB", "Redis", "Docker", "Firebase"],
  },
  {
    n: "04",
    images: ["/work/apps/coinzy-1.jpg", "/work/apps/coinzy-2.jpg"],
    title: "Coinzy",
    tag: "Android · Experts · Analytics",
    href: "https://trackzio.com/apps/coinzy",
    desc: "AI coin-identification product in the Trackzio portfolio. Shares the Experts platform and analytics stack with Banknote AI.",
    bullets: [
      "Expert evaluation on Android: media upload, request status, and report viewing.",
      "Branded Coinzy admin and expert dashboards on the shared white-label API.",
      "Firebase instrumentation used by the analytics dashboard.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Node.js", "Firebase", "AWS", "BigQuery"],
  },
  {
    n: "05",
    images: ["/work/apps/poornasatya-1.jpg", "/work/apps/poornasatya-2.jpg"],
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
    image: "/companies/affordplan.svg",
    title: "Afford Plan",
    tag: "Java 17 · Hibernate",
    href: "https://affordplan.com",
    desc: "Reporting system for Afford Plan, including access control and a Java 8 to Java 17 platform upgrade.",
    bullets: [
      "Reporting modules in Java 17, Hibernate 6, and MySQL.",
      "Migrated the application from Java 8 and Hibernate 4 to Java 17 and Hibernate 6, including API compatibility fixes.",
      "Optimized queries for large monthly datasets and implemented role-based access for staff and administrators.",
      "CI/CD through Jenkins and GitHub Actions; Docker deployment on AWS; production support and release coordination.",
    ],
    stack: ["Java 17", "Hibernate 6", "Spring", "MySQL", "Docker", "Jenkins", "AWS"],
  },
  {
    n: "07",
    image: "/work/browser.jpg",
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
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 md:py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Projects</p>
      <h1 className="mb-6 font-display text-4xl leading-[1] text-balance sm:text-5xl md:text-7xl">
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
            className="group relative overflow-hidden rounded-lg border border-border bg-card p-5 transition hover:border-primary/60 sm:p-8 md:p-10"
          >
            <div className="relative grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <span className="mb-5 flex aspect-[4/3] w-full items-center justify-center gap-2 overflow-hidden rounded-[1.4rem] border border-border bg-white p-2">
                  {"images" in p ? (
                    p.images.map((src) => (
                      <img key={src} src={src} alt="" className="h-full min-w-0 flex-1 object-contain object-center" />
                    ))
                  ) : (
                    <img src={p.image} alt="" className="h-full w-full object-contain object-center" />
                  )}
                </span>
                <p className="font-mono text-xs text-primary mb-2">
                  {p.n} — {p.tag}
                </p>
                <h2 className="mb-3 font-display text-2xl sm:text-3xl md:text-4xl">{p.title}</h2>
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
