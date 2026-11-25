"use client";

import Image from "next/image";
import { useEffect, useRef, type PointerEvent } from "react";
import heroImage from "@images/v2/hero/Frame 28.png";
import styles from "../v2.module.css";

export default function HeroArtwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const scrollFrameRef = useRef<number>();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateScroll() {
      scrollFrameRef.current = undefined;
      if (!containerRef.current || !scrollRef.current) return;
      if (reducedMotion.matches) {
        scrollRef.current.style.transform = "";
        return;
      }

      const hero = containerRef.current.closest("section");
      if (!hero) return;
      const heroTop = hero.getBoundingClientRect().top + window.scrollY;
      const distance = Math.max(hero.clientHeight * 0.85, 1);
      const progress = Math.min(1, Math.max(0, (window.scrollY - heroTop) / distance));
      scrollRef.current.style.transform = `translate3d(0, ${progress * 95}px, 0) perspective(1000px) rotateX(${progress * 11}deg) rotateY(${-progress * 4}deg) scale(${1 - progress * 0.06})`;
    }

    function onScroll() {
      if (scrollFrameRef.current === undefined) {
        scrollFrameRef.current = requestAnimationFrame(updateScroll);
      }
    }

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reducedMotion.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reducedMotion.removeEventListener("change", onScroll);
      cancelAnimationFrame(scrollFrameRef.current ?? 0);
      cancelAnimationFrame(frameRef.current ?? 0);
    };
  }, []);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    cancelAnimationFrame(frameRef.current ?? 0);
    frameRef.current = requestAnimationFrame(() => {
      if (!artRef.current) return;
      artRef.current.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translate3d(${x * 9}px, ${y * 9}px, 0)`;
    });
  }

  function reset() {
    cancelAnimationFrame(frameRef.current ?? 0);
    if (artRef.current) artRef.current.style.transform = "";
  }

  return (
    <div className={styles.heroArt} ref={containerRef} onPointerMove={move} onPointerLeave={reset}>
      <div className={styles.heroScrollLayer} ref={scrollRef}>
        <div className={styles.heroArtLayer} ref={artRef}>
          <Image
            className={styles.statue}
            src={heroImage}
            alt="Greek sculpture wearing a blindfold, surrounded by radiating lines"
            fill
            sizes="(max-width: 760px) 90vw, 50vw"
            priority
          />
        </div>
      </div>
      <p className={styles.artCaption}>
        ANCIENT INSPIRATION. MODERN CREATION.
      </p>
    </div>
  );
}
