"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

function splitWords(heading: HTMLElement) {
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text);
  const words: HTMLElement[] = [];
  for (const node of textNodes) {
    const parts = node.textContent?.match(/\S+|\s+/g) ?? [];
    const fragment = document.createDocumentFragment();
    for (const part of parts) {
      if (/^\s+$/.test(part)) fragment.append(document.createTextNode(part));
      else {
        const span = document.createElement("span");
        span.className = "v2-reveal-word";
        span.textContent = part;
        fragment.append(span);
        words.push(span);
      }
    }
    node.replaceWith(fragment);
  }
  return words;
}

export default function AnimationSystem() {
  const pathname = usePathname();
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const lenis = new Lenis({ duration: 1.15, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const headings = Array.from(
      document.querySelectorAll<HTMLElement>(".v2-site h1, .v2-site h2")
    ).filter((heading) => !heading.closest("article, .v2-no-word-reveal"));
    const original = headings.map(
      (heading) => [heading, heading.innerHTML] as const
    );
    const context = gsap.context(() => {
      for (const heading of headings) {
        const words = splitWords(heading);
        if (!words.length) continue;
        gsap.from(words, {
          opacity: 0,
          y: 22,
          duration: 0.7,
          stagger: 0.055,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            once: true,
          },
        });
      }
    });
    ScrollTrigger.refresh();

    return () => {
      context.revert();
      for (const [heading, html] of original) heading.innerHTML = html;
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [pathname]);
  return null;
}
