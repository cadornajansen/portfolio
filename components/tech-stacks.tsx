import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Layers, MoveUpRight } from "lucide-react";
import techStacks from "@/data/tech-stacks.json";

export function TechStacks() {
  return (
    <Card className="gap-2">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span className="flex gap-2 font-semibold items-center">
            <Layers className="w-5 h-5" />
            Tech Stacks
          </span>
          <Link
            href="#"
            className="hover:text-foreground/90 duration-300 p-0 cursor-pointer text-xs flex gap-1 text-foreground/70 items-center"
          >
            View all
            <MoveUpRight className="w-3 h-3" />
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {techStacks.map((stack) => (
          <div key={stack.category} className="flex flex-col gap-2">
            <span className="text-sm font-bold">{stack.category}</span>

            {/* Small screen: show only first 3 */}
            <ul className="flex flex-wrap gap-2 md:hidden">
              {stack.items.slice(0, 6).map((tech) => (
                <li
                  key={tech}
                  className="border border-white/70 rounded-sm px-2 py-1 text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* Medium and up: show all */}
            <ul className="hidden md:flex flex-wrap gap-2">
              {stack.items.map((tech) => (
                <li
                  key={tech}
                  className="border border-white/70 rounded-sm px-2 py-1 text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
