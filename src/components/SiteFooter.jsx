import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-desktop flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12">
        <nav aria-label="Footer links" className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-muted-foreground transition-opacity hover:opacity-70">
            Home
          </Link>
          <Link href="/journals" className="text-muted-foreground transition-opacity hover:opacity-70">
            Journals
          </Link>
          <a
            href="https://github.com/Jam1eL1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-opacity hover:opacity-70"
          >
            GitHub
          </a>
        </nav>
        <p className="text-sm text-muted-foreground">© {currentYear} Jamie Lee. All rights reserved.</p>
      </div>
    </footer>
  );
}
