import React, { useState, useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const CategoriesSection = () => {
  const { darkMode } = useDarkMode();
  const [categories, setCategories] = useState([]);
  const [categoryImages, setCategoryImages] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        fetchFirstProductImages(data);
      })
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  // Fetch first product for each category
  const fetchFirstProductImages = async (categories) => {
    const images = {};
    try {
      for (const category of categories) {
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = await res.json();
        if (data.length > 0) images[category] = data[2].image; // Store first product image
      }
      setCategoryImages(images);
    } catch (err) {
      console.error("Failed to fetch category images:", err);
    }
  };

  // Handle category click to fetch all products from that category
  const handleCategoryClick = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
    setSelectedCategory(category);
  };

  // Back button handler
  const handleBack = () => {
    setSelectedCategory(null);
    setProducts([]);
  };

  return (
    <section id="categories" className={`text-center py-4 ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
      <h2 className="mb-4 fw-bold text-primary">Shop by Category</h2>
      <div className="row justify-content-center" id="category-container">
        {!selectedCategory ? (
          categories.map((category, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div
                className={`card shadow-lg border-0 h-100 ${darkMode ? "bg-secondary text-light" : "bg-white"}`}
                onClick={() => handleCategoryClick(category)}
                style={{ cursor: "pointer" }}
              >
                {/* Display first product image for the category */}
                {categoryImages[category] && (
                  <img
                    src={categoryImages[category]}
                    className="card-img-top p-2 rounded"
                    alt={category}
                    style={{ height: "350px", width: "100%", objectFit: "cover" }}
                  />
                )}
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className={`card-title fw-semibold ${darkMode ? "text-light" : "text-dark"}`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h5>
                  <button className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-primary"} fw-bold`}>
                    🔍 Browse
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <button className="btn btn-secondary mb-3" onClick={handleBack}>
              ⬅️ Back to Categories
            </button>
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className={`card shadow-lg border-0 h-100 ${darkMode ? "bg-secondary text-light" : "bg-white"}`}>
                  <img src={product.image} className="card-img-top p-2 rounded" alt={product.title} />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className={`card-title fw-semibold ${darkMode ? "text-light" : "text-dark"}`}>{product.title}</h5>
                    <p className="card-text">Price: Rs {product.price}</p>
                    <button className={`btn ${darkMode ? "btn-outline-light" : "btn-success"} fw-bold`}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;