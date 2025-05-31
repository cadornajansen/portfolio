export const revalidate = 1;

import Image from "next/image";
import { MapPin, Send } from "lucide-react";
import { TechStacksCard } from "@/components/cards/tech-stacks";
import { BoxReveal } from "@/components/magicui/box-reveal";
import * as motion from "motion/react-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Contact, Facebook, Github, Mail, BookOpenText } from "lucide-react";
import { TiktokIcon } from "@/components/tiktok-icon";
import { AboutMe } from "@/components/cards/about-me";
import { Certificates } from "@/components/cards/certificates";
import { Experience } from "@/components/cards/experience";
import { Projects } from "@/components/cards/projects";
import { BlogCard } from "@/components/cards/blog";
import Link from "next/link";


export default async function Home() {
  return (
    <main className="relative flex flex-col w-full gap-4 ">
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
          <BoxReveal boxColor={"#ffffff"} duration={0.3}>
            <span className="text-lg md:text-3xl font-bold">
              Jansen Cadorna
            </span>
          </BoxReveal>

          <BoxReveal boxColor={"#ffffff"} duration={0.4}>
            <span className="text-sm flex gap-1 items-center">
              <MapPin className="w-4 h-4" />
              Manila, Philippines
            </span>
          </BoxReveal>
          <BoxReveal boxColor={"#ffffff"} duration={0.5}>
            <span className="text-sm md:text-base font-semibold">
              Student Developer <br className="sm:hidden" />
              and Web Designer
            </span>
          </BoxReveal>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-sm w-full sm:w-fit px-3 py-1.5 bg-foreground text-background rounded-md flex items-center mt-2"
          >
            <Send className="h-4 w-4 mr-1" />
            Let's connect
          </motion.button>
        </div>
      </header>

      <div className="flex flex-col md:grid w-full grid-cols-6 gap-4">
        <AboutMe />
        <Experience />
        <TechStacksCard />
        <Certificates />
        <Projects />
        <BlogCard searchParams/>
        <Card className="col-span-2 gap-1">
          <CardHeader>
            <CardTitle>
              <span className="flex gap-2 font-semibold items-center">
                <Contact className="w-5 h-5" />
                Contacts
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <span className="text-sm font-bold">Social Links</span>
            <ul className="flex flex-col gap-2">
              <li className="bg-background rounded-md p-2 flex items-center gap-1">
                <Facebook className=" rounded-full h-5 w-5" />
                <span className="text-xs font-medium">Jansen Cadorna</span>
              </li>
              <li className="bg-background rounded-md p-2 flex items-center gap-1">
                <Github className=" rounded-full h-5 w-5" />
                <span className="text-xs font-medium">@cadornajansen</span>
              </li>
              <li className="bg-background rounded-md p-2 flex items-center gap-1">
                <TiktokIcon className=" rounded-full h-5 w-5" />
                <span className="text-xs font-medium">@xencodes</span>
              </li>
            </ul>
            <span className="text-sm font-bold">Email</span>
            <div className="bg-background rounded-md p-2 flex items-center gap-1">
              <Mail className=" rounded-full h-4 w-4" />
              <Link href={'mailto:jansencadorna5@gmail.com'} className="text-xs font-medium">jansencadorna5@gmail.com</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
