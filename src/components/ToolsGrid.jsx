import Image from "next/image";

export function ToolsGrid() {
  const skills = [
    { name: "aws", src: "/icons/aws.svg" },
    { name: "express", src: "/icons/express.svg" },
    { name: "react", src: "/icons/reactjs.svg" },
    { name: "typescript", src: "/icons/typescript.svg" },
    { name: "javascript", src: "/icons/javascript.svg" },
    { name: "nextjs", src: "/icons/nextjs.svg" },
    { name: "nodejs", src: "/icons/nodejs.svg" },
    { name: "tailwindcss", src: "/icons/tailwindcss.svg" },
    { name: "postgresql", src: "/icons/postgresql.svg" },
  ];

  const formatName = (name) => {
    const names = {
      aws: "AWS",
      express: "Express",
      react: "React",
      nextjs: "Next.js",
      nodejs: "Node.js",
      tailwindcss: "Tailwind CSS",
      postgresql: "PostgreSQL",
      typescript: "TypeScript",
      javascript: "JavaScript",
    };
    return names[name];
  };

  return (
    <div
      className="
        w-full
        grid
        grid-cols-3 gap-4
        md:grid-cols-4
        xl:grid-cols-6
      "
    >
      {skills.map((skill) => (
        <div key={skill.name} className="flex items-center justify-center">
          <div
            className="
              relative
              rounded-lg
              p-4
              bg-surface
              transition-all duration-300
              hover:scale-102
              hover:bg-surface-hover
              hover:shadow-[0_0_15px_rgba(0,0,0,0.08)]
              dark:hover:shadow-[0_0_15px_rgba(241,245,249,0.08)]
              group
            "
          >
            <Image
              src={skill.src}
              alt={skill.name}
              width={57}
              height={56}
              className="
                h-[56px] w-[57px]
                transition-transform duration-300
                group-hover:-translate-y-2
              "
            />

            <span
              className="
                absolute bottom-4 left-1/2 -translate-x-1/2
                text-xs font-normal
                text-muted-foreground
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
                whitespace-nowrap
              "
            >
              {formatName(skill.name)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
