import React from "react"
import NavBar from "./components/NavBar"
import Gallaxy from "./components/3D/gallaxy"

// Componente principal
export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 font-Montserrat overflow-hidden w-full">
      {/* Galáxia de fundo */}
      <div className="fixed top-0 w-full flex justify-center">
        {/* <Gallaxy /> */}
      </div>

      {/* NavBar */}
      <NavBar />

      {/* Conteúdo principal */}
      <main className="relative z-10  ">
        <section
          className="min-h-screen flex flex-col justify-end pb-20 px-6 lg:px-[7rem] "
          id="home"
        >
          {/* Conteúdo textual */}
          <div className="w-full max-w-4xl text-white text-left pb-32 lg:pb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ">
              HI, I'M PEDRO H
            </h1>
            <p className="text-lg sm:text-xl lg:text-lg text-gray-300 leading-relaxed mb-8">
              Desenvolvedor criativo, construindo experiências
              <br />
              digitais únicas, pixel a pixel.
            </p>

            {/* Botão Contact Me */}
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
              CONTACT ME
            </button>
          </div>
        </section>

        <section
          id="#sobre"
          className="bg-neutral-950 h-min min-w-screen py-32 flex flex-col justify-center px-6 lg:px-[7rem]"
        >
          <h2 className="font-medium text-lg text-neutral-500">Sobre mim</h2>
          <p className="text-neutral-100 font-semibold text-4xl py-4 w-[90%]">
            I´m a <strong>selectively skilled</strong> product designer with
            strong focus on producing high quality & impactful digital
            experience.
          </p>
        </section>
        <section
          id="#servico"
          className="bg-neutral-950 h-min min-w-screen pb-20 flex flex-col justify-center"
        >
          <h2 className="font-medium text-lg text-neutral-500 px-6 lg:px-[7rem]">
            Meus serviços
          </h2>
        </section>
      </main>
    </div>
  )
}
