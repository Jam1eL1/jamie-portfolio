import Image from "next/image";
import { Badge } from "./Badge";

export function ProjectCard({ title, description, previewSrc, technologies, status }) {
  return (
    <article
      className="
    w-full h-full md:min-h-[460px] flex flex-col
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
      <div className="relative w-full h-40 md:h-50 bg-gradient-preview">
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
        {status && (
          <div className="absolute top-2 right-2">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm
        ${status === "completed" ? "bg-success text-white" : ""}
        ${status === "in-progress" ? "bg-accent text-white" : ""}
        ${status === "planned" ? "bg-blue-500/80 text-white" : ""}
      `}
            >
              {status === "in-progress" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="w-full flex flex-col flex-1 justify-center items-start gap-3 px-3 py-3 md:gap-4 md:px-6 md:py-6 ">
        <h3 className="text-foreground text-base/[26px] font-normal">{title}</h3>
        <p className="text-muted-foreground text-sm font-normal">{description}</p>
        <div className="mt-auto flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
