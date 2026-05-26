import { Navigate }
from "react-router-dom";

function AdminRoute({
  children,
}) {
  const isAdmin =
    localStorage.getItem(
      "admin"
    );

  return isAdmin === "true"
    ? children
    : <Navigate to="/admin-login" />;
}

export default AdminRoute;