import { JournalCard } from "@/components/journals/JournalCard";
import { journals } from "@/lib/journal-data";

export const metadata = {
  title: "Dev Journals | Jamie Lee",
  description: "Notes on the systems, tools, and implementation details I learn while building web applications.",
};

export default function JournalsPage() {
  return (
    <main className="mx-auto flex w-full max-w-tablet flex-col gap-10">
      <header className="flex flex-col gap-3 border-b border-foreground/10 pb-6 md:gap-4 md:pb-8">
        <h1 className="text-[24px]/[32px] font-semibold tracking-[-0.01em] text-foreground md:text-[32px]/[40px] md:font-bold md:tracking-[-0.02em]">
          Dev Journal
        </h1>
        <p className="max-w-[60ch] text-[16px]/[26px] font-normal text-muted-foreground">
          Short write-ups about questions I run into, assumptions I test, and what I learn along the way.
        </p>
      </header>

      <section aria-labelledby="journal-list-heading" className="flex flex-col gap-4">
        <h2 id="journal-list-heading" className="sr-only">
          Journal entries
        </h2>
        {journals.map((journal) => (
          <JournalCard key={journal.id} journal={journal} />
        ))}
      </section>
    </main>
  );
}
