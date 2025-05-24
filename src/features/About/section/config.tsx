import ICONS from "@/constants/icons";
import {
  IDATA_AWARDS,
  IDATA_ORGANIZATION,
  IDATA_WORK_EXPERIENCE,
} from "./types";

export const DATA_WORK_EXPERIENCE: IDATA_WORK_EXPERIENCE[] = [
  {
    title: "Intern Frontend Developer",
    url: "https://d3ti.vokasi.uns.ac.id/",
    company: "D3TI - Universitas Sebelas Maret",
    date: "Jan 2025 - March 2025",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Creating and developing "SISKA," a website for managing student
          records—including certifications, training, achievements, and more—by
          designing the interface in Figma and implementing it using Vue.js with
          Naive UI and Tailwind CSS. The project also involves integrating
          backend APIs using useHttpMutation to ensure smooth and functional
          performance across the platform.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "Vite",
        icon: ICONS.vite,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Vue",
        icon: ICONS.vue,
      },
      // {
      //   name: "TailwindCSS",
      //   icon: ICONS.tailwind,
      // },
      {
        name: "Naive UI",
        icon: ICONS.naiveUI,
      },
      {
        name: "Figma",
        icon: ICONS.figma,
      },
    ],
  },
  {
    title: "Intern Frontend Developer",
    url: "https://solutionlabs.id/",
    company: "SolutionLabs.Id",
    date: "Augs 2024 - Jan 2025",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Performed maintenance and resolved bugs on a website for registration
          and scheduling of psychological consultations and therapy sessions,
          using Next.js and Tailwind CSS.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Next.js",
        icon: ICONS.nextjs,
      },
      // {
      //   name: "TailwindCSS",
      //   icon: ICONS.tailwind,
      // },
      {
        name: "Shadcn UI",
        icon: ICONS.shadcn,
      },
      {
        name: "Figma",
        icon: ICONS.figma,
      },
    ],
  },
  {
    title: "Intern Frontend Developer",
    url: "https://solutionlabs.id/",
    company: "SolutionLabs.Id",
    date: "Augs 2024 - Jan 2025",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Developed a data collection and monitoring website for stunting cases,
          aimed at tracking data of stunted children in the Yogyakarta area,
          monitoring maternal health, and assessing children's nutritional
          adequacy. Built using Vue + Vite and styled with Tailwind CSS.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "Vite",
        icon: ICONS.vite,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Vue",
        icon: ICONS.vue,
      },
      // {
      //   name: "TailwindCSS",
      //   icon: ICONS.tailwind,
      // },
      {
        name: "Naive UI",
        icon: ICONS.naiveUI,
      },
      {
        name: "Figma",
        icon: ICONS.figma,
      },
    ],
  },
  {
    title: "Intern Frontend Developer",
    url: "https://dispendukcapil.sukoharjokab.go.id/",
    company: "Dukcapil Sukoharjo",
    date: "Jan 2024 - July 2024",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Designing and creating the website interface for the data collection
          of disabled citizens and vulnerable populations using Figma and Visual
          Studio Code with React.js.
        </li>
        <li>
          Designing the website interface to align with user experience using
          Tailwind CSS.
        </li>
        <li>
          Integrating the API from the backend so that the website functions as
          expected.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "HTML",
        icon: ICONS.html5,
      },
      {
        name: "Javascript",
        icon: ICONS.javascript,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "Figma",
        icon: ICONS.figma,
      },
      // {
      //   name: "Vite",
      //   icon: ICONS.vite,
      // },
    ],
  },
  {
    title: "Frontend Developer",
    url: "https://d3ti.vokasi.uns.ac.id/",
    company: "SI LAPAR - Universitas Sebelas Maret",
    date: "Aug 2023 - Dec 2023",
    description: (
      <p>
        Developed an online food ordering application using Flutter and Android
        Studio, allowing users to order food and have it delivered to their
        specified address.
      </p>
    ),
    techs: [
      {
        name: "Flutter",
        icon: ICONS.flutter,
      },
      // {
      //   name: "React",
      //   icon: ICONS.react,
      // },
      // {
      //   name: "NextJS",
      //   icon: ICONS.nextjs,
      // },
      // {
      //   name: "React Query",
      //   icon: ICONS.reactQueryLogo,
      // },
      // {
      //   name: "TailwindCSS",
      //   icon: ICONS.tailwind,
      // },
      // {
      //   name: "Shadcn UI",
      //   icon: ICONS.shadcn,
      // },
      // {
      //   name: "Hono.js",
      //   icon: ICONS.honoJs,
      // },
      // {
      //   name: "Firebase",
      //   icon: ICONS.firebase,
      // },
      // {
      //   name: "Drizzle ORM",
      //   icon: ICONS.drizzleOrm,
      // },
      // {
      //   name: "Neon DB",
      //   icon: ICONS.neonDb,
      // },
    ],
  },
  // {
  //   title: "Application Awardee",
  //   url: "https://library.ums.ac.id/",
  //   company: "UMS Library",
  //   date: "Apr 2024 - Jul 2024",
  //   description: (
  //     <p>
  //       Improved the efficiency of room booking through an integrated digital
  //       system that was officially adopted and further developed by the UMS
  //       Library, recognized as the Best Awardee for delivering a high-impact,
  //       real-world application that directly addressed the needs of the academic
  //       institution.
  //     </p>
  //   ),
  //   techs: [
  //     {
  //       name: "Typescript",
  //       icon: ICONS.typescriptTsLogo,
  //     },
  //     {
  //       name: "NextJS",
  //       icon: ICONS.nextjs,
  //     },
  //     {
  //       name: "React Query",
  //       icon: ICONS.reactQueryLogo,
  //     },
  //     {
  //       name: "TailwindCSS",
  //       icon: ICONS.tailwind,
  //     },
  //     {
  //       name: "Shadcn UI",
  //       icon: ICONS.shadcn,
  //     },
  //     {
  //       name: "Express",
  //       icon: ICONS.express,
  //     },
  //     {
  //       name: "Prisma ORM",
  //       icon: ICONS.prismaOrm,
  //     },
  //     {
  //       name: "Supabase",
  //       icon: ICONS.supabaseDb,
  //     },
  //   ],
  // },
  // {
  //   title: "Rey.id - Frontend Engineer",
  //   url: "https://rey.id/",
  //   company: "Rey.id",
  //   date: "Sep 2023 - Feb 2024",
  //   description: (
  //     <p>
  //       Contributed to the maintenance and development of the{" "}
  //       <a
  //         href="https://rey.id/"
  //         className="text-underline"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         Rey.id
  //       </a>{" "}
  //       website and the Internal Doctor Chat system, while also developing OLVO,
  //       a chat application integrated as a webview within mobile devices.
  //     </p>
  //   ),
  //   techs: [
  //     {
  //       name: "Typescript",
  //       icon: ICONS.typescriptTsLogo,
  //     },
  //     {
  //       name: "React",
  //       icon: ICONS.react,
  //     },
  //     {
  //       name: "NextJS",
  //       icon: ICONS.nextjs,
  //     },
  //     {
  //       name: "React Query",
  //       icon: ICONS.reactQueryLogo,
  //     },
  //     {
  //       name: "Material UI",
  //       icon: ICONS.materialUI,
  //     },
  //     {
  //       name: "WebSocket",
  //       icon: ICONS.websocket,
  //     },
  //   ],
  // },
  // {
  //   title: "Generasi GIGIH 3.0 - Fullstack Engineer Apprenticeship",
  //   url: "https://www.anakbangsabisa.org/generasi-gigih/program",
  //   company: "GoTo Impact Foundation",
  //   date: "Jun 2023 - Dec 2023",
  //   description: (
  //     <p>
  //       I underwent skill development encompassing both soft and hard skills,
  //       emphasizing the MERN technology stack (MongoDB, Express, React,
  //       Node.js), including crafting a web-based{" "}
  //       <a
  //         href="https://github.com/ulinnajaaldi/gigih-3.0-fs-spotify"
  //         className="text-underline"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         Spotify clone
  //       </a>{" "}
  //       with the official Spotify API, setting up a REST API for a Tokopedia
  //       Play clone using Express and MongoDB, and building a{" "}
  //       <a
  //         href="https://github.com/ulinnajaaldi/gigih-3.0-fs-final-project"
  //         className="text-underline"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         Tokopedia Play clone
  //       </a>{" "}
  //       website utilizing the MERN technology stack.
  //     </p>
  //   ),
  //   techs: [
  //     {
  //       name: "Typescript",
  //       icon: ICONS.typescriptTsLogo,
  //     },
  //     {
  //       name: "Javascript",
  //       icon: ICONS.javascript,
  //     },
  //     {
  //       name: "Express",
  //       icon: ICONS.express,
  //     },
  //     {
  //       name: "React Query",
  //       icon: ICONS.reactQueryLogo,
  //     },
  //     {
  //       name: "Formik",
  //       icon: ICONS.formikLogo,
  //     },
  //     {
  //       name: "React",
  //       icon: ICONS.react,
  //     },
  //     {
  //       name: "WebSocket",
  //       icon: ICONS.websocket,
  //     },
  //     {
  //       name: "NodeJS",
  //       icon: ICONS.nodejs,
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: ICONS.mongodb,
  //     },
  //   ],
  // },
  // {
  //   title: "Frontend Engineer",
  //   url: "https://www.instagram.com/io.ums.official/",
  //   company: "BKUI Universitas Muhammadiyah Surakarta",
  //   date: "Jun 2023 - Aug 2023",
  //   description: (
  //     <p>
  //       I am responsible for developing the{" "}
  //       <a
  //         href="https://galeriinovasi.ums.ac.id/"
  //         className="text-underline"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         Galeri Inovasi UMS
  //       </a>{" "}
  //       application system, including selecting and implementing an appropriate
  //       tech stack for efficient front-end development, collaborating with
  //       back-end developers for seamless integration, optimizing website
  //       performance, conducting testing, debugging, and troubleshooting
  //       front-end issues in collaboration with cross-functional teams when
  //       needed.
  //     </p>
  //   ),
  //   techs: [
  //     {
  //       name: "Typescript",
  //       icon: ICONS.typescriptTsLogo,
  //     },
  //     {
  //       name: "NextJS",
  //       icon: ICONS.nextjs,
  //     },
  //     {
  //       name: "React Query",
  //       icon: ICONS.reactQueryLogo,
  //     },
  //     {
  //       name: "TailwindCSS",
  //       icon: ICONS.tailwind,
  //     },
  //   ],
  // },
  // {
  //   title: "Fullstack Web Developer Intern",
  //   url: "https://www.socmediaagency.com/",
  //   company: "SOC MEDIA GRUP",
  //   date: "Feb 2023 - May 2023",
  //   description: (
  //     <p>
  //       I contributed to an admin dashboard for a SOCLife site, collaborated via
  //       GitHub and GitLab, and played a key role as a Front-End Developer in
  //       building the{" "}
  //       <a
  //         href="https://github.com/sgitwhyd/MejengProject"
  //         className="text-underline"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         Mejeng
  //       </a>{" "}
  //       platform, ensuring functionality. I followed code best practices with
  //       descriptive commits, organized repositories, and established branching
  //       strategies.
  //     </p>
  //   ),
  //   techs: [
  //     {
  //       name: "Javascript",
  //       icon: ICONS.javascript,
  //     },
  //     {
  //       name: "PHP",
  //       icon: ICONS.php,
  //     },
  //     {
  //       name: "Laravel",
  //       icon: ICONS.laravel,
  //     },

  //     {
  //       name: "NextJS",
  //       icon: ICONS.nextjs,
  //     },
  //     {
  //       name: "Bootsrap",
  //       icon: ICONS.bootstrap,
  //     },
  //     {
  //       name: "TailwindCSS",
  //       icon: ICONS.tailwind,
  //     },
  //     {
  //       name: "MySQL",
  //       icon: ICONS.mysqlDb,
  //     },
  //   ],
  // },
];

