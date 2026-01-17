import { Section } from "@/components/Section";
import { ToolsGrid } from "@/components/ToolsGrid";
import GithubIcon from "@/assets/icons/github.svg";
import GmailIcon from "@/assets/icons/gmail.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProjectCard } from "@/components/ProjectCard";
import projectSnackPreview from "@/assets/images/project_snack_preview.webp"
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
    // Sections Container
    <div className="flex flex-col gap-16 md:gap-20 xl:gap-30">
      {/* About section - Jamie Lee with Intro */}
      <Section id="about" className="items-start justify-center md:flex-row md:pt-5 ">
        {/* TODO: Re-design this part About/Left */}
        <div className="flex flex-col gap-3 md:gap-4 items-center justify-center w-full">
          {/* <div className="relative w-[250px] h-[250px]">
            <div className="absolute inset-[-10px] rounded-full bg-brand/10 blur-lg" />
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
              <div className="absolute inset-2 rounded-full overflow-hidden bg-background z-10">
                <Image src={ProfilePhoto} alt="Jamie Lee profile photo" fill className="object-cover" priority />
              </div>
            </div>
          </div> */}

          {/* Name and Title */}
          <h1 className="text-foreground font-semibold text-[32px]/10 md:text-5xl/[56px] md:tracking-[-0.01em] xl:text-[64px]/[72px] xl:tracking-[-0.02em]">
            Jamie Lee
          </h1>

          <p className="text-muted-foreground text-base/[26px] font-normal md:text-xl/8">Junior Full Stack Developer</p>

          {/* Socials */}
          <div className="flex w-full justify-center items-center gap-3">
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
              <p className="text-base/[26px] font-normal text-brand">View Full Résumé</p>
            </a>
          </div>
        </div>

        {/* About/Right - Bio*/}
        <div className="flex flex-col gap-4 w-full">
          <p className="text-base/[26px] font-normal md:text-xl/8 text-muted-foreground">
            I'm a recent web development bootcamp graduate specializing in full-stack development with Next.js and
            Express.
          </p>
          <p className="text-base/[26px] font-normal md:text-xl/8 text-muted-foreground">
            Before transitioning into tech, I worked as an associate on a wealth management team at RBC Dominion
            Securities. My experience in banking strengthened my attention to detail and analytical mindset — qualities
            I now bring to writing clean, efficient code.
          </p>
          <p className="text-base/[26px] font-normal md:text-xl/8 text-muted-foreground">
            Curiosity about technology and a love for problem-solving inspired me to pursue a career where I can keep
            learning, building, and growing.
          </p>
          <p className="text-base/[26px] font-normal md:text-xl/8 text-muted-foreground">
            When I'm not coding, you'll often find me swimming at the Y or running along the beaches of Kitsilano.
          </p>
        </div>
      </Section>

      {/* Skills section - Tools I Use */}
      <Section id="skills" className="items-center justify-center">
        <h1 className="text-foreground font-semibold text-[32px]/10 md:text-5xl/[56px] md:tracking-[-0.01em] xl:text-[64px]/[72px] xl:tracking-[-0.02em]">
          Tools I Use
        </h1>
        <ToolsGrid />
      </Section>

      {/* Projects section - My Work */}
      <Section id="projects">
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4 xl:gap-5">
          <span className="text-brand text-xs/4 font-semibold tracking-[0.05em] uppercase">featured projects</span>
          <h1 className="text-foreground font-semibold text-[32px]/10 md:text-5xl/[56px] md:tracking-[-0.01em] xl:text-[64px]/[72px] xl:tracking-[-0.02em]">
            My Work
          </h1>
          <p className="text-base/[26px] font-normal md:text-xl/8 text-muted-foreground">
            Take a look at what I built during my web development bootcamp and my current solo work, featuring React,
            Next.js, Express, and AWS.
          </p>
        </div>

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
      </Section>

      {/* Blog section - Dev Journal */}
      <Section id="journals" />
      {/* Temporary light/dark toggle button */}
      <ThemeToggle />
    </div>
  );
}
