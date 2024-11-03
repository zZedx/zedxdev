import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import { isMobileDevice } from "@/lib/utils";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const isMobile = isMobileDevice();
  return (
    <main className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience isMobile={isMobile} />
      <Contact />
    </main>
  );
};

export default Home;
