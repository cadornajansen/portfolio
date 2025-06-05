import type { Metadata } from "next";
import StackIcon from "tech-stack-icons";
import techStacks from "@/data/tech-stacks.json";
import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";

const techOverrides: Record<
  string,
  { iconName?: string; displayName?: string }
> = {
  javascript: { iconName: "js", displayName: "Javascript" },
  ps: { iconName: "ps", displayName: "Photoshop" },
  html: { iconName: "html5", displayName: "HTML5" },
  css: { iconName: "css3", displayName: "CSS3" },
};

const unsupportedIcons = new Set(["Express.JS", "Vercel"]);

export const metadata: Metadata = {
  title: "Tech Stacks - My Developer Portfolio",
  description: "A showcase of technologies and tools I work with.",
  openGraph: {
    title: "Tech Stacks - My Developer Portfolio",
    description: "A showcase of technologies and tools I work with.",
  },
};

export default function TechStacks() {
  return (
    <div className="w-full flex flex-col">
      <Link href="/" className="hover:text-foreground/90 text-foreground/80 duration-300 cursor-pointer text-xl font-bold mb-10 flex items-center gap-1">
        <ArrowUpLeft className=" h-6 w-6" />
        Tech Stacks
      </Link>
      {techStacks.map((stack) => (
        <div key={stack.category} className="flex flex-col gap-2 mb-4">
          <span className="text-sm font-bold">{stack.category}</span>
          <ul className="flex flex-wrap gap-2">
            {stack.items.map((tech) => {
              const key = tech.toLowerCase().replace(/[\s.]/g, "");
              const override = techOverrides[key] || {};
              const iconName = override.iconName || key;

              const isSupported = !unsupportedIcons.has(tech);
              return (
                <li
                  key={tech}
                  className="bg-foreground text-background/80 font-medium flex items-center gap-1 border border-white/70 rounded-sm px-2 py-1 text-xs"
                >
                  {/* {isSupported ? (
                    <StackIcon className="h-5 w-5" name={iconName} />
                  ) : (
                    <Layers2 className="h-4 w-4" />
                  )} */}
                  {isSupported && (
                    <StackIcon className="h-5 w-5" name={iconName} />
                  )}
                  {tech.replace(/[0-9.]/g, "")}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
