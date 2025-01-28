const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const MemberModel = require('./models/GymMember');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = 5005;
const mongoURI = process.env.MONGO_URI

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(
  {
    origin:['https://fithub-website.vercel.app/'],
    methods:["POST", "GET],
    credentials: true         
  }
));  


// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Atlas connected');
  })
  .catch((err) => {
    console.error('MongoDB Atlas connection error:', err);
  });

// Login functionality
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  MemberModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        // Compare hashed password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            return res.status(500).json('Error checking password');
          }

          if (isMatch) {
            // Generate JWT token
            const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
              expiresIn: '1h', // token expires in 1 hour
            });

            return res.status(200).json({
              message: 'Successfully logged in',
              token, // Send the token to the frontend
            });
          } else {
            return res.status(401).json('The password is incorrect');
          }
        });
      } else {
        return res.status(404).json('No user found');
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json('Internal server error');
    });
});


// Signup functionality

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
      // Check if user already exists
      const existingUser = await MemberModel.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ error: 'User already exists. Please login.' });
      }

      const newUser = new MemberModel({ name, email, password });

      await newUser.save();
      res.status(201).json({ message: 'Registration successful! Please login.' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error.' });
  }
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
