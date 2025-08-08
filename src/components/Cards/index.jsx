import { depoimentos } from "../../data/depoimentos"

export default function Cards() {
  return (
    <div className="flex flex-col text-neutral-200">
      {depoimentos.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row lg:space-x-[-15%] py-8 ${
            index !== depoimentos.length - 1
              ? "border-b border-neutral-700"
              : ""
          }`}
        >
          <p className="font-extrabold py-0 lg:text-8xl text-7xl italic text-neutral-400 px-6 lg:px-[7rem]">
            "
          </p>
          <div>
            <p className="text-5xl font-bold leading-tight w-[94%] mb-10 px-6 lg:px-[7rem]">
              {item.depoimento}
            </p>
            <h3 className="font-bold text-lg px-6 lg:px-[7rem]">
              {item.title}
            </h3>
            <p className="text-sm px-6 lg:px-[7rem]">{item.empresa}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
