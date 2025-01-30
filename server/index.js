const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const MemberModel = require('./models/GymMember');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI

app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
      origin: "https://fit-hub-gym.vercel.app", // ✅ Ensure no trailing slash
      methods: ["POST", "GET"], // Allow necessary HTTP methods
      credentials: true, // If you're using cookies, authentication, etc.
  })
);

app.use(express.json());

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Atlas connected');
  })
  .catch((err) => {
    console.error('MongoDB Atlas connection error:', err);
  });


// Register Route
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await MemberModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new MemberModel({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(5001, () => console.log("Server running on port 5001"));
