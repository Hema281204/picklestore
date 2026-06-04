import Navbar from "../../Components/Navbar/Navbar";
import { useWishlist } from "../../context/WishlistContext";
import MiniFooter from "../../Components/Footer/MiniFooter";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } =
    useCart();

  const navigate =
    useNavigate();

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow">

        <div className="max-w-7xl mx-auto p-6">

          <h1 className="text-4xl font-bold mb-8">
            My Wishlist ❤️
          </h1>

          {wishlistItems.length === 0 ? (

            <div className="text-center py-20">

              <h2 className="text-2xl font-bold text-gray-600">
                ❤️ Your Wishlist Is Empty
              </h2>

              <p className="text-gray-500 mt-2">
                Add your favourite products here.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

              {wishlistItems.map((item) => (

                <div
                  key={item._id}
                  onClick={() =>
                    navigate(
                      `/product/${item._id}`
                    )
                  }
                  className="
                    bg-white
                    rounded-xl
                    shadow
                    p-4
                    cursor-pointer
                    hover:shadow-lg
                    transition
                  "
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-52 mx-auto object-contain"
                  />

                  <h2 className="font-bold mt-4">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>

                  <p className="text-red-900 font-bold mt-2">
                    ₹
                    {item.prices?.["250g"] ||
                      item.price}
                    {" "} / 250g
                  </p>

                  <button
                    onClick={(e) => {

                      e.stopPropagation();

                    addToCart({
  ...item,
  weight: "250g",
  price:
    item.prices?.["250g"] ||
    item.price,
  quantity: 1,
});

removeFromWishlist(
  item._id,
  false
);

toast.success(
  "Added To Cart Successfully"
);

                    }}
                    className="
                      w-full
                      mt-4
                      bg-green-600
                      text-white
                      py-2
                      rounded-lg
                      hover:bg-green-700
                    "
                  >
                    Add To Cart
                  </button>

                  <button
                    onClick={(e) => {

                      e.stopPropagation();

                      removeFromWishlist(
                        item._id
                      );

                      

                    }}
                    className="
                      w-full
                      mt-3
                      bg-red-900
                      text-white
                      py-2
                      rounded-lg
                    "
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </main>

      <MiniFooter />

    </div>
  );
}

export default Wishlist;