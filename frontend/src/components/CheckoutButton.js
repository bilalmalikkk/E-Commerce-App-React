import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

// Make sure this is your actual Stripe public key
const stripePromise = loadStripe("pk_test_your_public_key");



const CheckoutButton = ({ cartItems }) => {
    const handleCheckout = async () => {
      console.log("🚀 Starting checkout...");
      console.log("📦 Cart Items:", cartItems); // ✅ Log cart items
  
      try {
        if (cartItems.length === 0) {
          console.error("❌ Cart is empty, cannot checkout!");
          return;
        }
  
        const stripe = await stripePromise;
        console.log("✅ Stripe initialized:", stripe);
  
        const { data } = await axios.post(
          "http://localhost:5000/api/checkout/create-checkout-session",
          { cartItems }
        );
  
        console.log("✅ Session Data received:", data);
  
        const result = await stripe.redirectToCheckout({
          sessionId: data.id,
        });
  
        if (result.error) {
          console.error("🚨 Stripe Error:", result.error.message);
        }
      } catch (error) {
        console.error("❌ Checkout failed:", error.response?.data || error.message);
      }
    };
  
    return (
      <button
        onClick={handleCheckout}
        className="btn btn-success fw-bold px-4 py-2 mt-3"
        disabled={cartItems.length === 0}
      >
        🛒 Checkout
      </button>
    );
  };
  
  export default CheckoutButton;
  