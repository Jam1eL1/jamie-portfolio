import { NavMenuRadial } from "./NavMenuRadial";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 bottom-4 z-50 pointer-events-none md:bottom-6">
      <div className="mx-auto max-w-desktop px-6 md:px-12 flex justify-end">
        <NavMenuRadial />
      </div>
    </header>
  );
}
