import NavBar from "./components/NavBar"
import Heading from "./components/Heading"
import SkillMenu from "./components/UI/SkillMenu"
import ProjectsSection from "./components/Project"
import Cards from "./components/Cards"
import { Contato } from "./components/Contato"
import Ballpit from "./components/UI/Ballpit"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Animação de entrada da Hero Section
    gsap.fromTo(
      ".hero-content h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    gsap.fromTo(
      ".hero-content p",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
    )

    // Animação de fade-in para as seções ao rolar
    gsap.utils.toArray(".gsap-fade-in").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )
    })

    // Animação para o componente Cards (Exemplo de animação para componente)
    // Se você quiser animar os cards individualmente, você pode adicionar uma classe
    // para cada card dentro do componente Cards e animar aqui
    gsap.utils.toArray(".card-item").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      )
    })
  }, [])

  return (
    <div className="relative min-h-screen bg-neutral-950 font-Montserrat overflow-x-hidden w-full">
      <NavBar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex flex-col justify-end pb-20 px-6 lg:px-[7rem]"
          id="home"
        >
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <Ballpit
              count={100}
              gravity={1}
              friction={0.8}
              wallBounce={0.95}
              followCursor={true}
            />
          </div>

          <div className="hero-content relative space-y-2 z-10 w-full max-w-max text-neutral-50 text-left lg:pb-0 backdrop-blur-md bg-black/40 p-8 rounded-lg border border-white/10">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Olá, <br />
              eu sou Pedro Henrique
            </h1>
            <p className="text-lg sm:text-xl lg:text-lg text-gray-300 leading-relaxed">
              Desenvolvedor criativo, construindo experiências <br />
              digitais únicas, pixel a pixel.
            </p>
          </div>
        </section>

        <div className="h-40 w-full bg-gradient-to-b from-neutral-900 to-neutral-950"></div>

        <section
          id="sobre"
          className="bg-neutral-950 min-h-min flex flex-col justify-center lg:pt-44 px-6 lg:px-[7rem]"
        >
          <Heading>SOBRE MIM</Heading>
          <p className="gsap-fade-in text-neutral-100 font-semibold text-3xl lg:text-5xl w-full lg:w-[90%]">
            Sou Pedro Henrique, desenvolvedor front-end e designer,
            especializado em criar experiências digitais que unem estética,
            performance e funcionalidade. Transformo conceitos em interfaces
            intuitivas e visuais marcantes, sempre buscando inovação e impacto
            real.
          </p>
        </section>

        {/* Skill */}
        <section id="servico" className="lg:py-40">
          {/* Adicione a classe gsap-fade-in no elemento que você quer animar dentro do componente SkillMenu */}
          <SkillMenu />
        </section>

        {/* projetos */}
        <section id="projeto" className="min-h-screen py-20 lg:py-40">
          {/* Adicione a classe gsap-fade-in no elemento que você quer animar dentro do componente ProjectsSection */}
          <ProjectsSection />
        </section>

        {/* Depoimentos */}
        <section className="py-20">
          <div className="px-6 lg:px-[7rem]">
            <Heading>Depoimentos</Heading>
          </div>
          {/* Os cards dentro do componente Cards precisam da classe 'card-item' para a animação funcionar */}
          <Cards />
        </section>

        <section className="relative min-h-screen w-full bg-neutral-900 flex flex-col gap-5 items-center justify-center">
          <div className="h-40 w-full absolute top-0 bg-gradient-to-b from-neutral-950 to-neutral-900"></div>
          <h2 className="gsap-fade-in text-3xl lg:text-7xl lg:mx-0 lg:w-[70%] mx-3 font-black text-center text-neutral-50">
            Um bom design é honesto. Nem todo design honesto é bom.
          </h2>
          <p className="gsap-fade-in text-lg font-semibold text-neutral-50">
            - Minh Pham
          </p>
          <div className="h-40 w-full absolute bottom-0 bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
        </section>

        {/* Contato */}
        <section id="contato" className=" min-h-screen p-20 px-6 lg:px-[7rem]">
          <Heading>Contato</Heading>
          {/* Adicione a classe gsap-fade-in nos elementos que você quer animar dentro do componente Contato */}
          <Contato />
        </section>

        {/* Footer */}
        <footer className=" h-10 px-6 lg:px-[7rem]">
          <p className="my-10 text-sm font-bold text-neutral-500">
            © 2025 Pedro Henrique. Todos Direitos Reservados.
          </p>
        </footer>
      </main>
    </div>
  )
}
