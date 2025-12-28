import Image from "next/image";

function ToolsGrid() {
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
  return (
    <div
      className="w-full 
        grid
        grid-cols-3 gap-4
        md:grid-cols-4
        xl:grid-cols-6
      "
    >
      {skills.map((skill) => (
        <div key={skill.name} className="flex items-center justify-center">
          <div className="bg-surface rounded-lg p-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105">
            <Image
              src={skill.src}
              alt={skill.name}
              width={57}
              height={56}
              className={skill.name === "nextjs" ? "h-[64px] w-[65px]" : "h-[56px] w-[57px]"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
export default ToolsGrid;
