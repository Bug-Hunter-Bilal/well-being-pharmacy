
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Load previously saved cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("wellBeingCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Save updated cart
  function saveCart(updatedCart) {
    setCart(updatedCart);
    localStorage.setItem("wellBeingCart", JSON.stringify(updatedCart));
  }

  // Add a product to the cart
  function addToCart(product) {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      saveCart(updatedCart);
    } else {
      saveCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // Increase or decrease product quantity
  function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) return;

    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    );

    saveCart(updatedCart);
  }

  // Remove a product from the cart
  function removeFromCart(productId) {
    const updatedCart = cart.filter(
      (item) => item.id !== productId
    );

    saveCart(updatedCart);
  }

  // Remove all products
  function clearCart() {
    saveCart([]);
  }

  // Calculate total number of items
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
