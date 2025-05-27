"use client";

import { useEffect, useRef } from "react";
import { animate, hover } from "motion";
import { useMotionValue } from "motion/react";
import GradientText from "@/components/GradientText";

function splitText(element: HTMLElement) {
  const text = element.textContent || "";
  element.textContent = "";

  const chars: HTMLElement[] = [];

  for (const char of text) {
    const span = document.createElement("span");
    span.textContent = char;
    span.className = "split-char";
    element.appendChild(span);
    chars.push(span);
  }

  return { chars };
}

const HeaderSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const headings = containerRef.current.querySelectorAll("h1");

    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000;
      prevEvent.current = now;
      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener("pointermove", handlePointerMove);

    headings.forEach((heading) => {
      const { chars } = splitText(heading);

      hover(chars, (element) => {
        const speed = Math.sqrt(velocityX.get() ** 2 + velocityY.get() ** 2);
        const angle = Math.atan2(velocityY.get(), velocityX.get());
        const distance = speed * 0.1;

        animate(
          element,
          {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
          },
          { type: "spring", stiffness: 100, damping: 50 }
        );
      });
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12 "
    >
      <p
        className="ml-1 hidden pb-3 text-sm text-accent md:block md:pb-7 md:text-base"
        data-aos="fade-up"
      >
        Hi, my name is
      </p>
      <h1
        className="pb-1 text-4xl font-semibold text-secondary md:mt-0 md:pb-4 md:text-5xl lg:text-6xl"
        data-aos="fade-up"
      >
        Utas Prasojo.
      </h1>
      <h1
        className="pb-4 text-4xl font-semibold text-primary md:pb-8 md:text-5xl lg:text-6xl"
        data-aos="fade-up"
      >
        I build things for the web.
      </h1>
      <p
        className="w-full text-sm leading-relaxed text-primary md:w-[640px] md:text-base"
        data-aos="zoom-in-up"
      >
        I'm a software engineer with over three years of experience, including
        internships at several web development companies. I specialize in
        building modern web applications using Vue, Vite, TypeScript, and
        Next.js. Passionate about continuous learning, I strive to stay
        up-to-date with the latest technologies to grow both professionally and
        personally.
      </p>
      <div
        className="mt-10 text-sm md:mt-14"
        data-aos="flip-up"
        data-aos-duration="600"
      >
        <a
          className="group inline-block rounded-[4px] border-2 border-accent px-7 py-5 transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
          href="https://drive.google.com/drive/folders/1IjCBhzgYSWyzRJ5Yke-g_iTrIoKSiK8p?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-base md:text-lg"
          >
            View my CV here!
          </GradientText>
        </a>
      </div>
      <style>{`
        .split-char {
          will-change: transform, opacity;
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default HeaderSection;
