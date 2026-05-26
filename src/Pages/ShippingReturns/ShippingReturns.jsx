import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";

function ShippingReturns() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-red-900">
            Shipping & Returns
          </h1>

          <p className="mt-4 text-gray-600">
            Everything you need to know about delivery,
            shipping charges and returns.
          </p>

        </div>

        {/* Shipping */}

        <div className="bg-[#f6eee8] p-8 rounded-3xl mb-8">

          <h2 className="text-3xl font-bold mb-4">
            🚚 Shipping Information
          </h2>

          <ul className="space-y-3 text-gray-700 leading-7">

            <li>
              • Orders are processed within 24-48 hours.
            </li>

            <li>
              • Delivery usually takes 3-7 business days.
            </li>

            <li>
              • We deliver across India.
            </li>

            <li>
              • Free shipping on orders above ₹999.
            </li>

            <li>
              • Orders below ₹999 may incur shipping charges.
            </li>

          </ul>

        </div>

        {/* Returns */}

        <div className="bg-[#f6eee8] p-8 rounded-3xl mb-8">

          <h2 className="text-3xl font-bold mb-4">
            🔄 Return Policy
          </h2>

          <ul className="space-y-3 text-gray-700 leading-7">

            <li>
              • Returns are accepted only for damaged products.
            </li>

            <li>
              • Incorrect products are eligible for replacement.
            </li>

            <li>
              • Return requests must be raised within 48 hours of delivery.
            </li>

            <li>
              • Photos of damaged products may be required.
            </li>

          </ul>

        </div>

        {/* Refund */}

        <div className="bg-[#f6eee8] p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-4">
            💰 Refund Policy
          </h2>

          <ul className="space-y-3 text-gray-700 leading-7">

            <li>
              • Approved refunds are processed within 5-7 business days.
            </li>

            <li>
              • Refunds are issued through the original payment method.
            </li>

            <li>
              • Shipping charges are non-refundable.
            </li>

          </ul>

        </div>

      </div>
      <MiniFooter />
    </>
  );
}

export default ShippingReturns;