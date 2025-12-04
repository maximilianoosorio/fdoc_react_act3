import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex space-x-6">
        
        <Link 
          href="/" 
          className="hover:text-blue-200 transition-colors duration-200"
        >
          Inicio
        </Link>

        <Link 
          href="/about" 
          className="hover:text-blue-200 transition-colors duration-200"
        >
          Acerca de
        </Link>

        <Link 
          href="/products" 
          className="hover:text-blue-200 transition-colors duration-200"
        >
          Productos
        </Link>

        <Link 
          href="/contact" 
          className="hover:text-blue-200 transition-colors duration-200"
        >
          Contacto
        </Link>

      </div>
    </nav>
  );
}
