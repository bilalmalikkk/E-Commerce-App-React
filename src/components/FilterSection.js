// src/components/FilterSection.js
import React from "react";

const FilterSection = () => {
  return (
    <section id="filters" className="text-center py-4 ">
      <h3 className="fw-bold mb-4 text-primary">🔍 Filter Products</h3>

      <div className="row justify-content-center gap-3">
        {/* Category Filter */}
        <div className="col-md-4">
          <label htmlFor="categoryFilter" className="form-label fw-semibold">
            📌 Category
          </label>
          <select id="categoryFilter" className="form-select border-warning">
            <option value="all">All Categories</option>
            <option value="Headphones">Headphones</option>
            <option value="Airpods">Airpods</option>
            <option value="Tablets">Tablets</option>
          </select>
        </div>

        {/* Price Filter */}
        <div className="col-md-4">
          <label htmlFor="priceFilter" className="form-label fw-semibold">
            Max Price (Rs)
          </label>
          <input
            type="range"
            id="priceFilter"
            className="form-range border-warning"
            min="0"
            max="50000"
            step="500"
            defaultValue="50000"
          />
          <p id="priceValue" className="fw-semibold text-success">
            Max Price: <span className="text-primary">Rs 50000</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
