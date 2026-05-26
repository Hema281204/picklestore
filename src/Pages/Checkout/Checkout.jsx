import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useCart } from "../../context/CartContext";
import { FaWhatsapp } from "react-icons/fa";
import api from "../../api/api";
import { useNavigate }
from "react-router-dom";
import MiniFooter from "../../Components/Footer/MiniFooter";

function Checkout() {
  const { cartItems } = useCart();

  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    address2: "",
    city: "",
    pincode: "",
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 999 ? 0 : 50;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
      alert("Please fill all required fields");
      return;
    }

    setShowConfirm(true);
  };

  const placeOrder = async () => {
  try {
    const orderData = {
      customerName: formData.name,
      phone: formData.phone,

      address: `
${formData.address}
${formData.address2}
${formData.city}
${formData.pincode}
      `,

      products: cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),

      totalAmount: total,
    };

    // Save to MongoDB
    await api.post("/orders", orderData);
    navigate("/order-success");

    // WhatsApp Message
    let message = "🛒 NEW PICKLE ORDER\n\n";

    message += `👤 Name: ${formData.name}\n`;
    message += `📞 Phone: ${formData.phone}\n`;
    message += `🏠 Address: ${formData.address}\n`;

    if (formData.address2) {
      message += `📍 Landmark: ${formData.address2}\n`;
    }

    message += `🏙️ City: ${formData.city}\n`;
    message += `📮 Pincode: ${formData.pincode}\n\n`;

    message += "📦 PRODUCTS\n\n";

    cartItems.forEach((item) => {
      message += `${item.name}\n`;
      message += `Qty: ${item.quantity}\n`;
      message += `Amount: ₹${item.price * item.quantity}\n\n`;
    });

    message += `Total: ₹${total}`;

    window.open(
      `https://wa.me/917396915829?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );

  } catch (error) {
    console.error(error);
    alert("Failed To Place Order");
  }
};
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">

        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Shipping Form */}
          <div className="lg:col-span-2">

            <div
              className="
                bg-white
                rounded-2xl
                shadow-lg
                border
                border-gray-100
                p-6
              "
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
  Shipping Address
</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="font-medium text-gray-700">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    className="
                      w-full
                      mt-2
                      border
                      border-gray-300
                      rounded-lg
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-red-900
                    "
                  />
                </div>

                <div>
                  <label className="font-medium text-gray-700">
                    Phone Number *
                  </label>

                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    className="
                      w-full
                      mt-2
                      border
                      border-gray-300
                      rounded-lg
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-red-900
                    "
                  />
                </div>

              </div>

              <div className="mt-5">

                <label className="font-medium text-gray-700">
                  Address Line 1 *
                </label>

                <input
                  type="text"
                  name="address"
                  placeholder="House No, Street Name"
                  onChange={handleChange}
                  className="
                    w-full
                    mt-2
                    border
                    border-gray-300
                    rounded-lg
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-900
                  "
                />

              </div>

              <div className="mt-5">

                <label className="font-medium text-gray-700">
                  Address Line 2
                </label>

                <input
                  type="text"
                  name="address2"
                  placeholder="Landmark, Area (optional)"
                  onChange={handleChange}
                  className="
                    w-full
                    mt-2
                    border
                    border-gray-300
                    rounded-lg
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-900
                  "
                />

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">

                <div>
                  <label className="font-medium text-gray-700">
                    City *
                  </label>

                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    className="
                      w-full
                      mt-2
                      border
                      border-gray-300
                      rounded-lg
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-red-900
                    "
                  />
                </div>

                <div>
                  <label className="font-medium text-gray-700">
                    State *
                  </label>

                  <input
                    type="text"
                    value="Andhra Pradesh"
                    readOnly
                    className="
                      w-full
                      mt-2
                      border
                      border-gray-300
                      rounded-lg
                      px-4
                      py-3
                      bg-gray-50
                    "
                  />
                </div>

                <div>
                  <label className="font-medium text-gray-700">
                    Pincode *
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    onChange={handleChange}
                    className="
                      w-full
                      mt-2
                      border
                      border-gray-300
                      rounded-lg
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-red-900
                    "
                  />
                </div>

              </div>

              <button
                onClick={handleCheckout}
                className="
                  w-full
                  mt-8
                  bg-red-900
                  hover:bg-red-800
                  text-white
                  font-semibold
                  py-3
                  rounded-xl
                  transition
                "
              >
                Proceed To Review
              </button>

            </div>

          </div>

          {/* Order Summary */}
          <div>

            <div
              className="
                bg-white
                rounded-2xl
                shadow-lg
                border
                border-gray-100
                p-6
                sticky
                top-24
              "
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
  Order Summary
</h2>

              <h3 className="font-semibold text-gray-500 mb-4">
                Items In Cart
              </h3>

              {cartItems.length === 0 ? (
                <p className="text-gray-500">
                  No items in cart
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-4 mb-4"
                  >
                    <div className="flex gap-3">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-lg bg-[#f6eee8] object-cover"
                      />

                      <div>

                        <h3 className="font-semibold">
                          {item.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>

                      </div>

                    </div>

                    <span className="font-semibold">
                      ₹{item.price * item.quantity}
                    </span>

                  </div>
                ))
              )}

              <div className="space-y-3 mt-6">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0
                      ? "FREE"
                      : `₹${shipping}`}
                  </span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Confirmation Modal */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">

              <h2 className="text-2xl font-bold mb-6">
                Confirm Order
              </h2>

              <p>
                <strong>Name:</strong> {formData.name}
              </p>

              <p>
                <strong>Phone:</strong> {formData.phone}
              </p>

              <p>
                <strong>City:</strong> {formData.city}
              </p>

              <p className="mt-4">
                <strong>Total:</strong> ₹{total}
              </p>

              <div className="flex gap-4 mt-8">

                <button
                  onClick={() =>
                    setShowConfirm(false)
                  }
                  className="
                    flex-1
                    border
                    py-3
                    rounded-xl
                  "
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    setShowConfirm(false);
                    placeOrder();
                  }}
                  className="
                    flex-1
                    bg-green-600
                    text-white
                    py-3
                    rounded-xl
                    flex
                    justify-center
                    items-center
                    gap-2
                  "
                >
                  <FaWhatsapp />
                  Confirm
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
      <MiniFooter />
    </>
  );
}

export default Checkout;