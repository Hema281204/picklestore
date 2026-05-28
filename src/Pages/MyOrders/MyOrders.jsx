import {
  useState,
  useEffect,
} from "react";
import api from "../../api/api";
import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";

function MyOrders() {
  const [phone, setPhone] =
    useState("");

  const [orders, setOrders] =
    useState([]);
    const [searched, setSearched] =
  useState(false);

    useEffect(() => {

  const savedPhone =
    localStorage.getItem(
      "orderPhone"
    );
    

  if (savedPhone) {

    setPhone(savedPhone);

    fetchOrders(savedPhone);

  }

}, []);

  const fetchOrders =
  async (phoneNumber) => {
    setSearched(true);
    try {

      const response =
        await api.get(
          `/orders/phone/${phoneNumber}`
        );

      setOrders(
        response.data
      );

      localStorage.setItem(
        "orderPhone",
        phoneNumber
      );

    } catch (error) {
      console.error(error);
    }
  };

  const deleteOrder =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this order?"
        );

      if (!confirmDelete)
        return;

      try {

        await api.delete(
          `/orders/${id}`
        );

        setOrders(
          orders.filter(
            (order) =>
              order._id !== id
          )
        );

      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow">

        <div className="max-w-5xl mx-auto p-6">

          <h1 className="text-4xl font-bold text-center mb-8">
            My Orders
          </h1>

          <div className="flex gap-4 mb-8">

            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value
                )
              }
              className="
                flex-1
                border
                p-3
                rounded-lg
              "
            />

            <button
             onClick={() =>
  fetchOrders(phone)
}
              className="
                bg-red-900
                text-white
                px-6
                rounded-lg
              "
            >
              Search
            </button>

          </div>

          {searched &&
orders.length === 0 ? (
            <p className="text-center text-gray-500">
              No Orders Found
            </p>
          ) : (
            orders.map((order) => (
              <div
                key={order._id}
                className="
                  bg-white
                  shadow
                  rounded-xl
                  p-6
                  mb-4
                "
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="font-bold text-xl">
                      {order.customerName}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {new Date(
                        order.createdAt
                      ).toLocaleDateString()}
                    </p>

                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      order.status ===
                      "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status ===
                          "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : order.status ===
                          "Packed"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>

                </div>

                <hr className="my-4" />

                <div className="space-y-3">

                  {order.products.map(
                    (
                      product,
                      index
                    ) => (
                      <div
                        key={index}
                        className="flex justify-between"
                      >

                        <div>

                          <p className="font-medium">
                            {product.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            {product.weight} • Qty:{" "}
                            {
                              product.quantity
                            }
                          </p>

                        </div>

                        <p className="font-semibold">
                          ₹
                          {product.price *
                            product.quantity}
                        </p>

                      </div>
                    )
                  )}

                </div>

                <hr className="my-4" />

                <div className="flex justify-between text-lg font-bold">

                  <span>
                    Total Amount
                  </span>

                  <span>
                    ₹
                    {
                      order.totalAmount
                    }
                  </span>

                </div>

                <button
                  onClick={() =>
                    deleteOrder(
                      order._id
                    )
                  }
                  className="
                    mt-5
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    transition
                  "
                >
                  Delete Order
                </button>

              </div>
            ))
          )}

        </div>

      </main>

      <MiniFooter />

    </div>
  );
}

export default MyOrders;