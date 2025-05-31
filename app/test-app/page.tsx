import Image from "next/image";
import {
  MapPin,
  BriefcaseBusiness,
  Award,
  Medal,
  PanelsTopLeft,
  Send,
  MoveUpRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleIndicator } from "@/components/ui/circle";
import { TechStacksCard } from "@/components/cards/tech-stacks";
import Link from "next/link";
import * as motion from "motion/react-client"; 
 
export default function Home() {
  return (
    <main className="relative flex flex-col w-full py-10 px-5 md:px-20 xl:px-70 gap-4 ">      
      <header className="relative flex flex-row gap-4 items-start sm:items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-sm overflow-hidden relative flex-shrink-0"
        >
          <Image
            src="/user.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Info */}
        <div className="flex flex-col gap-0 md:gap-1">
          <span className="text-lg md:text-3xl font-bold">Jansen Cadorna</span>

          <span className="text-sm flex gap-1 items-center">
            <MapPin className="w-4 h-4" />
            Manila, Philippines
          </span>

          <span className="text-sm md:text-base font-semibold">
            Student Developer <br className="sm:hidden" />
            and Web Designer
          </span>

          <button className="text-sm w-full sm:w-fit px-3 py-1.5 bg-foreground text-background rounded-md flex items-center mt-2">
            <Send className="h-4 w-4 mr-1" />
            Let's connect
          </button>
        </div>
      </header>

      <div className="w-full grid grid-cols-1 md:grid-cols-[minmax(0,_6fr)_minmax(0,_4fr)] lg:grid-cols-[minmax(0,_65fr)_minmax(0,35fr)] gap-4">
        <Card className="gap-1 min-w-0">
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
              Hi! I’m a high school student who’s into design and code. I
              started learning when I was 13, messing around with website
              scraping and selenium automations, that curiosity quickly turned
              into a passion for building things on the web. Since 2021. I’ve
              explored different tech stacks and picked up a lot by just
              building and figuring things out along the way. Right now, I’m
              learning more into data structures, algorithms, and exploring the
              possibilities of AI.
            </p>
          </CardContent>
        </Card>
        <Card className="gap-1 min-w-0">
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
      </div>
      <TechStacksCard />
      <div className="w-full grid grid-cols-1 md:grid-cols-[minmax(0,_4fr)_minmax(0,_6fr)] gap-4">
        <Card className="gap-3 min-w-0">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <span className="flex gap-2 font-semibold items-center">
                <Medal className="w-5 h-5" />
                Certifications
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
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <div className="bg-background rounded-md flex flex-col px-3 py-2">
                <span className="text-xs font-semibold">
                  Management Information Systems
                </span>
                <p className="text-[11px] ">MSBM UK</p>
              </div>
              <div className="bg-background rounded-md flex flex-col px-3 py-2">
                <span className="text-xs font-semibold">
                  Web & Mobile Designer: Figma
                </span>
                <p className="text-[11px] ">Udemy</p>
              </div>
              <div className="bg-background rounded-md flex flex-col px-3 py-2">
                <span className="text-xs font-semibold">Python</span>
                <p className="text-[11px] ">Entrylevel</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="gap-1 min-w-0">
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
      </div>
    </main>
  );
}
