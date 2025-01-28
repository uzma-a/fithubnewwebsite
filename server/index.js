const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MemberModel = require('./models/GymMember');
const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5005;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:5173/gymmember');

// Login functionality
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  MemberModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          return res.status(200).json('Successfully login');
        } else {
          return res.status(401).json('The password is incorrect'); // Use 401 status for incorrect password
        }
      } else {
        return res.status(404).json('No user existed'); // Use 404 status for user not found
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json('Internal server error');
    });
});

// Signup functionality
app.post('/register', (req, res) => {
  MemberModel.create(req.body)
    .then((gymmembers) => res.json(gymmembers))
    .catch((err) => res.json(err));
});

// Razorpay Order Creation Route
app.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error");
    }

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

app.post("/order/validate", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  //order_id + "|" + razorpay_payment_id
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction is not legit!" });
  }

  res.json({
    msg: "success",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});