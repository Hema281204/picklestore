import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] =
  useState(() => {
    const savedWishlist =
      localStorage.getItem("wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });
  useEffect(() => {
  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlistItems)
  );
}, [wishlistItems]);
  const addToWishlist = (product) => {
    const exists = wishlistItems.find(
      (item) => item._id === product._id
    );

    if (!exists) {
      setWishlistItems([
        ...wishlistItems,
        product,
      ]);
    }
  };

  const removeFromWishlist = (_id) => {
    setWishlistItems(
      wishlistItems.filter(
        (item) => item._id !== _id
      )
    );
  };
  const toggleWishlist = (product) => {
    
  const exists = wishlistItems.find(
    (item) => item._id === product._id
  );

  if (exists) {
    setWishlistItems(
      wishlistItems.filter(
        (item) => item._id !== product._id
      )
    );
  } else {
    setWishlistItems([
      ...wishlistItems,
      product,
    ]);
  }
};


  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () =>
  useContext(WishlistContext);