// WishlistContext.js
import React, { createContext, useState } from "react";

// Create the context
export const WishlistContext = createContext();

// Provide context to the app
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const toggleWishlist = (product) => {
    setWishlistItems((prevItems) => {
      if (prevItems.find((item) => item.id === product.id)) {
        // Remove product if it's already in wishlist
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        // Add product to wishlist
        return [...prevItems, product];
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
