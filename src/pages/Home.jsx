import Hero from "../components/Hero";
import Products from "./Shop";
import Features from "../components/Features";
import Trust from "../components/Trust";
import { Link } from "react-router-dom";
import shoe1 from "../assets/media/shoe1.jpg";

export default function Home() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <Hero />


      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-20">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Featured Collection
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved designs crafted for comfort and style.
          </p>
        </div>

        <Products />
      </section>


      {/* Brand Story */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Crafted for Every Step
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At AuroStep, we combine innovative materials with timeless
              design to create footwear that fits your lifestyle.
            </p>

            <Link
              to="/about"
              className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Learn More
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden ">
            <img
              src= { shoe1 }
              alt="AuroStep Shoes"
              className="w-400 h-70 object-cover"
            />
          </div>

        </div>
      </section>


      {/* Features */}
      <Features />


      {/* Trust Section */}
      <Trust />


      {/* Call To Action */}
      <section className="bg-black text-white py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Step Into Comfort Today
        </h2>

        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Join thousands of customers who trust AuroStep for premium footwear.
        </p>

        <Link
          to="/shop"
          className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Shop Now
        </Link>

      </section>

    </div>
  );
}
