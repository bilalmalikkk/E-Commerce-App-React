// src/components/CategoriesSection.js
import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import category1 from "../assets/img/Category1.png";
import category2 from "../assets/img/Category2.png";
import category3 from "../assets/img/Category3.png";

const categories = [
  { id: 1, name: "PCs", img: category1 },
  { id: 2, name: "Laptops", img: category2 },
  { id: 3, name: "Mobiles", img: category1 },
  { id: 4, name: "Tablets", img: category3 },
];

const CategoriesSection = () => {
  const { darkMode } = useDarkMode();

  return (
    <section id="categories" className={`text-center py-4 ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
      <h2 className="mb-4 fw-bold text-primary">✨ Shop by Category ✨</h2>
      <div className="row justify-content-center" id="category-container">
        {categories.map((category) => (
          <div key={category.id} className="col-md-3 col-sm-6 mb-4">
            <div className={`card shadow-lg border-0 h-100 ${darkMode ? "bg-secondary text-light" : "bg-white"}`}>
              <img
                src={category.img}
                className="card-img-top p-2 rounded"
                alt={category.name}
                data-bs-toggle="tooltip"
                title={category.name}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className={`card-title fw-semibold ${darkMode ? "text-light" : "text-dark"}`}>{category.name}</h5>
                <a
                  href={`#${category.name.toLowerCase()}`}
                  className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-primary"} fw-bold`}
                >
                  🔍 Browse
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
