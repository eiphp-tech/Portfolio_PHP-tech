// App.jsx
import React from "react"
import NavBar from "./components/NavBar"
import Gallaxy from "./components/3D/gallaxy"
import Heading from "./components/Heading"
import FlowingMenu from "./components/UI/FlowingMenu"

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 font-Montserrat overflow-hidden w-full">
      {/* Galáxia animada em background */}
      <div className="fixed top-0 w-full flex justify-center z-0">
        {/* <Gallaxy /> -> considere lazy loading com Suspense */}
      </div>

      <NavBar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section
          className="min-h-screen flex flex-col justify-end pb-20 px-6 lg:px-[7rem]"
          id="home"
        >
          <div className="w-full max-w-4xl text-white text-left pb-32 lg:pb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              HI, I'M PEDRO H
            </h1>
            <p className="text-lg sm:text-xl lg:text-lg text-gray-300 leading-relaxed mb-8">
              Desenvolvedor criativo, construindo experiências
              <br />
              digitais únicas, pixel a pixel.
            </p>

            <button
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              aria-label="Entre em contato"
            >
              CONTACT ME
            </button>
          </div>
        </section>

        {/* Sobre mim */}
        <section
          id="sobre"
          className="bg-neutral-950 min-h-min flex flex-col justify-center px-6 lg:px-[7rem]"
        >
          <Heading>SOBRE MIM</Heading>
          <p className="text-neutral-100 font-semibold text-4xl  w-[90%]">
            I´m a{" "}
            <strong className="text-orange-600 font-semibold">
              selectively skilled
            </strong>{" "}
            product designer with strong focus on producing high quality &
            impactful digital experience.
          </p>
        </section>

        {/* Serviços */}
        <section id="servico">
          <FlowingMenu />
        </section>

        {/* projetos */}
        <section className="min-h-screen bg-neutral-800 ">
          <h2 className="text-white font-bold text-6xl">hello word</h2>
        </section>
      </main>
    </div>
  )
}
