const flowSteps = [
  { title: "Browser", description: "Checks its own cache first" },
  {
    title: "Vercel / Next.js Image Optimization",
    description: "Checks its optimized-image cache, then requests the source when needed",
  },
  { title: "CloudFront", description: "Checks its edge and regional caches for the source image" },
  { title: "S3 (Oregon)", description: "Origin, only reached on a full miss", origin: true },
];

export function CloudFrontRequestFlow() {
  return (
    <figure className="overflow-hidden rounded-xl bg-surface p-4 md:p-6">
      <div className="mb-6 grid grid-cols-2 gap-2 text-center text-[12px]/[16px] font-semibold md:grid-cols-4">
        <div className="rounded-lg border border-foreground/15 px-3 py-2">Full miss</div>
        <div className="rounded-lg border border-brand/40 bg-brand/10 px-3 py-2 text-brand">CloudFront hit</div>
        <div className="rounded-lg border border-brand/40 bg-brand/10 px-3 py-2 text-brand">Vercel hit</div>
        <div className="rounded-lg border border-foreground/15 px-3 py-2">Browser hit</div>
      </div>

      <div className="mx-auto flex max-w-[520px] flex-col items-stretch">
        {flowSteps.map((step, index) => (
          <div key={step.title} className="flex flex-col items-center">
            <div
              className={`w-full rounded-xl border p-4 ${
                step.origin ? "border-foreground/15 bg-background" : "border-brand/30 bg-brand/10"
              }`}
            >
              <p className="text-[16px]/[26px] font-semibold text-foreground">{step.title}</p>
              <p className="mt-1 text-[14px]/[22px] font-normal text-muted-foreground">{step.description}</p>
            </div>
            {index < flowSteps.length - 1 && <div aria-hidden="true" className="h-7 w-px bg-brand/50" />}
          </div>
        ))}
      </div>

      <figcaption className="mt-5 text-center text-[12px]/[16px] font-normal text-muted-foreground">
        The request stops as soon as a layer has a valid cached response. CloudFront is only contacted when Vercel needs
        the source image.
      </figcaption>
    </figure>
  );
}
