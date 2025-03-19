import React from "react";
import { useDarkMode } from "../context/DarkModeContext"; // Importing custom dark mode context

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Accessing dark mode state and toggle function from context

  return (
    <header className={`py-2 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      {/* Navbar container with dynamic dark/light mode styling */}
      <nav className={`container-fluid navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} fixed-top shadow`}>
        {/* Brand Logo */}
        <a className="navbar-brand ms-5 fw-bold" href="/Ecommerce.html">
          🛍️ E-Commerce Store
        </a>

        {/* Navbar Toggler Button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" id="togglee-btn"></span>
        </button>

        {/* Collapsible Navbar Content */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* Navigation Links */}
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/Ecommerce.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#fproducts">
                Featured Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#categories">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#contact">
                Contact Us
              </a>
            </li>

            {/* Dark Mode Toggle Button */}
            <li className="nav-item d-flex align-items-center ms-2 me-2">
              <button
                className={`btn ${darkMode ? "btn-light" : "btn-dark"} fw-semibold`} // Button color switches based on dark mode state
                onClick={toggleDarkMode} // Clicking toggles dark/light mode
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} // Accessibility feature for screen readers
              >
                {/* Button icon switches between sun/moon emoji depending on mode */}
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; // Export the Navbar component for use in other parts of the app