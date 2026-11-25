"use client";
import { useMemo, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FiSearch, FiGithub } from "react-icons/fi";
import styles from "../v2.module.css";
import detail from "../pages.module.css";

type Project = {
  name: string;
  desc: string;
  stack: string;
  image: string | StaticImageData;
  web?: string;
  repo?: string;
};
const filters = [
  "All",
  "Vue",
  "React / Next.js",
  "PHP / Laravel",
  "Mobile",
  "Other",
];
function matches(project: Project, filter: string) {
  const stack = project.stack.toLowerCase();
  if (filter === "All") return true;
  if (filter === "Vue") return /vue/.test(stack);
  if (filter === "React / Next.js") return /react|next/.test(stack);
  if (filter === "PHP / Laravel") return /php|laravel/.test(stack);
  if (filter === "Mobile") return /flutter|dart/.test(stack);
  return !/vue|react|next|php|laravel|flutter|dart/.test(stack);
}
function validUrl(value?: string) {
  return value && /^https?:\/\//.test(value) ? value : undefined;
}
export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const reducedMotion = useReducedMotion();
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          matches(project, filter) &&
          `${project.name} ${project.desc} ${project.stack}`
            .toLowerCase()
            .includes(query.trim().toLowerCase())
      ),
    [projects, filter, query]
  );
  function reset() {
    setFilter("All");
    setQuery("");
  }
  return (
    <section className={detail.gallery} aria-label="Project archive">
      <div className={detail.galleryControls}>
        <div
          className={detail.filters}
          role="group"
          aria-label="Filter by technology"
        >
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className={detail.search}>
          <FiSearch aria-hidden="true" />
          <span className={detail.srOnly}>Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects…"
          />
        </label>
      </div>
      <div className={detail.results}>
        <p role="status" aria-live="polite">
          Showing {filtered.length} of {projects.length} projects
        </p>
        {(query || filter !== "All") && (
          <button type="button" onClick={reset}>
            Clear filters
          </button>
        )}
      </div>
      <div className={detail.archiveGrid}>
        {filtered.map((project) => {
          const web = validUrl(project.web);
          const repo = validUrl(project.repo);
          const isRepository = web?.includes("github.com/");
          return (
            <motion.article
              className={detail.projectCard}
              key={project.name}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={reducedMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  sizes="(max-width: 760px) 86vw, 43vw"
                />
              </div>
              <div className={detail.projectContent}>
                <p className={detail.projectTech}>{project.stack}</p>
                <h2>{project.name}</h2>
                <p className={detail.projectText}>{project.desc}</p>
                <div className={detail.projectLinks}>
                  {web && (
                    <a href={web} target="_blank" rel="noreferrer">
                      {isRepository
                        ? "View repository"
                        : web.includes("drive.google.com")
                        ? "View project files"
                        : "Visit project"}
                      <span aria-hidden="true">＋</span>
                    </a>
                  )}
                  {repo && repo !== web && (
                    <a href={repo} target="_blank" rel="noreferrer">
                      <FiGithub aria-hidden="true" /> Source code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <div className={detail.empty}>
          <span aria-hidden="true">✦</span>
          <h2>No projects found.</h2>
          <p>Try another keyword or technology.</p>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={reset}
          >
            Show all projects
          </button>
        </div>
      )}
    </section>
  );
}
