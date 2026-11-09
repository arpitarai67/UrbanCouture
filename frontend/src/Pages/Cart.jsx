import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './Cart.css';
import emptyCartVideo from '../assets/emptyCart.mp4'; // Adjust the path as necessary

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="cart-container">
      
      {cartItems.length === 0 ? (
        <div className="empty-cart-container">
        <video autoPlay loop muted className="empty-cart-video">
          <source src={emptyCartVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image-container">
                <img src={item.imgSrc} alt={item.brand} className="cart-item-image" />
              </div>
              <div className="cart-item-details">
                <h3>{item.brand}</h3>
                <p>Price: {item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Subtotal: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            <div className="cart-buttons">
              <button className="continue-shopping">Continue Shopping</button>
              <button className="checkout">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
