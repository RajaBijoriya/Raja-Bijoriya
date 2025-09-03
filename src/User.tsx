import { Stack } from "@mantine/core";
import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import { link } from "fs";
import { title } from "process";

const Info = {
  name: "Raja Bijoriya",
  Stack: [
    "Softeware Engineer",
    "Full Stack Web Developer",
    "Competitive Programmer",
    "Open Source Contributer",
    "Freelancer",
  ],
  bio: `I'm a passionate software engineer specialized in crafting efficient and
          scalable solutions, delivering top-notch web applications,
          and providing freelance services that exceed client expectations.
          Let's connect and create something amazing together!`,
};
const ProjectInfo = [
  {
    title: "Job Hook",
    decs: "JobHook is a full-stack job application tracking platform built to streamline the job search process for users. Developed using React, TypeScript, Mantine UI, and Zustand for state management, it offers a smooth, responsive, and user-friendly interface. The backend is powered by Node.js, Express.js, and MongoDB, ensuring scalability and secure data handling.Users can create, update, delete, and filter job entries by position, company, location, job type, and application status. A dynamic dashboard provides real-time insights and statistics to help users visualize their job search progress. JobHook also includes robust search and filtering features for quick access to relevant job entries.Security is ensured through token-based authentication with protected routes, and a dark/light theme toggle enhances user experience. JobHook was built to solve the challenge of staying organized during the job hunt, offering an all-in-one solution to track opportunities, monitor progress, and stay focused on landing the right job.",
    image: "jobhook.png",
    live: true,
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Mantine", "Tabler"],
    link: "https://job-hook-d2ei.vercel.app/",
    github: "https://github.com/RajaBijoriya/Job-Hook.git",
  },
  {
    title: "Forever",
    decs: "Forever is a modern, full-stack e-commerce web application built using React, Tailwind CSS, Node.js, Express.js, and MongoDB. It offers a smooth and responsive user experience with features like product browsing, filtering, cart management, wishlists, secure authentication, and order placement. The frontend is designed with a clean, responsive UI using Tailwind, while the backend handles API routes, user sessions, and data management through a robust Express and MongoDB setup. Admin users can manage products and track orders. Forever demonstrates a complete MERN stack project focused on performance, usability, and scalable design.",
    image: "forever.png",
    live: true,
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    link: "resilient-wisp-0e155d.netlify.app",
    github: "https://github.com/RajaBijoriya/E_Commerce_Application.git",
  },
  {
    title: "Persona AI Chatbot",
    decs: "Persona AI is a context-aware chatbot built on the MERN stack that delivers tailored, consistent conversations by simulating defined user personas. It integrates Gemini and OpenAI models for robust language understanding, prompt orchestration, and persona memory, enabling style control, tone adherence, and multi-turn continuity across sessions. The system includes rate limiting, error handling, and modular APIs for message routing, session storage, and logging, ensuring reliability under variable latency and traffic. Designed for scalability, it supports extensible persona templates and hooks for future RAG, analytics, and moderation features within production-ready workflows.",
    image: "Persona.png",
    live: true,
    technologies: ["REACT", "NODE JS", "EXPRESS JS", "QDRANT DB", "OPENAI"],
    link: "https://persona-ai-1.vercel.app/",
    github: "https://github.com/RajaBijoriya/persona-ai-1.git",
  },
  {
    title: "Pearl-Application Clone",
    decs: "Pearl App Clone is a visually appealing and responsive front-end project inspired by the design of the original Pearl productivity app. Built using React, Tailwind CSS, Mantine UI, and Tabler Icons, the clone replicates the clean, modern interface and smooth user interactions of the original application.The goal of this project was to practice component-based architecture, responsive design, and advanced UI integration. Tailwind CSS was used for rapid layout styling, while Mantine UI and Tabler Icons enhanced the visual consistency and interactivity of the components. The layout adapts seamlessly across devices, with reusable UI components like sidebars, cards, buttons, and modals implemented for modular design.This clone focuses on building a polished user experience, showcasing front-end skills in replicating real-world applications. It serves as a portfolio-ready project that demonstrates proficiency in React ecosystem tools and an eye for detail in modern UI development.",
    image: "pearl.png",
    live: true,
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "API",
    ],
    link: "https://sprightly-naiad-6ee4f4.netlify.app/",
    github: "https://github.com/RajaBijoriya/Pearl-Application.git",
  },

  {
    title: "Logo Folio Clone",
    decs: "LogoFolio Clone is a front-end web application that replicates the look and feel of the original LogoFolio — a modern, minimalist portfolio site for showcasing creative logo designs. Built using React, Tailwind CSS, Mantine UI, and Tabler Icons, the project highlights clean design aesthetics, responsive layout techniques, and component reusability.This clone was developed to sharpen skills in building design-focused interfaces and to demonstrate attention to detail in front-end implementation. The interface features a sleek grid layout, smooth hover animations, and a responsive navigation system that adapts flawlessly across devices. Tailwind CSS was used for rapid and consistent styling, while Mantine and Tabler provided elegant UI elements and icons.LogoFolio Clone serves as a strong portfolio project for front-end developers aiming to display visual work in a polished, professional manner. It emphasizes the ability to transform high-quality design references into fully functional, visually engaging web interfaces using modern React-based tools.",
    image: "logofolio.png",
    live: true,
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "API",
    ],
    link: "https://logo-folio-three.vercel.app/",
    github: "https://github.com/RajaBijoriya/Logo-Folio.git",
  },
  {
    title: "WebUI Cloner",
    decs: "A CLI WebUI Cloner is a Node.js tool that crawls a target URL, mirrors its structure, and generates clean, local copies of HTML, CSS, JS, and assets for rapid prototyping and offline analysis using OpenAI for optional content rewriting and metadata cleanup. It resolves links, normalizes paths, and preserves sitemap hierarchy, with flags for depth, rate limiting, robots.txt respect, and ignore patterns. Typical workflow: fetch → parse → download assets → rewrite references → save → optionally AI‑refine text/alt tags → export. Publish as an npm package with a bin entry for global access and DX-friendly commands.",
    image: "cloneCLI.png",
    live: true,
    technologies: ["Node.js", "Express", "GEMINI API", "OPEN API"],
    link: " ",
    github: "https://github.com/RajaBijoriya/clone-agent-CLI.git",
  },
];
const SkillInfo = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Angular","Redux",
    "Tailwind CSS", "Material UI", "SASS", "Bootstrap","GSAP"
    ]
  },
  {
    title: "Backend",
    skills: ["Springboot","Node JS","Express JS", "MySQL","MongoDB",
    "Firebase","PostgresSQL"]

  },
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "Python", "TypeScript"]
  },
  {
    title: "Tools",
    skills: ["Git", "Github", "VS Code", "MongoDB Compass", "Postman",
      "Spring Tool Suite"
    ]
  }

];

