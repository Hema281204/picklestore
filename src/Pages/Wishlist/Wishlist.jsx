import Navbar from "../../Components/Navbar/Navbar";
import { useWishlist } from "../../context/WishlistContext";
import MiniFooter from "../../Components/Footer/MiniFooter";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          My Wishlist ❤️
        </h1>

        {wishlistItems.length === 0 ? (
          <h2 className="text-gray-500">
            No Wishlist Items
          </h2>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 mx-auto object-contain"
                />

                <h2 className="font-bold mt-4">
                  {item.name}
                </h2>

                <p className="text-red-900 font-bold">
                  ₹{item.prices?.["250g"] || item.price} / 250g
                </p>

                <button
                  onClick={() =>
                    removeFromWishlist(
                      item._id
                    )
                  }
                  className="w-full mt-4 bg-red-900 text-white py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <MiniFooter />
    </>
  );
}

export default Wishlist;