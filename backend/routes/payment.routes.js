const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

router.post("/create-order", (req, res) => {
  console.log('PAYMENT ENDPOINT HIT');
  const { amount } = req.body;

  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({ message: "Amount required" });
  }

  try {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      console.error('Missing Razorpay credentials');
      return res.status(500).json({ message: "Razorpay not configured", details: "Check .env file" });
    }

    console.log('Creating Razorpay instance');
    const razorpay = new Razorpay({ key_id, key_secret });

    console.log('Calling razorpay.orders.create with amount:', amount);
    razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    }, (error, order) => {
      if (error) {
        console.error('Razorpay API error:', error.message);
        return res.status(500).json({
          message: "Failed to create order",
          details: error.message || error.toString()
        });
      }
      res.json({ success: true, key: key_id, order });
    });
  } catch (err) {
    console.error('Exception:', err.message);
    res.status(500).json({ message: "Server error", details: err.message });
  }
});

module.exports = router;
