import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserAvatar } from "@/components/UserAvatar";
import { headerLinks } from "@/lib/nav";

export function SiteHeader() {
  const { user, ready, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onPointerDown(event: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="h-0.5 bg-primary" />
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-xl font-semibold tracking-tight">
            Shreyans<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2 ml-auto whitespace-nowrap">
          {headerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-2.5 sm:px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{
                className: "px-2.5 sm:px-3 py-2 text-sm text-foreground rounded-md bg-secondary/50",
              }}
            >
              {link.label}
            </Link>
          ))}
          {ready && user?.role === "admin" ? (
            <Link
              to="/studio"
              className="px-2.5 sm:px-3 py-2 text-sm text-primary hover:text-foreground transition-colors rounded-md"
              activeProps={{
                className: "px-2.5 sm:px-3 py-2 text-sm text-foreground rounded-md bg-secondary/50",
              }}
            >
              Admin
            </Link>
          ) : null}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {ready && user ? (
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                className="inline-flex items-center"
                aria-label="Account menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <UserAvatar name={user.name} />
              </button>
              {menuOpen ? (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-lg border border-border bg-card p-2 shadow-lg">
                  <p className="px-2 py-1.5 text-xs text-muted-foreground truncate">{user.name}</p>
                  {user.role === "admin" ? (
                    <Link
                      to="/studio"
                      className="block rounded-md px-2 py-2 text-sm hover:bg-secondary"
                      onClick={() => setMenuOpen(false)}
                    >
                      Admin
                    </Link>
                  ) : null}
                  <button
                    type="button"
                    className="block w-full rounded-md px-2 py-2 text-left text-sm hover:bg-secondary"
                    onClick={() => {
                      setMenuOpen(false);
                      void logout();
                    }}
                  >
                    Log out
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center text-xs font-mono px-3 py-2 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
