export default function About() {
    return (
      <div className="bg-gray-50 min-h-screen">
  
        {/* Hero Section */}
        <section className="pt-32 pb-24 text-center bg-gradient-to-r from-black to-gray-900 text-white">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">
            About AuroStep
          </h1>
  
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Redefining comfort and style for every step you take.
          </p>
        </section>
  
  
        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-4 py-20">
  
          {/* Story */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Our Story
            </h2>
  
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              AuroStep was founded with a simple vision — to create footwear
              that blends modern design with all-day comfort. We believe
              everyone deserves shoes that feel as good as they look.
            </p>
          </div>
  
  
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
  
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">
                Our Mission
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                To craft premium footwear using innovative materials and
                thoughtful design that supports your lifestyle and
                confidence.
              </p>
            </div>
  
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">
                Our Vision
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                To become a trusted global footwear brand known for quality,
                sustainability, and customer satisfaction.
              </p>
            </div>
  
          </div>
  
  
          {/* Why Choose Us */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-semibold mb-10">
              Why Choose AuroStep
            </h2>
  
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
  
              <div className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold mb-2">Premium Materials</h4>
                <p className="text-gray-600 text-sm">
                  High-quality fabrics and durable soles.
                </p>
              </div>
  
              <div className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold mb-2">Ergonomic Design</h4>
                <p className="text-gray-600 text-sm">
                  Designed for comfort and support.
                </p>
              </div>
  
              <div className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold mb-2">Modern Style</h4>
                <p className="text-gray-600 text-sm">
                  Trend-focused and timeless looks.
                </p>
              </div>
  
              <div className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold mb-2">Customer First</h4>
                <p className="text-gray-600 text-sm">
                  Dedicated to your satisfaction.
                </p>
              </div>
  
            </div>
          </div>
  
  
          {/* Call To Action */}
          <div className="text-center bg-black text-white py-14 rounded-2xl">
            <h2 className="text-3xl font-semibold mb-4">
              Step Into Comfort Today
            </h2>
  
            <p className="text-gray-300 mb-6">
              Experience footwear that moves with you.
            </p>
  
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
  
        </section>
      </div>
    );
  }
  