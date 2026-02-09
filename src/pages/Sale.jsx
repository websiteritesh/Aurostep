import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function Sale() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-24 text-center bg-gradient-to-r from-red-600 to-red-800 text-white">

        <span className="inline-block bg-white text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Limited Time Offer
        </span>

        <h1 className="text-5xl font-bold mb-4">
          Mega Sale
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-red-100">
          Up to <span className="font-bold text-white">50% OFF</span> on selected styles.
        </p>

        <Link
          to="/shop"
          className="inline-block mt-6 bg-white text-red-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
        >
          Shop Deals
        </Link>

      </section>


      {/* Offers Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Flat 30% OFF</h3>
            <p className="text-gray-600 text-sm">
              On Sneakers Collection
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Buy 1 Get 1</h3>
            <p className="text-gray-600 text-sm">
              On Selected Styles
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Extra 15% OFF</h3>
            <p className="text-gray-600 text-sm">
              On Orders Above ₹4999
            </p>
          </div>

        </div>


        {/* Sale Products */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold text-center mb-10">
            Best Deals For You
          </h2>

          <Products />

        </div>


        {/* Countdown UI */}
        <div className="bg-black text-white py-14 rounded-2xl text-center mb-16">

          <h3 className="text-2xl font-semibold mb-3">
            Sale Ends Soon
          </h3>

          <p className="text-gray-400 mb-6">
            Hurry up! Grab your favorites before they're gone.
          </p>

          <div className="flex justify-center gap-6 text-lg font-semibold">

            <div>
              <p className="text-3xl">02</p>
              <span className="text-sm text-gray-400">Days</span>
            </div>

            <div>
              <p className="text-3xl">12</p>
              <span className="text-sm text-gray-400">Hours</span>
            </div>

            <div>
              <p className="text-3xl">45</p>
              <span className="text-sm text-gray-400">Minutes</span>
            </div>

          </div>

        </div>


        {/* Bottom CTA */}
        <div className="text-center bg-white p-12 rounded-2xl shadow">

          <h3 className="text-2xl font-semibold mb-3">
            Don’t Miss These Savings
          </h3>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Premium footwear at unbeatable prices.
          </p>

          <Link
            to="/shop"
            className="bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition"
          >
            Start Shopping
          </Link>

        </div>

      </section>

    </div>
  );
}
