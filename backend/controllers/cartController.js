let cart = [];

const getCart = (req, res) => res.json(cart);

const addToCart = (req, res) => {
  const product = req.body; // Get product data from the request body
  if (!cart.find((item) => item.id === product.id)) cart.push(product); // Add only if not already in cart
  res.json(cart);
};

const removeFromCart = (req, res) => {
  cart = cart.filter((item) => item.id !== parseInt(req.params.id)); //remove product by id
  res.json(cart);
};

module.exports = { getCart, addToCart, removeFromCart }; //makes function available for import in router
