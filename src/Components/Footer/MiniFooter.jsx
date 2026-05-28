import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

function MiniFooter() {
  return (
    <footer className="bg-red-950 text-white py-4 mt-10">

      <div className="flex justify-center items-center gap-3 text-sm">

        <span>
          © {new Date().getFullYear()} Andhra Pickles
        </span>

        <Link
          to="/admin-login"
          className="hover:text-yellow-300"
        >
          <FaUserShield className="text-sm opacity-70 hover:opacity-100" />
        </Link>

      </div>

    </footer>
  );
}

export default MiniFooter;