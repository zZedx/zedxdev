"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Project from "./Project";

export default function Projects(): JSX.Element {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Featured Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <Link
        className="group tracing-wide font-semibold hover:underline hover:underline-offset-4 hover:decoration-pink text-slate-800 dark:text-slate-400 w-full flex gap-1 items-center justify-center mt-10"
        target="_blank"
        href="https://github.com/zZedx?tab=repositories"
      >
        View All Projects
        <FaAngleRight className="group-hover:translate-x-2 transition" />
      </Link>
    </section>
  );
}
