// Project Images
import makepetantuma from "@images/makepetantuma.png";
import mulih from "@images/mulih.webp";
import travel from "@images/travel.webp";
import bookshelf from "@images/bookshelf.webp";
import notes from "@images/notes.webp";
import treede from "@images/3d.webp";
import abinawa from "@images/abinawa.webp";
import inpoums from "@images/inpoums.webp";
// import portfolio_v1 from "@images/portfolio-v1.webp";
import bertumbuh from "@images/bertumbuh.webp";
import coffe_bean from "@images/coffe-bean.webp";
import dapbunda from "@images/dapbunda.webp";
import hpcjapan from "@images/hpc-japan.webp";
import ceritain from "@images/ceritain.webp";
import pinarak_resto from "@images/pinarak_resto.webp";
import stunting from "@images/stunting.png";
import beeGenius from "@images/bee-genius.png";


// Gif Images
import dapbundaGif from "@gif/dapbunda.gif";
import coffebeanGif from "@gif/coffe-bean.gif";
import portfolioGif from "@gif/portfolio.gif";
import notesGif from "@gif/notes.gif";
import abinawaGif from "@gif/abinawa.gif";
import bookshelfGif from "@gif/bookshelf.gif";
import sakurajapanGif from "@gif/sakura-japan.gif";
import ceritainGif from "@gif/ceritain.gif";
import pinarakrestoGif from "@gif/pinarak-resto.gif";
import ICONS from "@/constants/icons";
import { StaticImageData } from "next/image";

const tools = {
  Git: { name: "Git", src: ICONS.git, level: "Version control" },
  Github: { name: "Github", src: ICONS.github, level: "Git hosting" },
  NPM: { name: "PNPM", src: ICONS.npm, level: "Depedencies manager" },
  VSCode: { name: "VSCode", src: ICONS.vscodeCodeEditor, level: "Code editor" },
  Figma: { name: "Figma", src: ICONS.figma, level: "UIUX Design tool" },
  Blender: { name: "Blender", src: ICONS.blender, level: "3D software" },
  Spline: { name: "Spline", src: ICONS.spline, level: "Web 3D design" },
  Firebase: {
    name: "Firebase",
    src: ICONS.firebase,
    level: "Database,Auth,Realtime",
  },
  MongoDB: {
    name: "MongoDB",
    src: ICONS.mongodb,
    level: "NoSQL database",
  },
  MySQL: {
    name: "MySQL",
    src: ICONS.mysqlDb,
    level: "Relational database",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    src: ICONS.postgreSQL,
    level: "Relational database",
  },
};

interface IStack {
  name: string;
  src: string | StaticImageData;
  level: "Beginer" | "Intermediate" | "Advanced" | "Expert";
}

const stacks: Record<string, IStack> = {
  HTML: { name: "HTML", src: ICONS.html5, level: "Expert" },
  CSS: { name: "CSS", src: ICONS.css3, level: "Expert" },
  SASS: { name: "SASS", src: ICONS.sass, level: "Advanced" },
  JS: { name: "Javascript", src: ICONS.js, level: "Expert" },
  Typescript: {
    name: "Typescript",
    src: ICONS.typescriptTsLogo,
    level: "Expert",
  },
  // Styling / UI Frameworks
  Tailwind: { name: "TailwindCSS", src: ICONS.tailwind, level: "Expert" },
  Bootstrap: { name: "Bootstrap", src: ICONS.bootstrap, level: "Expert" },
  MaterialUI: {
    name: "MaterialUI",
    src: ICONS.materialUI,
    level: "Intermediate",
  },
  Shadcn: { name: "Shadcn", src: ICONS.shadcn, level: "Expert" },

  // 3. JavaScript Frameworks & Libraries
  React: { name: "React", src: ICONS.react, level: "Expert" },
  ReactNative: { name: "React Native", src: ICONS.react, level: "Advanced" },
  NextJS: { name: "Next", src: ICONS.nextjs, level: "Expert" },
  Vue: { name: "Vue", src: ICONS.vue, level: "Intermediate" },
  ThreeJS: {
    name: "ThreeJS",
    src: ICONS.threejs,
    level: "Intermediate",
  },
  Vite: { name: "Vite", src: ICONS.vite, level: "Advanced" },
  Webpack: { name: "Webpack", src: ICONS.webpackBundler, level: "Advanced" },
  Storybook: { name: "Storybook", src: ICONS.storybook, level: "Advanced" },
  ReactQuery: {
    name: "React Query",
    src: ICONS.reactQueryLogo,
    level: "Expert",
  },

  // 4. Backend / Fullstack Technologies
  Express: { name: "Express", src: ICONS.express, level: "Advanced" },
  HonoJs: { name: "Hono", src: ICONS.honoJs, level: "Expert" },
  WebSocket: {
    name: "WebSocket",
    src: ICONS.websocket,
    level: "Intermediate",
  },
  Laravel: { name: "Laravel", src: ICONS.laravel, level: "Intermediate" },

  // 5. Databases & ORMs
  PrismaORM: {
    name: "Prisma ORM",
    src: ICONS.prismaOrm,
    level: "Intermediate",
  },
  DrizzleOrm: {
    name: "Drizzle ORM",
    src: ICONS.drizzleOrm,
    level: "Advanced",
  },
};

const projects = [
  {
    id: 1,
    name: "Make Petan Tuma",
    desc: "A web-based data collection system for persons with disabilities and the elderly, developed for the Department of Population and Civil Registration (Disdukcapil) of Sukoharjo during an internship program.",
    image: makepetantuma,
    web: "https://rikiadhin.my.id/petan/",
    repo: "https://github.com/UtasPrasojo/project-based-learning-dukcapil-skh",
    stack: "HTML, CSS, React, Responsive Web Design",
    gif: "",
  },
  {
    id: 2,
    name: "Stunting",
    desc: "Developed a data collection and monitoring website for stunting cases, aimed at tracking data of stunted children in the Yogyakarta area, monitoring maternal health, and assessing children's nutritional adequacy. Built using Vue + Vite and styled with Tailwind CSS.",
    image: stunting,
    web: "https://github.com/UtasPrasojo/stunting-apps",
    repo: "https://github.com/UtasPrasojo/stunting-apps",
    stack: "HTML, Typescript, Vue, Postgres, TailwindCSS, NaiveUI, Vite",
    gif: "",
  },
  {
    id: 3,
    name: "Bee-Genius",
    desc: "Performed maintenance and resolved bugs on a website for registration and scheduling of psychological consultations and therapy sessions, using Next.js and Tailwind CSS. Technologies used",
    image: beeGenius,
    web: "https://github.com/UtasPrasojo/bee-genius-apps",
    repo: "https://github.com/UtasPrasojo/bee-genius-apps",
    stack: "HTML, React, Tailwind, HeroUI, NextJS",
  },
  
];

export { tools, stacks, projects };
