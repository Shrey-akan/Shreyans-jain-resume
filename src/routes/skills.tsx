import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Shreyans Jain" },
      {
        name: "description",
        content:
          "Technical skills: React Native, Node.js, AWS, Java, Spring Boot, Firebase, BigQuery, and related tools.",
      },
      { property: "og:title", content: "Skills — Shreyans Jain" },
      {
        property: "og:description",
        content: "Technical skills: React Native, Node.js, AWS, Java, BigQuery.",
      },
    ],
  }),
  component: Skills,
});

const groups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Java", "Kotlin", "SQL"] },
  {
    title: "Mobile",
    items: ["React Native", "Android", "iOS", "Jetpack Compose", "In-app purchases", "Push notifications"],
  },
  {
    title: "Frontend",
    items: ["React", "Angular", "HTML", "CSS", "Tailwind CSS", "Figma"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT", "Microservices"],
  },
  {
    title: "Java",
    items: ["Java 8 / 17", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate / JPA"],
  },
  {
    title: "Data and cloud",
    items: ["AWS", "Firebase", "BigQuery", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "DevOps",
    items: ["Docker", "Nginx", "GitHub Actions", "Jenkins", "Ubuntu", "CentOS"],
  },
  {
    title: "Commerce and CMS",
    items: ["Shopify", "Magento", "WordPress"],
  },
];

function Skills() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Skills</p>
      <h1 className="font-display text-5xl md:text-7xl text-balance leading-[1] mb-6">
        Technical skills
      </h1>
      <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
        Primary focus on React Native, Node.js, AWS, and Java, with supporting experience in
        analytics, e-commerce, and DevOps.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-display text-xl mb-4">{g.title}</h2>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-md border border-border bg-background text-sm text-muted-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
