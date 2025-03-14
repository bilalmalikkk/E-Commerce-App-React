import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`py-2 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      {/* Navbar with dynamic dark/light mode styling */}
      <nav className={`container-fluid navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} fixed-top shadow`}>
        <a className="navbar-brand ms-5 fw-bold" href="/Ecommerce.html">
          🛍️ E-Commerce Store
        </a>

        {/* Navbar Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" id="togglee-btn"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
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
<li className="nav-item d-flex align-items-center ms-2">
  <button
    className={`btn ${darkMode ? "btn-light" : "btn-dark"} fw-semibold`}
    onClick={toggleDarkMode}
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} // Accessibility
  >
    {darkMode ? "☀️" : "🌙"}
  </button>
</li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
