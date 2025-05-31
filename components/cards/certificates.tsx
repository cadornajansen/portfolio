import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Medal, MoveUpRight } from "lucide-react";
import Link from "next/link";

export function Certificates() {
  return (
    <Card className="col-span-2 gap-3 ">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span className="flex gap-2 font-semibold items-center">
            <Medal className="w-5 h-5" />
            Certificates
          </span>
          <Link
            href="/certifications"
            className="hover:text-foreground/90 duration-300 p-0 cursor-pointer text-xs flex gap-1 text-foreground/70 items-center"
          >
            View all
            <MoveUpRight className="w-3 h-3" />
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-2">
          <div className="bg-background rounded-md flex flex-col px-3 py-2">
            <span className="text-xs font-semibold">
              Mgmt. Information Systems
            </span>
            <p className="text-[11px] ">MSBM UK</p>
          </div>
          <div className="bg-background rounded-md flex flex-col px-3 py-2">
            <span className="text-xs font-semibold">Web Design: Figma</span>
            <p className="text-[11px] ">Udemy</p>
          </div>
          <div className="bg-background rounded-md flex flex-col px-3 py-2">
            <span className="text-xs font-semibold">Python</span>
            <p className="text-[11px] ">Entrylevel</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
