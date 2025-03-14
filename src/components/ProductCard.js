import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`card shadow-sm ${darkMode ? "bg-secondary text-light" : "bg-white"}`}
      style={{ width: "18rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
      data-price={product.price}
      data-category={product.category}
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
        <h5 className="card-title fw-bold">{product.name}</h5>
        <p className={`card-text ${darkMode ? "text-light" : "text-muted"}`}>{product.description}</p>
        <h6 className={`fw-bold ${darkMode ? "text-warning" : "text-success"}`}>Rs {product.price}</h6>
      </div>

      <div className="card-footer d-flex justify-content-center gap-2">
        <button
          className={`btn ${darkMode ? "btn-light" : "btn-info"}`}
          data-bs-toggle="modal"
          data-bs-target={`#productModal-${product.id}`}
        >
          🔍 View Details
        </button>

        <button
          className={`btn ${isInCart ? "btn-secondary" : darkMode ? "btn-warning" : "btn-success"}`}
          onClick={() => !isInCart && onAddToCart(product)}
          disabled={isInCart}
        >
          {isInCart ? "✅ Added" : "🛒 Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;