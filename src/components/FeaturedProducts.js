import React, { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { CartContext } from "../context/CartContext";
import { useDarkMode } from "../context/DarkModeContext";
import product1 from "../assets/img/product1.png";
import product2 from "../assets/img/product2.png";
import product3 from "../assets/img/product3.png";

const products = [
  {
    id: 1,
    name: "🎧 Headphones",
    price: 2500,
    category: "Headphones",
    image: product1,
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "🎶 Airpods",
    price: 5000,
    category: "Airpods",
    image: product2,
    description: "Wireless Airpods with superior sound quality.",
  },
  {
    id: 3,
    name: "📱 Tablet",
    price: 40000,
    category: "Tablets",
    image: product3,
    description: "High-performance tablet for work and entertainment.",
  },
];

const FeaturedProducts = () => {
  const { addToCart, isInCart } = useContext(CartContext);
  const { darkMode } = useDarkMode();
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(50000);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        (category === "all" || product.category === category) &&
        product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  }, [category, maxPrice]);

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
              <option value="all">All Categories</option>
              <option value="Headphones">Headphones</option>
              <option value="Airpods">Airpods</option>
              <option value="Tablets">Tablets</option>
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

      {/* Product Cards Section */}
      <div className="row justify-content-center gap-3">
        {filteredProducts.length > 0 ? (
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
          <h5 className="text-danger">No products match your filters!</h5>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
