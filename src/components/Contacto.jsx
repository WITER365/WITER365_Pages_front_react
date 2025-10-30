export default function Contacto() {
  return (
    <section id="contacto" className="border-t border-gray-300 pt-8">
      <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombres"
          className="border border-gray-400 rounded p-2"
          required
        />
        <input
          type="email"
          placeholder="Correo"
          className="border border-gray-400 rounded p-2"
          required
        />
        <textarea
          placeholder="Mensaje"
          rows="4"
          className="border border-gray-400 rounded p-2"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
