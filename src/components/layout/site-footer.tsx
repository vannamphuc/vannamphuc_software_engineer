import { PERSONAL } from "@/lib/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="relative z-10">
      <div className="mx-auto max-w-6xl px-5">
        <hr className="h-px border-0 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <p className="py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
