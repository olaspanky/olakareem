import { m } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,  
  jbc,
  mir,
  psolar,
  spawn,
  tlight,
  versus,
  Sonus,pbrlogo, plogo, lpi
} from "../assets";
import { v } from "maath/dist/misc-7d870b3c.esm";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "PBR Life Sciences",
    icon: pbrlogo,
    iconBg: "#383E56",
    date: "january 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Nextjs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Executed pixel-perfect implementations of designs for customer applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Engineer/Tutor",
    company_name: "Linux Professional Institute",
    icon: lpi,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Executed pixel-perfect implementations of designs for customer applications",
      "Optimized web pages for faster startup time and responsiveness ",
      "Got Linux certified and trained students in different fields of Software Development",
      "Managed the company  Website and increased traffic by over 50%",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Prosolar Energy",
    icon: plogo,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kareem proved me wrong.",
    name: "Mr Owolabi",
    designation: "CEO",
    company: "Prosolar Energy",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kareem does.",
    name: "Mr Temitope",
    designation: "COO",
    company: "jBC ",
    image: "",
  },
  {
    testimonial:
      "I love having Kareem on my team!",
    name: "Seun",
    designation: "PM",
    company: "PBR Life Sciences",
    image: "",
  },
];

const projects = [
  {
    name: "SPAWNHUB",
    description:
      "A modern declutter website to showcase my work and skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spawn,
    source_code_link: "https://spawn-nine.vercel.app/",
  },
  {
    name: "PBR MIR",
    description:
      "A fully functional e-commerce data platform with payment integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mir,
    source_code_link: "https://pbrmir.com",
  },
  {
    name: "Versus",
    description:
      "A data science webapp for pharmaceutical companies to make informed decisions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: versus,
    source_code_link: "https://trafficpulse.pbrinsight.com.ng/",
  },
  {
    name: "Prosolar Website",
    description:
      "A Website where you can get instant quote on your preferred solar option.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: psolar,
    source_code_link: "https://prosolarng.com/",
  },
  {
    name: "JBC Club Website",
    description:
      "A website that represents Jericho Businessmen Club.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jbc,
    source_code_link: "https://summit.jbcibadan.org/",
  },
  {
    name: "Traffic Light App",
    description:
      "A task management app to manage task scheduling and monitoring in real time.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tlight,
    source_code_link: "https://trafficpulsepbr.global/",
  },
];

export { services, technologies, experiences, testimonials, projects };
