import React, { useRef } from "react"
import { gsap } from "gsap"
import Heading from "../../Heading"
import { skill } from "../../../data/skill"

const animationDefaults = { duration: 0.6, ease: "expo.out" }

function findClosestEdge(mouseX, mouseY, width, height) {
  const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2
  const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2
  return topEdgeDist < bottomEdgeDist ? "top" : "bottom"
}

function ServiceItem({ title }) {
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
      className="relative overflow-hidden border-b border-neutral-700 py-6 lg:py-2 px-6 lg:px-[7rem] cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fundo animado */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-neutral-100 z-0 translate-y-[101%] pointer-events-none"
      />

      {/* Título */}
      <div className="relative z-10 text-left">
        <h3 className="text-[clamp(1.8rem,6vw,4rem)] font-extrabold text-neutral-100 transition-colors duration-300 group-hover:text-neutral-900">
          {title}
        </h3>
      </div>
    </li>
  )
}

export default function ServicesSection() {
  return (
    <section
      id="servico"
      className="bg-neutral-950 min-h-screen w-full flex flex-col justify-center items-start"
    >
      <div className="px-6 lg:px-[7rem]">
        <Heading>Habilidade | Skill</Heading>
      </div>
      <ul className="w-full">
        {skill.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </ul>
    </section>
  )
}
