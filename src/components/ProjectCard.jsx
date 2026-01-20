import Image from "next/image";
import { Badge } from "./Badge";

export function ProjectCard({ title, description, previewSrc, technologies }) {
  return (
    <article
      className="
    w-full flex flex-col
    group
    rounded-xl
    bg-surface
    overflow-hidden
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-md
  "
    >
      {/* Preview Image */}
      <div className="relative w-full h-[160px] md:h-[200px] bg-gradient-preview">
        {" "}
        {previewSrc ? (
          <Image
            src={previewSrc}
            alt={`${title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 450px"
          />
        ) : null}
      </div>
      {/* Project Content */}
      <div className="w-full flex flex-col justify-center items-start gap-3 px-3 py-3 md:gap-4 md:px-6 md:py-6">
        <h3 className="text-foreground text-xl/7 font-semibold md:text-2xl/8  xl:text-[32px]/10">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        {/* <button className="btn btn-brand">View Project</button> */}
      </div>
    </article>
  );
}
