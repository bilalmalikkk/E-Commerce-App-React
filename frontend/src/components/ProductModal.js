import React from "react";
import { useDarkMode } from "../context/DarkModeContext"; // Importing the dark mode context

// ProductModal component to show detailed product info in a Bootstrap modal
const ProductModal = ({ product }) => {
  const { darkMode } = useDarkMode(); 

  return (
    // Modal structure with dynamic ID based on product ID
    <div
      className="modal fade"
      id={`productModal-${product.id}`} // Unique ID for each product modal
      tabIndex="-1"
      aria-labelledby={`productModalLabel-${product.id}`} 
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div
          className={`modal-content ${darkMode ? "bg-dark text-light" : "bg-white"}`}
        >
          {/* Modal Header */}
          <div
            className={`modal-header ${darkMode ? "bg-secondary text-light" : "bg-light"}`}
          >
            <h5 className="modal-title" id={`productModalLabel-${product.id}`}>
              {product.name}
            </h5>
            {/* Close button with support for dark mode */}
            <button
              type="button"
              className={`btn-close ${darkMode ? "btn-close-white" : ""}`} 
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* Modal Body - Product details */}
          <div className="modal-body">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid mb-2" // Ensures responsive image
            />
            <p>{product.description}</p>
            <h6
              className={`fw-bold ${darkMode ? "text-warning" : "text-success"}`}
            >
              Rs {product.price}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
