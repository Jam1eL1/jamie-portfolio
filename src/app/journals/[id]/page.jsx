import Link from "next/link";
import { notFound } from "next/navigation";

import { CloudFrontRequestFlow } from "@/components/journals/CloudFrontRequestFlow";
import { getJournalById, journals } from "@/lib/journal-data";

const performanceResults = [
  { metric: "Mobile LCP", before: "7.5s", after: "7.7s", change: "+0.2s" },
  { metric: "Mobile CLS", before: "0", after: "0", change: "—" },
  { metric: "Mobile Speed Index", before: "2.4s", after: "1.7s", change: "−0.7s" },
  { metric: "Mobile Performance", before: "71", after: "75", change: "+4" },
  { metric: "Desktop LCP", before: "1.8s", after: "1.6s", change: "−0.2s" },
  { metric: "Desktop CLS", before: "0", after: "0", change: "—" },
  { metric: "Desktop Speed Index", before: "1.2s", after: "0.5s", change: "−0.7s" },
  { metric: "Desktop Performance", before: "92", after: "95", change: "+3" },
];

export function generateStaticParams() {
  return journals.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const journal = getJournalById(id);

  if (!journal) {
    return {};
  }

  return {
    title: `${journal.title} | Jamie Lee`,
    description: journal.summary,
  };
}

