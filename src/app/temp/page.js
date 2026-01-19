import { Section } from "@/components/Section";
import { ToolsGrid } from "@/components/ToolsGrid";
import GithubIcon from "@/assets/icons/github.svg";
import GmailIcon from "@/assets/icons/gmail.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProjectCard } from "@/components/ProjectCard";
import projectSnackPreview from "@/assets/images/project_snack_preview.webp";
export default function HomePage() {
  const projects = [
    {
      title: "Snack",
      description: "An all-in-one office procurement service",
      previewSrc: projectSnackPreview,
      technologies: ["react", "typescript", "node.js", "tailwind"],
    },
    // TODO: Update when you start the next project
    {
      title: "Another Project",
      description: "Short one-liner explaining the value",
      previewSrc: projectSnackPreview,
      technologies: ["next.js", "express", "postgres", "aws"],
    },
  ];
  return (
    //  Content Container
    <div className="flex flex-col gap-6  px-3 py-12 md:px-0 md:flex-row md:gap-4">
      {/* Left Profile Rail */}
      {/* TODO: md:sticky not applied */}
      <header className="md:sticky md:top-0 flex flex-col gap-3 justify-start items-start w-full md:w-[220px]">
        <h1 className="text-foreground text-2xl/8 font-semibold tracking-[-0.01em] md:text-[36px]/[44px] md:font-bold md:tracking-[-0.02em]">
          JAMIE LEE
        </h1>
        <p className="text-muted-foreground text-base/[26px] font-normal">Junior Full Stack Developer</p>
        <div className="flex w-full justify-start items-center gap-3">
          {/* TODO: Update linkedin address */}
          <a href="https://linkedin.com/in/23jisu@gmail.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="h-6 w-6 text-muted-foreground hover:opacity-70 transition-opacity" />
          </a>

          <a href="https://github.com/Jam1eL1" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-6 w-6 align-middle text-muted-foreground hover:opacity-70 transition-opacity" />
          </a>

          {/* TODO: Use Button wrapper -> Gmail link should be copied to user's clipboard */}

          <GmailIcon className="h-[18px] w-6 text-muted-foreground hover:opacity-70 transition-opacity" />

          <a href="">
            <p className="text-base/[26px] font-normal text-brand">View Résumé</p>
          </a>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex flex-col w-full gap-8 md:gap-16">
        {/* About */}
        <section className="flex flex-col gap-4 md:gap-5 w-full">
          <p className="text-base/[26px] font-normal text-muted-foreground">
            I'm a recent web development bootcamp graduate specializing in full-stack development with Next.js and
            Express.
          </p>
          <p className="text-base/[26px] font-normal text-muted-foreground">
            Before transitioning into tech, I worked as an associate on a wealth management team at RBC Dominion
            Securities. My experience in banking strengthened my attention to detail and analytical mindset — qualities
            I now bring to writing clean, efficient code.
          </p>
          <p className="text-base/[26px] font-normal text-muted-foreground">
            Curiosity about technology and a love for problem-solving inspired me to pursue a career where I can keep
            learning, building, and growing.
          </p>
          <p className="text-base/[26px] font-normal text-muted-foreground">
            When I'm not coding, you'll often find me swimming at the Y or running along the beaches of Kitsilano.
          </p>
        </section>
        {/* Skills */}
        <section className="flex flex-col w-full gap-6 md:gap-8">
          <div className="sticky top-0 z-20 w-screen backdrop-blur bg-background/65 py-2">
            <h2 className="text-[18px]/[26px] font-semibold uppercase">My Toolset</h2>
          </div>
          <ToolsGrid />
        </section>

        {/* Projects */}
        <section className="flex flex-col justify-center items-start w-full gap-6 md:gap-8">
          <div className="sticky top-0 z-20 w-screen  backdrop-blur bg-background/65 py-2 ">
            <h2 className="text-[18px]/[26px] font-semibold uppercase">Projects</h2>
          </div>
          <p className="text-base/[26px] font-normal text-muted-foreground">
            Take a look at what I built during my web development bootcamp and my current solo work, featuring React,
            Next.js, Express, and AWS.
          </p>
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-16 xl:flex-row">
            {projects.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                previewSrc={p.previewSrc}
                technologies={p.technologies}
              />
            ))}
          </div>
        </section>

        {/* Journals */}
        <section className="flex flex-col w-full gap-6 md:gap-8">
          <div className="sticky top-0 z-20 w-screen  backdrop-blur bg-background/65 py-2 ">
            <h2 className="text-[18px]/[26px] font-semibold uppercase">Journals</h2>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-base/[26px] font-normal text-foreground">Lesson from Building My FIrst Full-Stack App</p>
            <span className="text-xs/4 font-semibold tracking-[0.05em] uppercase text-brand">Oct 2025</span>
            <p className="text-sm/[22px] font-normal text-muted-foreground">
              A short reflection on challenges I faced connecting connecting frontend and backend APIs using Express and
              Next.js… A reflection on connecting front and back ends with Express, handling async data, and debugging
              deployment on AWS.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-base/[26px] font-normal text-foreground">Lesson from Building My FIrst Full-Stack App</p>
            <span className="text-xs/4 font-semibold tracking-[0.05em] uppercase text-brand">Oct 2025</span>
            <p className="text-sm/[22px] font-normal text-muted-foreground">
              A short reflection on challenges I faced connecting connecting frontend and backend APIs using Express and
              Next.js… A reflection on connecting front and back ends with Express, handling async data, and debugging
              deployment on AWS.
            </p>
          </div>
        </section>

        {/* Temporary light/dark toggle button */}
        <ThemeToggle />
      </main>
    </div>
  );
}
