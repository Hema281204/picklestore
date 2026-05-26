import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-red-900">
            Privacy Policy
          </h1>

          <p className="mt-4 text-gray-600">
            Your privacy is important to us.
          </p>

        </div>

        <div className="space-y-8">

          <div className="bg-[#f6eee8] p-8 rounded-3xl">

            <h2 className="text-2xl font-bold mb-4">
              Information We Collect
            </h2>

            <p className="text-gray-700 leading-8">
              We may collect information such as your
              name, phone number, address and email
              when you place an order or contact us.
            </p>

          </div>

          <div className="bg-[#f6eee8] p-8 rounded-3xl">

            <h2 className="text-2xl font-bold mb-4">
              How We Use Your Information
            </h2>

            <p className="text-gray-700 leading-8">
              Your information is used to process
              orders, provide customer support and
              improve our services.
            </p>

          </div>

          <div className="bg-[#f6eee8] p-8 rounded-3xl">

            <h2 className="text-2xl font-bold mb-4">
              Data Security
            </h2>

            <p className="text-gray-700 leading-8">
              We take reasonable measures to protect
              your personal information from unauthorized
              access or misuse.
            </p>

          </div>

          <div className="bg-[#f6eee8] p-8 rounded-3xl">

            <h2 className="text-2xl font-bold mb-4">
              Third-Party Services
            </h2>

            <p className="text-gray-700 leading-8">
              We do not sell your personal information.
              Trusted third-party services may be used
              for payment processing and order delivery.
            </p>

          </div>

          <div className="bg-[#f6eee8] p-8 rounded-3xl">

            <h2 className="text-2xl font-bold mb-4">
              Contact Us
            </h2>

            <p className="text-gray-700 leading-8">
              If you have any questions regarding this
              Privacy Policy, please contact us through
              our Contact page.
            </p>

          </div>

        </div>

      </div>
      <MiniFooter />
    </>
  );
}

export default PrivacyPolicy;