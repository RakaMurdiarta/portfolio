"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a motivated Software Engineer with over a year of experience in
        building scalable, user-focused web applications. Specializing in
        responsive UI development with React, Next.js, and TypeScript, I
        prioritize user-friendly interfaces. My skills include advanced
        <span className="font-medium"> CSS</span>, techniques and frameworks
        like Tailwind CSS for rapid, consistent design.
      </p>

      <p className="mb-3">
        <span className="font-medium">On the backend</span>, I create efficient
        APIs using
        <span className="italic">
          Node.js, Express.js, and Nest.js with TypeScript, leveraging SQL and
          Redis for data management
        </span>
        I'm proficient in Python for various tasks and adhere to RESTful
        principles in API development.
      </p>

      <p>
        <span className="font-bold"> Passionate</span> about continuous
        learning, I stay updated with industry best practices and value
        mentorship. I believe in strong team collaboration and effective
        communication to achieve high-quality solutions.
      </p>
    </motion.section>
  );
}
