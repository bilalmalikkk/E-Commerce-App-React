import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart from backend on load
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/cart");
        const validatedCart = data.map((item) => ({
          ...item,
          price: item.price ?? 0,
          quantity: item.quantity ?? 1,
        }));
        setCart(validatedCart);
      } catch (err) {
        console.error("Error fetching cart:", err);
        setCart([]);
      }
    };
    fetchCart();
  }, []);

  // Sync cart with backend and update total price
  useEffect(() => {
    const syncCart = async () => {
      try {
        await axios.post("http://localhost:5000/api/cart", { cart });
      } catch (error) {
        console.error("Error updating cart: ", error);
      }
    };
    syncCart();

    const newTotal = cart.reduce(
      (total, item) => total + (item.price ?? 0) * (item.quantity ?? 1),
      0
    );
    setTotalPrice(newTotal);
  }, [cart]);

  // Add product to cart or increase quantity
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity ?? 0) + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1, price: product.price ?? 0 }]);
    }
  };

  // Decrease quantity or remove item if quantity reaches 0
  const decreaseFromCart = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: Math.max((item.quantity ?? 1) - 1, 0) } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Clear the cart
  const clearCart = () => setCart([]);

  // Check if item is in cart
  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseFromCart,
        removeFromCart,
        clearCart,
        isInCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
