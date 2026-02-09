import { Truck, RefreshCcw, Lock, Star } from "lucide-react";

export default function Trust() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">


        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            Why Shop With AuroStep
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to delivering premium quality, trusted service,
            and complete customer satisfaction.
          </p>

        </div>


        {/* Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


          {/* Card 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center">

            <Truck className="mx-auto mb-5 text-primary w-10 h-10" />

            <h4 className="font-semibold text-lg mb-2">
              Free Shipping
            </h4>

            <p className="text-gray-600 text-sm">
              Enjoy free delivery on all orders above ₹2000.
            </p>

          </div>


          {/* Card 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center">

            <RefreshCcw className="mx-auto mb-5 text-primary w-10 h-10" />

            <h4 className="font-semibold text-lg mb-2">
              Easy Returns
            </h4>

            <p className="text-gray-600 text-sm">
              Hassle-free 30 days return policy on every product.
            </p>

          </div>


          {/* Card 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center">

            <Lock className="mx-auto mb-5 text-primary w-10 h-10" />

            <h4 className="font-semibold text-lg mb-2">
              Secure Payments
            </h4>

            <p className="text-gray-600 text-sm">
              100% protected checkout with encrypted transactions.
            </p>

          </div>


          {/* Card 4 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center">

            <Star className="mx-auto mb-5 text-primary w-10 h-10" />

            <h4 className="font-semibold text-lg mb-2">
              Trusted Quality
            </h4>

            <p className="text-gray-600 text-sm">
              Rated 4.9★ by thousands of happy customers.
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}
