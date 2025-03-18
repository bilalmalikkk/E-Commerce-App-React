require("dotenv").config();
console.log("🔑 Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);  // Debug log

const express = require("express");
const cors = require("cors");

                  

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Routes
app.use("/api/products", require("./routes/products"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/checkout", require("./routes/checkout")); // Checkout route added

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
