const axios = require("axios");

const getProducts = async (req, res) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = { getProducts };
