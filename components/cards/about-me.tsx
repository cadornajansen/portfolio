import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseBusiness } from "lucide-react";

export function AboutMe() {
  return (
    <Card className="col-span-4 gap-1">
      <CardHeader>
        <CardTitle>
          <span className="flex gap-2 font-semibold items-center">
            <BriefcaseBusiness className="w-5 h-5" />
            About me
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-wrap text-sm leading-relaxed">
          Hi! I’m a high school student who’s into design and code. I started
          learning when I was 13, messing around with website scraping and
          selenium automations, that curiosity quickly turned into a passion for
          building things on the web. Since 2021. I’ve explored different tech
          stacks and picked up a lot by just building and figuring things out
          along the way. Right now, I’m learning more into data structures,
          algorithms, and exploring the possibilities of AI.
        </p>
      </CardContent>
    </Card>
  );
}
