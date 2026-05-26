import { useEffect, useState } from "react";
import api from "../../api/api";
import AdminNavbar from "../../Components/Admin/AdminNavbar";

function AdminDashboard() {
  const [orders, setOrders] =
    useState([]);

  const [products, setProducts] =
    useState([]);

  useEffect(() => {
    fetchOrders();
    fetchProducts();
  }, []);

  const fetchOrders = async () => {
    try {
      const response =
        await api.get("/orders");

      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProducts =
    async () => {
      try {
        const response =
          await api.get(
            "/products"
          );

        setProducts(
          response.data
        );
      } catch (error) {
        console.error(
          error
        );
      }
    };

  const totalOrders =
    orders.length;

  const totalProducts =
    products.length;

  const pendingOrders =
    orders.filter(
      (order) =>
        order.status ===
        "Pending"
    ).length;

  const deliveredOrders =
    orders.filter(
      (order) =>
        order.status ===
        "Delivered"
    ).length;

  const totalRevenue =
    orders.reduce(
      (sum, order) =>
        sum +
        (order.totalAmount ||
          0),
      0
    );

  return (
    <>
  <AdminNavbar />

  <div className="max-w-7xl mx-auto p-8"></div>
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-gray-500">
            Products
          </h3>

          <p className="text-4xl font-bold mt-2 text-blue-600">
            {totalProducts}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-gray-500">
            Total Orders
          </h3>

          <p className="text-4xl font-bold mt-2">
            {totalOrders}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-gray-500">
            Pending
          </h3>

          <p className="text-4xl font-bold mt-2 text-orange-500">
            {pendingOrders}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-gray-500">
            Delivered
          </h3>

          <p className="text-4xl font-bold mt-2 text-green-600">
            {deliveredOrders}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-gray-500">
            Revenue
          </h3>

          <p className="text-4xl font-bold mt-2 text-red-600">
            ₹{totalRevenue}
          </p>
        </div>

      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          Recent Orders
        </h2>

        {orders.length === 0 ? (
          <p>
            No Orders Yet
          </p>
        ) : (
          orders
            .slice(-5)
            .reverse()
            .map((order) => (
              <div
                key={order._id}
                className="
                  border-b
                  py-3
                  flex
                  justify-between
                "
              >
                <span>
                  {
                    order.customerName
                  }
                </span>

                <span>
                  ₹
                  {
                    order.totalAmount
                  }
                </span>
              </div>
            ))
        )}
      </div>

    </div>
    </>
  );
}

export default AdminDashboard;