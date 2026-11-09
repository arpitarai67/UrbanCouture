import React from 'react';
import './Footer.css';  // Importing custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Shopify</h3>
          <p className="footer-text">Your one-stop shop for fashion and home decor.</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/men" className="footer-link">Men</a></li>
            <li><a href="/women" className="footer-link">Women</a></li>
            <li><a href="/kids" className="footer-link">Kids</a></li>
            <li><a href="/home&Living" className="footer-link">Home & Living</a></li>
            <li><a href="/beauty" className="footer-link">Beauty</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Customer Service</h3>
          <ul className="footer-links">
            <li><a href="/contact" className="footer-link">Contact Us</a></li>
            <li><a href="/faq" className="footer-link">FAQ</a></li>
            <li><a href="/returns" className="footer-link">Returns & Exchanges</a></li>
            <li><a href="/shipping" className="footer-link">Shipping Info</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <ul className="footer-links">
            <li><a href="/about" className="footer-link">Our Story</a></li>
            <li><a href="/careers" className="footer-link">Careers</a></li>
            <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
            <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Shopify. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
