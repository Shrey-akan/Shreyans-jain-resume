import { PROFILE } from "@/lib/resume";

export const SEO_KEYWORDS = [
  "Shreyans Jain",
  "Senior Full Stack Engineer",
  "Full Stack Developer Bengaluru",
  "React Native developer",
  "Node.js developer",
  "Java Spring Boot developer",
  "AWS engineer India",
  "TypeScript",
  "MongoDB",
  "Firebase",
  "Trackzio",
  "Banknote AI",
  "Coinzy",
].join(", ");

const DEFAULT_DESCRIPTION =
  "Shreyans Jain is a Senior Full Stack Engineer in Bengaluru, India. React Native, Node.js, TypeScript, Java, Spring Boot, and AWS. Founding member at Trackzio.";

export async function siteOrigin() {
  const fromEnv = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (import.meta.env.SSR) {
    try {
      const { getRequestUrl } = await import("@tanstack/react-start/server");
      return getRequestUrl({ xForwardedHost: true, xForwardedProto: true }).origin;
    } catch {
      return "";
    }
  }
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: "website" | "profile" | "article";
  noindex?: boolean;
  jsonLd?: unknown;
};

export async function pageHead({
  title,
  description,
  path,
  keywords = SEO_KEYWORDS,
  image = "/shreyans-coding.png",
  type = "website",
  noindex = false,
  jsonLd,
}: PageSeo) {
  const origin = await siteOrigin();
  const url = origin ? new URL(path, origin).href : "";
  const imageUrl = origin ? new URL(image, origin).href : "";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: PROFILE.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:site_name", content: PROFILE.name },
      { property: "og:locale", content: "en_IN" },
      ...(url ? [{ property: "og:url", content: url }] : []),
      ...(imageUrl
        ? [
            { property: "og:image", content: imageUrl },
            { property: "og:image:alt", content: "Illustration of Shreyans Jain coding on a laptop" },
            { name: "twitter:image", content: imageUrl },
          ]
        : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(jsonLd ? [{ "script:ld+json": jsonLd }] : []),
    ],
    links: [...(url ? [{ rel: "canonical", href: url }] : [])],
  };
}

export function personJsonLd(origin: string) {
  const url = origin ? `${origin}/` : PROFILE.linkedinHref;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${url}#person`,
        name: PROFILE.name,
        jobTitle: PROFILE.title,
        description: DEFAULT_DESCRIPTION,
        url,
        image: origin ? `${origin}/shreyans-coding.png` : undefined,
        email: `mailto:${PROFILE.email}`,
        telephone: "+917454849868",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        worksFor: {
          "@type": "Organization",
          name: "Trackzio",
          url: "https://trackzio.com",
        },
        sameAs: [PROFILE.linkedinHref, PROFILE.githubHref],
        knowsAbout: [
          "React Native",
          "Node.js",
          "TypeScript",
          "Java",
          "Spring Boot",
          "AWS",
          "MongoDB",
          "Firebase",
          "Full Stack Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        name: `${PROFILE.name} — ${PROFILE.title}`,
        url,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en-IN",
        author: { "@id": `${url}#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profile`,
        url,
        name: `${PROFILE.name} — ${PROFILE.title}`,
        about: { "@id": `${url}#person` },
        mainEntity: { "@id": `${url}#person` },
      },
    ],
  };
}

export const HOME_DESCRIPTION = DEFAULT_DESCRIPTION;
