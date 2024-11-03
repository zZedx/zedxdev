"use client";

// import { useActiveSectionContext } from "@/context/ActionSectionProvider";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Source_Code_Pro } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "400" });

export default function Intro(): JSX.Element {
  const { ref } = useSectionInView("Home");
  //   const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/profile.jpg"
              alt="developer-image"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl object-center"
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.25, rotate: 15 }}
            className="absolute text-4xl bottom-0 right-0 hover:rotate-2"
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.1,
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className={`${sourceCodePro.className} text-sm tracking-wider `}>Hi, my name is</span>
        <span className="text-center text-4xl font-bold tracking-tight  sm:text-5xl block">
          Kartik
        </span>
        <span className={`${sourceCodePro.className} text-sm tracking-wider`}>I&apos;m a </span>
        <div className="w-full flex justify-center font-bold mb-4 text-red-400">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
        </div>

        <p>I enjoy building things for the web.</p>
        <p>
          Currently focusing on <span className="italic font-bold">React (Next.js)</span>.
        </p>
      </motion.h1>

      <motion.div
        className="flex items-center justify-center  gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
          className="group bg-gray-900 px-4 py-2 text-sm sm:text-lg text-white sm:px-7 sm:py-3 flex items-center gap-2  rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link> */}

        <Link
          target="_blank"
          className="bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href={"/resume.pdf"}
          locale={false}
        >
          Download CV
          <HiDownload />
        </Link>
        <Link
          prefetch={false}
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/kartik-ajmera/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>

        <Link
          prefetch={false}
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/zZedx"
          target="_blank"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  );
}
