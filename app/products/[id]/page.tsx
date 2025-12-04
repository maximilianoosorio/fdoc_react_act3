'use client';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Producto #{id}
      </h1>

      <div className="bg-gray-100 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Detalles del Producto</h2>

        <div className="space-y-2 text-gray-700">
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Precio:</strong> $99.99</p>
          <p><strong>Descripción:</strong> Producto de alta calidad</p>
        </div>
      </div>
    </div>
  );
}
