"use client"
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Live Jamming",
    description:
      "Jam with fellow musicians in real-time from anywhere in the world. Whether it’s a spontaneous groove or a structured session, sync your creativity and make music together seamlessly.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        Live Jamming
      </div>
    ),
  },
  {
    title: "Real-Time Mixing",
    description:
      "Tweak your mix as you play. Watch levels adjust, effects apply, and soundscapes evolve — all live. No need to pause the music or re-render tracks. It’s mixing, modernized.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/Audio.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="audio mixer demo"
        />
      </div>
    ),
  },
  {
    title: "Track History",
    description:
      "Never lose a great take. Our version history for music tracks lets you rewind, review, and recover past versions of your recordings — like an undo button for your creativity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] text-white">
        Track History
      </div>
    ),
  },
  {
    title: "Creative Blocks",
    description:
      "Stuck in a loop? Access prompts, samples, and guided modes to spark your next musical idea. Say goodbye to creative blocks and hello to an endless stream of inspiration.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--amber-500))] text-white">
        Creative Blocks
      </div>
    ),
  },
];


const WhyChooseUs = () => {
  return (
    <div>
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
    </div>
  )
}

export default WhyChooseUs
