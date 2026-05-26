import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";

function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-3xl md:text-5xl font-bold text-red-900">
            About Andhra Pickles
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Bringing authentic Andhra flavours
            straight from our kitchen to your table.
          </p>

        </div>

        {/* Story Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1664791461482-79f5deee490f?fm=jpg&q=60&w=3000&auto=format&fit=crop"
              alt="Andhra Pickles"
              className="rounded-3xl shadow-lg"
            />
          </div>

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8">
              Andhra Pickles was started with a simple
              mission — to preserve the traditional taste
              of homemade Andhra pickles.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Every batch is prepared using carefully
              selected ingredients, traditional recipes,
              and authentic spices that have been passed
              down through generations.
            </p>

          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#f6eee8] p-8 rounded-2xl">
              <h3 className="text-xl font-semibold">
                🌶 Authentic Taste
              </h3>

              <p className="mt-3 text-gray-600">
                Traditional Andhra recipes prepared
                with authentic ingredients.
              </p>
            </div>

            <div className="bg-[#f6eee8] p-8 rounded-2xl">
              <h3 className="text-xl font-semibold">
                🥭 Premium Ingredients
              </h3>

              <p className="mt-3 text-gray-600">
                Handpicked fruits, vegetables,
                spices and oils.
              </p>
            </div>

            <div className="bg-[#f6eee8] p-8 rounded-2xl">
              <h3 className="text-xl font-semibold">
                ❤️ Homemade Quality
              </h3>

              <p className="mt-3 text-gray-600">
                Freshly prepared with care
                and attention to detail.
              </p>
            </div>

          </div>

        </div>

        {/* How We Prepare */}
        <div className="mt-20 bg-[#f6eee8] p-10 rounded-3xl">

          <h2 className="text-3xl font-bold text-center mb-10">
            How We Prepare
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-4xl">🥭</div>
              <h3 className="font-bold mt-3">
                Fresh Ingredients
              </h3>
            </div>

            <div>
              <div className="text-4xl">🌶</div>
              <h3 className="font-bold mt-3">
                Traditional Recipes
              </h3>
            </div>

            <div>
              <div className="text-4xl">📦</div>
              <h3 className="font-bold mt-3">
                Hygienic Packing
              </h3>
            </div>

            <div>
              <div className="text-4xl">🚚</div>
              <h3 className="font-bold mt-3">
                Fast Delivery
              </h3>
            </div>

          </div>

        </div>

        {/* Trust Section */}

<div className="mt-20">

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

    <div>
      <h3 className="text-4xl font-bold text-red-900">
        100%
      </h3>

      <p className="mt-2 text-gray-600">
        Homemade
      </p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-red-900">
        Fresh
      </h3>

      <p className="mt-2 text-gray-600">
        Ingredients
      </p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-red-900">
        Andhra
      </h3>

      <p className="mt-2 text-gray-600">
        Traditional Recipes
      </p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-red-900">
        Pan India
      </h3>

      <p className="mt-2 text-gray-600">
        Delivery
      </p>
    </div>

  </div>

</div>

        {/* Our Promise */}
        <div className="mt-20 bg-[#f6eee8] p-10 rounded-3xl text-center">

          <h2 className="text-3xl font-bold mb-4">
            Our Promise
          </h2>

          <p className="text-gray-600 leading-8 max-w-3xl mx-auto">

            Every pickle is prepared with the same
            care and authenticity that we would serve
            to our own family. We never compromise
            on freshness, quality, or taste.

          </p>

        </div>

      </div>

      <MiniFooter />
    </>
  );
}

export default About;