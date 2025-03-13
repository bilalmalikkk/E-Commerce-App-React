// src/App.js
import './App.css';
import { useState } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';
import { CartProvider } from './context/CartContext';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <DarkModeProvider>
      <CartProvider>
        <div className="App">
          <header className="App-header">
            <h1>🛒 E-Commerce Store</h1>
            <DarkModeToggle />
            <Cart />
          </header>

          <div className="content">
            <CategoryList setSelectedCategory={setSelectedCategory} />
            {selectedCategory ? (
              <ProductList selectedCategory={selectedCategory} />
            ) : (
              <p className="placeholder-text">Select a category to see products!</p>
            )}
          </div>
        </div>
      </CartProvider>
    </DarkModeProvider>
  );
}

export default App;
