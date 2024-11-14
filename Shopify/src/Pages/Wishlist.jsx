import React, { useContext } from 'react';
import { WishlistContext } from '../WishlistContext';
import './Wishlist.css';
import wishlistVideo from  '../assets/wishlist.mp4'

function Wishlist() {
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-page">
      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist-container">
          <h2>Let's do some shopping!!</h2>
          <video autoPlay loop muted className="empty-cart-video">
          <source src={wishlistVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      ) : (
        <ul className="wishlist-items">
          {wishlistItems.map((item) => (
            <li key={item.id} className="wishlist-item">
              {/* Image on the left */}
              <div className="wishlist-item-image">
                <img src={item.imgSrc} alt={item.brand} />
              </div>

              {/* Details on the right */}
              <div className="wishlist-item-details">
                <h3>{item.brand}</h3>
                <p className="price">Price: Rs. {item.price}</p>
                <p className="mrp">MRP: Rs. {item.mrp}</p>
                <p className="discount">Discount: {item.discount}%</p>
              </div>

              {/* Remove button */}
              <div className="wishlist-item-actions">
                <button
                  className="remove-item"
                  onClick={() => toggleWishlist(item)} // Pass the whole item here
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;
