import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styling added
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import contexts
import { DarkModeProvider } from "./context/DarkModeContext";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap App with Providers */}
    <DarkModeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </DarkModeProvider>
  </React.StrictMode>
);

reportWebVitals();
