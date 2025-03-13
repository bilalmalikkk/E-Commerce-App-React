// components/CategoryList.jsx
import { useState, useEffect } from "react";

const CategoryList = ({ setSelectedCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then(setCategories);
    }, []);

    return (
        <div className="category-list">
            <h4>Categories</h4>
            {categories.map((category) => (
                <button key={category} onClick={() => setSelectedCategory(category)} className="btn btn-primary m-2">
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryList;
