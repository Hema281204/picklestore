import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast }
from "react-toastify";
import AdminNavbar from "../../Components/Admin/AdminNavbar";

function AdminOrders() {
  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders =
    async () => {
      try {
        const response =
          await api.get(
            "/orders"
          );

        setOrders(
          response.data
        );
      } catch (error) {
        console.error(
          error
        );
      }
    };

    const sendWhatsApp =
  (order, status) => {

    const statusMessages = {
      "Pending":
        "Your order has been received.",

      "Preparing Freshly":
        "Your pickle is being freshly prepared.",

      "Packed":
        "Your order has been packed and is ready for dispatch.",

      "Shipped":
        "Your order has been shipped and is on the way.",

      "Delivered":
        "Your order has been delivered.",
    };

    const message = `
Hello ${order.customerName},

${statusMessages[status]}

Order Status:
${status}

Thank you for choosing our homemade pickles.
`;

    window.open(
      `https://wa.me/91${order.phone}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  const updateStatus =
    async (
      orderId,
      status
    ) => {
      try {
        await api.put(
          `/orders/${orderId}`,
          { status }
        );

        const order =
  orders.find(
    (o) =>
      o._id === orderId
  );

if (order) {
  sendWhatsApp(
    order,
    status
  );
}

        toast.success(
          "Order Status Updated"
        );

        fetchOrders();
      } catch (error) {
        console.error(
          error
        );

        toast.error(
          "Failed To Update Status"
        );
      }
    };

    const deleteOrder =
  async (id) => {
    try {
      await api.delete(
        `/orders/${id}`
      );

      toast.success(
        "Order Deleted"
      );

      fetchOrders();
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed To Delete Order"
      );
    }
  };

    
  return (
    <>
  <AdminNavbar />

  <div className="max-w-7xl mx-auto p-8"></div>
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Orders
      </h1>

      <div className="space-y-6">

        {orders.map(
          (order) => (
            <div
              key={
                order._id
              }
              className="
                bg-white
    p-4 md:p-6
    rounded-xl
    shadow
              "
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

  {/* Left Side */}
  <div>

  <h2 className="text-xl font-bold">
    👤 {order.customerName}
  </h2>

  <p className="mt-2">
    📞 {order.phone}
  </p>

  <p className="mt-2">
    💰 ₹{order.totalAmount}
  </p>

  <div className="mt-3">

    <h3 className="font-semibold">
      🛒 Ordered Items
    </h3>

    {order.products?.map(
      (product, index) => (
        <p
          key={index}
          className="text-gray-700 mt-1"
        >
          • {product.name}
          {" × "}
          {product.quantity}
        </p>
      )
    )}

  </div>

  <p className="mt-2 text-gray-500">
    📅 {new Date(
      order.createdAt
    ).toLocaleDateString()}
  </p>

</div>

  {/* Right Side */}
  <div className="flex flex-col gap-3 w-full md:w-auto">

    <select
      value={order.status}
      onChange={(e) =>
        updateStatus(
          order._id,
          e.target.value
        )
      }
      className="
  border
  p-2
  rounded-lg
  w-full
  md:w-auto
"
    >
      <option value="Pending">
        Pending
      </option>

      <option value="Preparing Freshly">
        Preparing Freshly
      </option>

      <option value="Packed">
        Packed
      </option>

      <option value="Shipped">
        Shipped
      </option>

      <option value="Delivered">
        Delivered
      </option>
    </select>

    <button
  onClick={() =>
    sendWhatsApp(order)
  }
  className="
  bg-green-600
  hover:bg-green-700
  text-white
  px-4
  py-2
  rounded-lg
  w-full
"
>
  WhatsApp Customer
</button>

<button
  onClick={() =>
    deleteOrder(order._id)
  }
  className="
    bg-red-600
    hover:bg-red-700
    text-white
    px-4
    py-2
    rounded-lg
  "
>
  Delete Order
</button>

  </div>

</div>

            </div>
          )
        )}

      </div>

    </div>
    </>
  );
}

export default AdminOrders;