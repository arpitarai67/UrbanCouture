require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/upload');
const cartRoutes = require('./routes/cart');
const wishlistRoutes = require('./routes/wishlist'); 
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests
app.use('/uploads', express.static('uploads'));

// MongoDB connection



mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', uploadRoutes); 
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);

// Sample route to test
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
