"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About(): JSX.Element {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-5">
        My journey into web development began with a spark of curiosity. As a self-taught developer,
        I started with the basics in HTML and CSS, and I was instantly hooked by how a few lines of
        code could bring ideas to life. My first project was a playful one - a website called{" "}
        <span className="italic underline">
          <a href="http://instafolio.me/tindog/" target="_blank">
            Tindog
          </a>
        </span>
        , dedicated to connecting dog lovers, simply because I love dogs! Seeing my concept take
        shape on the screen was exhilarating, and it showed me that,———
        <span className="font-medium italic">
          literally, you can build anything you envision with code.
        </span>
      </p>

      <p className="mb-5">
        Since then, I’ve dedicated myself to mastering the craft, focusing on creating
        user-friendly, visually engaging websites. I believe in building projects that people enjoy
        using, blending form with function in every line of code. I’ve also picked up some core
        skills along the way, like <span className="font-medium italic">Javascript</span> and{" "}
        <span className="font-medium italic">React</span>, but what really drives me is a love for
        learning and experimenting with new tech.
      </p>

      <p>
        In my spare time, I enjoy exploring new technologies and building interesting projects. And
        when I’m not at the computer, you’ll find me
        <span className="font-medium italic">
          {" "}
          reading a book, playing a game, catching a movie, or keeping fit with regular workouts.
        </span>
      </p>
    </motion.section>
  );
}
