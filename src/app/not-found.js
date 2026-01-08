import { Section } from "@/components/Section";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section className="items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-6 md:gap-8 text-center">
        <h1 className="text-primary font-semibold text-[32px]/10 md:text-5xl/[56px] md:tracking-[-0.01em] xl:text-[64px]/[72px] xl:tracking-[-0.02em]">
          404
        </h1>
        <h2 className="text-primary font-semibold text-2xl md:text-3xl xl:text-4xl">Page not found</h2>
        <p className="text-secondary text-base/[26px] font-normal md:text-xl/8 max-w-tablet">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/"
            className="px-6 py-3 bg-surface rounded-lg text-accent text-base font-normal hover:bg-[#2a3441] transition-colors duration-300"
          >
            Go home
          </Link>
        </div>
      </div>
    </Section>
  );
}
