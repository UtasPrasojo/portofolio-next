import dynamic from "next/dynamic";

export const AboutHeaderSection = dynamic(() => import("./HeaderSection"), {
  ssr: false,
});
export const AboutExperienceSection = dynamic(
  () => import("./ExperienceSection"),
  { ssr: false }
);
export const AboutTechstackSection = dynamic(
  () => import("./TechstackSection"),
  { ssr: false }
);
export const AboutToolusedSection = dynamic(
  () => import("./ToolusedSection"),
  { ssr: false }
);
