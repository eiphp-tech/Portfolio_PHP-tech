import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu()
      }
    }

    if (!isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
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
    { label: "Behance", url: "#" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 px-6 py-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-white font-bold text-lg">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            Pedro.dev
          </div>

          <div
            ref={menuRef}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex items-center cursor-pointer text-white relative z-50"
              onClick={toggleMenu}
            >
              <div className="relative overflow-hidden h-6 mr-4">
                <motion.div
                  animate={{ y: isHovered ? -24 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Menu
                </motion.div>
                <motion.div
                  className="absolute top-6 left-0"
                  animate={{ y: isHovered ? -24 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? "Fechar" : "Abrir"}
                </motion.div>
              </div>

              <div
                className={`w-8 h-8 flex flex-col justify-center items-center transition-all duration-300 ${
                  isMenuOpen ? " bg-opacity-20 rounded-2xl" : ""
                }`}
              >
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 2 : -2,
                  }}
                  className="w-5 h-0.5 bg-white block"
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? 0 : 1,
                  }}
                  className="w-5 h-0.5 bg-white block"
                />
              </div>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="fixed inset-0 z-30 bg-neutral-900 lg:p-14 p-10"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  onClick={closeMenu}
                >
                  <div className="absolute inset-0 bg-neutral-900" />

                  <div
                    className="relative z-10 h-full flex flex-col justify-between "
                    onClick={(e) => e.stopPropagation()}
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
                              className="block text-white text-2xl lg:text-3xl font-light hover:text-[#7FC9C7] hover:translate-x-2 transition-all duration-300"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="hidden lg:flex lg:w-1/3 flex-col justify-center space-y-10">
                        {menuItems.map((item) => (
                          <div key={item.id} className=" text-left">
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className="text-neutral-600 text-4xl lg:text-5xl font-bold hover:text-white hover:scale-105 transition-all duration-500"
                            >
                              {item.label}
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="lg:hidden ">
                        <div className="grid grid-cols-1 gap-4">
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
                    </div>

                    <div className="flex h-max gap-30">
                      <div>
                        <p className="text-gray-400 ">
                          Do you want to start your project now?
                        </p>
                        <p className="transition-all duration-500 hover:text-white text-4xl font-semibold bg-gradient-to-r from-white via-gray-400 to-gray-800 bg-clip-text text-transparent p-1">
                          hello@pedro.agency
                        </p>
                      </div>
                      <div className="flex items-end p-0.5">
                        <p className="text-white text-4xl w-max cursor-pointer">
                          <span className="text-[#7FC9C7]">+</span>55 34
                          999646334
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
