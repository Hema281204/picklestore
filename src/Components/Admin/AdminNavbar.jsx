import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useState }
from "react";

function AdminNavbar() {

  const location =
    useLocation();

  const [menuOpen,
    setMenuOpen] =
      useState(false);

  return (

    <nav className="
      bg-red-900
      text-white
      shadow
    ">

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

        <h1 className="
          text-3xl
          font-bold
        ">
          Admin Panel
        </h1>

        {/* Desktop Menu */}

        <div className="
          hidden
          md:flex
          gap-6
          items-center
        ">

          <Link
            to="/admin/dashboard"
            className={`hover:text-yellow-300 ${
              location.pathname ===
              "/admin/dashboard"
                ? "text-yellow-300 font-bold"
                : ""
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/admin/products"
            className={`hover:text-yellow-300 ${
              location.pathname ===
              "/admin/products"
                ? "text-yellow-300 font-bold"
                : ""
            }`}
          >
            Products
          </Link>

          <Link
            to="/admin/orders"
            className={`hover:text-yellow-300 ${
              location.pathname ===
              "/admin/orders"
                ? "text-yellow-300 font-bold"
                : ""
            }`}
          >
            Orders
          </Link>

          <Link
            to="/admin/messages"
            className={`hover:text-yellow-300 ${
              location.pathname ===
              "/admin/messages"
                ? "text-yellow-300 font-bold"
                : ""
            }`}
          >
            Messages
          </Link>

          <Link
            to="/"
            className="
              bg-white
              text-red-900
              px-4
              py-2
              rounded-lg
              font-medium
              hover:bg-yellow-200
              transition
            "
          >
            ← Visit Website
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
            to="/admin/dashboard"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Dashboard
          </Link>

          <Link
            to="/admin/products"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Products
          </Link>

          <Link
            to="/admin/orders"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Orders
          </Link>

          <Link
            to="/admin/messages"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Messages
          </Link>

          <Link
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              bg-white
              text-red-900
              px-4
              py-2
              rounded-lg
              font-medium
              w-fit
            "
          >
            ← Visit Website
          </Link>

        </div>
      )}

    </nav>
  );
}

export default AdminNavbar;