import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import { CircleIndicator } from "../ui/circle";

export function Experience() {
    return (
        <Card className="col-span-2 gap-1 ">
        <CardHeader>
          <CardTitle>
            <span className="flex gap-2 font-semibold items-center">
              <Award className="w-5 h-5" />
              Experience
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-full relative">
          <div className="absolute left-8.5 top-1.5 bottom-2 w-px bg-white/20" />
          <div className="flex flex-col gap-3">
            <div className="relative flex gap-6 items-center">
              <CircleIndicator active={true} />
              <span className="flex flex-col gap-1 text-sm ml-6 font-bold">
                Learning more
                <p className="max-w-prose text-xs font-medium">
                  Finding internship
                </p>
              </span>
              <span className="absolute right-0 font-mono text-[10px] border rounded-full py-1 px-1">
                Current
              </span>
            </div>

            <div className="relative flex gap-6 items-center">
              <CircleIndicator />
              <span className="flex flex-col gap-1 text-sm ml-6 font-bold">
                Bot Developer
                <p className="text-xs font-medium">Programming PH</p>
              </span>
              <span className="absolute right-0 font-mono text-[10px] border rounded-full py-1 px-2">
                2023
              </span>
            </div>

            <div className="relative flex items-center">
              <CircleIndicator />
              <span className="flex flex-col gap-1 text-sm ml-6 font-bold">
                Hello World
                <p className="text-xs font-medium">Wrote my first code</p>
              </span>
              <span className="absolute right-0 font-mono text-[10px] border rounded-full py-1 px-2">
                2021
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
}