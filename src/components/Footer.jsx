import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">


        {/* Brand */}
        <div>

          <h2 className="text-2xl font-bold text-white mb-3">
            AuroStep
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            Step into the future of comfort with premium footwear
            designed for style and performance.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">

            <a href="#" className="hover:text-white transition">
              <Facebook size={20} />
            </a>

            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>

            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>

            <a href="#" className="hover:text-white transition">
              <Youtube size={20} />
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div>

          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2">

            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/new-arrivals" className="hover:text-white transition">
                New Arrivals
              </Link>
            </li>

            <li>
              <Link to="/sale" className="hover:text-white transition">
                Sale
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>

          </ul>

        </div>


        {/* Support */}
        <div>

          <h4 className="text-white font-semibold mb-4">
            Support
          </h4>

          <ul className="space-y-2">

            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>

            <li>
              <Link to="/returns" className="hover:text-white transition">
                Returns & Refunds
              </Link>
            </li>

            <li>
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>

          </ul>

        </div>


        {/* Contact */}
        <div>

          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>

          <ul className="space-y-3 text-sm">

            <li>📍 Delhi, India</li>

            <li>📞 +91 98765 43210</li>

            <li>✉️ support@aurostep.com</li>

            <li>⏰ Mon - Sat: 9AM - 8PM</li>

          </ul>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">

        <p>
          © {new Date().getFullYear()} AuroStep. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
