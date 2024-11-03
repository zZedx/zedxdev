import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import playafro from "/public/project-images/playafro.png";
import lehlah from "/public/project-images/lehlah.png";
import livon from "/public/project-images/livon.png";

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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: React.createElement(
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
      " - Full Stack Developer",
    ),
    location: "Ahmedabad, India",
    description:
      "Played a key role in multiple high-impact live projects, including Saffola, Livon, Jetbro and Lehlah .Worked closely with cross-functional teams, contributing to the development and deployment of dynamic, user-centric web applications. Demonstrated adaptability and expertise across various project demands.",
    icon: React.createElement(RiNextjsFill),
    date: "2023 Dec - Present",
  },
  {
    title: "Freelance Frontend Developer",
    location: "Remote",
    description:
      "Developed and maintained web applications for clients using Next.js, TypeScript and TailwindCSS. Implemented new features and resolved bugs to improve the application's performance and user experience.",
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
    imageUrl: playafro,
    projectUrl: null,
    demoUrl: "https://playafro.com/",
  },
  {
    title: "LehLah",
    description:
      "Developed Lehlah - A social media platform that allows users to share their thoughts, photos, and videos with their friends and family. Users can create an account, post updates, like and comment on posts, and follow other users.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    imageUrl: lehlah,
    projectUrl: null,
    demoUrl: "https://lehlah.club/",
  },
  {
    title: "Livon",
    description:
      "Developed a corporate website for Livon to showcase their products and services. The website is built using Next.js, TypeScript, and TailwindCSS.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    imageUrl: livon,
    projectUrl: null,
    demoUrl: "https://mylivonmysalon.com/",
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
