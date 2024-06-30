import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Backend Developer - Baliola",
    location: "Badung",
    description:
      "I'm now a back-end developer, My stack includes Express js, Nest Js, Postgres, TypeScript, Tailwind, Prisma, MongoDB and TypeOrm.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Graduate at Koding Akademi as Fullstack",
    location: "Denpasar",
    description:
    "I graduated after 4 months of studying. I immediately found a job as a front-end developer",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;



export const projectsData = [
  {
    title: "Dhatu Gateway",
    description:
      "As a backend developer, I contributed to this startup project for 1 year.",
    tags: ["Rust", "AWS", "MongoDB", "Tokio Runtime", "Postgres", "Diesel ORM"],
    imageUrl: corpcommentImg,
    url: ""
  },
  {
    title: "Dhatu Analytics",
    description:
      "Dhatu Analytics supports Dhatu Gateway for open telemetry, utilizing React, TypeScript, Next.js, Tailwind CSS, Prisma, and Postgres.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Prisma"],
    imageUrl: rmtdevImg,
    url: ""
  },
  {
    title: "e.id",
    description:
      "e.id is an application designed for creating new identities to manage and provide data securely",
    tags: ["Backend", "SQL", "PostgreSQL", "TypeScript", "Express.js", "Redis", "Midtrans", "SSE", "SSO"],
    imageUrl: wordanalyticsImg,
    url: ""
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Nest Js",
  "CMS",
  "TypeOrm"
] as const;
