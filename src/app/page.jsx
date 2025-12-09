import Section from "@/components/Section";
import ToolsGrid from "@/components/ToolsGrid";
import Image from "next/image";

function HomePage() {
  return (
    // Sections Container
    <div className="flex flex-col gap-16 md:gap-20 xl:gap-30">
      {/* About section - Jamie Lee with Intro */}
      <Section id="about" className="items-start justify-center md:flex-row md:pt-5 ">
        {/* About/Left */}
        <div className="flex flex-col gap-3 md:gap-4 items-center justify-center  w-full">
          {/* Avatar */}
          <div className="relative w-[250px] h-[250px]">
            {/* Spinning gradient ring */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,#2E1065,#A78BFA,#2E1065)] animate-spin-slow p-1">
              <div className="w-full h-full rounded-full bg-midnight" />
            </div>

            {/* TODO: Replace it with real photo later */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-midnight z-10">
              <Image
                src="/images/avatar_placeholder.png"
                alt="Jamie Lee avatar"
                width={250}
                height={250}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          {/* Name and Title */}
          <h1 className="text-primary font-semibold text-[32px]/10 md:text-5xl/[56px] md:tracking-[-0.01em] xl:text-[64px]/[72px] xl:tracking-[-0.02em]">
            Jamie Lee
          </h1>
          <p className=" text-secondary text-base/[26px] font-normal md:text-xl/8">Junior Full Stack Developer</p>
          {/* Socials */}
          <div className="flex w-full justify-center items-center gap-3">
            {/* TODO: Update linkedin address */}
            <a href="https://linkedin.com/in/23jisu@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="hover:opacity-70 transition-opacity"
              />
            </a>
            <a href="https://github.com/Jam1eL1" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="hover:opacity-70 transition-opacity"
              />
            </a>
            {/* TODO: Use Button wrapper -> Gmail link should be copied to user's clipboard */}
            <Image
              src="/icons/gmail.svg"
              alt="GitHub"
              width={24}
              height={18}
              className="hover:opacity-70 transition-opacity"
            />

            <a href="">
              <p className="text-base/[26px] font-normal text-cyan">View Full Résumé</p>
            </a>
          </div>
        </div>
        {/* About/Right - Bio*/}
        <div className="flex flex-col gap-4 w-full">
          <p className="text-base/[26px] font-normal text-secondary">
            I'm a recent web development bootcamp graduate specializing in full-stack development with Next.js and
            Express.
          </p>
          <p className="text-base/[26px] font-normal text-secondary">
            Before transitioning into tech, I worked as an associate on a wealth management team at RBC Dominion
            Securities. My experience in banking strengthened my attention to detail and analytical mindset — qualities
            I now bring to writing clean, efficient code.
          </p>
          <p className="text-base/[26px] font-normal text-secondary">
            Curiosity about technology and a love for problem-solving inspired me to pursue a career where I can keep
            learning, building, and growing.
          </p>
          <p className="text-base/[26px] font-normal text-secondary">
            When I'm not coding, you'll often find me swimming at the Y or running along the beaches of Kitsilano.
          </p>
        </div>
      </Section>

      {/* Skills section - Tools I Use */}
      <Section id="skills" className="items-center justify-center">
        <h1 className="text-primary font-semibold text-[32px]/10 md:text-5xl/[56px] md:tracking-[-0.01em] xl:text-[64px]/[72px] xl:tracking-[-0.02em]">
          Tools I Use
        </h1>
        <ToolsGrid />
      </Section>
      {/* Projects section - My Work */}
      <Section id="projects" />
      {/* Blog section - Dev Journal */}
      <Section id="journals" />
    </div>
  );
}

export default HomePage;
