// src/components/Contato.jsx
import { useState } from "react"
import emailjs from "@emailjs/browser"

export function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    mensagem: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ message: "", type: "" })

  // Configurações do EmailJS
  const EMAILJS_SERVICE_ID = "service_qsz68r3"
  const EMAILJS_TEMPLATE_ID = "template_htdg7kp"
  const EMAILJS_PUBLIC_KEY = "D965lIgbfU28bBRI_"

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ message: "", type: "" })

    // Validação básica
    if (!formData.nome || !formData.email || !formData.mensagem) {
      setSubmitStatus({
        message: "Por favor, preencha pelo menos o nome, email e mensagem.",
        type: "error",
      })
      setIsSubmitting(false)
      return
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        message: "Por favor, insira um email válido.",
        type: "error",
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Inicializar EmailJS (às vezes ajuda)
      emailjs.init(EMAILJS_PUBLIC_KEY)

      // Parâmetros para o template do EmailJS - CORRIGIDO
      const templateParams = {
        name: formData.nome,
        email: formData.email,
        company: formData.empresa || "Não informado",
        phone: formData.telefone || "Não informado",
        message: formData.mensagem,
      }

      console.log("Service ID:", EMAILJS_SERVICE_ID)
      console.log("Template ID:", EMAILJS_TEMPLATE_ID)
      console.log("Public Key:", EMAILJS_PUBLIC_KEY)
      console.log("Parâmetros:", templateParams)

      // Enviando email via EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      console.log("Sucesso:", response)

      setSubmitStatus({
        message:
          "✅ Mensagem enviada com sucesso! Entrarei em contato em breve.",
        type: "success",
      })

      // Limpar formulário após sucesso
      setFormData({
        nome: "",
        empresa: "",
        email: "",
        telefone: "",
        mensagem: "",
      })
    } catch (error) {
      console.error("Erro detalhado:", error) // Para debug
      setSubmitStatus({
        message: `❌ Erro ao enviar mensagem: ${
          error.text || error.message || "Erro desconhecido"
        }`,
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full text-neutral-50 flex items-start">
      <div className="w-full">
        <p className="text-neutral-500 max-w-lg md:max-w-max mb-12 text-lg">
          Vamos começar uma conversa! Preencha o formulário de contato e
          entrarei em contato com você o mais rápido possível.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Nome */}
          <label className="block text-3xl font-bold">
            <span className="block md:inline text-3xl lg:text-5xl font-bold">
              Meu nome é
            </span>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Digite seu nome"
              className="block md:inline w-full md:w-[70%] border-b border-neutral-600 bg-transparent placeholder-neutral-400 text-lg focus:outline-none focus:ring-0 md:ml-3 focus:border-neutral-300 transition-colors"
              required
            />
          </label>

          {/* Empresa */}
          <label className="block text-3xl font-bold">
            <span className="block md:inline text-3xl lg:text-5xl font-bold">
              Sou de
            </span>
            <input
              type="text"
              name="empresa"
              value={formData.empresa}
              onChange={handleInputChange}
              placeholder="Digite o nome da empresa"
              className="block md:inline w-full md:w-[83%] border-b border-neutral-600 bg-transparent placeholder-neutral-400 text-lg focus:outline-none focus:ring-0 md:ml-3 focus:border-neutral-300 transition-colors"
            />
          </label>

          {/* Email */}
          <label className="block text-3xl font-bold">
            <span className="block md:inline text-3xl lg:text-5xl font-bold">
              Aqui está meu e-mail
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Digite seu e-mail"
              className="block md:inline w-full md:w-[51%] border-b border-neutral-600 bg-transparent placeholder-neutral-400 text-lg focus:outline-none focus:ring-0 md:ml-3 focus:border-neutral-300 transition-colors"
              required
            />
          </label>

          {/* Telefone */}
          <label className="block text-3xl font-bold">
            <span className="block md:inline text-3xl lg:text-5xl font-bold">
              Aqui está meu telefone
            </span>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              placeholder="Digite seu telefone"
              className="block md:inline w-full md:w-[46%] border-b border-neutral-600 bg-transparent placeholder-neutral-400 text-lg focus:outline-none focus:ring-0 md:ml-3 focus:border-neutral-300 transition-colors"
            />
          </label>

          {/* Mensagem */}
          <label className="block text-3xl font-bold">
            <span className="block md:inline text-3xl lg:text-5xl font-bold">
              E a mensagem
            </span>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              placeholder="Digite sua mensagem"
              rows="1"
              className="block md:inline w-full md:w-[65%] border-b border-neutral-600 bg-transparent placeholder-neutral-400 text-lg focus:outline-none focus:ring-0 md:ml-3 focus:border-neutral-300 transition-colors resize-none"
              required
            />
          </label>

          {/* Status Messages */}
          {submitStatus.message && (
            <div
              className={`text-lg font-medium p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "text-green-400 bg-green-900/20 border border-green-700"
                  : "text-red-400 bg-red-900/20 border border-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Botão */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`cursor-pointer flex items-center justify-between w-full lg:w-min lg:gap-5 md:mt-20 bg-white text-black text-lg lg:text-2xl font-bold py-3 px-6 rounded-full transition-all duration-500 group ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-neutral-200 hover:scale-105"
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 transition-transform duration-500 ${
                isSubmitting ? "" : "group-hover:rotate-[90deg]"
              }`}
            >
              <div className="w-6 h-1.5 bg-neutral-50 rounded-2xl rotate-[-45deg]" />
            </div>
          </button>
        </form>
      </div>
    </section>
  )
}
