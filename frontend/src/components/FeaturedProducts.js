import React, { useContext, useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { CartContext } from "../context/CartContext";
import { useDarkMode } from "../context/DarkModeContext";
import axios from "axios";

const FeaturedProducts = () => {
  const { addToCart, isInCart } = useContext(CartContext);
  const { darkMode } = useDarkMode();
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(50000);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from backend API
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setProducts(data);
      setFilteredProducts(data.slice(0, 6)); // Show only 6 products

      // Extract unique categories from products
      const uniqueCategories = ["all", ...new Set(data.map((product) => product.category.toLowerCase()))];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filter products when category or price changes
  useEffect(() => {
    const filtered = products
      .filter(
        (product) =>
          (category === "all" || product.category.toLowerCase() === category.toLowerCase()) &&
          product.price <= maxPrice
      )
      .slice(0, 6); // Limit to 6 products after filtering

    setFilteredProducts(filtered);
  }, [category, maxPrice, products]);

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`✅ Added ${product.name} to cart!`);
  };

  const handleViewDetails = (product) => {
    console.log(`👀 Viewing details for ${product.name}`);
  };

  return (
    <section id="fproducts" className={`text-center py-5 ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
      <h3 className="fw-bold mb-4 text-success">Featured Products</h3>

      {/* Filters Section */}
      <section id="filters" className="text-center py-4">
        <h3>Filter Products</h3>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <label htmlFor="categoryFilter" className="form-label">Category</label>
            <select
              id="categoryFilter"
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="priceFilter" className="form-label">Max Price (Rs)</label>
            <input
              type="range"
              id="priceFilter"
              className="form-range"
              min="0"
              max="50000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <p id="priceValue">Max Price: Rs {maxPrice}</p>
          </div>
        </div>
      </section>

      {/* Loading and Error States */}
      {loading && <h5 className="text-info">Loading products...</h5>}
      {error && <h5 className="text-danger">{error}</h5>}

      {/* Product Cards Section */}
      <div className="row justify-content-center gap-3">
        {!loading && !error && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <React.Fragment key={product.id}>
              <ProductCard
                product={product}
                onAddToCart={() => handleAddToCart(product)}
                onViewDetails={() => handleViewDetails(product)}
                isInCart={isInCart(product.id)}
                darkMode={darkMode}
              />
              <ProductModal product={product} />
            </React.Fragment>
          ))
        ) : (
          !loading && !error && <h5 className="text-danger">No products match your filters!</h5>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
