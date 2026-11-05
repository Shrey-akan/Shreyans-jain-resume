import { createFileRoute } from "@tanstack/react-router";

const pages = ["/", "/about", "/experience", "/projects", "/skills", "/contact", "/blog"];

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        let posts: { slug: string; publishedAt: string | null; createdAt: string }[] = [];
        try {
          const { listPublicBlogs } = await import("@/server/blogs.server");
          const data = await listPublicBlogs();
          posts = data.posts;
        } catch {
          posts = [];
        }

        const urls = [
          ...pages.map((path) => ({ loc: `${origin}${path === "/" ? "/" : path}`, lastmod: "" })),
          ...posts.map((post) => ({
            loc: `${origin}/blog/${post.slug}`,
            lastmod: (post.publishedAt || post.createdAt || "").slice(0, 10),
          })),
        ];

        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>${url.lastmod ? `\n    <lastmod>${escapeXml(url.lastmod)}</lastmod>` : ""}
  </url>`,
  )
  .join("\n")}
</urlset>
`;
        return new Response(body, {
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
