"use client";

import { Section } from "@/components/Section";

export default function ErrorPage({ error, reset }) {
  return (
    <Section className="items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-6 md:gap-8 text-center">
        <h1 className="text-primary font-semibold text-[32px]/10 md:text-5xl/[56px] md:tracking-[-0.01em] xl:text-[64px]/[72px] xl:tracking-[-0.02em]">
          Something went wrong
        </h1>
        <p className="text-secondary text-base/[26px] font-normal md:text-xl/8 max-w-tablet">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="flex gap-4 mt-4">
          <button onClick={reset} className="btn btn-surface">
            Try again
          </button>
          <a href="/" className="btn btn-brand">
            Go home
          </a>
        </div>
      </div>
    </Section>
  );
}
