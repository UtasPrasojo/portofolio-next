"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "../pages.module.css";

export default function ScrollPortrait({ children }: { children: ReactNode }) {
  const figureRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;

    function update() {
      frameId = 0;
      if (!figureRef.current || !frameRef.current) return;
      if (reducedMotion.matches) {
        frameRef.current.style.transform = "";
        return;
      }

      const rect = figureRef.current.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)),
      );
      const offset = progress - 0.5;
      const scale = 1 - Math.abs(offset) * 0.08;
      frameRef.current.style.transform = `perspective(1100px) translate3d(0, ${-offset * 64}px, 0) rotateX(${-offset * 12}deg) rotateY(${offset * 14}deg) scale(${scale})`;
    }

    function schedule() {
      if (!frameId) frameId = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <figure className={styles.portrait} ref={figureRef}>
      <div className={styles.portraitFrame} ref={frameRef}>
        {children}
      </div>
      <figcaption>UTAS PRASOJO / SOFTWARE ENGINEER</figcaption>
    </figure>
  );
}
