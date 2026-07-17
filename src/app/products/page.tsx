"use client";
import { products } from "@/lib/products";
import Product from "@/components/product";
import { useState } from "react";
export default function Products() {
  const itemsPerPage = 6;

  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);
  return (
    <section className="container w-full max-w-7xl mx-auto py-24 p-4">
      <h1 className="font-bold text-3xl">Semua Produk</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {currentProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className="cursor-pointer hover:text-my-prmary"
        >
          Previous
        </button>

        <span style={{ margin: "0 20px" }}>
          {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalPages}
          className="cursor-pointer hover:text-my-prmary"
        >
          Next
        </button>
      </div>
    </section>
  );
}
