import Navbar from "../../Components/Navbar/Navbar";
import { useCart } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MiniFooter from "../../Components/Footer/MiniFooter";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cartItems.reduce(
  (total, item) =>
    total +
    (
      item.prices?.["250g"] ||
      item.price
    ) *
      item.quantity,
  0
);

  const shipping = subtotal > 999 ? 0 : 50;

  const total = subtotal + shipping;

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">

        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          Your Cart ({cartItems.length} Items)
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
              Your Cart Is Empty 🛒
            </h2>

            <p className="mt-4 text-gray-500">
              Add some delicious pickles to get started.
            </p>

          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="
                    bg-white
                    rounded-2xl
                    shadow-md
                    p-5
                    mb-5
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    items-center
                    gap-5
                  "
                >
                  <div className="flex flex-col sm:flex-row items-center gap-5">

                    <div className="bg-[#f6eee8] p-3 rounded-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 object-contain"
                      />
                    </div>

                    <div>

                      <h2 className="text-lg md:text-xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-gray-500">
  {item.weight}
</p>

                      <p className="text-red-900 font-semibold mt-2">
 ₹{item.price}
</p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="
                        border
                        w-10
                        h-10
                        rounded-lg
                        hover:bg-gray-100
                      "
                    >
                      -
                    </button>

                    <span className="font-semibold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="
                        border
                        w-10
                        h-10
                        rounded-lg
                        hover:bg-gray-100
                      "
                    >
                      +
                    </button>

                  </div>

                  <div className="flex flex-col items-center md:items-end gap-3">

                    <span className="font-bold text-xl">
 ₹{
  item.price *
  item.quantity
}
</span>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="
                        text-red-500
                        hover:text-red-700
                      "
                    >
                      <FaTrash />
                    </button>

                  </div>

                </div>
              ))}

            </div>

            {/* Summary */}
            <div>

              <div className="bg-[#f8f1eb] rounded-2xl p-6 sticky top-24">

                <h2 className="text-2xl font-bold mb-6">
                  Order Summary
                </h2>

                <div className="flex justify-between py-2">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between py-2">
                  <span>Shipping</span>

                  <span
                    className={
                      shipping === 0
                        ? "text-green-600"
                        : ""
                    }
                  >
                    {shipping === 0
                      ? "FREE"
                      : `₹${shipping}`}
                  </span>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                <button
                  onClick={() =>
                    navigate("/checkout")
                  }
                  className="
                    w-full
                    mt-6
                    bg-red-900
                    text-white
                    py-4
                    rounded-xl
                    hover:bg-red-800
                    transition
                  "
                >
                  Proceed To Checkout
                </button>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Free Delivery Above ₹999
                </p>

              </div>

            </div>

          </div>
        )}

      </div>
      <MiniFooter />
    </>
  );
}

export default Cart;