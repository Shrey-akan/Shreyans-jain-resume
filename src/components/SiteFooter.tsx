import { Link } from "@tanstack/react-router";
import {
  COVER_LETTER_PDF_FILENAME,
  COVER_LETTER_PDF_PATH,
  PROFILE,
  RESUME_PDF_FILENAME,
  RESUME_PDF_PATH,
} from "@/lib/resume";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Shreyans Jain</p>
          <p className="font-mono text-xs text-muted-foreground mt-2">
            Senior Full Stack Engineer · Bengaluru
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/projects" className="text-muted-foreground hover:text-primary w-fit">
            Projects →
          </Link>
          <Link to="/experience" className="text-muted-foreground hover:text-primary w-fit">
            Experience →
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary w-fit">
            Contact
          </Link>
          <a
            href={RESUME_PDF_PATH}
            download={RESUME_PDF_FILENAME}
            className="text-muted-foreground hover:text-primary w-fit"
          >
            Download resume (PDF)
          </a>
          <a
            href={COVER_LETTER_PDF_PATH}
            download={COVER_LETTER_PDF_FILENAME}
            className="text-muted-foreground hover:text-primary w-fit"
          >
            Download cover letter (PDF)
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm font-mono">
          <a
            href="mailto:shreyansjain2603@gmail.com"
            className="text-muted-foreground hover:text-primary"
          >
            shreyansjain2603@gmail.com
          </a>
          <a
            href={PROFILE.githubHref}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            github.com/Shrey-akan
          </a>
          <a
            href={PROFILE.linkedinHref}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
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
        <div className="mx-auto max-w-6xl px-6 py-4 flex justify-between text-xs font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} Shreyans Jain</span>
          <span>Bengaluru, India</span>
        </div>
      </div>
    </footer>
  );
}
