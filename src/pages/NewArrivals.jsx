import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function NewArrivals() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-24 text-center bg-gradient-to-r from-black to-gray-900 text-white">

        <h1 className="text-5xl font-bold mb-4">
          New Arrivals
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Discover our latest designs, crafted for modern comfort.
        </p>

        <Link
          to="/shop"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Explore Collection
        </Link>

      </section>


      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">

        {/* Header + Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">

          <h2 className="text-3xl font-semibold">
            Latest Products
          </h2>

          <div className="flex gap-3">

            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
              <option>Sort by</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>

            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
              <option>Category</option>
              <option>Sneakers</option>
              <option>Running</option>
              <option>Casual</option>
              <option>Formal</option>
            </select>

          </div>

        </div>


        {/* Products Grid */}
        <Products />


        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-white p-12 rounded-2xl shadow">

          <h3 className="text-2xl font-semibold mb-3">
            Don’t Miss Our Latest Drops
          </h3>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Stay ahead of trends with our newest footwear collections.
          </p>

          <Link
            to="/shop"
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            View All Products
          </Link>

        </div>

      </section>

    </div>
  );
}
