import React from "react";
import { useDarkMode } from "../context/DarkModeContext"; // Dark mode context

const ProductModal = ({ product }) => {
  const { darkMode } = useDarkMode(); // Get dark mode state

  return (
    <div
      className="modal fade"
      id={`productModal-${product.id}`}
      tabIndex="-1"
      aria-labelledby={`productModalLabel-${product.id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div
          className={`modal-content ${darkMode ? "bg-dark text-light" : "bg-white"
            }`}
        >
          <div
            className={`modal-header ${darkMode ? "bg-secondary text-light" : "bg-light"
              }`}
          >
            <h5 className="modal-title" id={`productModalLabel-${product.id}`}>
              {product.name}
            </h5>
            <button
              type="button"
              className={`btn-close ${darkMode ? "btn-close-white" : ""}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid mb-2"
            />
            <p>{product.description}</p>
            <h6
              className={`fw-bold ${darkMode ? "text-warning" : "text-success"
                }`}
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
