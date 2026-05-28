import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/917396915829"
      target="_blank"
      rel="noreferrer"
      className="
        fixed
        bottom-35
        right-4
        md:bottom-6
        md:right-6
        bg-green-500
        text-white
        p-4
        rounded-full
        shadow-xl
        text-3xl
        hover:scale-110
        transition
        z-50
      "
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;