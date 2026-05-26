import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-red-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-2xl md:text-3xl font-bold">
              Andhra Pickles
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              Authentic homemade Andhra pickles
              prepared using traditional recipes
              and premium ingredients.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link to="/">
                Home
              </Link>

              <Link to="/products">
                Products
              </Link>

              <Link to="/about">
                About Us
              </Link>

              <Link to="/contact">
                Contact Us
              </Link>

            </div>

          </div>

          {/* Support */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Customer Support
            </h3>

            <div className="flex flex-col gap-3">

              <Link to="/faq">
                FAQ
              </Link>

              <Link to="/shipping-returns">
                Shipping & Returns
              </Link>

              <Link to="/privacy-policy">
                Privacy Policy
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <a
  href="tel:+917396915829"
  className="hover:text-yellow-300"
>
  +91 7396915829
</a>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp />
                <a
  href="https://wa.me/917396915829"
  target="_blank"
  rel="noreferrer"
  className="hover:text-green-300"
>
  WhatsApp Support
</a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <a
  href="mailto:support@andhrapickles.com"
  className="hover:text-yellow-300"
>
  support@andhrapickles.com
</a>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Andhra Pradesh, India</span>
              </div>

            </div>

          </div>

        </div>

        <hr className="my-8 border-red-800" />

        <div className="text-center text-gray-300 text-sm md:text-base">

         <div className="flex justify-center items-center gap-4">

  <span>
    © {new Date().getFullYear()} Andhra Pickles.
    All Rights Reserved.
  </span>

  <Link
    to="/admin-login"
    className="hover:text-yellow-300"
  >
    <FaUserShield className="text-sm opacity-70 hover:opacity-100" />
  </Link>

</div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;