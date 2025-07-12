// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;
const mongoURI = process.env.MONGO_URI;

// Routes
const registerRoute = require('./routes/registerRoute');
const appointmentRoutes = require('./routes/appointmentRoutes');

// Middleware
const allowedOrigins = [
  'https://fithub-new-frontend.onrender.com',
  'http://localhost:5173'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas connected'))
.catch((err) => console.error('MongoDB Atlas connection error:', err));

// Use Routes
app.use('/api', registerRoute); // POST /api/register
app.use('/api', appointmentRoutes); // POST /api/book-appointment

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
