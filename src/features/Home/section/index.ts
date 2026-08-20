import dynamic from "next/dynamic";

export const HomeHeaderSection = dynamic(() => import("./HeaderSection"), {
  ssr: false,
});
export const HomeMainContent = dynamic(() => import("./MainContent"), {
  ssr: false,
});
