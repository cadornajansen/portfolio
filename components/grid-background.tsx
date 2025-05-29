'use client'
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

export function GridBackground() {
    return (
        <GridPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] opacity-25 md:[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] md:opacity-20",
        )}
        width={20}
        height={20}
        x={-1}
        y={-1}
      />
    )
}