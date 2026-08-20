import dynamic from "next/dynamic";

export const ProjectListProjectSection = dynamic(
  () => import("./ListProjectSection"),
  { ssr: false }
);
export const ProjectGetInTouchSection = dynamic(
  () => import("./GetInTouchSection"),
  { ssr: false }
);
