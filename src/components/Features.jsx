import {
    Truck,
    ShieldCheck,
    Headphones,
    RefreshCcw,
    Award,
    Leaf,
  } from "lucide-react";
  
  export default function Features() {
    return (
      <section className="py-24 bg-gray-50">
  
        <div className="max-w-7xl mx-auto px-4">
  
  
          {/* Section Header */}
          <div className="text-center mb-16">
  
            <h2 className="text-4xl font-bold mb-3">
              Why Choose AuroStep
            </h2>
  
            <p className="text-gray-600 max-w-2xl mx-auto">
              We focus on quality, comfort, and customer satisfaction in every step.
            </p>
  
          </div>
  
  
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
  
  
            {/* Feature Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
  
              <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full mb-5">
                <Truck size={26} />
              </div>
  
              <h4 className="text-xl font-semibold mb-2">
                Free & Fast Shipping
              </h4>
  
              <p className="text-gray-600 leading-relaxed">
                Enjoy free delivery on orders above ₹2000 with quick nationwide shipping.
              </p>
  
            </div>
  
  
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
  
              <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full mb-5">
                <ShieldCheck size={26} />
              </div>
  
              <h4 className="text-xl font-semibold mb-2">
                Premium Quality
              </h4>
  
              <p className="text-gray-600 leading-relaxed">
                Crafted using top-grade materials for long-lasting comfort.
              </p>
  
            </div>
  
  
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
  
              <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full mb-5">
                <Headphones size={26} />
              </div>
  
              <h4 className="text-xl font-semibold mb-2">
                24/7 Customer Support
              </h4>
  
              <p className="text-gray-600 leading-relaxed">
                Our support team is always available to help you anytime.
              </p>
  
            </div>
  
  
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
  
              <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full mb-5">
                <RefreshCcw size={26} />
              </div>
  
              <h4 className="text-xl font-semibold mb-2">
                Easy Returns
              </h4>
  
              <p className="text-gray-600 leading-relaxed">
                Hassle-free 7-day return and exchange policy.
              </p>
  
            </div>
  
  
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
  
              <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full mb-5">
                <Award size={26} />
              </div>
  
              <h4 className="text-xl font-semibold mb-2">
                Trusted Brand
              </h4>
  
              <p className="text-gray-600 leading-relaxed">
                Loved by thousands of satisfied customers nationwide.
              </p>
  
            </div>
  
  
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
  
              <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full mb-5">
                <Leaf size={26} />
              </div>
  
              <h4 className="text-xl font-semibold mb-2">
                Eco-Friendly
              </h4>
  
              <p className="text-gray-600 leading-relaxed">
                Sustainable packaging and responsible manufacturing.
              </p>
  
            </div>
  
  
          </div>
  
        </div>
  
      </section>
    );
  }
  