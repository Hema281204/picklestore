import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import MiniFooter from "../../Components/Footer/MiniFooter";

import {
  FaHeart,
  FaWhatsapp,
  FaTruck,
  FaShieldAlt,
  FaUndoAlt,
} from "react-icons/fa";

import Navbar from "../../Components/Navbar/Navbar";

import { useCart } from "../../context/CartContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useWishlist } from "../../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] =
  useState(null);

const [relatedProducts, setRelatedProducts] =
  useState([]);
  const [reviews, setReviews] =
  useState([]);

const [reviewData, setReviewData] =
  useState({
    customerName: "",
    rating: 5,
    comment: "",
  });
  const { addToCart } = useCart();
  const { addToWishlist } =
  useWishlist();

  

  

  const [weight, setWeight] = useState("250g");
  const [quantity, setQuantity] = useState(1);

 const totalPrice =
  product
    ? (
        product.prices?.[weight] ||
        product.price ||
        0
      ) * quantity
    : 0;

  const orderWhatsapp = () => {
    const message = `
Hello,

I would like to order:

Product: ${product.name}
Weight: ${weight}
Quantity: ${quantity}
Total Price: ₹${totalPrice}
`;

    window.open(
      `https://wa.me/917396915829?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  const fetchProduct =
  async () => {
    try {
      const response =
        await api.get(
          `/products/${id}`
        );

      setProduct(
        response.data
      );

      const allProducts =
        await api.get(
          "/products"
        );

      setRelatedProducts(
        allProducts.data.filter(
          (item) =>
            item._id !== id
        )
      );

    } catch (error) {
      console.error(error);
    }
  };

  const fetchReviews =
  async () => {
    try {
      const response =
        await api.get(
          `/reviews/${id}`
        );

      setReviews(
        response.data
      );
    } catch (error) {
      console.error(error);
    }
  };

const submitReview =
  async () => {
    try {
      await api.post(
        "/reviews",
        {
          productId: id,
          ...reviewData,
        }
      );

      toast.success(
        "Review Added"
      );

      setReviewData({
        customerName: "",
        rating: 5,
        comment: "",
      });

      fetchReviews();

    } catch (error) {
      toast.error(
        "Failed To Add Review"
      );
    }
  };

  useEffect(() => {
  fetchProduct();
  fetchReviews();
}, [id]);

const averageRating =
  reviews.length > 0
    ? (
        reviews.reduce(
          (sum, review) =>
            sum + review.rating,
          0
        ) / reviews.length
      ).toFixed(1)
    : 0;

    if (!product) {
  return (
    <>
      <Navbar />
      <div className="text-center mt-20 text-3xl">
        Loading...
      </div>
    </>
  );
}


  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">

        

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Product Image */}
          <div className="relative rounded-2xl p-4 h-fit">

            {product.bestSeller && (
              <span className="absolute top-4 left-4 bg-red-900 text-white text-xs px-3 py-1 rounded-full">
                Best Seller
              </span>
            )}

            <span className="absolute top-16 left-4 border border-green-500 text-green-600 px-2 py-1 text-xs rounded-md bg-white">
              Veg
            </span>

            <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow">
              <FaHeart />
            </button>

            <div className="flex justify-center items-center min-h-[300px] md:min-h-[500px]">

  <img
    src={product.image}
    alt={product.name}
    className="
      w-full
      max-w-md
      h-auto
      object-contain
    "
  />

</div>

          </div>

          {/* Product Details */}
          <div>

            <p className="uppercase text-sm text-red-900 font-semibold mt-3">
              {product.category}
            </p>

            <h1 className="text-3xl md:text-4xl font-bold mt-1">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-1">

              <span className="text-yellow-500">
                ⭐
              </span>

              <span className="font-medium">
  {averageRating}
</span>

<span className="text-gray-500">
  ({reviews.length} Reviews)
</span>

              <span className="border px-3 py-1 rounded-full text-sm bg-orange-50">
                Medium Spice 🌶️
              </span>

            </div>

            <div className="mt-3">

              <span className="text-3xl font-bold text-red-900">
               ₹{
  product.prices?.[weight] ||
  product.price
}
              </span>

              <span className="ml-2 text-xl text-gray-500">
                / {weight}
              </span>

            </div>

            <p className="text-green-600 font-semibold mt-2">
              In Stock
            </p>

            <p className="mt-3 text-gray-600 leading-8">
              {product.description}
            </p>

            <hr className="my-3" />

            {/* Weight Selection */}
            

            <div className="mt-6">

  <h3 className="font-semibold mb-3">
    Select Weight
  </h3>

  <div className="flex gap-3">

    {[
      "250g",
      "500g",
      "1kg",
    ].map((size) => (
      <button
  key={size}
  onClick={() =>
    setWeight(size)
  }
  className={`px-5 py-3 rounded-lg border ${
    weight === size
      ? "bg-red-900 text-white"
      : "bg-white"
  }`}
>
  {size}
</button>
    ))}

  </div>

</div>

            {/* Quantity */}
            <div className="mt-3">

              <h3 className="font-semibold mb-2">
                Quantity
              </h3>

              <div className="flex items-center gap-3">

                <div className="border rounded-lg flex items-center">

                  <button
                    onClick={() =>
                      quantity > 1 &&
                      setQuantity(quantity - 1)
                    }
                    className="px-4 py-2"
                  >
                    -
                  </button>

                  <span className="px-3">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity(quantity + 1)
                    }
                    className="px-2 py-2"
                  >
                    +
                  </button>

                </div>

                <span className="font-semibold text-lg">
                  Total: ₹{totalPrice}
                </span>

              </div>

            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

              <button
  onClick={() =>
    addToCart({
      ...product,
      weight,
      price:
        product.prices?.[weight] ||
        product.price,
      quantity,
    })
  }
  className="bg-red-900 text-white py-4 rounded-xl font-medium hover:bg-red-800 transition"
>
  Add To Cart
</button>

              <button
                onClick={orderWhatsapp}
                className="bg-[#f6eee8] py-4 rounded-xl font-medium hover:bg-[#ece2da] transition"
              >
                Buy Now
              </button>

              

              

            </div>

            {/* WhatsApp Order */}
            

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 bg-[#f6eee8] p-6 rounded-xl">

              <div className="text-center">

                <FaTruck className="mx-auto text-red-900 text-2xl" />

                

              </div>

              <div className="text-center">

                <FaShieldAlt className="mx-auto text-red-900 text-2xl" />

                <p className="mt-1 text-xs">
                  100% Authentic
                </p>

              </div>

              <div className="text-center">

                <FaUndoAlt className="mx-auto text-red-900 text-2xl" />

                <p className="mt-1 text-xs">
                  Easy Returns
                </p>

              </div>

            </div>

          </div>

        </div>
        {/* Related Products */}
<div className="mt-5">

  <h2 className="text-3xl md:text-4xl font-bold mb-8">
    You May Also Like
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {relatedProducts.map((item) => (
      <ProductCard
        key={item.id}
        product={item}
      />
    ))}

  </div>

</div>
      <div className="mt-12">

  <h2 className="text-3xl font-bold mb-6">
    Customer Reviews
  </h2>

  <div className="bg-white p-6 rounded-xl shadow">

    <input
      type="text"
      placeholder="Your Name"
      value={
        reviewData.customerName
      }
      onChange={(e) =>
        setReviewData({
          ...reviewData,
          customerName:
            e.target.value,
        })
      }
      className="border p-3 w-full mb-4 rounded"
    />

    <select
      value={reviewData.rating}
      onChange={(e) =>
        setReviewData({
          ...reviewData,
          rating: Number(
            e.target.value
          ),
        })
      }
      className="border p-3 w-full mb-4 rounded"
    >
      <option value="5">
        ⭐⭐⭐⭐⭐
      </option>

      <option value="4">
        ⭐⭐⭐⭐
      </option>

      <option value="3">
        ⭐⭐⭐
      </option>

      <option value="2">
        ⭐⭐
      </option>

      <option value="1">
        ⭐
      </option>
    </select>

    <textarea
      placeholder="Write Review"
      value={
        reviewData.comment
      }
      onChange={(e) =>
        setReviewData({
          ...reviewData,
          comment:
            e.target.value,
        })
      }
      className="border p-3 w-full mb-4 rounded"
    />

    <button
      onClick={submitReview}
      className="
        bg-green-600
        text-white
        px-6
        py-3
        rounded
      "
    >
      Submit Review
    </button>

  </div>

  <div className="mt-6 space-y-4">

    {reviews.map(
      (review) => (
        <div
          key={review._id}
          className="
            bg-white
            p-4
            rounded-xl
            shadow
          "
        >

          <h3 className="font-bold">
            {
              review.customerName
            }
          </h3>

          <p>
            {"⭐".repeat(
              review.rating
            )}
          </p>

          <p>
            {
              review.comment
            }
          </p>

        </div>
      )
    )}

  </div>

</div>

      </div>
      <MiniFooter />
    </>
  );
}

export default ProductDetails;