import React, { useState } from "react";
import { registerUser } from "./api";
import { useNavigate } from "react-router-dom";
import regsiterImg from "./images/register-img.webp";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await registerUser(formData);
      localStorage.setItem("token", token);
      navigate("/profile"); // Redirect to profile page after successful registration
    } catch (err) {
      console.error("Registration failed:", err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="reg-backdrop">
      <div className="registration-container">
        <div className="registration-image-section">
          <img
            src={regsiterImg}
            alt="Registration Visual"
            className="registration-pic"
          />
        </div>
        <div className="form-section">
          <h4 className="register-h4">Create an Account</h4>
          <form className="registration-form" onSubmit={handleSubmit}>
            <input
              className="register-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              className="register-input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
            <input
              className="register-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button className="register-btn" type="submit">
              Register
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
          <p className="already-reg">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

