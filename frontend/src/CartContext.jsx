import React, { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Provide context to the app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product already exists in the cart
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If it exists, increase the quantity
        return prevItems.map(item => 
          item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
      }
      // If it doesn't exist, add it to the cart with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Increase quantity
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
