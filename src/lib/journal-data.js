export const journals = [
  {
    id: "cloudfront-image-request-flow",
    title: "Image Performance Before and After Adding CloudFront",
    summary: "Tracing an S3 image request through the browser, Next.js image optimization, and CloudFront caching.",
    date: "2026-08-13",
    displayDate: "Aug 13, 2026",
    status: "draft",
    tags: ["Next.js", "AWS", "CloudFront", "Web Optimization"],
  },
];

export function getJournalById(id) {
  return journals.find((journal) => journal.id === id);
}
