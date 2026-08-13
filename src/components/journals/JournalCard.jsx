import Link from "next/link";

export function JournalCard({ journal }) {
  return (
    <article className="group rounded-xl bg-surface transition-colors hover:bg-surface-hover">
      <Link href={`/journals/${journal.id}`} className="flex flex-col gap-4 p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <time dateTime={journal.date} className="text-[12px]/[16px] font-medium text-muted-foreground">
            {journal.displayDate}
          </time>
        </div>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-[16px]/[26px] font-semibold text-foreground">{journal.title}</h2>
          <span
            aria-hidden="true"
            className="mt-1 text-[16px]/[26px] text-brand transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </div>
        <p className="text-[14px]/[22px] font-normal text-muted-foreground">{journal.summary}</p>
        <ul aria-label="Topics" className="flex flex-wrap gap-2">
          {journal.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[12px]/[16px] font-semibold uppercase tracking-[0.05em] text-brand"
            >
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
