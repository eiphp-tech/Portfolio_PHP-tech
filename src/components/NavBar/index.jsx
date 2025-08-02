import React, { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import EmailLink from "../ButtonEmail"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const menuRef = useRef(null)
  const menuOverlayRef = useRef(null)
  const linkContainerRef = useRef(null)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuOverlayRef.current,
        { x: "100%" },
        { x: 0, duration: 1, ease: "power3.out" }
      )
      gsap.fromTo(
        linkContainerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out",
          duration: 0.6,
        }
      )
    } else {
      gsap.to(menuOverlayRef.current, {
        x: "100%",
        duration: 0.8,
        ease: "power3.inOut",
      })
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: `#${sectionId}`, offsetY: 80 },
      ease: "power2.inOut",
    })
    closeMenu()
  }

  const menuItems = [
    { label: "Início", id: "home" },
    { label: "Sobre", id: "sobre" },
    { label: "Projeto", id: "projeto" },
    { label: "Contato", id: "contato" },
  ]

  const socialLinks = [
    { label: "LinkedIn", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "Dribbble", url: "#" },
  ]

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 px-6 lg:px-[7rem] py-2 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.svg" alt="" />
        </div>

        <div
          ref={menuRef}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex items-center cursor-pointer text-white z-50 relative"
            onClick={toggleMenu}
          >
            <div className="overflow-hidden h-6 mr-4 relative w-14">
              <div
                className="absolute top-0 left-0 transition-all duration-300"
                style={{
                  transform: `translateY(${isHovered ? "-100%" : "0"})`,
                }}
              >
                Menu
              </div>
              <div
                className="absolute top-6 left-0 transition-all duration-300"
                style={{
                  transform: `translateY(${isHovered ? "-100%" : "0"})`,
                }}
              >
                {isMenuOpen ? "Fechar" : "Abrir"}
              </div>
            </div>

            <div className="w-8 h-8 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transform transition duration-300 ${
                  isMenuOpen
                    ? "rotate-45 translate-y-[2px]"
                    : "-translate-y-[2px]"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transform transition duration-300 ${
                  isMenuOpen
                    ? "-rotate-45 translate-y-[0px]"
                    : "translate-y-[1px]"
                }`}
              />
            </div>
          </div>

          <div
            ref={menuOverlayRef}
            className="fixed inset-0 z-30 bg-neutral-900 p-10 lg:p-14 overflow-y-auto"
            style={{ transform: "translateX(100%)" }}
          >
            <div
              ref={linkContainerRef}
              className="h-full flex flex-col justify-between"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10">
                <div>
                  <h3 className="text-gray-400 text-lg font-extrabold mb-6 mt-10 lg:mt-0">
                    #Connect
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="block font-medium text-neutral-700 text-2xl lg:text-3xl hover:text-white hover:translate-x-2 transition-all duration-300"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex lg:w-1/3 flex-col justify-center space-y-10">
                  {menuItems.map((item) => (
                    <div key={item.id} className="relative group w-fit">
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-neutral-600 text-4xl lg:text-5xl font-bold group-hover:text-white transition-all duration-500"
                      >
                        {item.label}
                      </button>
                      <span className="block h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </div>
                  ))}
                </div>

                <div className="lg:hidden grid grid-cols-1 gap-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-neutral-600 text-5xl font-bold hover:text-white hover:translate-x-1 transition-all duration-300 text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex h-max flex-col md:flex-row lg:flex-row lg:items-end gap-10 lg:mt-10">
                <div>
                  <p className="text-gray-400 te">
                    Do you want to start your project now?
                  </p>
                  <EmailLink
                    email="pedrohdev01@gmail.com"
                    styleName="text-[30px] font-semibold bg-gradient-to-r from-white via-gray-400 to-neutral-900 bg-clip-text text-transparent p-1 transition-all duration-500 hover:text-white"
                  />
                </div>
                <div className="flex items-end pb-2 ">
                  <p className="block font-medium text-neutral-700 text-2xl lg:text-3xl hover:text-white hover:translate-x-2 transition-all duration-300">
                    + 55 34 999646334
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
