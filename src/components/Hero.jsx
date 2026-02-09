import { Link } from "react-router-dom";
import shoe1 from "../assets/media/shoe1.jpg";


export default function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>


            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 py-32 grid md:grid-cols-2 gap-12 items-center">


                {/* Left Content */}
                <div>

                    <span className="inline-block mb-4 px-4 py-1 bg-white/10 rounded-full text-sm tracking-wide">
                        New Season Collection 2026
                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Walk Smarter. <br />
                        Live Better.
                    </h1>

                    <p className="text-gray-300 text-lg mb-8 max-w-lg">
                        Premium footwear designed with advanced comfort technology
                        and modern style for everyday performance.
                    </p>


                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">

                        <Link
                            to="/shop"
                            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                        >
                            Shop Now
                        </Link>

                        <Link
                            to="/newarrivals"
                            className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
                        >
                            New Arrivals
                        </Link>

                    </div>

                </div>


                
                {/* Right Image */}
                <div className="relative">

                    <img
                        src={shoe1}
                        alt="AuroStep Shoes"
                        className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
                    />

                </div>


            </div>

        </section>
    );
}
