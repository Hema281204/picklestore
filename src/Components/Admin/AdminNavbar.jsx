import {
  Link,
  useLocation,
} from "react-router-dom";
function AdminNavbar() {
    const location =
  useLocation();
  return (
    <nav className="bg-red-900 text-white shadow">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        <h1 className="text-2xl font-bold">
          Admin Panel
        </h1>

        <div className="flex gap-6">

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

        </div>

      </div>

    </nav>
  );
}

export default AdminNavbar;