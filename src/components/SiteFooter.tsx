import { Link } from "@tanstack/react-router";
import { headerLinks, profileLinks } from "@/lib/nav";
import {
  COVER_LETTER_PDF_FILENAME,
  COVER_LETTER_PDF_PATH,
  PROFILE,
  RESUME_PDF_FILENAME,
  RESUME_PDF_PATH,
} from "@/lib/resume";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60 sm:mt-24 md:mt-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:grid-cols-2 sm:px-6 sm:py-12 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">Shreyans Jain</p>
          <p className="font-mono text-xs text-muted-foreground mt-2">
            Senior Full Stack Engineer · Bengaluru
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Visit</p>
          <Link to="/" className="text-muted-foreground hover:text-primary w-fit">
            Home
          </Link>
          {headerLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-muted-foreground hover:text-primary w-fit">
              {link.label}
            </Link>
          ))}
          <Link to="/login" className="text-muted-foreground hover:text-primary w-fit">
            Log in
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Profile</p>
          {profileLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-muted-foreground hover:text-primary w-fit">
              {link.label}
            </Link>
          ))}
          <a
            href={RESUME_PDF_PATH}
            download={RESUME_PDF_FILENAME}
            className="text-muted-foreground hover:text-primary w-fit"
          >
            Resume (PDF)
          </a>
          <a
            href={COVER_LETTER_PDF_PATH}
            download={COVER_LETTER_PDF_FILENAME}
            className="text-muted-foreground hover:text-primary w-fit"
          >
            Cover letter (PDF)
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm font-mono">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1 font-sans">
            Connect
          </p>
          <a href={`mailto:${PROFILE.email}`} className="break-all text-muted-foreground hover:text-primary">
            {PROFILE.email}
          </a>
          <a href={PROFILE.githubHref} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
            github.com/Shrey-akan
          </a>
          <a href={PROFILE.linkedinHref} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
            {PROFILE.linkedinLabel}
          </a>
          <a
            href="https://trackzio.com/about/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            trackzio.com/about
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs font-mono text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} Shreyans Jain</span>
          <span>Bengaluru, India</span>
        </div>
      </div>
    </footer>
  );
}
