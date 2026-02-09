import { Heart, Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

            {/* Image Section */}
            <div className="relative overflow-hidden">

                {/* Badge */}
                {product.badge && (
                    <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full z-10">
                        {product.badge}
                    </span>
                )}

                {/* Wishlist */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition z-10">
                    <Heart size={18} />
                </button>

                {/* Product Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                />



                {/* Hover Buttons */}
                <div className="absolute inset-0 bg-black/40 flex items-end justify-center opacity-0 group-hover:opacity-100 transition">

                    <div className="flex gap-3 mb-5">

                        <Link

                            className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
                        >
                            View
                        </Link>

                        <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition flex items-center gap-1">
                            <ShoppingCart size={16} />
                            Add
                        </button>

                    </div>

                </div>

            </div>


            {/* Content */}
            <div className="p-5">

                {/* Rating */}
                <div className="flex items-center gap-1 mb-1 text-yellow-500">

                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            fill={i < (product.rating || 4) ? "currentColor" : "none"}
                        />
                    ))}

                    <span className="text-gray-500 text-xs ml-1">
                        ({product.reviews || 120})
                    </span>

                </div>


                {/* Name */}
                <h3 className="font-semibold text-lg truncate">
                    {product.name}
                </h3>


                {/* Description */}
                <p className="text-sm text-gray-500 mb-2 truncate">
                    {product.desc}
                </p>


                {/* Price */}
                <div className="flex items-center gap-2">

                    <span className="text-xl font-bold text-black">
                        ₹{product.price}
                    </span>

                    {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                            ₹{product.oldPrice}
                        </span>
                    )}

                </div>

            </div>

        </div>
    );
}
