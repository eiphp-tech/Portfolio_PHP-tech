import NavBar from "./components/NavBar"
import Gallaxy from "./components/3D/gallaxy"
import Heading from "./components/Heading"
import SkillMenu from "./components/UI/SkillMenu"
import ProjectsSection from "./components/Project"
import Cards from "./components/Cards"
import { Contato } from "./components/Contato"

alert(
  "O formulario de contato ainda não está funcioandando, estout trabalhando para funcionar"
)

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
          <div className="w-full max-w-4xl text-neutral-50 text-left pb-32 lg:pb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              HI, I'M PEDRO H
            </h1>
            <p className="text-lg sm:text-xl lg:text-lg text-gray-300 leading-relaxed mb-8">
              Desenvolvedor criativo, construindo experiências
              <br />
              digitais únicas, pixel a pixel.
            </p>
          </div>
        </section>

        {/* Sobre mim */}
        <section
          id="sobre"
          className="bg-neutral-950 min-h-min flex flex-col justify-center lg:pt-44 px-6 lg:px-[7rem]"
        >
          <Heading>SOBRE MIM</Heading>
          <p className="text-neutral-100 font-semibold text-4xl lg:text-6xl w-[90%]">
            I´m a{"  "}
            <strong className="text-neutral-950 px-2 font-bold bg-white">
              selectively skilled
            </strong>
            {"  "}
            product designer with strong focus on producing high quality &
            impactful digital experience.
          </p>
        </section>

        {/* Skill */}
        <section className="lg:py-40" id="servico">
          <SkillMenu />
        </section>

        {/* projetos */}
        <section id="projeto" className="min-h-screen py-20 lg:py-40">
          <ProjectsSection />
        </section>

        {/* Depoimentos */}
        <section className="py-20">
          <div className="px-6 lg:px-[7rem]">
            <Heading>Depoimentos</Heading>
          </div>
          <Cards />
        </section>

        <section className="relative min-h-screen w-full bg-neutral-900 flex flex-col gap-5 items-center justify-center">
          <div className="h-40 w-full absolute top-0 bg-gradient-to-b from-neutral-950 to-neutral-900"></div>
          <h2 className="text-3xl lg:text-7xl lg:mx-0 lg:w-[70%] mx-3 font-black text-center text-neutral-50 ">
            Good Design is Honest. Not all honest design is good
          </h2>
          <p className="text-lg font-semibold text-neutral-50">- Minh Pham</p>
          <div className="h-40 w-full absolute bottom-0 bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
        </section>

        {/* Contato */}
        <section id="contato" className=" min-h-screen p-20 px-6 lg:px-[7rem]">
          <Heading>Contato</Heading>
          <Contato />
        </section>

        {/* Footer */}
        <section className=" h-10 px-6 lg:px-[7rem]">
          <p className="my-10 text-sm font-bold text-neutral-500">
            © 2025 Pedro Henrique. Todos Direitos Reservados.
          </p>
        </section>
      </main>
    </div>
  )
}