export const DATA_ORGANIZATION: IDATA_ORGANIZATION[] = [
  {
    title: "Directorate General of Branding and Communication",
    url: "https://www.instagram.com/bemsvuns",
    organization: "BEM SV UNS 2024",
    date: "Dec 2023 - Dec 2024",
    description: (
      <>
        <li>
          Create and manage designs needed for social media or internal purposes
          of BEM SV UNS, as well as assist other ministries if they request
          design support.
        </li>
      </>
    ),
  },
  {
    title: "Staff of General Treasurer",
    url: "https://www.instagram.com/emailkompuns/",
    organization: "EMAILKOMP UNS",
    date: "Jan 2024 - Jan 2025",
    description: (
      <>
        <li>
          Responsible for managing the inflow and outflow of funds within the
          organization, ensuring financial availability to support the smooth
          execution of all programs and activities.
        </li>
      </>
    ),
  },
  {
    title: "Design Coordinator",
    url: "https://www.instagram.com/smartitfestofficial/",
    organization: "SMART IT FESTIVAL",
    date: "May 2024 - March 2025",
    description: (
      <>
        <li>
          Responsible for managing and creating designs for the Smart IT
          Festival event, as well as assisting other divisions with design needs
          such as posters, covers, and other visual materials.
        </li>
      </>
    ),
  },
];

export const DATA_AWARDS: IDATA_AWARDS[] = [
  {
    title:
      "3rd Place Winner in UI/UX Design - Vocational of the Champions (VOC 2024)",
    url: "https://vocationofthechampions.com/",
    organization: "VOC 2024",
    date: "Nov 2024",
    description: (
      <>
        <li>
          Won 3rd place in a UI/UX Design competition for a website focused on
          monitoring stunting in toddlers and pregnant women.
        </li>
      </>
    ),
  },
  {
    title:
      "3rd Place in Smart System: Smart Application - National Vocational Olympiad (OLIVIA 2023)",
    url: "https://olivia.vokasi.uns.ac.id/",
    organization: "OLIVIA 2023",
    date: "March 2023",
    description: (
      <>
        <li>
          Developed an IoT-based bird pest repellent system for agriculture
          using YOLOv3 and an ESP32-CAM to detect objects. Once a bird is
          detected, the system activates a siren to scare it away. Additionally,
          built a monitoring website for agricultural data using React.js. The
          target market for this tool is millennial farmers.
        </li>
      </>
    ),
  },
 
];
