"use client";

import { useState } from "react";
import { ArrowUpLeft, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const imageData = [
  {
    id: "YMjklK",
    title: "Python for Beginners",
    description:
      "Completed EntryLevel's virtual experience in Python programming.",
  },
  {
    id: "YMjPXv",
    title: "Semantic Search Hackathon",
    description: "Submitted a Cohere-based AI project via Lablab.ai.",
  },
  {
    id: "YMjspO",
    title: "Eleven Labs Hackathon",
    description: "Built an AI app using ElevenLabs' voice tools.",
  },
  {
    id: "YMj1Mu",
    title: "Management Info Systems",
    description: "Proficiency in managing digital business systems.",
  },
  {
    id: "YMjK2g",
    title: "NLP with Python",
    description: "Intro to natural language processing using Python.",
  },
  {
    id: "YMjNbh",
    title: "C Language Basics",
    description: "Covered C fundamentals including memory and I/O.",
  },
  {
    id: "YMjzbB",
    title: "C# Fundamentals",
    description: "Learned C# basics like classes, loops, and debugging.",
  },
  {
    id: "YMjnVo",
    title: "Report Writing Skills",
    description: "Professional training on effective report writing.",
  },
  {
    id: "YMj5yn",
    title: "C# Fundamentals",
    description: "Learned core C# concepts through hands-on coding.",
  },
  {
    id: "YMjUNN",
    title: "Web & Mobile Design",
    description: "Covered UI/UX, Figma, and responsive design.",
  },
  {
    id: "YMjIBl",
    title: "Java Certification",
    description: "Completed full-stack Java programming course.",
  },
  {
    id: "YMjlBq",
    title: "Rust Development",
    description: "Tried building real-world apps using Rust.",
  },
  {
    id: "YMj0lL",
    title: "Text Mining in R",
    description: "Explored NLP techniques using R.",
  },
];

export default function TechStacks() {
  const [selectedImage, setSelectedImage] = useState<
    null | (typeof imageData)[0]
  >(null);

  return (
    <div className="w-full flex flex-col relative">
      <Link
        href="/"
        className="hover:text-foreground/90 text-foreground/80 duration-300 cursor-pointer text-xl font-bold mb-10 flex items-center gap-1"
      >
        <ArrowUpLeft className="h-6 w-6" />
        Certificates
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {imageData.map((img) => (
          <div
            key={img.id}
            className="flex flex-col items-start gap-2 cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <div className="py-1 relative w-full aspect-video bg-muted rounded">
              <Image
                src={`https://s6.imgcdn.dev/${img.id}.jpg`}
                alt={img.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="text-sm">
              <p className="font-semibold">{img.title}</p>
              <p className="text-xs text-muted-foreground">{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedImage(null)} // clicking outside closes
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()} // prevent inner clicks from closing
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="z-10 cursor-pointer absolute top-2 right-2 bg-white text-black rounded-full p-1 shadow"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full aspect-video relative">
              <Link
                href={
                  "#"
                }
              >
                <Image
                  src={`https://s6.imgcdn.dev/${selectedImage.id}.jpg`}
                  alt={selectedImage.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </Link>
            </div>
            <div className="mt-2 text-center text-white">
              <p className="font-semibold text-lg">{selectedImage.title}</p>
              <p className="text-sm text-white/70">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
