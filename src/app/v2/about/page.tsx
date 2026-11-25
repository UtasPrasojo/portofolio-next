import type { Metadata } from "next";
import Image from "next/image";
import { Children, Fragment, isValidElement, type ReactNode } from "react";
import {
  DATA_WORK_EXPERIENCE,
  DATA_ORGANIZATION,
  DATA_AWARDS,
} from "@/features/About/section/config";
import { DATA_CERTIFICATIONS } from "@/features/About/section/certifications";
import { DATA_EDUCATION } from "@/features/About/section/education";
import { stacks, tools } from "@/utils/datas";
import { artwork } from "../_components/artwork";
import ScrollPortrait from "../_components/scroll-portrait";
import RevealCard from "../_components/reveal-card";
import styles from "../v2.module.css";
import detail from "../pages.module.css";

export const metadata: Metadata = {
  title: "About — Utas Prasojo",
  description:
    "The experience, education, and craft behind Utas Prasojo’s work. Software engineering, frontend development, and thoughtful digital experiences.",
};

function description(node: ReactNode): ReactNode {
  return Children.map(node, (child) => {
    if (!isValidElement<{ children?: ReactNode }>(child)) return child;
    if (child.type === Fragment || child.type === "ul")
      return description(child.props.children);
    if (child.type === "li") return <p>{description(child.props.children)}</p>;
    return child;
  });
}

