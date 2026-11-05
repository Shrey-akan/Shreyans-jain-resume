import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import { formatBlogDate } from "@/lib/blog";
import { PROFILE } from "@/lib/resume";
import { HOME_DESCRIPTION, pageHead, personJsonLd, siteOrigin } from "@/lib/seo";
import { getBlogIndex } from "@/server/blogs";

export const Route = createFileRoute("/")({
  head: async () =>
    pageHead({
      title: "Shreyans Jain — Senior Full Stack Engineer in Bengaluru",
      description: HOME_DESCRIPTION,
      path: "/",
      type: "profile",
      jsonLd: personJsonLd(await siteOrigin()),
    }),
  loader: () => getBlogIndex(),
  component: Index,
});

const work = [
  {
    title: "Trackzio",
    position: "Senior Full Stack Engineer",
    logo: "/companies/trackzio.svg",
    href: "https://www.linkedin.com/company/trackzio-apps",
  },
  {
    title: "JCentrix",
    position: "Software Engineer",
    logo: "/companies/jcentrix.png",
    href: "https://www.linkedin.com/company/jcentrix",
  },
  {
    title: "Orage Technologies",
    position: "Junior Software Engineer",
    logo: "/companies/orage.jpg?v=3",
    href: "https://www.linkedin.com/company/orage-technologies-private-limited",
  },
  {
    title: "JAS Tech",
    position: "Full Stack Developer",
    image: "/work/shop.jpg",
    href: "/experience",
  },
];

const skills = [
  "React Native",
  "Node.js",
  "TypeScript",
  "Java",
  "Spring Boot",
  "AWS",
  "Firebase",
  "BigQuery",
  "MongoDB",
  "Docker",
  "MySQL",
  "Redis",
];

const tools = [
  { name: "React Native", icon: "/tools/react.svg" },
  { name: "Node.js", icon: "/tools/node.svg" },
  { name: "TypeScript", icon: "/tools/typescript.svg?v=2" },
  { name: "Java", icon: "/tools/java.svg" },
  { name: "Spring Boot", icon: "/tools/spring.svg" },
  { name: "MySQL", icon: "/tools/mysql.svg" },
  { name: "MongoDB", icon: "/tools/mongodb.svg" },
  { name: "Redis", icon: "/tools/redis.svg" },
  { name: "AWS", icon: "/tools/aws.svg" },
  { name: "Firebase", icon: "/tools/firebase.svg" },
  { name: "BigQuery", icon: "/tools/bigquery.svg" },
  { name: "Docker", icon: "/tools/docker.svg" },
  { name: "Nginx", icon: "/tools/nginx.svg" },
  { name: "Git", icon: "/tools/git.svg" },
];

const projects = [
  {
    title: "Banknote AI",
    line: "Android and iOS, one codebase",
    images: ["/work/apps/banknote-1.jpg", "/work/apps/banknote-2.jpg"],
    href: "https://trackzio.com/apps/banknotes",
  },
  {
    title: "Coinzy",
    line: "AI coin identification",
    images: ["/work/apps/coinzy-1.jpg", "/work/apps/coinzy-2.jpg"],
    href: "https://trackzio.com/apps/coinzy",
  },
  {
    title: "Experts Platform",
    line: "White-label evaluation system",
    image: "/work/platform.jpg",
    href: "/projects",
  },
  {
    title: "Product Analytics",
    line: "Firebase and BigQuery dashboard",
    image: "/work/analytics.jpg",
    href: "/projects",
  },
  {
    title: "poornasatya.com",
    line: "Food product comparison",
    images: ["/work/apps/poornasatya-1.jpg", "/work/apps/poornasatya-2.jpg"],
    href: "https://poornasatya.com",
  },
  {
    title: "Afford Plan",
    line: "Java reporting system",
    image: "/companies/affordplan.svg",
    href: "https://affordplan.com",
  },
];

const education = [
  {
    title: "Master of Computer Applications",
    detail: "Chandigarh University · Expected 2027",
  },
  {
    title: "Bachelor of Computer Applications",
    detail: "MDS University, Ajmer · 2023 · Grade 8/10",
  },
  {
    title: "Class XII",
    detail: "CBSE · 2018 · 69%",
  },
  {
    title: "Class X",
    detail: "CBSE · 2016 · 84%",
  },
];

const certifications = [
  "Post Graduate Certification in Java Full Stack Development for Engineers",
];

