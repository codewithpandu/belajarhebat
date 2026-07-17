import { products } from "@/lib/products";
import Product from "@/components/product";
export default function Products() {
  return (
    <section className="container w-full max-w-7xl mx-auto py-24 p-4">
      <h1 className="font-bold text-3xl">Semua Produk</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
