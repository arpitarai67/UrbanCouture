// routes/cart.js
const express = require('express');
const User = require('../models/user');
const Product = require('../models/product');
const router = express.Router();

// Add product to cart
router.post('/add-to-cart', async (req, res) => {
  const { userId, productId, quantity } = req.body;
  
  try {
    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    
    // Check if product is already in the cart
    const existingProduct = user.cart.find(item => item.productId.toString() === productId);
    
    if (existingProduct) {
      existingProduct.quantity += quantity; // Update quantity if product is already in cart
    } else {
      user.cart.push({ productId, quantity });
    }
    
    await user.save();
    res.status(200).send('Product added to cart');
  } catch (err) {
    res.status(400).send('Error adding product to cart');
  }
});

// Remove product from cart
router.post('/remove-from-cart', async (req, res) => {
  const { userId, productId } = req.body;
  
  try {
    const user = await User.findById(userId);
    
    user.cart = user.cart.filter(item => item.productId.toString() !== productId);
    
    await user.save();
    res.status(200).send('Product removed from cart');
  } catch (err) {
    res.status(400).send('Error removing product from cart');
  }
});

module.exports = router;
