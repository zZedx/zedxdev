import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: React.createElement(
      "span",
      {},
      React.createElement(
        "a",
        {
          href: "https://www.jetbro.in/",
          style: { textDecoration: "underline" },
          target: "_blank",
        },
        "Jetbro",
      ),
      " Ahmedabad, India",
    ),
    description:
      "Developed and maintained Jetbro's web application using React, Next.js, and TailwindCSS. Implemented a new feature that allows users to create and manage their own custom domains. Enhanced the application's performance by optimizing the codebase and reducing the bundle size by 30%.",
    icon: React.createElement(RiNextjsFill),
    date: "2023 Dec - Present",
  },
  {
    title: "Freelance Frontend Developer",
    location: "- Remote",
    description:
      "Developed and maintained web applications for clients using React, Next.js, and TailwindCSS. Implemented new features and resolved bugs to improve the application's performance and user experience.",
    icon: React.createElement(FaReact),
    date: "2024 March - Present",
  },
];

export type ProjectTags = (typeof projectsData)[number]["tags"];

export const projectsData = [
  {
    title: "Playafro - Music Promotion Platform",
    description:
      "A music promotion platform that allows artists to promote their music and reach a wider audience. Artists can create an account, upload their music, and share it with their fans. Users can discover new music, follow their favorite artists, and create playlists.",
    tags: ["Next.js", "TypeScript", "SCSS"],
    imageUrl: "",
    projectUrl: null,
    demoUrl: "https://playafro.com/",
  },
  {
    title: "LehLah",
    description:
      "Developed Lehlah - A social media platform that allows users to share their thoughts, photos, and videos with their friends and family. Users can create an account, post updates, like and comment on posts, and follow other users.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    imageUrl: "",
    projectUrl: null,
    demoUrl: "https://lehlah.club/",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Node",
  "Express",
  "Nest",
  "MySQL",
  "Docker",
  "ES Lint",
  "Git",
  "Github",
  "Tailwind",
  "TypeORM",
  "MongoDB",
];
