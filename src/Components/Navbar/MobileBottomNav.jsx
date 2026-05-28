import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaHome,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

import {
  MdShoppingBag,
  MdDashboard,
} from "react-icons/md";

import { FaBoxOpen }
from "react-icons/fa";

import { BiMessageDetail }
from "react-icons/bi";

import { useCart }
from "../../context/CartContext";

import { useWishlist }
from "../../context/WishlistContext";

function MobileBottomNav() {

  const location =
    useLocation();

  const { cartItems } =
    useCart();

  const { wishlistItems } =
    useWishlist();

  const isAdmin =
    location.pathname.startsWith(
      "/admin"
    );

  return (

    <div
      className="
        fixed
        bottom-0
        left-0
        w-full
        bg-red-900
        text-white
        flex
        justify-around
        items-center
        py-3
        shadow-lg
        md:hidden
        z-50
      "
    >

      {/* ADMIN MOBILE NAVBAR */}

      {isAdmin ? (

        <>

          <Link
            to="/admin/dashboard"
            className={`flex flex-col items-center ${
              location.pathname ===
              "/admin/dashboard"
                ? "text-yellow-300"
                : ""
            }`}
          >
            <MdDashboard className="text-xl" />

            <span className="text-xs">
              Dashboard
            </span>
          </Link>

          <Link
            to="/admin/products"
            className={`flex flex-col items-center ${
              location.pathname ===
              "/admin/products"
                ? "text-yellow-300"
                : ""
            }`}
          >
            <FaBoxOpen className="text-xl" />

            <span className="text-xs">
              Products
            </span>
          </Link>

          <Link
            to="/admin/orders"
            className={`flex flex-col items-center ${
              location.pathname ===
              "/admin/orders"
                ? "text-yellow-300"
                : ""
            }`}
          >
            <MdShoppingBag className="text-xl" />

            <span className="text-xs">
              Orders
            </span>
          </Link>

          <Link
            to="/admin/messages"
            className={`flex flex-col items-center ${
              location.pathname ===
              "/admin/messages"
                ? "text-yellow-300"
                : ""
            }`}
          >
            <BiMessageDetail className="text-xl" />

            <span className="text-xs">
              Messages
            </span>
          </Link>

          <Link
            to="/"
            className="flex flex-col items-center"
          >
            <FaHome className="text-xl" />

            <span className="text-xs">
              Website
            </span>
          </Link>

        </>

      ) : (

        <>

          {/* USER MOBILE NAVBAR */}

          <Link
            to="/"
            className={`flex flex-col items-center ${
              location.pathname === "/"
                ? "text-yellow-300"
                : ""
            }`}
          >
            <FaHome className="text-xl" />

            <span className="text-xs">
              Home
            </span>
          </Link>

          <Link
            to="/products"
            className={`flex flex-col items-center ${
              location.pathname ===
              "/products"
                ? "text-yellow-300"
                : ""
            }`}
          >
            <MdShoppingBag className="text-xl" />

            <span className="text-xs">
              Products
            </span>
          </Link>

          {/* Wishlist */}

          <Link
            to="/wishlist"
            className={`flex flex-col items-center ${
              location.pathname ===
              "/wishlist"
                ? "text-yellow-300"
                : ""
            }`}
          >

            <div className="relative">

              <FaHeart className="text-xl" />

              {wishlistItems.length > 0 && (
                <span
                  className="
                    absolute
                    -top-3
                    left-3
                    bg-yellow-400
                    text-black
                    text-[10px]
                    rounded-full
                    w-5
                    h-5
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  {wishlistItems.length}
                </span>
              )}

            </div>

            <span className="text-xs">
              Wishlist
            </span>

          </Link>

          {/* Cart */}

          <Link
            to="/cart"
            className={`flex flex-col items-center ${
              location.pathname ===
              "/cart"
                ? "text-yellow-300"
                : ""
            }`}
          >

            <div className="relative">

              <FaShoppingCart className="text-xl" />

              {cartItems.length > 0 && (
                <span
                  className="
                    absolute
                    -top-3
                    left-3
                    bg-yellow-400
                    text-black
                    text-[10px]
                    rounded-full
                    w-5
                    h-5
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  {cartItems.length}
                </span>
              )}

            </div>

            <span className="text-xs">
              Cart
            </span>

          </Link>

          <Link
            to="/my-orders"
            className={`flex flex-col items-center ${
              location.pathname ===
              "/my-orders"
                ? "text-yellow-300"
                : ""
            }`}
          >
            <MdShoppingBag className="text-xl" />

            <span className="text-xs">
              Orders
            </span>
          </Link>

        </>

      )}

    </div>
  );
}

export default MobileBottomNav;