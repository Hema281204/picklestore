import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaHome,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

import { MdShoppingBag }
from "react-icons/md";

function MobileBottomNav() {

  const location =
    useLocation();

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

      <Link
        to="/wishlist"
        className={`flex flex-col items-center ${
          location.pathname ===
          "/wishlist"
            ? "text-yellow-300"
            : ""
        }`}
      >
        <FaHeart className="text-xl" />
        <span className="text-xs">
          Wishlist
        </span>
      </Link>

      <Link
        to="/cart"
        className={`flex flex-col items-center ${
          location.pathname ===
          "/cart"
            ? "text-yellow-300"
            : ""
        }`}
      >
        <FaShoppingCart className="text-xl" />
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

    </div>
  );
}

export default MobileBottomNav;