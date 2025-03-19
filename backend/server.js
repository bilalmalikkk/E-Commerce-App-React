const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:3000" })); // Allow frontend access

app.use(express.json()); //parses incoming JSON payloads from requests

// Routes
app.use("/api/products", require("./routes/products"));
app.use("/api/cart", require("./routes/cart"));

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`)); //starts the server
