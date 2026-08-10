import AwsIcon from "@/assets/icons/aws.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import ReactIcon from "@/assets/icons/reactjs.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import NodeIcon from "@/assets/icons/nodejs.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import PostgresIcon from "@/assets/icons/postgresql.svg";

export function ToolsGrid() {
  const skills = [
    { name: "aws", Icon: AwsIcon },
    { name: "express", Icon: ExpressIcon },
    { name: "react", Icon: ReactIcon },
    { name: "typescript", Icon: TypeScriptIcon },
    { name: "javascript", Icon: JavaScriptIcon },
    { name: "nextjs", Icon: NextIcon },
    { name: "nodejs", Icon: NodeIcon },
    { name: "tailwindcss", Icon: TailwindIcon },
    { name: "postgresql", Icon: PostgresIcon },
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
        grid-cols-3 gap-3
        md:gap-4
        md:grid-cols-4
        xl:grid-cols-6
      "
    >
      {skills.map(({ name, Icon }) => (
        <div key={name} className="flex items-center justify-center md:justify-start">
          <div
            className="
              relative
              rounded-lg
              p-3
              md:p-4
              bg-surface
              transition-all duration-300
              hover:scale-102
              hover:bg-surface-hover
              hover:shadow-[0_0_15px_rgba(0,0,0,0.08)]
              dark:hover:shadow-[0_0_15px_rgba(241,245,249,0.08)]
              group
            "
          >
            <div className="flex items-center justify-center h-14 w-14.25">
              <Icon
                aria-label={name}
                className="h-full w-full
                  text-muted-foreground
                  transition-transform duration-300
                  group-hover:-translate-y-2
                  group-hover:text-foreground"
              />
            </div>

            <span
              className="
                absolute bottom-3 left-1/2 -translate-x-1/2
                md:bottom-4
                text-xs font-normal
                text-muted-foreground
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
                whitespace-nowrap
              "
            >
              {formatName(name)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