export default function AboutV2() {
  return (
    <>
      <section className={detail.aboutHero} aria-labelledby="about-heading">
        <div>
          <p className={styles.eyebrow}>THE PERSON BEHIND THE PIXELS</p>
          <h1 id="about-heading">
            A curious mind.
            <br />
            <em>A maker at heart.</em>
          </h1>
          <p className={detail.lead}>
            I’m Utas Prasojo, a web developer specializing in the Vue + React
            ecosystem.
          </p>
          <p className={detail.copy}>
            I build scalable applications using Vue and Vite, continuously learn
            Next.js, and focus on clean, maintainable code and intuitive
            interfaces.
          </p>
          <a className={styles.textButton} href="#journey">
            Explore my journey <span aria-hidden="true">＋</span>
          </a>
        </div>
        <ScrollPortrait>
          <Image
            src={artwork("about", "portrait") || "/images/utas.jpg"}
            alt="Utas Prasojo"
            fill
            sizes="(max-width: 760px) 85vw, 40vw"
            priority
          />
          <span aria-hidden="true">✦</span>
        </ScrollPortrait>
      </section>
      <section className={detail.philosophy} aria-labelledby="craft-heading">
        <p className={styles.eyebrow}>CLARITY. CHARACTER. CARE.</p>
        <h2 id="craft-heading">
          Thoughtful interfaces.
          <br />
          <em>Purposeful engineering.</em>
        </h2>
        <div>
          <p>
            My core strength lies in frontend development: building responsive,
            high-performing interfaces using Vue, Vite, Tailwind CSS, and
            Next.js. I’m expanding my backend skills with NestJS and Laravel to
            support end-to-end application development.
          </p>
          <p>
            From internal tools to production platforms, I’ve contributed to
            projects focused on user experience and performance. I’m committed
            to continuous learning, mentoring others, and contributing to
            developer communities.
          </p>
          <p>
            I also enjoy creative web experiences, occasionally blending in 3D
            elements to explore new ways to interact.
          </p>
        </div>
      </section>
      <div className={detail.journey} id="journey">
        <nav className={detail.sectionNav} aria-label="About sections">
          <p className={styles.eyebrow}>THE JOURNEY</p>
          {[
            ["experience", "Experience"],
            ["education", "Education"],
            ["organizations", "Organizations"],
            ["awards", "Awards"],
            ["certifications", "Certifications"],
            ["toolkit", "My toolkit"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className={detail.journeyContent}>
          <section id="experience" className={detail.chapter}>
            <p className={styles.eyebrow}>LEARNING THROUGH BUILDING</p>
            <h2>
              Work <em>experience.</em>
            </h2>
            <div className={detail.timeline}>
              {DATA_WORK_EXPERIENCE.map((item, i) => (
                <RevealCard
                  as="article"
                  className={detail.entry}
                  key={`${item.company}-${i}`}
                >
                  <p className={detail.date}>{item.date}</p>
                  <h3>{item.title}</h3>
                  <a
                    className={detail.institution}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.company}
                  </a>
                  <div className={detail.description}>
                    {description(item.description)}
                  </div>
                  <div className={detail.tags}>
                    {item.techs.map((tech) => (
                      <span key={tech.name}>{tech.name}</span>
                    ))}
                  </div>
                </RevealCard>
              ))}
            </div>
          </section>
          <section id="education" className={detail.chapter}>
            <p className={styles.eyebrow}>FOUNDATIONS OF THE CRAFT</p>
            <h2>
              Always a <em>student.</em>
            </h2>
            {DATA_EDUCATION.map((item) => (
              <RevealCard
                as="article"
                className={detail.entry}
                key={item.institution}
              >
                <p className={detail.date}>{item.date}</p>
                <h3>{item.title}</h3>
                {item.url ? (
                  <a
                    className={detail.institution}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.institution}
                  </a>
                ) : (
                  <p className={detail.institution}>{item.institution}</p>
                )}
                <div className={detail.description}>
                  {item.description.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </RevealCard>
            ))}
          </section>
          <section id="organizations" className={detail.chapter}>
            <p className={styles.eyebrow}>GROWING TOGETHER</p>
            <h2>
              Beyond <em>the code.</em>
            </h2>
            {DATA_ORGANIZATION.map((item) => (
              <RevealCard
                as="article"
                className={detail.entry}
                key={item.organization}
              >
                <p className={detail.date}>{item.date}</p>
                <h3>{item.title}</h3>
                <a
                  className={detail.institution}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.organization}
                </a>
                <div className={detail.description}>
                  {description(item.description)}
                </div>
              </RevealCard>
            ))}
          </section>
          <section id="awards" className={detail.chapter}>
            <p className={styles.eyebrow}>MILESTONES ALONG THE WAY</p>
            <h2>
              A little <em>recognition.</em>
            </h2>
            {DATA_AWARDS.map((item) => (
              <RevealCard
                as="article"
                className={`${detail.entry} ${detail.award}`}
                key={item.organization}
              >
                <span className={detail.awardStar} aria-hidden="true">
                  ✦
                </span>
                <p className={detail.date}>{item.date}</p>
                <h3>{item.title}</h3>
                <a
                  className={detail.institution}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.organization}
                </a>
                <div className={detail.description}>
                  {description(item.description)}
                </div>
              </RevealCard>
            ))}
          </section>
          <section id="certifications" className={detail.chapter}>
            <p className={styles.eyebrow}>CURIOSITY, PUT INTO PRACTICE</p>
            <h2>
              Keep <em>learning.</em>
            </h2>
            <div className={detail.certificates}>
              {DATA_CERTIFICATIONS.map((vendor) => (
                <details key={vendor.name} className={detail.certificate}>
                  <summary>
                    <span>
                      {vendor.name}
                      <small>{vendor.certificate.length} courses</small>
                    </span>
                    <span className={detail.expand} aria-hidden="true">
                      ＋
                    </span>
                  </summary>
                  <ul>
                    {vendor.certificate.map((cert) => (
                      <li key={cert.link}>
                        <a href={cert.link} target="_blank" rel="noreferrer">
                          {cert.name}
                          <span className={detail.linkLabel}>
                            View certificate
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={vendor.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.textButton}
                  >
                    Visit provider
                  </a>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
      <section id="toolkit" className={detail.toolkit}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>THE TOOLS BEHIND THE CRAFT</p>
            <h2>
              My <em>toolkit.</em>
            </h2>
          </div>
          <p className={detail.copy}>Technology in service of the idea.</p>
        </div>
        {[
          { title: "Tech stack", items: stacks },
          { title: "Tools & platforms", items: tools },
        ].map((group) => (
          <div className={detail.toolGroup} key={group.title}>
            <h3>{group.title}</h3>
            <div className={detail.toolGrid}>
              {Object.values(group.items).map((item) => (
                <RevealCard className={detail.tool} key={item.name}>
                  <Image
                    src={item.src}
                    alt=""
                    width={32}
                    height={32}
                    className={
                      item.name === "Express" || item.name === "Prisma ORM"
                        ? detail.lightIcon
                        : undefined
                    }
                  />
                  <div>
                    <span>{item.name}</span>
                    <small>
                      {item.level === "Beginer" ? "Beginner" : item.level}
                    </small>
                  </div>
                </RevealCard>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
