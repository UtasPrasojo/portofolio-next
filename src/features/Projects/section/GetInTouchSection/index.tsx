"use client"

import { FC, useEffect, useRef } from "react"
import { animate, stagger } from "motion"

function splitText(element: HTMLElement) {
  const text = element.textContent || ""
  element.textContent = ""

  const chars: HTMLElement[] = []

  for (const char of text) {
    const span = document.createElement("span")
    span.textContent = char
    span.className = "split-char"
    element.appendChild(span)
    chars.push(span)
  }

  return { chars }
}

const GetInTouchSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      const h1 = containerRef.current.querySelector("h1")
      if (!h1) return

      const { chars } = splitText(h1)

      containerRef.current.style.visibility = "visible"

      const staggerDelay = 0.15

      animate(
        chars,
        { y: [-20, 20] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(staggerDelay, { startDelay: -staggerDelay * chars.length }),
        }
      )
    })
  }, [])

  return (
    <section
      ref={containerRef}
      className="my-60 flex flex-col items-center justify-center gap-3 text-center md:gap-5"
      style={{ visibility: "hidden" }}
    >
      <p className="font-mono text-accent" data-aos="fade-up">
        What{`'`}s Next?
      </p>
      <h1
        className="pb-1 text-4xl font-semibold leading-relaxed text-secondary md:text-5xl"
        data-aos="zoom-in-up"
      >
        Drop Me a Message
      </h1>
      <p
        className="w-full pb-8 text-sm leading-relaxed text-primary md:w-5/6 md:text-base lg:w-4/6 xl:w-1/2"
        data-aos="zoom-in-up"
      >
        I’m actively looking for opportunities to grow and contribute in the
        industry. Feel free to reach out with any questions or just to connect —
        I’d love to hear from you!
      </p>
      <button
        className="rounded-[4px] border-2 border-accent px-7 py-4 font-mono text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
        data-aos="flip-up"
        data-aos-duration="600"
      >
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=utasprasojo229@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
      </button>

      <style>{`
        .split-char {
          will-change: transform, opacity;
          display: inline-block;
        }
      `}</style>
    </section>
  )
}

export default GetInTouchSection
