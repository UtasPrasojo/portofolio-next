import type { Metadata } from "next";
import Image from "next/image";
import bannerImage from "@images/v2/hero/Frame 30.png";
import apolloImage from "@images/v2/hero/Frame 31.png";
import HeroArtwork from "./_components/hero-artwork";
import RevealCard from "./_components/reveal-card";
import { artwork } from "./_components/artwork";
import styles from "./v2.module.css";

export const metadata: Metadata = {
  title: "Utas Prasojo — The art of building for the web",
  description:
    "Software engineer crafting thoughtful digital experiences with Vue, React, TypeScript, and Next.js. Explore selected work by Utas Prasojo.",
};

const selectedProjects = [
  {
    name: "Jenjang",
    category: "SELF-DISCOVERY PLATFORM",
    description:
      "Helping people discover their strengths and unlock their potential.",
    stack: "Vue · Vite · Tailwind CSS",
    image: "/images/jenjang.jpeg",
    slug: "jenjang",
    href: "https://app.jenjang.com/",
  },
  {
    name: "Sukarela",
    category: "COMMUNITY & CONNECTION",
    description:
      "A place where volunteers and meaningful opportunities come together.",
    stack: "Vue · Vite · Tailwind CSS",
    image: "/images/sukarela.jpeg",
    slug: "sukarela",
    href: "https://sukarela.id/",
  },
  {
    name: "Bee-Genius",
    category: "HEALTHCARE EXPERIENCE",
    description:
      "Making psychological consultations and therapy easier to access.",
    stack: "Next.js · React · Tailwind CSS",
    image: "/images/bee-genius.png",
    slug: "bee-genius",
    href: "https://beegenius.id/",
  },
];

export default function PortfolioV2() {
  return (
    <>
      <section className={styles.hero} id="intro" aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span className={styles.shortLine} /> SOFTWARE ENGINEER & CREATIVE
            THINKER
          </p>
          <p className={styles.greeting}>Hi, my name is</p>
          <h1 id="hero-title">
            Utas
            <br />
            <em>Prasojo.</em>
          </h1>
          <p className={styles.heroDescription}>
            A little imagination.
            <br />A lot of thoughtful engineering.
          </p>
          <p className={styles.bodyCopy}>
            I build modern, intuitive web experiences with Vue, React, and
            TypeScript. Turning complex ideas into something beautifully simple.
          </p>
          <div className={styles.actions}>
            <a href="/v2/projects" className={styles.primaryButton}>
              Explore my work
            </a>
          </div>
        </div>
        <HeroArtwork />
        <div className={styles.heroBottom}>
          <span>BUILT WITH INTENTION</span>
          <span>
            SCROLL TO DISCOVER <span aria-hidden="true">⌄</span>
          </span>
          <span>PORTFOLIO / V2</span>
        </div>
      </section>

      <section
        className={styles.illustratedBanner}
        aria-label="Design philosophy"
      >
        <Image
          src={bannerImage}
          alt="Classical celestial illustration: Crafting seamless, modern and intuitive web experiences."
          sizes="(max-width: 760px) 86vw, 1190px"
          className={styles.bannerImage}
        />
      </section>

      <section
        className={styles.about}
        id="about"
        aria-labelledby="about-title"
      >
        <div className={styles.aboutEmblem}>
          <Image
            src={apolloImage}
            alt="Apollo sculpture with a radiant sun crown"
            fill
            sizes="(max-width: 760px) 520px, 720px"
          />
        </div>
        <p className={styles.eyebrow}>THE MIND BEHIND THE WORK</p>
        <h2 id="about-title">
          Driven by curiosity.
          <br />
          <em>Defined by craft.</em>
        </h2>
        <p>
          I’m Utas, a software engineer who believes great digital experiences
          are equal parts clarity, character, and care. From the first idea to
          the final interaction, I build with people in mind.
        </p>
        <div className={styles.skills} aria-label="Core technologies">
          {["Vue", "React", "TypeScript", "Next.js", "Tailwind CSS"].map(
            (skill) => (
              <span key={skill}>{skill}</span>
            )
          )}
        </div>
        <a href="/v2/about" className={styles.textButton}>
          More about me <span aria-hidden="true">＋</span>
        </a>
      </section>

      <section className={styles.work} id="work" aria-labelledby="work-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>IDEAS, BROUGHT TO LIFE</p>
            <h2 id="work-title">
              Selected <em>work.</em>
            </h2>
          </div>
          <a href="/v2/projects" className={styles.textButton}>
            Full project archive <span aria-hidden="true">＋</span>
          </a>
        </div>
        <div className={styles.projects}>
          {selectedProjects.map((project) => (
            <RevealCard key={project.slug}>
              <a
                className={styles.project}
                href={project.href}
                key={project.slug}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.name} (opens in a new tab)`}
              >
                <div className={styles.projectImage}>
                  <Image
                    src={artwork("projects", project.slug) || project.image}
                    alt={`${project.name} website preview`}
                    fill
                    sizes="(max-width: 760px) 90vw, 32vw"
                  />
                  <span className={styles.projectOverlay}>Explore project</span>
                </div>
                <p className={styles.projectCategory}>{project.category}</p>
                <h3>
                  {project.name}
                  <span aria-hidden="true">＋</span>
                </h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <p className={styles.projectStack}>{project.stack}</p>
              </a>
            </RevealCard>
          ))}
        </div>
      </section>
    </>
  );
}
