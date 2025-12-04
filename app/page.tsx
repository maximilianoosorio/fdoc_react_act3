import NavigationButtons from './components/NavigationButtons';
import SearchForm from './components/SearchForm';

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Mi Tienda Online</h1>
      <p className="text-lg mb-6 text-gray-700">
        Bienvenido a nuestra tienda virtual
      </p>

      {/* Navegación */}
      <NavigationButtons />

      {/* Formulario de búsqueda */}
      <div className="my-6">
        <SearchForm />
      </div>

      {/* Funcionalidades implementadas */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Funcionalidades Implementadas</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Navegación con componente Link</li>
          <li>Navegación programática con useRouter</li>
          <li>Formulario de búsqueda con parámetros URL</li>
          <li>Botones de navegación (atrás, adelante, refrescar)</li>
        </ul>
      </section>
    </main>
  );
}
