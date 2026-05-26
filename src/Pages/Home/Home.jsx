
import { useEffect, useState } from "react";
import api from "../../api/api";
import vil from "../../assets/images/hero/vil.png";
import jar from "../../assets/images/hero/jar.png";
import spice from "../../assets/images/hero/spice.png";
import m1 from "../../assets/images/hero/m1.png";
import chick from "../../assets/images/hero/chick.png";

import Navbar from "../../Components/Navbar/Navbar";

import FeaturedProductCard from "../../Components/FeaturedProductCard/FeaturedProductCard";
import Footer from "../../Components/Footer/Footer";
import WhatsappButton from "../../Components/WhatsappButton/WhatsappButton";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  const [products, setProducts] =
  useState([]);
  useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts =
  async () => {
    try {
      const response =
        await api.get(
          "/products"
        );

      setProducts(
        response.data
      );
    } catch (error) {
      console.error(error);
    }
  };
  const heroImages = [
  vil,
  jar,
  spice,
  m1,
  chick,
];
const [fade, setFade] =
  useState(true);

useEffect(() => {
  const interval =
    setInterval(() => {

      setFade(false);

      setTimeout(() => {
        setCurrentImage(
          (prev) =>
            (prev + 1) %
            heroImages.length
        );

        setFade(true);
      }, 500);

    }, 4000);

  return () =>
    clearInterval(interval);
}, []);

const [currentImage, setCurrentImage] =
  useState(0);

useEffect(() => {
  const interval =
    setInterval(() => {
      setCurrentImage(
        (prev) =>
          (prev + 1) %
          heroImages.length
      );
    }, 4000);

  return () =>
    clearInterval(interval);
}, []);
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#f8f1eb]">
       <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">

          <div>

  {/* Heading */}
  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
    Authentic Andhra
    <span className="text-red-900">
      {" "}Homemade Pickles
    </span>
  </h1>

  {/* Mobile Image */}
  <div className="flex justify-center md:hidden mt-6">
    <img
  src={heroImages[currentImage]}
  alt="Pickles"
  className={`
    h-[300px]
    md:h-[500px]
    object-contain
    transition-opacity
    duration-1000
    ${fade ? "opacity-100" : "opacity-0"}
  `}
/>
  </div>

  {/* Description */}
  <p className="mt-6 text-gray-600 text-lg">
    Prepared using traditional recipes,
    premium ingredients and authentic
    Andhra spices.
  </p>

  {/* Buttons */}
  <div className="mt-8 flex flex-col sm:flex-row gap-4">

    <button
  onClick={() =>
    navigate("/products")
  }
  className="bg-red-900 text-white px-8 py-4 rounded-xl w-full sm:w-auto"
>
  Shop Now
</button>

    <button
  onClick={() =>
    document
      .getElementById(
        "our-story"
      )
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
  className="border border-red-900 text-red-900 px-8 py-4 rounded-xl w-full sm:w-auto"
>
  Explore
</button>
  </div>

</div>

          <div className="hidden md:flex justify-center">
            <img
  src={heroImages[currentImage]}
  alt="Pickles"
  className={`
    h-[300px]
    md:h-[500px]
    object-contain
    transition-opacity
    duration-1000
    ${fade ? "opacity-100" : "opacity-0"}
  `}
/>

          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-bold text-center">
          Featured Pickles
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Our Best Selling Traditional Pickles
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

          {products
  .slice(0, 4)
  .map((product) => (
    <FeaturedProductCard
      key={product._id}
      product={product}
    />
))}

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f8f1eb] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-bold">
                Homemade
              </h3>

              <p className="mt-4 text-gray-600">
                Traditional homemade recipes
                passed through generations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-bold">
                Premium Ingredients
              </h3>

              <p className="mt-4 text-gray-600">
                Fresh vegetables, fruits and
                carefully selected spices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-bold">
                Fast Delivery
              </h3>

              <p className="mt-4 text-gray-600">
                Safe packing and quick delivery
                across India.
              </p>
            </div>

          </div>

        </div>

      </section>
      <section
  id="our-story"
  className="max-w-7xl mx-auto px-6 py-20"
> 
  <div className="grid md:grid-cols-2 gap-12 items-center">

    <div>

      <h2 className="text-5xl font-bold">
        Our Story
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        We prepare traditional Andhra pickles
        using recipes passed down through generations.
        Every jar is made with fresh ingredients,
        premium spices and homemade care.
      </p>

    </div>

    <div className="bg-[#f8f1eb] p-10 rounded-3xl">

      <h3 className="text-3xl font-bold">
        5000+
      </h3>

      <p>Happy Customers</p>

      <h3 className="text-3xl font-bold mt-6">
        20+
      </h3>

      <p>Pickle Varieties</p>

      <h3 className="text-3xl font-bold mt-6">
        100%
      </h3>

      <p>Homemade Quality</p>

    </div>

  </div>

</section>

      {/* Reviews 
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="shadow-lg p-8 rounded-2xl">
            <h3 className="font-bold">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="mt-4 text-gray-600">
              Best Gongura pickle I have ever tasted.
              Exactly like homemade.
            </p>

            <p className="mt-4 font-semibold">
              - Ramesh
            </p>
          </div>

          <div className="shadow-lg p-8 rounded-2xl">
            <h3 className="font-bold">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="mt-4 text-gray-600">
              Excellent taste and packaging.
            </p>

            <p className="mt-4 font-semibold">
              - Diya
            </p>
          </div>

          <div className="shadow-lg p-8 rounded-2xl">
            <h3 className="font-bold">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="mt-4 text-gray-600">
              Authentic Andhra flavor.
              Highly recommended.
            </p>

            <p className="mt-4 font-semibold">
              - Kiran
            </p>
          </div>

        </div>

      </section>*/}
      <WhatsappButton />
      <Footer />

    </>
  );
  
}

export default Home;