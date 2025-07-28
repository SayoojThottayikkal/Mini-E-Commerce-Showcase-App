"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/api/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => {
          console.error(err);
          setError("Failed to load product.");
        });
    }
  }, [id]);

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <Link href="/" className="text-blue-500 underline">
        Back to Products
      </Link>

      <div className="mt-4 border p-4 rounded shadow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover mb-4"
        />
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="mt-2">Category: {product.category}</p>
        <p className="text-green-600 font-bold text-lg">₹{product.price}</p>
        <p className="mt-1">
          In Stock:{" "}
          <span className="font-semibold">
            {product.inStock ? "Yes" : "No"}
          </span>
        </p>
      </div>
    </div>
  );
}
