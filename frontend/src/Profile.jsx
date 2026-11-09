import React, { useEffect, useState } from "react";
import { getUserProfile, uploadProfilePicture } from "./api"; // Assuming you have an API to handle image uploads
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const userData = await getUserProfile(token);
        setProfile(userData);
      } catch (err) {
        console.error(err.message);
        setError("Failed to fetch profile.");
      }
    };

    fetchProfile();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const token = localStorage.getItem("token");
      const response = await uploadProfilePicture(token, formData); // Call the function with token and formData
      alert("Profile picture updated successfully!");
      setProfile({ ...profile, profilePicture: response.file.path }); // Assuming `response.file.path` has the uploaded image path
    } catch (err) {
      console.error(err.message);
      alert("Failed to upload profile picture.");
    }
  };

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="profile-container">
      {profile ? (
        <div className="profile-card">
          <div className="profile-header">
            {imagePreview ? (
              <img src={imagePreview} alt="Profile Preview" className="profile-icon" />
            ) : (
              <FaUserCircle className="profile-icon" size={100} color="pink" />
            )}
            <h2>{profile.username}'s Profile</h2>
          </div>
          <div className="profile-details">
            <p>Email: {profile.email}</p>
          </div>

          <div className="image-upload">
            <input type="file" onChange={handleImageChange} accept="image/*" />
            {selectedImage && <button onClick={handleImageUpload}>Upload Picture</button>}
          </div>

          <div className="profile-actions">
            <button className="btn-edit">Edit Profile</button>
            <button className="btn-orders">View Orders</button>
            <button className="btn-wishlist">My Wishlist</button>
          </div>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
