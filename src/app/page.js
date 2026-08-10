import { ToolsGrid } from "@/components/ToolsGrid";
import { ProjectCard } from "@/components/ProjectCard";
import projectSnackPreview from "@/assets/images/project_snack_preview.webp";
import { ContactActions } from "@/components/ContactActions";

export default function HomePage() {
  const displayName = "JAMIE LEE";
  const projects = [
    {
      title: "Buddiz",
      description: "A space for developers",
      previewSrc: projectSnackPreview,
      technologies: ["next.js", "react", "typescript", "node.js", "tailwind"],
      status: "in-progress",
      url: "",
    },
    {
      title: "Snack",
      description: "An all-in-one office procurement service",
      previewSrc: projectSnackPreview,
      technologies: ["next.js", "react", "typescript", "node.js", "tailwind", "aws"],
      status: "completed",
      url: "https://sn8ck.com",
    },
  ];
  return (
    //  Content Container
    <div className="w-full flex flex-col gap-6 md:flex-row md:gap-4">
      {/* Left Profile Rail */}
      <header
        className="
    w-full flex flex-col gap-3 justify-start items-start
    md:w-[260px] 
    md:sticky md:top-[50vh] md:-translate-y-1/2
    md:self-start md:shrink-0
  "
      >
        <h1
          className="text-rise-stagger text-foreground text-2xl/8 font-semibold tracking-[-0.01em] md:text-[36px]/[44px] md:font-bold md:tracking-[-0.02em]"
          aria-label={displayName}
        >
          {[...displayName].map((char, index) => (
            <span key={`${char}-${index}`} style={{ "--i": index }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-muted-foreground text-base/[26px] font-normal">Junior Full Stack Developer</p>
        <ContactActions />
      </header>
      {/* Main Content */}
      <main className="w-full flex-1 flex flex-col gap-6 md:gap-10">
        {/* About */}
        <section className="flex flex-col w-full gap-3 md:gap-5">
          <div className="sticky top-0 z-20 full  backdrop-blur bg-background/65 py-2 ">
            <h2 className="text-[18px]/[26px] font-semibold uppercase pl-3 border-l-2 border-brand">About</h2>
          </div>
          <div className="flex flex-col gap-4 md:gap-5 w-full">
            <p className="text-base/[26px] font-normal text-muted-foreground">
              I'm a recent web development bootcamp graduate specializing in full-stack development with Next.js and
              Express.
            </p>
            <p className="text-base/[26px] font-normal text-muted-foreground">
              Before transitioning into tech, I worked as an associate on a wealth management team at RBC Dominion
              Securities. My experience in banking strengthened my attention to detail and analytical mindset —
              qualities I now bring to writing clean, efficient code.
            </p>
            <p className="text-base/[26px] font-normal text-muted-foreground">
              Curiosity about technology and a love for problem-solving inspired me to pursue a career where I can keep
              learning, building, and growing.
            </p>
            <p className="text-base/[26px] font-normal text-muted-foreground">
              When I'm not coding, you'll often find me swimming at the Y or running along the beaches of Kitsilano.
            </p>
          </div>
        </section>
        {/* Skills */}
        <section className="flex flex-col w-full gap-3 md:gap-5">
          <div className="sticky top-0 z-20 w-full backdrop-blur bg-background/65 py-2">
            <h2 className="text-[18px]/[26px] font-semibold uppercase pl-3 border-l-2 border-brand">My Toolset</h2>
          </div>
          <ToolsGrid />
        </section>

        {/* Projects */}
        <section className="flex flex-col justify-center items-start w-full gap-3 md:gap-5">
          <div className="sticky top-0 z-20 w-full  backdrop-blur bg-background/65 py-2 ">
            <h2 className="text-[18px]/[26px] font-semibold uppercase pl-3 border-l-2 border-brand">Projects</h2>
          </div>
          <p className="text-base/[26px] font-normal text-muted-foreground">
            Take a look at what I built during my web development bootcamp and my current solo work, featuring React,
            Next.js, Express, and AWS.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-8 md:flex-row md:gap-12 xl:gap-16">
            {projects.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                previewSrc={p.previewSrc}
                technologies={p.technologies}
                status={p.status}
                url={p.url}
              />
            ))}
          </div>
        </section>

        {/* Journals */}
        <section className="flex flex-col w-full gap-3 md:gap-5">
          <div className="sticky top-0 z-20 w-full backdrop-blur bg-background/65 py-2">
            <h2
              id="journals-heading"
              className="text-[18px]/[26px] font-semibold uppercase pl-3 border-l-2 border-brand"
            >
              Journals
            </h2>
          </div>

          <article className="flex flex-col gap-3">
            <h3 className="text-base/[26px] font-normal text-foreground">
              Lesson from Building My First Full-Stack App
            </h3>

            <time
              dateTime="2025-10"
              className="inline-flex w-fit rounded-full bg-accent/15 px-2 py-1 text-xs/4 font-semibold tracking-[0.05em] uppercase text-accent"
            >
              Oct 2025
            </time>

            <p className="text-sm/[22px] font-normal text-muted-foreground">
              A short reflection on challenges I faced connecting frontend and backend APIs using Express and Next.js…
            </p>
          </article>

          <article className="flex flex-col gap-3">
            <h3 className="text-base/[26px] font-normal text-foreground">
              Lesson from Building My First Full-Stack App
            </h3>

            <time
              dateTime="2025-10"
              className="inline-flex w-fit rounded-full bg-accent/15 px-2 py-1 text-xs/4 font-semibold tracking-[0.05em] uppercase text-accent"
            >
              Oct 2025
            </time>

            <p className="text-sm/[22px] font-normal text-muted-foreground">
              A short reflection on challenges I faced connecting frontend and backend APIs using Express and Next.js…
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
