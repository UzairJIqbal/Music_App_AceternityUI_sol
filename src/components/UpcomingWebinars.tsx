"use client"
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import React from "react";
import { Button } from "./ui/moving-border";

const UpcomingWebinars = () => {
    
    const featuredWebinars = [
  {
    title: "Mastering Music Production",
    description: "Learn the fundamentals of music production using industry-standard tools like Ableton Live and FL Studio.",
    link: "https://example.com/webinars/music-production"
  },
  {
    title: "Live Mixing Techniques",
    description: "Explore live sound mixing for concerts, streaming, and events. Tips from professional engineers included.",
    link: "https://example.com/webinars/live-mixing"
  },
  {
    title: "Build Your Music Career",
    description: "Strategies on branding, streaming platforms, and audience growth to succeed as an independent artist.",
    link: "https://example.com/webinars/music-career"
  },
  {
    title: "Composing for Film and Games",
    description: "Discover how to write emotionally engaging scores for film, TV, and video games.",
    link: "https://example.com/webinars/composing-media"
  }
];

    
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl">
            Enhanced your musical journey
          </p>
        </div>

        <div className="mt-10">
            <HoverEffect
                items={featuredWebinars.map(webinar => (
                    {
                        title : webinar.title,
                        description : webinar.description,
                        link : "/"
                    }
                ))}
            />
        </div>

        <div className="mt-10 text-center">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-600 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Link href={"/courses"}>View All Webinars</Link>;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