const languages = ["English", "Hindi"];

const linkedinPosts = [
  {
    date: "27 Oct 2026",
    title: "Monolithic vs microservices",
    excerpt:
      "Don’t choose microservices just because an application needs to scale. Start simple, and add complexity only when it solves a real problem.",
    href: "https://www.linkedin.com/posts/shreyans-jain-8396b6245_softwarearchitecture-microservices-monolithicarchitecture-activity-7520738639195111424-7c2k",
  },
  {
    date: "26 Oct 2026",
    title: "From localhost to production",
    excerpt:
      "A practical deployment setup with a cloud server, Nginx, and a managed Node.js process — simple, secure, and easy to repeat.",
    href: "https://www.linkedin.com/posts/shreyans-jain-8396b6245_devops-nginx-digitalocean-activity-7520440552945778688-o91X",
  },
  {
    date: "9 Oct 2026",
    title: "Building beyond code",
    excerpt:
      "Engineering is about solving real problems: interfaces, backend services, and intelligent features that people can actually use.",
    href: "https://www.linkedin.com/posts/shreyans-jain-8396b6245_fullstackdevelopment-softwareengineering-activity-7514202294305886208-NcRj",
  },
];

function external(href: string) {
  return href.startsWith("http");
}

function Index() {
  const { blogOfTheDay } = Route.useLoaderData();

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-8 sm:px-6 lg:pt-12">
        <div className="relative mx-auto min-h-[34rem] sm:min-h-[38rem]">
          <p className="float-copy absolute left-0 top-2 z-20 font-display text-lg text-primary sm:left-[2%] sm:top-6 sm:text-2xl">
            Hey, this is me
          </p>
          <h1 className="float-copy float-copy-delay absolute left-0 top-[22%] z-20 max-w-[9.5rem] font-display text-4xl leading-[0.95] text-heading sm:left-[1%] sm:top-[30%] sm:max-w-[14rem] sm:text-6xl lg:text-7xl">
            Shreyans
            <span className="block text-primary">Jain</span>
          </h1>
          <p className="float-copy float-copy-late absolute right-0 top-1 z-20 max-w-[46%] text-right font-display text-2xl leading-[0.95] text-subheading sm:top-[8%] sm:max-w-[13rem] sm:text-4xl lg:right-[2%] lg:text-5xl">
            Full Stack Engineer
          </p>
          <p className="float-copy absolute bottom-[18%] right-0 z-20 rounded-full border border-border bg-card/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary sm:bottom-[16%] sm:right-[8%] sm:px-4 sm:py-2 sm:text-xs">
            React Native
          </p>
          <img
            src="/shreyans-coding.png?v=2"
            alt="Illustration of Shreyans Jain coding on a laptop"
            width={872}
            height={752}
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[min(86vw,32rem)] -translate-x-1/2 -translate-y-[42%] object-contain object-center"
          />
        </div>
        <p className="mx-auto mt-2 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Shreyans Jain is a Senior Full Stack Engineer in Bengaluru, with 5 years and 7 months delivering production web
          and mobile systems. The work covers React Native, Node.js, TypeScript, Java, Spring Boot, and AWS. At Trackzio,
          this includes public identification products, a white-label Experts platform, and an internal analytics
          dashboard.
        </p>
      </section>

      <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">02</p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl">Work experience</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {work.map((job) => (
            <a
              key={job.title}
              href={job.href}
              {...(external(job.href) ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group block"
            >
              <span className="flex h-44 items-center justify-center overflow-hidden rounded-[1.4rem] border border-border bg-white px-4 sm:h-52">
                <img
                  src={"logo" in job ? job.logo : job.image}
                  alt=""
                  className={
                    "logo" in job
                      ? "max-h-32 w-[92%] object-contain object-center sm:max-h-36"
                      : "h-full w-full object-contain object-center"
                  }
                />
              </span>
              <span className="mt-4 block font-display text-2xl leading-tight text-heading transition-colors group-hover:text-primary">
                {job.title}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">{job.position}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 border-y border-border bg-surface/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">03</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl">Skills</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-primary">04</p>
        <h2 className="mt-2 text-center font-display text-3xl md:text-5xl">Tools</h2>
        <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap items-start justify-center gap-x-6 gap-y-8 sm:gap-x-8">
          {tools.map((tool) => (
            <li key={tool.name} className="flex w-28 flex-col items-center gap-4 sm:w-32">
              <span className="flex h-24 w-24 items-center justify-center rounded-[1.4rem] border border-border bg-white p-4 shadow-sm">
                <img src={tool.icon} alt="" className="h-14 w-14 object-contain" />
              </span>
              <span className="text-center text-sm text-muted-foreground">{tool.name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">05</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl">Projects</h2>
          </div>
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary">
            All work
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              {...(external(project.href) ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group block"
            >
              <span className="flex aspect-[4/3] w-full items-center justify-center gap-2 overflow-hidden rounded-[1.4rem] border border-border bg-white p-2">
                {"images" in project ? (
                  project.images.map((src) => (
                    <img key={src} src={src} alt="" className="h-full min-w-0 flex-1 object-contain object-center" />
                  ))
                ) : (
                  <img src={project.image} alt="" className="h-full w-full object-contain object-center" />
                )}
              </span>
              <span className="mt-4 block font-display text-2xl leading-tight text-heading transition-colors group-hover:text-primary">
                {project.title}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">{project.line}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">06</p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl">Education</h2>
        <div className="mt-8 grid gap-3">
          {education.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card px-5 py-5 sm:px-6">
              <h3 className="font-display text-2xl leading-tight">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="certification" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">07</p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl">Certification</h2>
        <div className="mt-8 grid gap-3">
          {certifications.map((item) => (
            <article key={item} className="rounded-2xl border border-border bg-card px-5 py-5 sm:px-6">
              <h3 className="font-display text-2xl leading-tight">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="languages" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">08</p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl">Languages</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {languages.map((language) => (
            <li key={language} className="rounded-2xl border border-border bg-card px-6 py-4 font-display text-2xl">
              {language}
            </li>
          ))}
        </ul>
      </section>

      <section id="linkedin" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">09</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl">LinkedIn</h2>
          </div>
          <a
            href="https://www.linkedin.com/in/shreyans-jain-8396b6245/recent-activity/all/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            All activity
          </a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {linkedinPosts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-card px-5 py-5 hover:border-primary sm:px-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{post.date}</p>
              <h3 className="mt-3 font-display text-2xl leading-tight text-heading group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </section>

      {blogOfTheDay ? (
        <section className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">10</p>
              <h2 className="mt-2 font-display text-3xl md:text-5xl">Blog of the day</h2>
            </div>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">
              All posts
            </Link>
          </div>
          <Link
            to="/blog/$slug"
            params={{ slug: blogOfTheDay.slug }}
            className="group mt-8 grid overflow-hidden rounded-[1.4rem] border border-border bg-card md:grid-cols-[1fr_1.1fr]"
          >
            <span className="flex min-h-56 items-center justify-center bg-surface">
              {blogOfTheDay.coverThumb ? (
                <img src={blogOfTheDay.coverThumb} alt="" className="h-full w-full object-contain object-center" />
              ) : (
                <img src="/work/banknote.jpg" alt="" className="h-full max-h-80 w-full object-contain object-center" />
              )}
            </span>
            <span className="flex flex-col justify-center p-6 sm:p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                {formatBlogDate(blogOfTheDay.publishedAt || blogOfTheDay.createdAt)}
              </span>
              <span className="mt-3 font-display text-3xl text-heading group-hover:text-primary">{blogOfTheDay.title}</span>
              <span className="mt-3 text-muted-foreground">{blogOfTheDay.excerpt}</span>
            </span>
          </Link>
        </section>
      ) : null}

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">11</p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl">Contact</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            <a href={`mailto:${PROFILE.email}`} className="block rounded-2xl border border-border bg-card px-5 py-5 hover:border-primary">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Email</p>
              <p className="mt-2 break-all font-display text-2xl">{PROFILE.email}</p>
            </a>
            <a href={PROFILE.phoneHref} className="block rounded-2xl border border-border bg-card px-5 py-5 hover:border-primary">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Phone</p>
              <p className="mt-2 font-display text-2xl">{PROFILE.phone}</p>
            </a>
            <a
              href={PROFILE.linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-border bg-card px-5 py-5 hover:border-primary"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">LinkedIn</p>
              <p className="mt-2 break-all font-display text-2xl">shreyans-jain</p>
            </a>
            <div className="rounded-2xl border border-border bg-card px-5 py-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Location</p>
              <p className="mt-2 font-display text-2xl">{PROFILE.location}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
