import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import api from "../../api/api";
import MiniFooter from "../../Components/Footer/MiniFooter";

function Products() {
  const [products, setProducts] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const [sortBy, setSortBy] =
    useState("default");

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
        console.error(
          error
        );
      }
    };

  let filteredProducts =
    products.filter(
      (product) => {
        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            );

        const matchesCategory =
          selectedCategory ===
          "All"
            ? true
            : product.category
                ?.trim()
                .toLowerCase() ===
              selectedCategory
                .trim()
                .toLowerCase();

        return (
          matchesSearch &&
          matchesCategory
        );
      }
    );

  if (sortBy === "low-high") {
    filteredProducts.sort(
      (a, b) =>
        a.price - b.price
    );
  }

  if (sortBy === "high-low") {
    filteredProducts.sort(
      (a, b) =>
        b.price - a.price
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

          <div>
            <h1 className="text-4xl font-bold text-red-900">
              Our Pickles
            </h1>

            <p className="text-gray-500 mt-2">
              Traditional homemade
              pickles prepared with
              authentic recipes.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3">

            <input
              type="text"
              placeholder="🔍 Search Pickles..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              className="
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                w-full
                md:w-72
                focus:outline-none
                focus:ring-2
                focus:ring-red-900
              "
            />

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value
                )
              }
              className="
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
              "
            >
              <option value="default">
                Sort By
              </option>

              <option value="low-high">
                Price Low → High
              </option>

              <option value="high-low">
                Price High → Low
              </option>
            </select>

          </div>

        </div>

        <div className="flex flex-wrap gap-3 mb-8">

          {[
            "All",
            "Veg",
            "Non-Veg",
            "Seafood",
          ].map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  category
                )
              }
              className={`px-5 py-2 rounded-full transition duration-300 ${
                selectedCategory ===
                category
                  ? "bg-red-900 text-white"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        <div className="mb-6">

          <p className="text-gray-600">
            Showing{" "}
            {
              filteredProducts.length
            }{" "}
            products
          </p>

        </div>

        {filteredProducts.length >
        0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={
                    product._id
                  }
                  product={
                    product
                  }
                />
              )
            )}

          </div>
        ) : (
          <div className="text-center py-20">

            <h2 className="text-3xl font-semibold text-gray-500">
              No Pickles Found
            </h2>

            <p className="mt-3 text-gray-400">
              Try another search or
              category.
            </p>

          </div>
        )}

      </div>
      <MiniFooter />
    </>
  );
}

export default Products;