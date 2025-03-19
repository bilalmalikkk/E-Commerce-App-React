import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const { darkMode } = useDarkMode(); // Access dark mode state from context

  return (
    <div
      className={`card shadow-sm ${darkMode ? "bg-secondary text-light" : "bg-white"}`} 
      style={{ width: "18rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }} 
      data-price={product.price} // Store product price as a data attribute for potential filtering
      data-category={product.category} // Store product category as a data attribute
    >
      {/* Product image with fixed height and object-fit for better visuals */}
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "200px", objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
        <h5 className="card-title fw-bold">{product.name}</h5> {/* Product name */}
        <h6 className={`fw-bold ${darkMode ? "text-warning" : "text-success"}`}>Rs {product.price}</h6> {/* Product price with color based on theme */}
      </div>

      {/* Card footer with action buttons */}
      <div className="card-footer d-flex justify-content-center gap-2">
        {/* View details button triggers a Bootstrap modal */}
        <button
          className={`btn ${darkMode ? "btn-light" : "btn-info"}`}
          data-bs-toggle="modal"
          data-bs-target={`#productModal-${product.id}`}
        >
          🔍 View Details
        </button>

        {/* Add to Cart button - disabled if item is already in cart */}
        <button
          className={`btn ${isInCart ? "btn-secondary" : darkMode ? "btn-warning" : "btn-success"}`} 
          onClick={() => !isInCart && onAddToCart(product)} // Only trigger add to cart if not already in cart
          disabled={isInCart} // Disable button if product is already added
        >
          {isInCart ? "✅ Added" : "🛒 Add to Cart"} 
        </button>
      </div>
    </div>
  );
};

export default ProductCard;