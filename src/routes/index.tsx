import { createFileRoute, Link } from "@tanstack/react-router";
import { DownloadDocs } from "@/components/DownloadDocs";
import { formatBlogDate } from "@/lib/blog";
import { profileLinks } from "@/lib/nav";
import { PROFILE } from "@/lib/resume";
import { getBlogIndex } from "@/server/blogs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreyans Jain — Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Senior Full Stack Engineer with 5+ years of experience in React Native, Node.js, AWS, and Java. Founding Member at Trackzio.",
      },
      { property: "og:title", content: "Shreyans Jain — Senior Full Stack Engineer" },
      {
        property: "og:description",
        content:
          "Senior Full Stack Engineer with 5+ years of experience in React Native, Node.js, AWS, and Java. Founding Member at Trackzio.",
      },
    ],
  }),
  loader: () => getBlogIndex(),
  component: Index,
});

const competencies = [
  "React Native",
  "Node.js",
  "AWS",
  "Java",
  "Spring Boot",
  "Firebase",
  "BigQuery",
  "MongoDB",
];

const featured = [
  {
    n: "01",
    title: "Banknote AI",
    blurb:
      "Android and iOS application for AI banknote identification. 40,000+ downloads, 7,000+ daily active users, 4.3+ store rating.",
    tags: ["React Native", "Node.js", "Firebase", "AWS"],
  },
  {
    n: "02",
    title: "Experts Platform",
    blurb:
      "White-label expert evaluation system reused across Trackzio products, with admin and expert dashboards per application.",
    tags: ["Node.js", "MongoDB", "AWS S3", "React"],
  },
  {
    n: "03",
    title: "Product Analytics",
    blurb:
      "Internal Firebase–BigQuery dashboard covering 10 KPIs, funnels, and cohort LTV for Banknote and Coinzy.",
    tags: ["BigQuery", "Node.js", "React", "Docker"],
  },
];

function Index() {
  const { blogOfTheDay } = Route.useLoaderData();

  return (
    <div className="grain">
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 sm:pt-16 md:pt-24 md:pb-16">
        <div className="relative overflow-hidden rounded-xl border border-border bg-card">
          <div className="h-1.5 bg-primary" />
          <div className="absolute left-0 top-1.5 bottom-0 w-1 bg-primary/70" />
          <div className="p-5 sm:p-8 md:p-12">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary mb-4">
                  Curriculum Vitae
                </p>
                <h1 className="font-display text-4xl leading-[0.95] sm:text-5xl md:text-7xl">Shreyans Jain</h1>
                <p className="mt-4 font-display text-xl md:text-2xl text-primary">
                  Senior Full Stack Engineer
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Founding Member,{" "}
                  <a
                    href={PROFILE.trackzioHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground underline-offset-2 hover:underline"
                  >
                    Trackzio
                  </a>
                  <span className="mx-2 text-border">|</span>
                  Bengaluru, India
                </p>
              </div>
              <DownloadDocs />
            </div>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Full-stack engineer with <span className="text-foreground">5+ years</span> of
              experience delivering production web and mobile systems. Specializes in{" "}
              <span className="text-foreground">React Native</span>,{" "}
              <span className="text-foreground">Node.js</span>,{" "}
              <span className="text-foreground">AWS</span>, and{" "}
              <span className="text-foreground">Java / Spring Boot</span>. At Trackzio, leads
              engineering across multiple identification products, owns the white-label Experts
              platform, and built the company product-analytics dashboard.
            </p>

            <div className="mt-8 grid gap-3 text-xs font-mono sm:grid-cols-2 sm:text-sm">
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-md border border-border px-4 py-3 text-muted-foreground hover:text-primary hover:border-primary/60 transition break-all"
              >
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.phoneHref}
                className="rounded-md border border-border px-4 py-3 text-muted-foreground hover:text-primary hover:border-primary/60 transition break-all"
              >
                {PROFILE.phone}
              </a>
              <a
                href={PROFILE.linkedinHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-4 py-3 text-muted-foreground hover:text-primary hover:border-primary/60 transition break-all"
              >
                {PROFILE.linkedinLabel}
              </a>
              <a
                href={PROFILE.githubHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-4 py-3 text-muted-foreground hover:text-primary hover:border-primary/60 transition break-all"
              >
                {PROFILE.githubLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-3 px-4 py-5 sm:gap-x-8 sm:px-6 sm:py-6">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Core skills
          </span>
          {competencies.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-12 sm:gap-6 sm:px-6 sm:py-16 md:grid-cols-4 md:gap-8 md:py-20">
        {[
          { n: "5+", l: "Years of experience" },
          { n: "40K+", l: "Banknote downloads" },
          { n: "7K+", l: "Daily active users" },
          { n: "4.3+", l: "Store rating" },
        ].map((s) => (
          <div key={s.l} className="border-l-2 border-primary/60 pl-5">
            <p className="font-display text-3xl text-primary sm:text-4xl md:text-5xl">{s.n}</p>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
              {s.l}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 sm:mb-10">
          <h2 className="font-display text-3xl md:text-4xl">Explore</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profileLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group rounded-lg border border-border bg-card p-5 transition hover:border-primary/60 sm:p-6"
            >
              <h3 className="font-display text-2xl group-hover:text-primary transition">{item.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.hint}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary">
                Open →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 sm:mb-10">
          <h2 className="font-display text-3xl md:text-4xl">Selected work</h2>
          <Link
            to="/projects"
            className="font-mono text-xs text-muted-foreground hover:text-primary"
          >
            All projects
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link
              key={p.n}
              to="/projects"
              className="group block rounded-lg border border-border bg-card p-5 transition hover:border-primary/60 sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                {p.n}
              </p>
              <h3 className="font-display text-2xl mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{p.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {blogOfTheDay ? (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 sm:mb-10">
            <h2 className="font-display text-3xl md:text-4xl">Blog of the day</h2>
            <Link to="/blog" className="font-mono text-xs text-muted-foreground hover:text-primary">
              All posts
            </Link>
          </div>
          <Link
            to="/blog/$slug"
            params={{ slug: blogOfTheDay.slug }}
            className="group grid md:grid-cols-[1fr_1.2fr] overflow-hidden rounded-xl border border-border bg-card hover:border-primary/60 transition"
          >
            <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                {formatBlogDate(blogOfTheDay.publishedAt || blogOfTheDay.createdAt)}
              </p>
              <h3 className="font-display text-3xl group-hover:text-primary transition">
                {blogOfTheDay.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{blogOfTheDay.excerpt}</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {blogOfTheDay.likesCount} likes · {blogOfTheDay.commentsCount} comments · {blogOfTheDay.views}{" "}
                reads
              </p>
            </div>
            {blogOfTheDay.coverThumb ? (
              <img
                src={blogOfTheDay.coverThumb}
                alt=""
                className="h-full min-h-48 w-full object-cover"
              />
            ) : (
              <div className="min-h-48 bg-secondary/40" />
            )}
          </Link>
        </section>
      ) : null}
    </div>
  );
}
