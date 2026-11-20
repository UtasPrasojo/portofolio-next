"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../v2.module.css";
export default function Navigation() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <Link href="/v2" className={styles.brand} aria-label="Utas Prasojo home">
        utas<span className={styles.brandStar}>✳</span>
        <span className={styles.brandSuffix}>prasojo</span>
      </Link>
      <nav aria-label="Main navigation" className={styles.nav}>
        {[
          ["/v2", "Home"],
          ["/v2/about", "About"],
          ["/v2/projects", "Projects"],
        ].map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
        <a href="#contact" className={styles.navContact}>
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
