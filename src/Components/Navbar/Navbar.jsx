import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  useState,
} from "react";

function Navbar() {

  const location =
    useLocation();

  const [menuOpen,
    setMenuOpen] =
      useState(false);

  return (

    <nav className="bg-red-900 text-white shadow-lg">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
      ">

        {/* Logo */}

        <Link
          to="/"
          className="
            text-3xl
            font-bold
            leading-tight
          "
        >
          Andhra
          
          Pickles
        </Link>

        {/* Desktop Menu */}

        <div className="
          hidden
          md:flex
          items-center
          gap-8
        ">

          <Link
            to="/"
            className="hover:text-yellow-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-yellow-300"
          >
            Products
          </Link>

          <Link
            to="/wishlist"
            className="hover:text-yellow-300"
          >
            <FaHeart />
          </Link>

          <Link
            to="/cart"
            className="hover:text-yellow-300"
          >
            <FaShoppingCart />
          </Link>

          <Link
            to="/my-orders"
            className="hover:text-yellow-300"
          >
            My Orders
          </Link>

        </div>

        {/* Mobile Hamburger */}

        <button
          className="
            md:hidden
            text-2xl
          "
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
        >

          {menuOpen
            ? <FaTimes />
            : <FaBars />}

        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="
          md:hidden
          flex
          flex-col
          gap-5
          px-6
          pb-6
          text-lg
          bg-red-900
        ">

          <Link
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Products
          </Link>

          <Link
            to="/wishlist"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Wishlist
          </Link>

          <Link
            to="/cart"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Cart
          </Link>

          <Link
            to="/my-orders"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            My Orders
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;