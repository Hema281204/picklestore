    import { useState } from "react";
    import api from "../../api/api";
    import Navbar from "../../Components/Navbar/Navbar";
    import MiniFooter from "../../Components/Footer/MiniFooter";

    function MyOrders() {
    const [phone, setPhone] =
        useState("");

    const [orders, setOrders] =
        useState([]);

    const fetchOrders =
        async () => {
        try {

            const response =
            await api.get(
                `/orders/phone/${phone}`
            );

            setOrders(
            response.data
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
                onClick={fetchOrders}
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

            {phone && orders.length === 0 ? (
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
                <h3 className="font-bold text-lg">
                    {order.customerName}
                </h3>

                <p>
                    Order Amount:
                    ₹{order.totalAmount}
                </p>

                <p>
                    Status:
                    {order.status}
                </p>

                <p>
                    Date:
                    {new Date(
                    order.createdAt
                    ).toLocaleDateString()}
                </p>

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