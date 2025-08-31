"use client";
import { cn } from "@/lib/utils";
import { div } from "framer-motion/client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MusicTestimonialCards = [
  {
    quote:
      "This platform has completely transformed how I collaborate with other musicians online.",
    name: "Aria Thompson",
    title: "Indie Artist",
  },
  {
    quote:
      "Real-time editing has made my music lessons more interactive and fun for students.",
    name: "Daniel Kim",
    title: "Music Instructor",
  },
  {
    quote:
      "The version control system lets me experiment freely without losing any previous work.",
    name: "Lena Patel",
    title: "Sound Engineer",
  },
  {
    quote:
      "Now I can co-write songs with my bandmates even when we’re in different cities.",
    name: "Carlos Rivera",
    title: "Band Member",
  },
  {
    quote:
      "As a solo artist, this has made organizing my lyrics and beats way smoother.",
    name: "Maya Singh",
    title: "Solo Producer",
  },
];

const TestimonialCardstjsx = () => {
  return (
    <div className="w-full h-[40rem] dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      >
        
        <h2 className="text-3xl font-bold text-center mb-8 z-10 relative bg-gradient-to-b text-white bg-clip-text py-8 text-transparent mt-4">
          Hear Our Harmony : Voices of Success
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={MusicTestimonialCards}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardstjsx;
