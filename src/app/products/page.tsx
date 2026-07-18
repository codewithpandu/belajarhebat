"use client";
import { products } from "@/lib/products";
import Product from "@/components/product";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Products() {
  const itemsPerPage = 6;

  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // jeda antar card
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section className="container w-full max-w-7xl mx-auto py-24 p-4">
      <h1 className="font-bold text-3xl">Semua Produk</h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
      >
        {currentProducts.map((product) => (
          <motion.div key={product.id} variants={item} layout>
            <Product {...product} />
          </motion.div>
        ))}
      </motion.div>

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
