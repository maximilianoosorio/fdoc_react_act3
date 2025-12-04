// ❌ ya no usar: 'use client';
// ❌ ya no usar: useParams()

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Producto #{id}</h1>

      <div className="bg-gray-200 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Detalles del Producto</h2>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Precio:</strong> $99.99</p>
        <p><strong>Descripción:</strong> Producto de alta calidad</p>
      </div>
    </div>
  );
}
