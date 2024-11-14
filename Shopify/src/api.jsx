import axios from 'axios';

const API_AUTH_URL = 'http://localhost:5000/api/auth'; // Adjust the URL as needed
const API_BASE_URL = 'http://localhost:5000/api'; // Base URL for other endpoints

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_AUTH_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_AUTH_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Get user profile
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_AUTH_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem('token');
};

// Upload Profile Picture
export const uploadProfilePicture = async (token, formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

// Helper function to get user ID from the token stored in localStorage
const getUserIdFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.userId || payload.id; // Ensure the correct field (userId or id) from payload
  } catch (error) {
    console.error("Invalid token format:", error);
    return null;
  }
};

// Add product to cart
export const addToCart = async (productId, quantity) => {
  const token = localStorage.getItem('token');
  const userId = getUserIdFromToken();
  
  if (!userId || !token) {
    console.error("User not authenticated");
    return;
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/cart/add-to-cart`,
      { userId, productId, quantity },
      { headers: { Authorization: `Bearer ${token}` } } // Add token for authorization
    );
    return response.data;
  } catch (err) {
    console.error('Error adding product to cart:', err);
    throw err;
  }
};

// Add product to wishlist
export const addToWishlist = async (productId) => {
  const token = localStorage.getItem('token');
  const userId = getUserIdFromToken();

  if (!userId || !token) {
    console.error("User not authenticated");
    return;
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/wishlist/add-to-wishlist`,
      { userId, productId },
      { headers: { Authorization: `Bearer ${token}` } } // Add token for authorization
    );
    return response.data;
  } catch (err) {
    console.error('Error adding product to wishlist:', err);
    throw err;
  }
};
