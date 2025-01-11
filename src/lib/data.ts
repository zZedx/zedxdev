import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import cropbasket from "/public/project-images/cropbasket.webp";
import lehlah from "/public/project-images/lehlah.png";
import playafro from "/public/project-images/playafro.png";

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
    title: "Freelance Developer",
    location: "Remote",
    description:
      "Developed and maintained web applications for clients using Next.js, TypeScript, React, Node.js, Serverless, etc. Implemented new features and resolved bugs to improve the application's performance and user experience.",
    icon: React.createElement(FaReact),
    date: "2024 March - Present",
  },
];

export type ProjectTags = (typeof projectsData)[number]["tags"];

export const projectsData = [
  {
    title: "Cropbasket - B2B E-commerce Platform",
    description:
      "Developed Cropbasket - A B2B E-commerce platform that connects farmers and retailers. Retailers can place orders for fresh fruits and vegetables, and farmers can list their products for sale. The platform is built using Nest.js, Next.js, TypeScript, and MySQL.",
    tags: ["Nest.js", "Next.js", "TypeScript", "MySQL"],
    imageUrl: cropbasket,
    projectUrl: null,
    demoUrl: "https://play.google.com/store/apps/details?id=in.cropbasketapp&pcampaignid=web_share",
  },
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
      "A social commerce platform sitting at the intersection of brands, influencers, and end customers. We help influencers monetize their content!",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    imageUrl: lehlah,
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
  "AWS",
  "ES Lint",
  "Git",
  "Github",
  "Tailwind",
  "TypeORM",
  "MongoDB",
];
