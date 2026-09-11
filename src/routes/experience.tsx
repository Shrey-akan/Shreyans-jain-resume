import { createFileRoute } from "@tanstack/react-router";
import { ProfileNav } from "@/components/ProfileNav";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Shreyans Jain" },
      {
        name: "description",
        content:
          "Professional experience: Trackzio, JCentrix, Orage Technologies, and JAS Tech. React Native, Node.js, AWS, Java.",
      },
      { property: "og:title", content: "Experience — Shreyans Jain" },
      {
        property: "og:description",
        content: "5+ years of full-stack engineering experience.",
      },
    ],
  }),
  component: Experience,
});

const jobs = [
  {
    role: "Senior Full Stack Engineer, Founding Member",
    company: "Trackzio",
    companyHref: "https://trackzio.com/about/",
    location: "Bengaluru, India",
    period: "Dec 2025 — Present",
    bullets: [
      "Lead engineering for multiple AI identification products (Banknote AI, Coinzy, Rockzy), coordinating mobile, backend, and dashboard teams from design through release.",
      "Designed a white-label Experts platform in Node.js and Express (MongoDB, Redis, Socket.IO, AWS S3), with branded admin and expert dashboards deployed per product.",
      "Delivered Banknote AI on Android and iOS from a single React Native / TypeScript codebase: camera identification, Google Play Billing and StoreKit purchases, and FCM / APNs notifications.",
      "Banknote AI live metrics: 40,000+ downloads, 7,000+ daily active users, 4.3+ store rating, and a catalogue of 25,000+ banknotes.",
      "Built the internal product-analytics dashboard (Firebase, BigQuery, Node.js, React) with 10 KPIs, conversion funnels, and cohort LTV for Banknote and Coinzy.",
      "Implemented expert evaluation workflows including credit-based requests, allocation, structured reports, and real-time queue updates.",
      "Operate AWS and Docker production environments, GitHub Actions CI/CD, and engineering handovers for parallel team delivery.",
    ],
    stack: [
      "React Native",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "AWS",
      "Firebase",
      "BigQuery",
      "Docker",
    ],
  },
  {
    role: "Software Engineer",
    company: "JCentrix Private Limited",
    location: "Noida, India",
    period: "Nov 2024 — Dec 2025",
    bullets: [
      "Developed poornasatya.com, a food-product comparison platform, using Node.js, Angular 14, MySQL, TypeORM, Redis, JWT-based access control, and AWS.",
      "Engineered Afford Plan hospital reporting in Java 17, Hibernate 6, and MySQL, including monthly SOC modules with date, facility, and department filters.",
      "Led the Afford Plan upgrade from Java 8 to Java 17 and Hibernate 4 to 6; resolved API defects and optimized queries for large monthly datasets.",
      "Established CI/CD with Jenkins, GitHub Actions, and Docker, and coordinated production releases with QA.",
      "Supported Openbravo ERP analysis and documentation, and managed client-facing enhancements.",
    ],
    stack: ["Java 17", "Hibernate", "Spring", "Node.js", "Angular", "MySQL", "AWS", "Docker"],
  },
  {
    role: "Junior Software Engineer",
    company: "Orage Technologies Pvt. Ltd.",
    location: "Noida, India",
    period: "Aug 2023 — Nov 2024",
    bullets: [
      "Built and deployed job4jobless.com using Java Spring Boot, Angular, and MongoDB on CentOS.",
      "Implemented Node.js services for OTP delivery, chat, and Firebase authentication alongside the Java backend.",
      "Developed a remote-desktop Java service and owned production deployment and maintenance.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "MongoDB", "Node.js", "CentOS"],
  },
  {
    role: "Full Stack Developer",
    company: "JAS Tech IT Solutions",
    location: "Jaipur, India",
    period: "Sep 2021 — Aug 2023",
    bullets: [
      "Designed client interfaces in Figma and implemented them in Angular and WordPress.",
      "Delivered Shopify storefronts (themes, collections, checkout) and Magento catalog implementations for e-commerce clients.",
      "Developed Java Spring REST APIs and maintained multi-site WordPress environments, including themes, plugins, and content workflows.",
    ],
    stack: ["Figma", "Shopify", "Magento", "WordPress", "Java Spring", "Angular"],
  },
];

function Experience() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Experience</p>
      <h1 className="font-display text-5xl md:text-7xl text-balance leading-[1] mb-6">
        Work history
      </h1>
      <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
        5+ years across consumer mobile products, white-label platforms, Java enterprise systems,
        and client e-commerce.
      </p>
      <ProfileNav className="mb-16" />

      <ol className="relative border-l border-border ml-3">
        {jobs.map((job, i) => (
          <li key={job.company + job.period} className="mb-16 ml-8 relative">
            <span className="absolute -left-[42px] top-1.5 flex items-center justify-center size-7 rounded-full bg-background border-2 border-primary font-mono text-xs text-primary">
              {String(jobs.length - i).padStart(2, "0")}
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h2 className="font-display text-2xl md:text-3xl">{job.role}</h2>
              <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
            </div>
            <p className="text-primary font-medium mb-5">
              {"companyHref" in job && job.companyHref ? (
                <a
                  href={job.companyHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {job.company}
                </a>
              ) : (
                job.company
              )}{" "}
              <span className="text-muted-foreground font-normal">· {job.location}</span>
              {"companyHref" in job && job.companyHref ? (
                <a
                  href={job.companyHref}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 font-mono text-xs text-muted-foreground hover:text-primary"
                >
                  Company profile
                </a>
              ) : null}
            </p>
            <ul className="space-y-2.5 text-muted-foreground leading-relaxed">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-primary mt-2 size-1 rounded-full bg-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
              {job.stack.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded border border-border text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-lg border border-border bg-card p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Education</p>
        <div className="space-y-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h2 className="font-display text-2xl">Master of Computer Applications (MCA)</h2>
              <p className="text-muted-foreground mt-1">Chandigarh University · Pursuing</p>
            </div>
            <span className="font-mono text-xs text-muted-foreground">Expected 2027</span>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h2 className="font-display text-2xl">Bachelor of Computer Applications (BCA)</h2>
              <p className="text-muted-foreground mt-1">
                MDS University, Ajmer · Computer Science
              </p>
            </div>
            <span className="font-mono text-xs text-muted-foreground">2020 — 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}
