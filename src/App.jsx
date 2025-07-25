import React from "react"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <>
      <NavBar />

      <main className="bg-neutral-900">
        <section
          className="flex flex-col p-10 justify-center h-screen "
          id="home"
        >
          <span className="text-lg">
            Let’s redefine what’s possible—together.
          </span>
          <h1 className="text-8xl">Where Creativity ✨ Meets Strategy.</h1>
        </section>
      </main>
    </>
  )
}
