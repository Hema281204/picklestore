import { useNavigate } from "react-router-dom";

function FeaturedProductCard({
  product,
}) {
  const navigate =
    useNavigate();

  return (
    <div
      onClick={() =>
        navigate(
          `/product/${product._id}`
        )
      }
      className="
  bg-white
  rounded-2xl
  overflow-hidden
  shadow
  cursor-pointer
  hover:shadow-xl
  transition
  flex
  flex-col
  h-full
"
    >

      <img
  src={product.image}
  alt={product.name}
  className="
    w-full
    h-72
    md:h-80
    object-cover
  "
/>

      <div className="p-4">

        <h3 className="text-center font-bold text-lg">
          {product.name}
        </h3>

      </div>

    </div>
  );
}

export default FeaturedProductCard;