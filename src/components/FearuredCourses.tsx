"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import CourseData from "../app/data/music_courses.json";
import { div } from "framer-motion/client";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  instructor: string;
  slug: string;
  isFeatured: boolean;
}

const FearuredCourses = () => {
  const featuredCourses = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tighter text-white sm:text">
            Learn With the Best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                  <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </h1>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>

                  <Link href={`/courses/${course.slug}`} className="mt-5 text-white">Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-600 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <Link href={"/courses"}>View All Courses</Link>;
        </Button>
      </div>
    </div>
  );
};

export default FearuredCourses;
