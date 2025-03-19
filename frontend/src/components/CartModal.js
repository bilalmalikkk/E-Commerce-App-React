import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CartModal = () => {
  const {
    cart,
    addToCart,
    decreaseFromCart,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useContext(CartContext); //setting up cartcontext data

  const [modal, setModal] = useState(false); //it tracks whether the cart modal is open (true) or closed (false)
  const toggle = () => setModal(!modal); //it flips the modal state each time it’s called

  return (
    <>
      {/* Floating Cart Button */}
      <Button
        color="warning"
        className="position-fixed bottom-0 end-0 me-3 mb-3 p-0 square btn-lg"
        onClick={toggle}
      >
        🛒 (<span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>)
      </Button>

      {/* Cart Modal */}
      <Modal key={cart.length} isOpen={modal} toggle={toggle} centered> 
        <ModalHeader toggle={toggle}>Your Cart</ModalHeader> 
        <ModalBody>
          {cart.length > 0 ? (
            <ul className="list-group">
              {cart.map((item, index) => (
                <li
                  key={item.id ?? `cart-item-${index}`}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.name}</strong>
                    <div>Price: Rs {item.price ? item.price.toLocaleString() : "0"} | Qty: {item.quantity}</div>
                  </div>
                  <div>
                    <Button
                      size="sm"
                      color="secondary"
                      onClick={() => decreaseFromCart(item.id)}
                      className="me-1"
                    >
                      -
                    </Button>
                    <Button
                      size="sm"
                      color="success"
                      onClick={() => addToCart(item)}
                      className="me-1"
                    >
                      +
                    </Button>
                    <Button
                      size="sm"
                      color="danger"
                      onClick={() => removeFromCart(item.id)}
                    >
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

        {/* Footer showing Total Price */}
        <ModalFooter className="d-flex justify-content-between">
          <h5 className="text-success">Total: Rs {totalPrice ? totalPrice.toLocaleString() : "0"}</h5>
          <div>
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
            <Button color="danger" onClick={clearCart} className="ms-2">
              Clear Cart
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CartModal; //default export