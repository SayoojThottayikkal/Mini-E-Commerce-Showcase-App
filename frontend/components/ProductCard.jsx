"use client";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      <p className="text-blue-600 font-semibold mb-1">₹{product.price}</p>
      <p className="text-sm">{product.description}</p>
    </div>
  );
}
