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
    title: "Razorpay Clone",
    decs: "This project is a responsive clone of the Razorpay website, meticulously crafted using HTML, CSS, and Tailwind CSS to replicate the original design with pixel-perfect accuracy. It features a modern, visually appealing layout with interactive elements, responsive design, and consistent typography, ensuring a seamless user experience across devices. Built with Tailwind's utility-first approach, the code is clean, maintainable, and efficient, showcasing the developer's expertise in front-end development and attention to detail in recreating real-world designs.",
    image: "razorpay.png",
    live: true,
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    link: "resilient-wisp-0e155d.netlify.app",
    github: "https://github.com/RajaBijoriya/Razorpay-Clone"
    
  },
  {
    title: "Study Synk",
    decs: "Study Synk is a full-stack web application that helps students organize their study materials, manage their schedules, and collaborate with peers to enhance their learning experience. The project features a user-friendly interface with intuitive navigation, responsive design, and interactive elements, providing a seamless user experience across devices. Built with React, Node.js, Express, and MongoDB, the application showcases the developer's proficiency in front-end and back-end development, database management, and API integration, delivering a robust and scalable solution for educational purposes.",
    image: "studysynk.png",
    live: true,
    technologies: ["HTML", "CSS"],
    link: "starlit-vacherin-be3b07.netlify.app",
    github: "https://github.com/RajaBijoriya/StudySynk"

  },
  {
    title: "coming  soon",
    decs: "Stay tuned for exciting projects currently in development! These upcoming creations will showcase advanced skills in web development, including responsive designs, seamless user interfaces, and innovative features. Each project is aimed at solving real-world problems while adhering to industry best practices. Keep an eye on this space as I continue to expand my portfolio with cutting-edge applications that reflect my passion for learning, creativity, and technology.",
    image: "comingsoon4.png",
    live: false,
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js", "Express", "MongoDB", "API"],
    link: "coming soon",
    github: "coming soon"
  },

  {
    title: "coming  soon",
    decs: "Stay tuned for exciting projects currently in development! These upcoming creations will showcase advanced skills in web development, including responsive designs, seamless user interfaces, and innovative features. Each project is aimed at solving real-world problems while adhering to industry best practices. Keep an eye on this space as I continue to expand my portfolio with cutting-edge applications that reflect my passion for learning, creativity, and technology.",
    image: "comingsoon4.png",
    live: false,
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js", "Express", "MongoDB", "API"],
    link: "coming soon",
    github: "coming soon"
  },
  {
    title: "coming  soon",
    decs: "Stay tuned for exciting projects currently in development! These upcoming creations will showcase advanced skills in web development, including responsive designs, seamless user interfaces, and innovative features. Each project is aimed at solving real-world problems while adhering to industry best practices. Keep an eye on this space as I continue to expand my portfolio with cutting-edge applications that reflect my passion for learning, creativity, and technology.",
    image: "comingsoon4.png",
    live: false,
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js", "Express", "MongoDB", "API"],
    link: "coming soon",
    github: "coming soon"
  },
  {
    title: "coming  soon",
    decs: "Stay tuned for exciting projects currently in development! These upcoming creations will showcase advanced skills in web development, including responsive designs, seamless user interfaces, and innovative features. Each project is aimed at solving real-world problems while adhering to industry best practices. Keep an eye on this space as I continue to expand my portfolio with cutting-edge applications that reflect my passion for learning, creativity, and technology.",
    image: "comingsoon4.png",
    live: false,
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js", "Express", "MongoDB", "API"],
    link: "coming soon",
    github: "coming soon"
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
    {link:"https://www.leedcode.com/u/Raja_Bijoriya/",icon:IconBrandLeetcode}
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
