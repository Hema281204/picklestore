import { useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar/Navbar";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import MiniFooter from "../../Components/Footer/MiniFooter";

function Contact() {
  const [formData, setFormData] =
  useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await api.post(
      "/contact",
      formData
    );

    toast.success(
      "Message Sent Successfully"
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.error(error);

    toast.error(
      "Failed To Send Message"
    );
  }
};
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="text-center">

          <h1 className="text-3xl md:text-5xl font-bold text-red-900">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you. Reach out to us
            for orders, support, or any questions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Contact Information */}
          <div className="bg-[#f6eee8] p-8 rounded-3xl">

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <FaPhoneAlt className="text-red-900 text-2xl" />

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <a
  href="tel:+917396915829"
  className="text-gray-600 hover:text-red-900"
>
  +91 7396915829
</a>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <FaWhatsapp className="text-green-600 text-2xl" />

                <div>
                  <h3 className="font-semibold">
                    WhatsApp
                  </h3>

                  <a
  href="https://wa.me/917396915829"
  target="_blank"
  rel="noreferrer"
  className="text-gray-600 hover:text-green-600"
>
  Chat On WhatsApp
</a>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-red-900 text-2xl" />

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <a
  href="mailto:support@andhrapickles.com"
  className="text-gray-600 hover:text-red-900"
>
  support@andhrapickles.com
</a>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-red-900 text-2xl" />

                <div>
                  <h3 className="font-semibold">
                    Address
                  </h3>

                  <p className="text-gray-600">
                    Andhra Pradesh, India
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg p-8 rounded-3xl">

            <h2 className="text-3xl font-bold mb-8">
              Send a Message
            </h2>

            <form
  onSubmit={handleSubmit}
  className="space-y-5"
>

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
onChange={(e) =>
  setFormData({
    ...formData,
    name: e.target.value,
  })
}
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-900
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
onChange={(e) =>
  setFormData({
    ...formData,
    email: e.target.value,
  })
}
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-900
                "
              />

              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
onChange={(e) =>
  setFormData({
    ...formData,
    subject: e.target.value,
  })
}
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-900
                "
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                value={formData.message}
onChange={(e) =>
  setFormData({
    ...formData,
    message: e.target.value,
  })
}
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-900
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-red-900
                  text-white
                  py-3
                  rounded-xl
                  hover:bg-red-800
                  transition
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
      <MiniFooter />
    </>
  );
}

export default Contact;