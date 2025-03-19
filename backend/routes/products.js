const express = require("express");
const router = express.Router();
const { getProducts } = require("../controllers/productController"); //Imports the controller

router.get("/", getProducts); //defines route

module.exports = router;
