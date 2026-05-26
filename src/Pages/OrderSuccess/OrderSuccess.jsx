import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-green-600">
          🎉 Order Placed Successfully
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with us.
        </p>

        <Link
          to="/products"
          className="
            inline-block
            mt-8
            bg-red-900
            text-white
            px-8
            py-3
            rounded-xl
          "
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;