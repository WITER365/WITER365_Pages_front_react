export default function Programas() {
  const programas = ['ADSO', 'Redes de Datos', 'Animación 3D', 'Logística', 'Mercadeo', 'Sistemas']

  return (
    <section id="programas" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
      {programas.map((nombre) => (
        <div key={nombre} className="border border-gray-300 rounded-lg p-6 shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg">{nombre}</h3>
        </div>
      ))}
    </section>
  )
}
