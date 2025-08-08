import React, { useRef } from "react"
import { gsap } from "gsap"
import Heading from "../Heading"
import { projects } from "../../data/projects"

const animationDefaults = { duration: 0.6, ease: "expo.out" }

function findClosestEdge(mouseX, mouseY, width, height) {
  const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2
  const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2
  return topEdgeDist < bottomEdgeDist ? "top" : "bottom"
}

function ProjectItem({ title, description, github, live }) {
  const itemRef = useRef(null)
  const bgRef = useRef(null)

  const handleMouseEnter = (ev) => {
    const item = itemRef.current
    const bg = bgRef.current
    if (!item || !bg) return

    const rect = item.getBoundingClientRect()
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    )

    gsap
      .timeline({ defaults: animationDefaults })
      .set(bg, { y: edge === "top" ? "-101%" : "101%" })
      .to(bg, { y: "0%" })
  }

  const handleMouseLeave = (ev) => {
    const item = itemRef.current
    const bg = bgRef.current
    if (!item || !bg) return

    const rect = item.getBoundingClientRect()
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    )

    gsap.to(bg, {
      y: edge === "top" ? "-101%" : "101%",
      ...animationDefaults,
    })
  }

  return (
    <li
      ref={itemRef}
      className="relative overflow-hidden border-b border-neutral-700 py-8 px-6 lg:px-[7rem] cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-neutral-100 z-0 translate-y-[101%] pointer-events-none"
      />

      <div className="relative z-10 text-left space-y-2">
        <h3 className="text-[clamp(1.5rem,5vw,3.5rem)] font-extrabold text-neutral-100 group-hover:text-neutral-900 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-400 group-hover:text-neutral-800 transition-colors duration-300">
          {description}
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 underline font-bold transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 underline font-bold transition-colors duration-300"
          >
            Demo
          </a>
        </div>
      </div>
    </li>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="bg-neutral-950 min-h-screen w-full flex flex-col justify-center items-start"
    >
      <div className="px-6 lg:px-[7rem]">
        <Heading>Projetos</Heading>
      </div>
      <ul className="w-full">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </ul>
    </section>
  )
}