const socialLinks = [
    {link:"https://github.com/RajaBijoriya",icon:IconBrandGithub},
    {link:"https://www.linkedin.com/in/raja-bijoriya",icon:IconBrandLinkedin},
    {link:"https://www.instagram.com/raja_bijoriya/",icon:IconBrandInstagram},
    {link:"https://www.youtube.com/@RajaBijoriya",icon:IconBrandYoutube},
    {link:"https://leetcode.com/u/Raja_Bijoriya/",icon:IconBrandLeetcode}
];

const ExperienceInfo = [
  {
    title: "Web Developer Resposive",
    company: "FreeCodeCamp",
    date: "2024",
    desc: "Earned a certificate in Responsive Web Development from freeCodeCamp, showcasing proficiency in building responsive and mobile-first websites. This certification covers key web development concepts, including HTML, CSS, Flexbox, Grid, and best practices for creating user-friendly, adaptable designs. It reflects a solid understanding of foundational web technologies and a commitment to continuous learning.",
    skills: ["HTML", "CSS", "Flexbox", "Grid", "Responsive Design"], 

  },
  {
    title: "AI For Beginners",
    company: "HP",
    date: "2024",
    desc: "Awarded a certificate for successfully completing the AI for Beginners course by HP. This program provided a strong foundation in artificial intelligence concepts, including machine learning, neural networks, and real-world AI applications. The certification highlights my commitment to exploring emerging technologies and staying at the forefront of innovation.",
    skills: ["AI", "Machine Learning", "Neural Networks", "AI Applications"]

  }
];

const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export { Info, ProjectInfo, SkillInfo,socialLinks, ExperienceInfo,Slugs };
