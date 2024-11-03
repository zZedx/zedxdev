import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <main className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <Intro />
      <SectionDivider />
    </main>
  );
};

export default Home;
