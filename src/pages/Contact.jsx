export default function Contact() {
    return (
      <div className="bg-gray-50 min-h-screen">
  
        {/* Hero Section */}
        <section className="pt-32 pb-24 text-center bg-gradient-to-r from-black to-gray-900 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Contact AuroStep
          </h1>
  
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            We’re here to help. Reach out to us anytime.
          </p>
        </section>
  
  
        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-4 py-20">
  
          <div className="grid md:grid-cols-2 gap-12 items-start">
  
            {/* Contact Info */}
            <div>
  
              <h2 className="text-3xl font-semibold mb-6">
                Get In Touch
              </h2>
  
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our products, orders, or partnerships?
                Our support team is ready to assist you.
              </p>
  
  
              <div className="space-y-5">
  
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
                  <span className="text-xl">📍</span>
                  <p className="text-gray-700">
                    Delhi, India
                  </p>
                </div>
  
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
                  <span className="text-xl">📞</span>
                  <p className="text-gray-700">
                    +91 98765 43210
                  </p>
                </div>
  
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
                  <span className="text-xl">✉️</span>
                  <p className="text-gray-700">
                    support@aurostep.com
                  </p>
                </div>
  
              </div>
  
            </div>
  
  
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-lg">
  
              <h3 className="text-2xl font-semibold mb-6">
                Send Us a Message
              </h3>
  
              <form className="space-y-5">
  
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
  
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
  
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
  
              </form>
  
            </div>
  
          </div>
  
        </section>
      </div>
    );
  }
  