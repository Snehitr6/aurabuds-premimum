import React, { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const categories = [
    "All",
    "Premium",
    "Everyday",
    "Sports",
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    const query = search.trim().toLowerCase();

    if (query) {
      result = result.filter((product) =>
        [
          product.name,
          product.category,
          product.description,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query)
      );
    }

    if (category !== "All") {
      result = result.filter(
        (product) =>
          product.category?.toLowerCase() ===
          category.toLowerCase()
      );
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (value.trim()) {
      setSearchParams({
        search: value,
      });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setSearch("");
    setSearchParams({});
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">

      <section className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              The Collection
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.06em] mt-3">
              Find your sound.
            </h1>

            <p className="text-zinc-500 mt-4 max-w-xl">
              Explore premium wireless earbuds and headphones
              designed for every moment.
            </p>
          </div>

          <p className="text-sm text-zinc-600">
            {filteredProducts.length} products
          </p>

        </div>

        {/* Controls */}
        <div className="mt-12 flex flex-col lg:flex-row gap-4">

          {/* Search */}
          <div className="relative flex-1">

            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              value={search}
              onChange={handleSearch}
              placeholder="Search earbuds, headphones..."
              className="w-full h-12 rounded-xl bg-white/[0.04] border border-white/10 pl-11 pr-12 text-sm text-white outline-none focus:border-white/25"
            />

            {search && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10"
              >
                <X size={15} />
              </button>
            )}

          </div>

          {/* Sort */}
          <div className="relative">

            <SlidersHorizontal
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
            />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full lg:w-48 h-12 rounded-xl bg-white/[0.04] border border-white/10 pl-11 pr-4 text-sm text-white outline-none appearance-none"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

          </div>

        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mt-5 pb-1">

          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                category === item
                  ? "bg-white !text-black"
                  : "bg-white/[0.04] text-zinc-500 border border-white/10 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        ) : (
          <div className="min-h-[420px] flex items-center justify-center text-center">

            <div>

              <p className="text-zinc-600 text-sm uppercase tracking-[0.2em]">
                No results
              </p>

              <h2 className="text-3xl font-black mt-3">
                Nothing matched your search.
              </h2>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setSearchParams({});
                }}
                className="mt-6 px-6 py-3 rounded-full bg-white !text-black text-sm font-bold"
              >
                Show all products
              </button>

            </div>

          </div>
        )}

      </section>
    </main>
  );
};

export default Products;