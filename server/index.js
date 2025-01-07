const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Database not connected", err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'https://fithub-new-frontend.onrender.com/', credentials: true }));


// Import routes (if any)
app.use('/', require('./routes/authRoutes'));

// Razorpay order creation route
app.post("/order", async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id: "rzp_test_V6vIJstSiHeUVu",
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const { amount, currency, receipt } = req.body; // Amount is expected in rupees

        // Validate if amount is a number and greater than zero
        if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ message: "Invalid amount provided" });
        }

        const options = {
            amount: amount * 100, // Convert rupees to paise
            currency: currency || "INR",
            receipt: receipt || "receipt#1",
        };

        const order = await razorpay.orders.create(options);
        res.json(order); // Send the order details back to the frontend
    } catch (err) {
        console.error("Razorpay order creation error:", err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});

// Razorpay payment validation route
app.post('/order/validate', async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ message: "Missing payment details" });
        }

        const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET)
        sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const digest = sha.digest("hex");

        if (digest !== razorpay_signature) {
            return res.status(400).json({ message: "Transaction is not legitimate!" });
        }

        res.json({
            message: "Payment verified successfully",
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id,
        });
    } catch (err) {
        console.error("Payment validation error:", err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});

// Start the server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}`));
