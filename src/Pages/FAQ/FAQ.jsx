import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import MiniFooter from "../../Components/Footer/MiniFooter";

function FAQ() {
  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "Orders are usually delivered within 3-7 business days depending on your location.",
    },
    {
      question: "Do you ship across India?",
      answer:
        "Yes, we deliver our pickles across India.",
    },
    {
      question: "What is the shelf life of the pickles?",
      answer:
        "Our pickles generally have a shelf life of 6-12 months when stored properly.",
    },
    {
      question: "How should I store the pickles?",
      answer:
        "Store in a cool, dry place and always use a dry spoon.",
    },
    {
      question: "Can I return my order?",
      answer:
        "Returns are accepted only for damaged or incorrect products.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can add products to your cart and place an order through WhatsApp.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-red-900">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-gray-600">
            Find answers to common questions about our pickles and services.
          </p>

        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === index
                      ? null
                      : index
                  )
                }
                className="
                  w-full
                  text-left
                  px-6
                  py-5
                  bg-[#f6eee8]
                  font-semibold
                  flex
                  justify-between
                  items-center
                "
              >
                {faq.question}

                <span>
                  {activeIndex === index
                    ? "-"
                    : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 py-5 bg-white text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
      <MiniFooter />
    </>
  );
}

export default FAQ;