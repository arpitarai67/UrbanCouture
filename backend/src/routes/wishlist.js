// routes/wishlist.js
const express = require('express');
const User = require('../models/user');
const Product = require('../models/product');

const router = express.Router();

// Add product to wishlist
router.post('/add-to-wishlist', async (req, res) => {
  const { userId, productId } = req.body;
  
  try {
    const user = await User.findById(userId);
    
    // Check if product is already in the wishlist
    if (!user.wishlist.includes(productId)) {
      user.wishlist.push(productId);
      await user.save();
      res.status(200).send('Product added to wishlist');
    } else {
      res.status(400).send('Product already in wishlist');
    }
  } catch (err) {
    res.status(400).send('Error adding product to wishlist');
  }
});

// Remove product from wishlist
router.post('/remove-from-wishlist', async (req, res) => {
  const { userId, productId } = req.body;
  
  try {
    const user = await User.findById(userId);
    
    user.wishlist = user.wishlist.filter(item => item.toString() !== productId);
    
    await user.save();
    res.status(200).send('Product removed from wishlist');
  } catch (err) {
    res.status(400).send('Error removing product from wishlist');
  }
});

module.exports = router;
