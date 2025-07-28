import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow bg-black text-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-green-400 font-bold">₹{product.price}</p>
      <Link href={`/product/${product._id}`}>
        <button className="mt-2 bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">
          View Details
        </button>
      </Link>
    </div>
  );
}
