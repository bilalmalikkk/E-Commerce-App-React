const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// ✅ Checkout Route
router.post("/create-checkout-session", async (req, res) => {
  const { cartItems } = req.body;
  console.log("🛒 Received cart items:", cartItems);

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ error: "Cart is empty!" });
  }

  try {
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    console.log("💰 Line Items:", JSON.stringify(lineItems, null, 2));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    console.log("✅ Checkout session created:", session.id);
    res.json({ id: session.id });
  } catch (error) {
    console.error("❌ Stripe checkout error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; // ✅ Export router properly
