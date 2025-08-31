"use client";

import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const Instructors = () => {
  const Instructors = [
    {
      id: 1,
      name: "Emily Carter",
      designation: "Music Production Expert",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Alex Johnson",
      designation: "Sound Engineer",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Lena Smith",
      designation: "Classical Composer",
      image:
        "/Q.jpg"
    },
    {
      id: 4,
      name: "Daniel Kim",
      designation: "Electronic Music Artist",
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=300&q=80",
    },
  ];
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-start justify-center">
      <WavyBackground className="w-full max-h-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={Instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
