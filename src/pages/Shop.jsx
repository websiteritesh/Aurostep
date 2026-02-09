import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-24 text-center bg-gradient-to-r from-black to-gray-900 text-white">

        <h1 className="text-5xl font-bold mb-4">
          Shop AuroStep
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Explore our complete footwear collection.
        </p>

      </section>


      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-20">


        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">

          {/* Search */}
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>


          {/* Filters */}
          <div className="flex gap-3">

            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
              <option>Sort by</option>
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>

            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
              <option>Category</option>
              <option>Sneakers</option>
              <option>Running</option>
              <option>Casual</option>
              <option>Formal</option>
            </select>

            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
              <option>Price Range</option>
              <option>Under ₹2000</option>
              <option>₹2000 - ₹4000</option>
              <option>₹4000+</option>
            </select>

          </div>

        </div>


        {/* Products Grid */}
        <Products />


        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-white p-12 rounded-2xl shadow">

          <h3 className="text-2xl font-semibold mb-3">
            Find Your Perfect Fit
          </h3>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Premium footwear designed for performance and style.
          </p>

          <Link
            to="/contact"
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Need Help?
          </Link>

        </div>

      </section>

    </div>
  );
}

