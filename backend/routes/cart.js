const express = require("express");
const router = express.Router();
const { getCart, addToCart, removeFromCart } = require("../controllers/cartController"); //importing controllers

router.get("/", getCart);  //fetches the current cart item 
router.post("/", addToCart); //adding new items to cart
router.delete("/:id", removeFromCart); //remove items from the cart based on id

module.exports = router;
