export function Contato() {
  return (
    <section className="w-full text-neutral-50 flex items-start">
      <div className="w-full">
        <p className="text-neutral-500 max-w-lg md:max-w-max mb-12 text-lg">
          Vamos começar uma conversa! Preencha o formulário de contato e
          entrarei em contato com você o mais rápido possível.
        </p>

        <form className="space-y-8">
          {/* Nome */}
          <label className="block text-3xl font-bold">
            <span className="block md:inline text-3xl lg:text-5xl font-bold">
              Meu nome é
            </span>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="block md:inline w-full md:w-[70%] border-b border-neutral-600 bg-transparent placeholder-neutral-400 text-lg focus:outline-none focus:ring-0 md:ml-3"
            />
          </label>

          {/* Empresa */}
          <label className="block text-3xl font-bold">
            <span className="block md:inline text-3xl lg:text-5xl font-bold">
              Sou de
            </span>
            <input
              type="text"
              placeholder="Digite o nome da empresa"
              className="block md:inline w-full md:w-[83%] border-b border-neutral-600 bg-transparent placeholder-neutral-400 text-lg focus:outline-none focus:ring-0 md:ml-3"
            />
          </label>

          {/* Email */}
          <label className="block text-3xl font-bold">
            <span className="block md:inline text-3xl lg:text-5xl font-bold">
              Aqui está meu e-mail
            </span>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="block md:inline w-full md:w-[51%] border-b border-neutral-600 bg-transparent placeholder-neutral-400 text-lg focus:outline-none focus:ring-0 md:ml-3"
            />
          </label>

          {/* Telefone */}
          <label className="block text-3xl font-bold">
            <span className="block md:inline text-3xl lg:text-5xl font-bold">
              Aqui está meu telefone
            </span>
            <input
              type="tel"
              placeholder="Digite seu telefone"
              className="block md:inline w-full md:w-[46%] border-b border-neutral-600 bg-transparent placeholder-neutral-400 text-lg focus:outline-none focus:ring-0 md:ml-3"
            />
          </label>

          {/* Mensagem */}
          <label className="block text-3xl font-bold">
            <span className="block md:inline text-3xl lg:text-5xl font-bold">
              E a mensagem
            </span>
            <textarea
              placeholder="Digite sua mensagem"
              rows="1"
              className="block items-end  md:inline w-full md:w-[65%] border-b border-neutral-600 bg-transparent placeholder-neutral-400 text-lg focus:outline-none focus:ring-0 md:ml-3"
            ></textarea>
          </label>

          {/* Botão */}
          <button
            type="submit"
            className="flex items-center justify-between w-full lg:w-min lg:gap-5 md:mt-20 bg-white text-black  text-lg lg:text-2xl font-semibold py-3 px-6 rounded-full transition-all duration-500 group"
          >
            Submit
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 transition-transform duration-500 group-hover:rotate-[90deg]">
              <div className="w-6 h-1.5 bg-neutral-50 rounded-2xl rotate-[-45deg]"></div>
            </div>
          </button>
        </form>
      </div>
    </section>
  )
}
