import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PanelsTopLeft } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <Card className="col-span-4 gap-1 m-0">
      <CardHeader>
        <CardTitle>
          <span className="flex gap-2 font-semibold items-center">
            <PanelsTopLeft className="w-5 h-5" />
            Latest Projects
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-1.5">
        <div className="rounded-md border px-3 py-2 flex flex-col gap-1">
          <span className="text-sm font-bold">Banking System</span>
          <span className="text-xs">A Next.js & Supabase App</span>
          <Link
            href={"#"}
            className="mt-1 w-fit px-2 py-1 bg-background rounded-md text-xs font-medium"
          >
            banking.web.dev
          </Link>
        </div>
        <div className="rounded-md border px-3 py-2 flex flex-col gap-1">
          <span className="text-sm font-bold">Banking System</span>
          <span className="text-xs">A Next.js & Supabase App</span>
          <Link
            href={"#"}
            className="mt-1 w-fit px-2 py-1 bg-background rounded-md text-xs font-medium"
          >
            banking.web.dev
          </Link>
        </div>
        <div className="rounded-md border px-3 py-2 flex flex-col gap-1">
          <span className="text-sm font-bold">Banking System</span>
          <span className="text-xs">A Next.js & Supabase App</span>
          <Link
            href={"#"}
            className="mt-1 w-fit px-2 py-1 bg-background rounded-md text-xs font-medium"
          >
            banking.web.dev
          </Link>
        </div>
        <div className="rounded-md border px-3 py-2 flex flex-col gap-1">
          <span className="text-sm font-bold">Banking System</span>
          <span className="text-xs">A Next.js & Supabase App</span>
          <Link
            href={"#"}
            className="mt-1 w-fit px-2 py-1 bg-background rounded-md text-xs font-medium"
          >
            banking.web.dev
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
