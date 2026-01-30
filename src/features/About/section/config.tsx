import ICONS from "@/constants/icons";
import {
  IDATA_AWARDS,
  IDATA_ORGANIZATION,
  IDATA_WORK_EXPERIENCE,
} from "./types";

export const DATA_WORK_EXPERIENCE: IDATA_WORK_EXPERIENCE[] = [
  {
    title: "Frontend Developer",
    url: "https://gmedia.id/",
    company: "PT.media Sarana Data",
    date: "Nov 2025 - May 2026",
    description: (
      <ul className="list-inside list-disc">
        <li>
          ⁠Creating a webview with the perfect slicing method for response
          insight using vue.js and tailwind css. Which will be displayed on
          Android and iOS mobile devices. Mobile integration using InAppWebview.
          Creating a psychological assessment to determine personality using
          vue.js and integration with socket.io for real-time answer sending to
          minimize answer loss when the connection is lost. Creating a dashboard
          using Vue.js that will be used to monitor employees. Starting from
          discipline statistics, monitoring the number of assessments, and
          monitoring the discipline of each division.
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
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Javascript",
        icon: ICONS.javascript,
      },
    ],
  },
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
    ],
  },
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
        <p>
          <a
            href="https://drive.google.com/file/d/1ePYXQg4aHgdX0IdieF2bhw_FAOzavdvm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-underline"
          >
            Certificate
          </a>
        </p>
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
        <p>
          <a
            href="https://drive.google.com/file/d/1J5L8x3ODlnIWLhLq6SsWIzf4137mZgC9/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-underline"
          >
            Certificate
          </a>
        </p>
      </>
    ),
  },
];
