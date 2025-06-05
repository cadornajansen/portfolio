export const revalidate = 1;

import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { TechStacksCard } from "@/components/cards/tech-stacks";
import { BoxReveal } from "@/components/magicui/box-reveal";
import * as motion from "motion/react-client";
import { AboutMe } from "@/components/cards/about-me";
import { Certificates } from "@/components/cards/certificates";
import { Experience } from "@/components/cards/experience";
import { Projects } from "@/components/cards/projects";
import { BlogCard } from "@/components/cards/blog";
import { ContactCard } from "@/components/cards/contact";
import { ContactButton } from "@/components/contact-button";

export const metadata: Metadata = {
  title: "Home - My Developer Portfolio",
  description:
    "Welcome to my personal portfolio. Discover my projects, skills, and professional journey.",
  openGraph: {
    title: "Home - My Developer Portfolio",
    description:
      "Welcome to my personal portfolio. Discover my projects, skills, and professional journey.",
  },
};

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
          <ContactButton />
        </div>
      </header>

      <div className="flex flex-col md:grid w-full grid-cols-6 gap-4">
        <AboutMe />
        <Experience />
        <TechStacksCard />
        <Certificates />
        <Projects />
        <BlogCard
          searchParams={{
            order: "newest",
            page: "1",
            limit: "2",
          }}
        />
        <ContactCard />
      </div>
    </main>
  );
}
