let cart = [];

const getCart = (req, res) => res.json(cart);

const addToCart = (req, res) => {
  const product = req.body;
  if (!cart.find((item) => item.id === product.id)) cart.push(product);
  res.json(cart);
};

const removeFromCart = (req, res) => {
  cart = cart.filter((item) => item.id !== parseInt(req.params.id));
  res.json(cart);
};

module.exports = { getCart, addToCart, removeFromCart };
