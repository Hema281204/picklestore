import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const {
  wishlistItems,
  toggleWishlist,
} = useWishlist();

const isWishlisted =
  wishlistItems.some(
    (item) => item._id === product._id
  );

  return (
    <div
      className="
  bg-white
  rounded-2xl
  overflow-hidden
  shadow-md
  hover:shadow-2xl
  hover:-translate-y-1
  transition-all
  duration-300
  relative
  cursor-pointer
"
      onClick={() =>navigate(`/product/${product._id}`)}
    >
      {/* Best Seller Badge */}
      {product.bestSeller && (
        <span className="absolute top-3 left-3 bg-red-800 text-white text-xs px-3 py-1 rounded-full z-10">
          Best Seller
        </span>
      )}

      {/* Wishlist */}
      <button
  onClick={(e) => {
    e.stopPropagation();
    toggleWishlist(product);
  }}
  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow z-10"
>
  <FaHeart
    className={`text-xl ${
      isWishlisted
        ? "text-red-500"
        : "text-gray-400"
    }`}
  />
</button>

      {/* Veg Badge */}
      <div className="absolute top-14 left-3 z-10">
        <span className="border border-green-500 text-green-600 px-2 py-1 text-xs rounded-md bg-white">
  {product.category}
</span>
      </div>

      {/* Product Image */}
      <div className="h-[320px] bg-[#f4ece6] overflow-hidden">
  <img
    src={product.image}
    alt={product.name}
    className="
      w-full
      h-full
      object-cover
      transition
      duration-500
      hover:scale-105
    "
  />
</div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-gray-500 text-sm uppercase">
          {product.category}
        </p>

        <h2 className="text-xl font-bold mt-1 hover:text-red-800 transition">
          {product.name}
        </h2>

        <div className="flex items-center mt-2">
          <span className="text-yellow-500">⭐</span>

          <span className="ml-1 font-medium">
            {product.rating}
          </span>

          <span className="ml-1 text-gray-500">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-3">

  <div className="flex items-center">

    <span className="text-2xl font-bold text-red-900">
      ₹{product.prices?.["250g"] || product.price}
    </span>

    <span className="text-gray-500 ml-2">
      / 250g
    </span>

  </div>

  <p className="text-green-600 text-sm mt-1 font-medium">
    🚚 Free Delivery Above ₹999
  </p>

</div>

        <button
  onClick={(e) => {
    e.stopPropagation();

    addToCart({
      ...product,
      weight: "250g",
      price:
  product.prices?.["250g"] ||
  product.price,
      quantity: 1,
    });
  }}
  className="
    w-full
    mt-5
    bg-red-900
    text-white
    py-3
    rounded-xl
    font-semibold
    hover:bg-red-800
    transition
  "
>
  Add To Cart
</button>
      </div>
    </div>
  );
}

export default ProductCard;