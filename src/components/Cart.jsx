// components/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart">
            <h4>Cart ({cart.length} items)</h4>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} (x{item.quantity}) - Rs {item.price * item.quantity}
                        <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
