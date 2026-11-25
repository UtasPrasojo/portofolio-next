import type { ReactNode } from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import Navigation from "./_components/navigation";
import AnimationSystem from "./_components/animation-system";
import styles from "./v2.module.css";
export default function V2Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.site} v2-site`} id="top">
      <AnimationSystem />
      <a className={styles.skip} href="#content">
        Skip to content
      </a>
      <Navigation />
      <div id="content" tabIndex={-1}>
        {children}
      </div>{" "}
      <section
        className={styles.contact}
        id="contact"
        aria-labelledby="contact-title"
      >
        <span className={styles.contactStar} aria-hidden="true">
          ✳
        </span>
        <p className={styles.eyebrow}>GOOD THINGS BEGIN WITH A CONVERSATION</p>
        <h2 id="contact-title">
          Let’s build something
          <br />
          <em>worth remembering.</em>
        </h2>
        <a href="mailto:utasprasojo229@gmail.com" className={styles.email}>
          utasprasojo229@gmail.com
        </a>
      </section>
      <footer className={styles.footer}>
        <a href="#top" className={styles.footerBrand}>
          utas prasojo<span aria-hidden="true">✳</span>
        </a>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/utas-prasojo-27054124b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/UtasPrasojo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.instagram.com/utaastp/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>
        </div>
        <div className={styles.footerMeta}>
          <span>© {new Date().getFullYear()} UTAS PRASOJO</span>
          <a href="/v1">Original portfolio</a>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
