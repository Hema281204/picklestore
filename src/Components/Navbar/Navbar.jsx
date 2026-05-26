import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";

function Navbar() {
  const { cartItems } = useCart();
  const { wishlistItems } =
  useWishlist();

  return (
    <nav className="bg-red-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Andhra Pickles
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-yellow-300 transition"
          >
            Products
          </Link>

          <Link
  to="/wishlist"
  className="relative"
>
  <FaHeart size={22} />

  {wishlistItems.length > 0 && (
    <span
      className="
      absolute
      -top-2
      -right-2
      bg-yellow-400
      text-black
      text-xs
      w-5
      h-5
      rounded-full
      flex
      items-center
      justify-center
    "
    >
      {wishlistItems.length}
    </span>
  )}
</Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative"
          >
            <FaShoppingCart size={24} />

            {cartItems.length > 0 && (
              <span
                className="
                  absolute
                  -top-2
                  -right-2
                  bg-yellow-400
                  text-black
                  text-xs
                  font-bold
                  rounded-full
                  w-5
                  h-5
                  flex
                  items-center
                  justify-center
                "
              >
                {cartItems.length}
              </span>
            )}
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;