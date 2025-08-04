import React from "react"

const Heading = ({ children }) => {
  return (
    <h2 className="mb-4 font-medium text-lg text-neutral-500 tracking-[6px] uppercase">
      {children}
    </h2>
  )
}

export default Heading
