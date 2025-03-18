// App.jsx
import { useState } from "react";
import { DarkModeProvider } from "../context/DarkModeContext";
import { CartProvider } from "../context/CartContext";
import DarkModeToggle from "../components/DarkModeToggle";
import Cart from "../components/Cart";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("");  //setted a state variable to handle which products get shown later

    return (
        //Wraps everything to provide theme state globally.
        <DarkModeProvider> 
            <CartProvider>
                <div className="container">
                    <nav className="navbar navbar-dark bg-dark"> 
                        <DarkModeToggle />
                        <Cart />
                    </nav>

                    <CategoryList setSelectedCategory={setSelectedCategory} />

                    {selectedCategory && <ProductList selectedCategory={selectedCategory} />}
                </div>
            </CartProvider>
        </DarkModeProvider>
    );
}

export default App;
