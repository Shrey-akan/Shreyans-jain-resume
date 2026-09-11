import { Link } from "@tanstack/react-router";
import { DownloadDocs } from "@/components/DownloadDocs";
import { PROFILE } from "@/lib/resume";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="h-0.5 bg-primary" />
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-xl font-semibold tracking-tight">
            Shreyans<span className="text-primary">.</span>
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-muted-foreground">
            senior full stack engineer
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{
                className: "px-3 py-2 text-sm text-foreground rounded-md bg-secondary/50",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={PROFILE.linkedinHref}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center text-xs font-mono px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <DownloadDocs variant="header" />
        </div>
      </div>
    </header>
  );
}
