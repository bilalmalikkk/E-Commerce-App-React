const axios = require("axios");

//async function to wait for getting data
const getProducts = async (req, res) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    res.json(data); //sends data back to frontend as json 
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({ error: "Failed to fetch products" }); // sends a 500 Internal Server Error response to the frontend
  }
};

module.exports = { getProducts }; //makes it importable for router file


