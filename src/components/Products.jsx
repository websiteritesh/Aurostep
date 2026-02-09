import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function Products() {
  const [visible, setVisible] = useState(8);

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">


        {/* Section Header */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold mb-3">
            Our Collection
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover premium footwear crafted for comfort, style, and durability.
          </p>

        </div>


        {/* Filter Tabs (UI Only) */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">

          {["All", "Sneakers", "Running", "Casual", "Formal"].map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 rounded-full border border-gray-300 text-sm hover:bg-black hover:text-white transition"
            >
              {cat}
            </button>
          ))}

        </div>


        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products.slice(0, visible).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}

        </div>


        {/* Load More */}
        {visible < products.length && (
          <div className="mt-16 text-center">

            <button
              onClick={() => setVisible((prev) => prev + 4)}
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Load More
            </button>

          </div>
        )}


        {/* View All */}
        <div className="mt-10 text-center">

          <Link
            to="/shop"
            className="inline-block text-black font-medium underline hover:text-gray-600 transition"
          >
            View Full Collection →
          </Link>

        </div>

      </div>

    </section>
  );
}
