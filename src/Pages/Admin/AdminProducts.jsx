import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import AdminNavbar from "../../Components/Admin/AdminNavbar";

function AdminProducts() {
  const [products, setProducts] =
    useState([]);

 const [formData, setFormData] =
  useState({
    name: "",
    category: "",
    description: "",
    image: "",

    price250: "",
    price500: "",
    price1000: "",
  });
    const [editingId, setEditingId] =
  useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response =
        await api.get("/products");

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [uploading, setUploading] =
  useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const addProduct = async () => {
  try {
    if (editingId) {
      await api.put(
        `/products/${editingId}`,
        formData
      );

      toast.success(
  "Product Updated Successfully"
);
      setEditingId(null);
    } else {
      await api.post(
  "/products",
  {
    name: formData.name,
    category: formData.category,
    description:
      formData.description,
    image: formData.image,

    prices: {
      "250g":
        Number(
          formData.price250
        ),
      "500g":
        Number(
          formData.price500
        ),
      "1kg":
        Number(
          formData.price1000
        ),
    },
  }
);

     toast.success(
  "Product Added Successfully"
);
    }

    setFormData({
      name: "",
      category: "",
      description: "",
      image: "",
      price250: "",
price500: "",
price1000: "",
    });

    fetchProducts();
  } catch (error) {
    console.error(error);

    toast.error(
  "Something went wrong"
);
  }
};

  const deleteProduct = async (
    id
  ) => {
    try {
      await api.delete(
        `/products/${id}`
      );

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };
  const editProduct = (product) => {
  setFormData({
    name: product.name,
    category: product.category,
    description:
      product.description,
    image: product.image,
    price: product.price,
  });

  setEditingId(product._id);
};

const uploadImage = async (
  e
) => {
  try {
    setUploading(true);

    const file =
      e.target.files[0];

    const formDataImage =
      new FormData();

    formDataImage.append(
      "image",
      file
    );

    const response =
      await api.post(
        "/upload",
        formDataImage,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );
      alert(JSON.stringify(response.data));

    setFormData({
      ...formData,
      image:
        response.data.imageUrl,
    });

    setUploading(false);

  } catch (error) {
    console.error(error);
    setUploading(false);
  }
};

  return (
    <>
  <AdminNavbar />

  <div className="max-w-7xl mx-auto p-8"></div>
    <div className="max-w-7xl mx-auto p-4 md:p-8">

      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Product Management
      </h1>

      {/* Add Product Form */}
      <div
        className="
          bg-white
          p-6
          rounded-2xl
          shadow
          mb-10
        "
      >
        <h2 className="text-xl md:text-2xl font-bold mb-6">
  Add Product
</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
  type="number"
  name="price250"
  placeholder="250g Price"
  value={formData.price250}
  onChange={handleChange}
  className="border p-3 rounded-lg"
/>

<input
  type="number"
  name="price500"
  placeholder="500g Price"
  value={formData.price500}
  onChange={handleChange}
  className="border p-3 rounded-lg"
/>

<input
  type="number"
  name="price1000"
  placeholder="1kg Price"
  value={formData.price1000}
  onChange={handleChange}
  className="border p-3 rounded-lg"
/>

          <div>

  <label className="font-medium">
    Product Image
  </label>

 <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    
    uploadImage(e);
  }}
  className="
    border
    p-3
    rounded-lg
    w-full
    mt-2
  "
/>

  {uploading && (
    <p className="text-blue-600 mt-2">
      Uploading...
    </p>
  )}

  {formData.image && (
    <img
      src={formData.image}
      alt="Preview"
      className="
        w-32
        h-32
        object-cover
        rounded-lg
        mt-3
      "
    />
  )}

</div>

        </div>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="
            border
            p-3
            rounded-lg
            w-full
            mt-4
          "
        />

        <button
  onClick={addProduct}
  className="
    mt-5
    bg-green-600
    hover:bg-green-700
    text-white
    px-6
    py-3
    rounded-lg
    w-full
    md:w-auto
  "
>
          {editingId
  ? "Update Product"
  : "Add Product"}
        </button>

      </div>

      {/* Product List */}
      <div className="space-y-4">

        {products.map((product) => (
          <div
            key={product._id}
            className="
              bg-white
              p-5
              rounded-xl
              shadow
              flex
              justify-between
              items-center
            "
          >

           <div>

  <>
  <img
    src={product.image}
    alt={product.name}
    className="w-20 h-20 object-cover rounded-lg mb-2"
  />

  
</>
  

  <h2 className="font-bold text-xl">
    {product.name}
  </h2>

  <p>{product.category}</p>

  <p>
  250g : ₹
  {product.prices?.["250g"]}
</p>

<p>
  500g : ₹
  {product.prices?.["500g"]}
</p>

<p>
  1kg : ₹
  {product.prices?.["1kg"]}
</p>
 

</div>

            <div className="flex gap-3">

  <button
    onClick={() =>
      editProduct(product)
    }
    className="
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-5
      py-2
      rounded-lg
    "
  >
    Edit
  </button>

  <button
    onClick={() =>
      deleteProduct(
        product._id
      )
    }
    className="
      bg-red-600
      hover:bg-red-700
      text-white
      px-5
      py-2
      rounded-lg
    "
  >
    Delete
  </button>

</div>

          </div>
        ))}

      </div>

    </div>
    </>
  );
}

export default AdminProducts;