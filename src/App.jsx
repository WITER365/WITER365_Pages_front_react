import Header from './components/Header'
import Programas from './components/Programas'
import Contacto from './components/Contacto'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center text-center">
      <Header />
      <main className="w-full max-w-5xl p-6">
        <h1 className="text-2xl font-bold mt-4">
          SERVICIO NACIONAL DE APRENDIZAJE
        </h1>
        <h2 className="text-lg mt-1 mb-6">
          CENTRO DE GESTIÓN DE MERCADOS - BOGOTÁ
        </h2>
        <Programas />
        <Contacto />
      </main>
    </div>
  )
}
