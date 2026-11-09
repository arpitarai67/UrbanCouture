import React, { useState } from "react";
import { loginUser } from "./api";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate and NavLink
import loginImg from "./images/login-img.webp";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser(formData);
      localStorage.setItem("token", token); // Store token in localStorage
      navigate("/"); // Redirect to homepage after successful login
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid credentials. Please try again."); // Display error message
    }
  };

  return (
    <div className="login-backdrop">
      <div className="login-container">
        <div className="login-image-section">
          <img className="login-pic" src={loginImg} alt="Login" />
        </div>
        <div className="form-section">
          <h4 className="login-h4">Login</h4>
          <form onSubmit={handleSubmit}>
            <input className="login-input"
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              required
            />
            <input className="login-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
            {error && <p className="error-message">{error}</p>}
          </form>
          <p className="not-reg">
            Don’t have an account?{" "}
            <NavLink to="/register">Register here</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
