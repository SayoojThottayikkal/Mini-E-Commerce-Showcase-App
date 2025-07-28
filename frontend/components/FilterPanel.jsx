"use client";
import { useState } from "react";

const categories = ["Shoes", "Clothing", "Accessories", "Electronics"];

export default function FilterPanel({ onFilter }) {
  const [category, setCategory] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handleApply = () => {
    onFilter({ category, minPrice: min, maxPrice: max });
  };

  return (
    <div className="bg-white p-4 rounded w-1/3 shadow mb-4 text-black">
      <label className="block text-sm font-medium mb-1">Category</label>
      <select
        className="w-full p-2 border mb-4 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="flex gap-4 mb-4">
        <input
          type="number"
          placeholder="Min Price"
          className="w-full p-2 border rounded"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="w-full p-2 border rounded"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>

      <button
        onClick={handleApply}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
}