export default async function JournalPage({ params }) {
  const { id } = await params;
  const journal = getJournalById(id);

  if (!journal) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-tablet">
      <article className="flex flex-col gap-10">
        <header className="flex flex-col gap-4 border-b border-foreground/10 pb-6 md:gap-5 md:pb-8">
          <Link
            href="/journals"
            className="w-fit text-[14px]/[22px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← All journals
          </Link>

          <time dateTime={journal.date} className="text-[12px]/[16px] font-medium text-muted-foreground">
            {journal.displayDate}
          </time>

          <h1 className="text-[24px]/[32px] font-semibold tracking-[-0.01em] text-foreground md:text-[32px]/[40px] md:font-bold md:tracking-[-0.02em]">
            {journal.title}
          </h1>
          <p className="text-[16px]/[26px] font-normal text-muted-foreground">{journal.summary}</p>

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
        </header>

        <section aria-labelledby="summary-heading" className="flex flex-col gap-4">
          <h2 id="summary-heading" className="text-[18px]/[26px] font-semibold">
            Summary
          </h2>
          <div className="flex flex-col gap-4 text-[16px]/[26px] font-normal text-muted-foreground">
            <p>
              Our team introduced AWS CloudFront to improve product-image delivery in{" "}
              <a
                href="https://sn8ck.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-brand/50 underline-offset-4 transition-colors hover:text-brand"
              >
                Snack
              </a>
              , a Next.js application deployed on Vercel.
            </p>
            <p>
              The <code className="rounded bg-surface px-1.5 py-0.5 text-[14px]/[22px] text-foreground">/products</code>{" "}
              page loads many images stored in Amazon S3, making it an ideal page for comparing performance before and
              after implementing CloudFront.
            </p>
            <p>
              I tested both versions in production using Lighthouse’s mobile and desktop presets. The results showed
              faster Speed Index scores and higher overall performance scores, although LCP did not improve
              consistently.
            </p>
            <p className="rounded-lg border-l-2 border-accent bg-accent/10 px-4 py-3 text-[14px]/[22px]">
              <strong className="font-semibold text-foreground">One limitation:</strong> Vercel’s Next.js Image
              Optimization has its own image cache. Later Lighthouse runs may load images from Vercel without reaching
              CloudFront. Because of this, the results show how the full production setup performed after adding
              CloudFront, rather than what CloudFront improved on its own.
            </p>
          </div>
        </section>

        <section aria-labelledby="results-heading" className="flex flex-col gap-5">
          <h2 id="results-heading" className="text-[18px]/[26px] font-semibold">
            Implementation Result
          </h2>

          <div className="overflow-x-auto rounded-xl border border-foreground/10">
            <table className="w-full min-w-[520px] border-collapse text-left text-[14px]/[22px]">
              <caption className="sr-only">Lighthouse results before and after introducing CloudFront</caption>
              <thead className="bg-surface text-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Metric
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">
                    Before
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">
                    After
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/10 text-muted-foreground">
                {performanceResults.map((result) => (
                  <tr key={result.metric}>
                    <th scope="row" className="px-4 py-3 font-medium text-foreground">
                      {result.metric}
                    </th>
                    <td className="px-4 py-3 text-right tabular-nums">{result.before}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{result.after}</td>
                    <td className="px-4 py-3 text-right font-medium tabular-nums text-foreground">{result.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <details className="group rounded-xl bg-surface p-4 md:p-5">
            <summary className="cursor-pointer text-[14px]/[22px] font-semibold text-foreground marker:text-brand">
              View test method
            </summary>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-[14px]/[22px] text-muted-foreground marker:text-brand">
              <li>
                <strong className="font-semibold text-foreground">Environment:</strong> Production{" "}
                <code className="text-[12px]/[16px] text-foreground">/products</code> page deployed on Vercel.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Comparison:</strong> Product image sources changed
                from direct S3 URLs to CloudFront URLs.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Browser:</strong> Chrome Incognito with browser
                caching disabled in DevTools.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Mobile:</strong> Lighthouse mobile preset with its
                default simulated Slow 4G network and CPU throttling.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Desktop:</strong> Lighthouse desktop preset with its
                default throttling settings.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Controlled variables:</strong> The same page, images,
                production environment, and Lighthouse settings were used for both versions.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Runs:</strong> Five runs for each mobile and desktop
                test, with the median reported above.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Scope:</strong> The complete production pipeline,
                including Vercel’s Next.js Image Optimization cache, was measured rather than CloudFront alone.
              </li>
            </ul>
          </details>
        </section>

        <section aria-labelledby="analysis-heading" className="flex flex-col gap-4">
          <h2 id="analysis-heading" className="text-[18px]/[26px] font-semibold">
            Result Analysis
          </h2>
          <div className="flex flex-col gap-4 text-[16px]/[26px] font-normal text-muted-foreground">
            <p>
              The clearest improvement was in Speed Index. Mobile Speed Index improved by 0.7 seconds, while desktop
              Speed Index also improved by 0.7 seconds. The overall performance score increased by four points on mobile
              and three points on desktop.
            </p>
            <p>
              LCP did not improve consistently. Desktop LCP improved by 0.2 seconds, while mobile LCP became 0.2 seconds
              slower. This suggests that the updated pipeline helped display page content sooner overall but did not
              resolve the mobile LCP bottleneck. I plan to investigate that issue separately.
            </p>
          </div>
        </section>

        <section id="request-flow" aria-labelledby="request-flow-heading" className="scroll-mt-6 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 id="request-flow-heading" className="text-[18px]/[26px] font-semibold">
              How the Image Request Flows
            </h2>
            <p className="text-[16px]/[26px] font-normal text-muted-foreground">
              Vercel first checks its optimized-image cache and only contacts CloudFront when it needs the source image.
              CloudFront then checks its cache hierarchy before contacting S3.
            </p>
          </div>
          <CloudFrontRequestFlow />
        </section>

        <section aria-labelledby="limits-heading" className="flex flex-col gap-4 border-t border-foreground/10 pt-8">
          <h2 id="limits-heading" className="text-[18px]/[26px] font-semibold">
            Limits
          </h2>
          <ul className="flex list-disc flex-col gap-3 pl-5 text-[16px]/[26px] font-normal text-muted-foreground marker:text-brand">
            <li>
              <strong className="font-semibold text-foreground">CloudFront was not measured in isolation.</strong>{" "}
              Vercel’s Next.js Image Optimization also caches optimized images. After the first request, later
              Lighthouse runs may receive a Vercel cache hit without contacting CloudFront. The{" "}
              <a
                href="#request-flow"
                className="font-medium text-foreground underline decoration-brand/50 underline-offset-4"
              >
                request-flow diagram
              </a>{" "}
              shows where a Vercel hit stops the request.
            </li>
            <li>
              <strong className="font-semibold text-foreground">CloudFront does not fix late LCP discovery.</strong> It
              can reduce the time needed to retrieve an image after it is requested, but it cannot make the browser
              discover the LCP image earlier. I plan to investigate that issue separately.
            </li>
            <li>
              <strong className="font-semibold text-foreground">Lighthouse results naturally vary.</strong> Network
              conditions, service load, and background activity can affect individual runs even with simulated
              throttling. Reporting the median of five runs reduces the effect of outliers but does not remove all
              variation.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
