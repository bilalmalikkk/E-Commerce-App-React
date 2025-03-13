// components/ProductList.jsx
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then((res) => res.json())
            .then(setProducts);
    }, [selectedCategory]);

    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-md-4" key={product.id}>
                    <div className="card">
                        <img src={product.image} className="card-img-top" alt={product.title} />
                        <div className="card-body text-center">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Rs {product.price}</p>
                            <button className="btn btn-success" onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
