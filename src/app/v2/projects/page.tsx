import type { Metadata } from "next";
import { projects } from "@/utils/datas";
import { artwork } from "../_components/artwork";
import ProjectGallery from "./project-gallery";
import styles from "../v2.module.css";
import detail from "../pages.module.css";
export const metadata: Metadata = {
  title: "Projects — Utas Prasojo",
  description:
    "Explore Utas Prasojo’s projects: web platforms, healthcare tools, mobile applications, games, and computer vision.",
};
export default function ProjectsV2() {
  const entries = projects.map((project) => ({
    ...project,
    image:
      artwork(
        "projects",
        project.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/-$/, "")
      ) || project.image,
  }));
  return (
    <>
      <section
        className={detail.archiveHero}
        aria-labelledby="projects-heading"
      >
        <p className={styles.eyebrow}>AN ARCHIVE OF IDEAS MADE REAL</p>
        <h1 id="projects-heading">
          Made with thought.
          <br />
          <em>Built with purpose.</em>
        </h1>
        <div className={detail.archiveIntro}>
          <p>
            From everyday experiences to complex platforms. A collection of
            projects in web, mobile, and beyond.
          </p>
          <span>{projects.length} PROJECTS / ONE CURIOUS MIND</span>
        </div>
        <span className={detail.archiveStar} aria-hidden="true">
          ✳
        </span>
      </section>
      <ProjectGallery projects={entries} />
    </>
  );
}
