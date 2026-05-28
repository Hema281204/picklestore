import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
 const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cart");

  return savedCart
    ? JSON.parse(savedCart)
    : [];
});
useEffect(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems)
  );
}, [cartItems]);
  const addToCart = (product) => {
  const existing =
    cartItems.find(
      (item) =>
        item._id === product._id &&
        item.weight === product.weight
    );

  if (existing) {
    setCartItems(
      cartItems.map((item) =>
        item._id === product._id &&
        item.weight === product.weight
          ? {
              ...item,
              quantity:
                item.quantity +
                product.quantity,
            }
          : item
      )
    );
  } else {
    setCartItems([
      ...cartItems,
      product,
    ]);
  }
};

  const removeFromCart = (
  id,
  weight
) => {
    setCartItems(
      cartItems.filter(
        (item) => !(
  item._id === id &&
  item.weight === weight
)
      )
    );
  };

  const increaseQuantity = (id, weight) => {
  setCartItems(
    cartItems.map((item) =>
      item._id === id &&
      item.weight === weight
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  );
};
  

  const decreaseQuantity = (id, weight) => {
  setCartItems(
    cartItems.map((item) =>
      item._id === id &&
      item.weight === weight
        ? {
            ...item,
            quantity:
              item.quantity > 1
                ? item.quantity - 1
                : 1,
          }
        : item
    )
  );
};

const clearCart = () => {
  setCartItems([]);
};

  return (
    <CartContext.Provider
      value={{
  cartItems,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
}}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () =>
  useContext(CartContext);