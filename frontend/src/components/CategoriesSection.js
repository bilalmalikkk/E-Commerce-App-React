import React, { useState, useEffect, useContext, useMemo } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { CartContext } from "../context/CartContext";

const CategoriesSection = () => {
  const { darkMode } = useDarkMode();
  const { addToCart, isInCart } = useContext(CartContext);
  const [categories, setCategories] = useState([]);
  const [categoryImages, setCategoryImages] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Desired category order
  const categoryOrder = useMemo(() => ["men's clothing", "women's clothing", "jewelery", "electronics"], []);

  // Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const orderedCategories = categoryOrder.filter((cat) => data.includes(cat));
        setCategories(orderedCategories);
        fetchFirstProductImages(orderedCategories);
      })
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, [categoryOrder]);

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

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`✅ Added ${product.title} to cart!`);
  };

  return (
    <section id="categories" className={`text-center py-4 ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
      <h2 className="mb-4 fw-bold text-success">Shop by Category</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4" id="category-container">
        {!selectedCategory ? (
          categories.map((category, index) => (
            <div key={index} className="d-flex justify-content-center">
              <div
                className={`card shadow-lg border-0 h-100 ${darkMode ? "bg-secondary text-light" : "bg-white"}`}
                onClick={() => handleCategoryClick(category)}
                style={{ cursor: "pointer", width: "18rem" }}
              >
                {/* Display first product image for the category */}
                {categoryImages[category] && (
                  <img
                    src={categoryImages[category]}
                    className="card-img-top p-2 rounded"
                    alt={category}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className={`card-title fw-semibold ${darkMode ? "text-light" : "text-dark"}`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h5>
                  <button className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-primary"} fw-bold`}>🔍 Browse</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <button className="btn btn-secondary mb-3" onClick={handleBack}>
              ⬅️ Back to Categories
            </button>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {products.map((product) => (
                <div key={product.id} className="d-flex justify-content-center">
                  <div className={`card shadow-lg border-0 h-100 ${darkMode ? "bg-secondary text-light" : "bg-white"}`} style={{ width: "18rem" }}>
                    <img src={product.image} className="card-img-top p-2 rounded" alt={product.title} style={{ height: "300px", objectFit: "cover" }} />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className={`card-title fw-semibold ${darkMode ? "text-light" : "text-dark"}`}>{product.title}</h5>
                      <p className="card-text">Price: Rs {product.price}</p>
                      <button
                        className={`btn ${darkMode ? "btn-outline-light" : isInCart(product.id) ? "btn-secondary" : "btn-success"} fw-bold`}
                        onClick={() => handleAddToCart(product)}
                        disabled={isInCart(product.id)}
                      >
                        {isInCart(product.id) ? "✔️ Added" : "➕ Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
