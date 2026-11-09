import "./ProductCard.css";
import { useState, useContext } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa"; // Font Awesome Icons
import { CartContext } from "../CartContext";
import { WishlistContext } from "../WishlistContext";

function ProductCard({ id, imgSrc, brand, fabric, price, mrp, discount }) {
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);

  const isWishlisted = wishlistItems.some((item) => item.id === id);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    // Create a product object
    const product = {
      id,
      imgSrc,
      brand,
      fabric,
      price,
      mrp,
      discount,
    };
    // Add to cart
    addToCart(product);
    
    };
    const handleWishlistClick = () => {
      const product = { id, imgSrc, brand, fabric, price, mrp, discount };
      toggleWishlist(product);
  };

  return (
    <div className="product-container">
      <div className="img-container">
        <img src={imgSrc} alt={brand} />
      </div>
      
      {/* Icons below the image */}
      <div className="icons-overlay">
        <div className="icon wishlist-icon">
          <FaHeart
            className={`wishlist-icon ${isWishlisted ? "wishlist-active" : ""}`}
            onClick={handleWishlistClick}
          />
        </div>
        <div className="icon cart-icon">
          <FaShoppingCart onClick={handleAddToCart} />
        </div>
      </div>
  
      <div className="description">
        <div className="Brand">{brand}</div>
        <div className="fabric">{fabric}</div>
        <div className="price-discount">
          <span className="price">Rs. {price}</span>
          <span className="MRP">Rs. {mrp}</span>
          <span className="discount">({discount}% OFF)</span>
        </div>
      </div>
    </div>
  );
  
}

export default ProductCard;
