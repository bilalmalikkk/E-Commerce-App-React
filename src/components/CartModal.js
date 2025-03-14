import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CartModal = () => {
  const { cart, addToCart, decreaseFromCart, removeFromCart, clearCart } = useContext(CartContext);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Button color="warning" className="position-fixed bottom-0 end-0 me-3 mb-3 p-0 square btn-lg" onClick={toggle}>
        🛒 (<span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>)
      </Button>

      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Your Cart</ModalHeader>
        <ModalBody>
          {cart.length > 0 ? (
            <ul className="list-group">
              {cart.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.name}</strong>
                    <div>Price: Rs {item.price} | Qty: {item.quantity}</div>
                  </div>
                  <div>
                    <Button size="sm" color="secondary" onClick={() => decreaseFromCart(item.id)} className="me-1">
                      -
                    </Button>
                    <Button size="sm" color="success" onClick={() => addToCart(item)} className="me-1">
                      +
                    </Button>
                    <Button size="sm" color="danger" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty!</p>
          )}
        </ModalBody>
        <ModalFooter>
          <h5>Total: Rs {total.toFixed(2)}</h5>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
          <Button color="danger" onClick={clearCart}>
            Clear Cart
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CartModal;
