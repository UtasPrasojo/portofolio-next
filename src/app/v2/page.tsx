import type { Metadata } from "next";
import Image from "next/image";
import { artwork, Celestial } from "./_components/artwork";
import styles from "./v2.module.css";

export const metadata: Metadata = {
  title: "Utas Prasojo — The art of building for the web",
  description:
    "Software engineer crafting thoughtful digital experiences with Vue, React, TypeScript, and Next.js. Explore selected work by Utas Prasojo.",
};

function Temple() {
  return (
    <svg
      viewBox="0 0 1200 420"
      fill="none"
      aria-hidden="true"
      className={styles.temple}
    >
      <g stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 25 }, (_, i) => (
          <path key={i} d={`M600 65 L${i * 50} 420`} opacity=".18" />
        ))}
        <circle cx="600" cy="190" r="132" opacity=".3" />
        <circle cx="600" cy="190" r="155" opacity=".2" />
        {[85, 895].map((x) => (
          <g key={x}>
            <path
              d={`M${x} 175l110-80 110 80Zm-8 13h236v15H${
                x - 8
              }Zm0 173h236v16H${x - 8}Zm-15 22h266v15H${x - 23}Z`}
            />
            {[0, 1, 2, 3].map((i) => (
              <g key={i}>
                <path d={`M${x + 12 + i * 56} 207h27v149h-27z`} />
                {[6, 13, 20].map((n) => (
                  <path
                    key={n}
                    d={`M${x + 12 + i * 56 + n} 212v139`}
                    opacity=".5"
                  />
                ))}
              </g>
            ))}
          </g>
        ))}
        <path d="M0 405h1200M0 412h1200" />
      </g>
    </svg>
  );
}

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
  const hero = artwork("hero", "statue");
  const banner = artwork("banner", "olympus");
  const emblem = artwork("emblem", "apollo");
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
            <a
              href="https://drive.google.com/drive/folders/1IjCBhzgYSWyzRJ5Yke-g_iTrIoKSiK8p?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className={styles.textButton}
            >
              View my CV <span aria-hidden="true">＋</span>
            </a>
          </div>
        </div>
        <div className={styles.heroArt}>
          <div className={styles.arch} />
          <Celestial />
          {hero ? (
            <Image
              className={styles.statue}
              src={hero}
              alt="Classical Greek sculpture"
              fill
              sizes="(max-width: 760px) 90vw, 50vw"
              priority
              unoptimized
            />
          ) : (
            <div className={styles.artWord} aria-hidden="true">
              <span>τέχνη</span>
              <small>THE ART OF MAKING</small>
            </div>
          )}
          <span className={styles.artCorner} aria-hidden="true">
            ✦
          </span>
          <p className={styles.artCaption}>
            ANCIENT INSPIRATION. MODERN CREATION.
          </p>
        </div>
        <div className={styles.heroBottom}>
          <span>BUILT WITH INTENTION</span>
          <span>
            SCROLL TO DISCOVER <span aria-hidden="true">⌄</span>
          </span>
          <span>PORTFOLIO / V2</span>
        </div>
      </section>

      <section className={styles.manifesto} aria-label="Design philosophy">
        <div className={styles.manifestoArt}>
          {banner ? (
            <Image src={banner} alt="" fill sizes="100vw" unoptimized />
          ) : (
            <Temple />
          )}
        </div>
        <div className={styles.manifestoCopy}>
          <span className={styles.eyebrow}>WHERE CRAFT MEETS CODE</span>
          <h2>
            Timeless inspiration.
            <br />
            <em>Seamless experiences.</em>
          </h2>
          <span className={styles.manifestoStar} aria-hidden="true">
            ✦
          </span>
        </div>
      </section>

      <section
        className={styles.about}
        id="about"
        aria-labelledby="about-title"
      >
        <div className={styles.aboutEmblem}>
          {emblem ? (
            <Image
              src={emblem}
              alt="Apollo sculpture"
              width={200}
              height={200}
              unoptimized
            />
          ) : (
            <Celestial small />
          )}
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
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectStack}>{project.stack}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
