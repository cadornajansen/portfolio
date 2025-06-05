'use client'

import * as motion from "motion/react-client";
import { Send } from "lucide-react";

export function ContactButton() {
  const handleScroll = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.button
      onClick={handleScroll}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.2 }}
      className="cursor-pointer text-sm w-full sm:w-fit px-3 py-1.5 bg-foreground text-background rounded-md flex items-center mt-2"
    >
      <Send className="h-4 w-4 mr-1" />
      Let&apos;s connect
    </motion.button>
  );
}
