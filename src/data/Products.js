import gonguraImage from "../assets/images/gongura.png";
import mangoImage from "../assets/images/mango.png";
import lemonImage from "../assets/images/lemon.png";
import garlicImage from "../assets/images/garlic.png";


export const products = [
  {
    id: 1,
    name: "Gongura Pickle",
    category: "Veg",
    rating: 4.8,
    reviews: 256,
    price: 179,
    image: gonguraImage,
    bestSeller: true,
    description:
      "Tangy and spicy gongura leaves pickle, a signature Andhra delicacy with a unique sour taste.",

    prices: {
      "250g": 179,
      "500g": 319,
      "1kg": 549,
    },
  },

  {
    id: 2,
    name: "Mango Pickle",
    category: "Veg",
    rating: 4.9,
    reviews: 312,
    price: 199,
    image: mangoImage,
    bestSeller: true,
    description:
      "Traditional Andhra Avakaya made from handpicked raw mangoes and premium spices.",

    prices: {
      "250g": 199,
      "500g": 359,
      "1kg": 629,
    },
  },

  {
    id: 3,
    name: "Lemon Pickle",
    category: "Veg",
    rating: 4.7,
    reviews: 184,
    price: 169,
    image: lemonImage,
    bestSeller: false,
    description:
      "Homemade lemon pickle with the perfect balance of tanginess and spice.",

    prices: {
      "250g": 169,
      "500g": 299,
      "1kg": 529,
    },
  },

  {
    id: 4,
    name: "Garlic Pickle",
    category: "Veg",
    rating: 4.8,
    reviews: 220,
    price: 189,
    image: garlicImage,
    bestSeller: true,
    description:
      "Flavorful garlic pickle prepared with traditional Andhra spices and pure oil.",

    prices: {
      "250g": 189,
      "500g": 339,
      "1kg": 599,
    },
  },
];