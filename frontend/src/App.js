import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure this is bundled properly
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartProvider } from "./context/CartContext";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext"; //using custom hook to read dark mode state
import Navbar from "./components/Navbar";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesSection from "./components/CategoriesSection";
import CartModal from "./components/CartModal";
import ContactSection from "./components/ContactSection";


const AppContent = () => {
  const { darkMode } = useDarkMode(); // Get dark mode state

  return (
    // Templete literal to build class name dynamically
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content  */}
      <main className="container">
        <section
          id="home"
          className={`text-center py-4 m-4 ${darkMode ? "bg-dark text-light" : "bg-light"
            }`}
        >
          <h2 className={`fw-bold ${darkMode ? "text-warning" : "text-primary"}`}>
            Welcome to E-Commerce Store
          </h2>
        </section>

        {/* Sections */}

        <FeaturedProducts />
        <CategoriesSection />
        <ContactSection />
      </main>

      <CartModal />
    </div>
  );
};


const App = () => (
  //context providers
  <DarkModeProvider> 
    <CartProvider>
      <AppContent />
    </CartProvider>
  </DarkModeProvider>
);

export default App; //default export

