import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          AuroStep
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <Link to="/" className="hover:text-black">
            Home
          </Link>

          <Link to="/about" className="hover:text-black">
            About
          </Link>

          <Link to="/contact" className="hover:text-black">
            Contact
          </Link>

          <Link to="/shop" className="hover:text-black">
            Shop
          </Link>

          <Link to="/newarrivals" className="hover:text-black">
            New Arrivals
          </Link>

          <Link to="/sale" className="hover:text-black">
            Sale
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <div className="relative hidden md:block">

            <ShoppingCart className="w-6 h-6" />

            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">

          <nav className="flex flex-col gap-4 p-6 font-medium text-gray-700">

            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/about" onClick={closeMenu}>
              About
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>

            <Link to="/shop" onClick={closeMenu}>
              Shop
            </Link>

            <Link to="/newarrivals" onClick={closeMenu}>
              New Arrivals
            </Link>

            <Link to="/sale" onClick={closeMenu}>
              Sale
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}
