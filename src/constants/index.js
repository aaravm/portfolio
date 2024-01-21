import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    line: "/about",
  },
  {
    id: "projects",
    title: "Projects",
    line: "/projects",
  },
  {
    id: "work",
    title: "Awards And Experience",
    line: "/awards",
  },
  {
    id: "contact",
    title: "Contact",
    line: "/contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Aspiring Quant",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Indian National Mathematical Olympiad",
    company_name: "Qualified for the exam",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Dec 2021",
  },
  {
    title: "JEE Mains",
    company_name: "AIR: 5075",
    icon: coverhunt,
    iconBg: "#333333",
    date: "April 2022",
  },
  {
    title: "JEE Advanced",
    company_name: "AIR: 1905",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Aug 2022",
  },
  {
    title: "Prod-o-mania, Technex '23 IIT BHU",
    company_name: "2nd Position",
    icon: coverhunt,
    iconBg: "#333333",
    date: "March 2023",
  },
  {
    title: "Member of COPS SDG, IIT BHU",
    company_name: "",
    icon: kelhel,
    iconBg: "#333333",
    date: "July 2023",
  },
  {
    title: "Silicon Maze’23 NITK",
    company_name: "1st Position, ML Track",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Aug 2023",
  },
  {
    title: "Cosmomath, NSSC’23 IIT Kharagpur",
    company_name: "1st Position",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Sep 2023",
  },
  {
    title: "Inter IIT Tech Meet 12.0, IIT Madras",
    company_name: "Silver Medalist🥈 in Aptos (Web3)",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Dec 2023",
  },
  {
    title: "Inter IIT Sports Meet 12.0, IIT Gandhinagar",
    company_name: "#7 of 22 participating IIT's",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Dec 2023",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Image captioning",
    description:
      "A model utilizing Natural Language Processing and Computer Vision to generate a story on the by extracting the features of an input Image",
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
    image: space,
    repo: "https://github.com/aaravm/Image_cap",
    demo: "https://github.com/aaravm/Image_cap/blob/main/features.ipynb",
  },
  {
    id: "project-2",
    name: "Futures On Chain",
    description:
      "A decentralized futures trading platform built on top of the Aptos Blockchain (Inter IIT Techmeet 12.0)",
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
    image: komikult,
    repo: "https://github.com/ankur12-1610/delydelx",
    demo: "https://delydelx.vercel.app/",
  },
  {
    id: "project-3",
    name: "Chess on Blockchain",
    description:
      "This is a chess game built on Solidity, and an NFT is transferred to the winner",
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
    image: math,
    repo: "https://github.com/aaravm/interiit_web3",
    demo: "https://github.com/aaravm/interiit_web3",
  },
  {
    id: "project-4",
    name: "Neural ODEs",
    description: `A Machine Learning Project, where neural ODE's are used in 10-15 different ways to predict Delhi's climate`,
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
    image: movie,
    repo: "https://github.com/aaravm/neural_ode.git",
    demo: "https://github.com/aaravm/neural_ode/tree/main/scripts/plots",
  },
  {
    id: "project-5",
    name: "Matrix Calculator",
    description:
      "This is a calculator which can perform various calculations in matrices created using the tkinter library.",
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
    image: nyeusi,
    repo: "https://github.com/aaravm/matrix_calculator/tree/main",
    demo: "https://drive.google.com/file/d/172FZJ20rayUj7v_OqKGRpvWKZVLrQV11/view",
  },
];

export { services, technologies, experiences, projects };
