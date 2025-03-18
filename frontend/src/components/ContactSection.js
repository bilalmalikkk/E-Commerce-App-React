import React, { useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { Tooltip } from "bootstrap"; // Ensure this import is correct!

const ContactSection = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    // Ensure tooltips are initialized properly
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
  }, []);

  return (
    <section id="contact" className={`py-5 ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
      <h2 className={`text-center mb-4 fw-bold ${darkMode ? "text-warning" : "text-primary"}`}>📩 Contact Us</h2>
      <div className="d-flex justify-content-center">
        <form
          action="https://formsubmit.co/bilalmalik746429@gmail.com"
          method="POST"
          className={`w-50 p-4 shadow-lg rounded ${darkMode ? "bg-secondary text-light" : "bg-white"}`}
        >
          {/* Name Field */}
          <div className="input-group mb-3">
            <span
              className={`input-group-text ${darkMode ? "bg-warning text-dark" : "bg-primary text-white"}`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Enter your full name"
            >
              <i className="bi bi-person-square"></i>
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control"
              required
            />
          </div>

          {/* Email Field */}
          <div className="input-group mb-3">
            <span
              className={`input-group-text ${darkMode ? "bg-warning text-dark" : "bg-primary text-white"}`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Enter your email address"
            >
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control"
              required
            />
          </div>

          {/* Message Field */}
          <div className="input-group mb-3">
            <span
              className={`input-group-text ${darkMode ? "bg-warning text-dark" : "bg-primary text-white"}`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Write your message"
            >
              <i className="bi bi-chat-dots"></i>
            </span>
            <textarea
              name="message"
              rows="5"
              className="form-control"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn ${darkMode ? "btn-warning text-dark" : "btn-success"} w-100 fw-semibold`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Send your message"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
