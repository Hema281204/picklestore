import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { toast } from "react-toastify";

const WishlistContext =
  createContext();

export function WishlistProvider({
  children,
}) {

  const [wishlistItems,
    setWishlistItems] =
      useState(() => {

        const savedWishlist =
          localStorage.getItem(
            "wishlist"
          );

        return savedWishlist
          ? JSON.parse(
              savedWishlist
            )
          : [];

      });

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        wishlistItems
      )
    );

  }, [wishlistItems]);

  const addToWishlist =
    (product) => {

      const exists =
        wishlistItems.find(
          (item) =>
            item._id ===
            product._id
        );

      if (!exists) {

        setWishlistItems([
          ...wishlistItems,
          product,
        ]);

        toast.success(
          "Added To Wishlist ❤️"
        );

      }

    };

  const removeFromWishlist =
  (_id, showToast = true) => {

    setWishlistItems(
      wishlistItems.filter(
        (item) =>
          item._id !== _id
      )
    );

    if (showToast) {
      toast.success(
        "Removed From Wishlist ❤️"
      );
    }

  };

  const toggleWishlist =
    (product) => {

      const exists =
        wishlistItems.find(
          (item) =>
            item._id ===
            product._id
        );

      if (exists) {

        setWishlistItems(
          wishlistItems.filter(
            (item) =>
              item._id !==
              product._id
          )
        );

        toast.success(
          "Removed From Wishlist ❤️"
        );

      } else {

        setWishlistItems([
          ...wishlistItems,
          product,
        ]);

        toast.success(
          "Added To Wishlist ❤️"
        );

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

export const useWishlist =
  () =>
    useContext(
      WishlistContext
    );