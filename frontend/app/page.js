"use client";
import { useEffect, useState } from "react";
import FilterPanel from "../components/FilterPanel";
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
      setFiltered(res.data);
    });
  }, []);

  const handleFilter = ({ category, minPrice, maxPrice }) => {
    let result = [...products];

    if (category) {
      result = result.filter((item) => item.category === category);
    }
    if (minPrice) {
      result = result.filter((item) => item.price >= parseInt(minPrice));
    }
    if (maxPrice) {
      result = result.filter((item) => item.price <= parseInt(maxPrice));
    }

    setFiltered(result);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <button
        onClick={() => setShowFilters(!showFilters)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {showFilters && <FilterPanel onFilter={handleFilter} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
