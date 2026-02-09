import shoe1 from "../assets/media/shoe1.jpg";
import shoe2 from "../assets/media/shoe2.jpg";
import shoe3 from "../assets/media/shoe3.jpg";
import shoe4 from "../assets/media/shoe4.jpg";
import shoe5 from "../assets/media/shoe5.jpg";

const products = [
  {
    id: 1,
    name: "AeroFlex Runner",
    category: "Running",
    price: 129,
    oldPrice: 159,
    rating: 4.8,
    reviews: 245,
    stock: true,
    badge: "Best Seller",
    description:
      "Lightweight running shoes with breathable mesh and responsive cushioning.",
    image: shoe2, 
  },

  {
    id: 2,
    name: "Urban Street Pro",
    category: "Casual",
    price: 149,
    oldPrice: 179,
    rating: 4.6,
    reviews: 198,
    stock: true,
    badge: "Trending",
    description:
      "Modern street-style sneakers built for comfort and durability.",
    image: shoe3, 
  },

  {
    id: 3,
    name: "CloudStep Lite",
    category: "Running",
    price: 119,
    oldPrice: 149,
    rating: 4.7,
    reviews: 312,
    stock: true,
    badge: "New",
    description:
      "Ultra-soft cushioning with flexible sole for everyday running.",
    image: shoe4, 
  },

  {
    id: 4,
    name: "TrailX Defender",
    category: "Outdoor",
    price: 169,
    oldPrice: 199,
    rating: 4.9,
    reviews: 421,
    stock: true,
    badge: "Top Rated",
    description:
      "Rugged outdoor shoes designed for trails and tough terrain.",
    image: shoe5, 
  },

  {
    id: 5,
    name: "Velocity Prime",
    category: "Training",
    price: 139,
    oldPrice: 169,
    rating: 4.5,
    reviews: 187,
    stock: true,
    badge: "Popular",
    description:
      "High-performance training shoes for gym and workouts.",
    image: shoe1, 
  },

  {
    id: 6,
    name: "NeoGrip Sport",
    category: "Sports",
    price: 159,
    oldPrice: 189,
    rating: 4.6,
    reviews: 276,
    stock: false,
    badge: "Out of Stock",
    description:
      "Enhanced grip and stability for intense sports activities.",
    image: shoe2, 
  },

  {
    id: 7,
    name: "Summit Trek",
    category: "Hiking",
    price: 179,
    oldPrice: 219,
    rating: 4.9,
    reviews: 354,
    stock: true,
    badge: "Premium",
    description:
      "Heavy-duty hiking shoes for long treks and mountain trails.",
    image: shoe3, 
  },

  {
    id: 8,
    name: "FlexRun Elite",
    category: "Running",
    price: 189,
    oldPrice: 229,
    rating: 4.8,
    reviews: 402,
    stock: true,
    badge: "Limited",
    description:
      "Elite-level running shoes with maximum energy return.",
    image: shoe4, 
  },
];

export default products;
