import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/components/AuthProvider";
import { FeedbackProvider } from "@/components/FeedbackProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

import { SEO_KEYWORDS } from "@/lib/seo";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-5xl font-semibold text-foreground sm:text-7xl">404</h1>
        <h2 className="mt-4 text-lg font-semibold text-foreground sm:text-xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shreyans Jain — Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Shreyans Jain is a Senior Full Stack Engineer in Bengaluru, India. React Native, Node.js, TypeScript, Java, Spring Boot, and AWS. Founding member at Trackzio.",
      },
      { name: "keywords", content: SEO_KEYWORDS },
      { name: "author", content: "Shreyans Jain" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#f4efe6" },
      { property: "og:title", content: "Shreyans Jain — Senior Full Stack Engineer" },
      {
        property: "og:description",
        content:
          "Senior Full Stack Engineer in Bengaluru. React Native, Node.js, TypeScript, Java, Spring Boot, and AWS.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shreyans Jain" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shreyans Jain — Senior Full Stack Engineer" },
      {
        name: "twitter:description",
        content:
          "Senior Full Stack Engineer in Bengaluru. React Native, Node.js, TypeScript, Java, Spring Boot, and AWS.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&family=Syne:wght@500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const themeBootScript = `(function(){try{var t=localStorage.getItem('sj-theme');var r=document.documentElement;if(t==='dark'){r.classList.add('dark');r.classList.remove('light');r.style.colorScheme='dark';r.dataset.theme='dark';}else{r.classList.remove('dark');r.classList.add('light');r.style.colorScheme='light';r.dataset.theme='light';}}catch(e){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}})();`;

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <FeedbackProvider>
        <AuthProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
            <SiteHeader />
            <main className="flex-1">
              <Outlet />
            </main>
            <SiteFooter />
            <Toaster />
          </div>
        </AuthProvider>
      </FeedbackProvider>
    </ThemeProvider>
  );
}
