import { NavLink, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { WishlistContext } from "../WishlistContext";
import { logoutUser } from "../api";

function Header() {
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // For redirecting on login/logout

  // Check if the user is logged in by checking for a token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Update login status based on token
  }, []);

  // Handle Logout
  const handleLogout = () => {
    logoutUser(); // Remove token from localStorage
    setIsLoggedIn(false); // Update the login state
    navigate("/"); // Redirect to homepage after logout
  };

  // Handle Login button click - redirect to login page
  const handleLogin = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <header className="header-container">
      <div className="logo">
        <a href="#">Urban Couture</a>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/kids">Kids</NavLink>
          </li>
          <li>
            <NavLink to="/home&Living">Home & Living</NavLink>
          </li>
          <li>
            <NavLink to="/beauty">Beauty</NavLink>
          </li>
        </ul>
      </nav>

      {/* Icons and login/logout button section */}
      <div className="header-actions">
        <NavLink to="/wishlist">
          <FaHeart className="h-wishlist-icon" />
        </NavLink>

        <NavLink to="/cart">
          <div className="mycart-container">
            <FaShoppingCart className="h-cart-icon" />
            <span className="cart-count">{cartItems.length}</span>
          </div>
        </NavLink>

        {/* Show profile icon only if logged in */}
        {isLoggedIn && (
          <NavLink to="/profile">
            <FaUser className="h-profile-icon" />
          </NavLink>
        )}

        {/* Conditional rendering for Login/Logout button */}
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
