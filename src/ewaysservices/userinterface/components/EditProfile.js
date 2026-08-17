import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";
import { useLocation } from "react-router-dom";
export default function EditProfile() {
  const navigate = useNavigate();
const location = useLocation();

console.log(location.state);
  const userId = localStorage.getItem("user_id");
  console.log("User ID:", userId);
console.log("Complete LocalStorage:", localStorage);
console.log("User ID:", localStorage.getItem("user_id"));

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    usermobileno: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  // ===========================
  // Load Profile
  // ===========================

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/auth/profile/${userId}`
      );

      const data = await res.json();

      if (data.success) {
        setFormData({
          username: data.user.username || "",
          useremail: data.user.useremail || "",
          usermobileno: data.user.usermobileno || "",
          address: data.user.address || "",
          city: data.user.city || "",
          state: data.user.state || "",
          country: data.user.country || "",
          pincode: data.user.pincode || "",
        });
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Unable to load profile.");
    }

    setLoading(false);
  };

  // ===========================
  // Input Change
  // ===========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ===========================
  // Validation
  // ===========================

  const validate = () => {
    if (!formData.username.trim()) {
      alert("Name required");
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.useremail)) {
      alert("Invalid Email");
      return false;
    }

    if (!/^[0-9]{10}$/.test(formData.usermobileno)) {
      alert("Mobile must be 10 digits");
      return false;
    }

    if (
      formData.pincode &&
      !/^[0-9]{6}$/.test(formData.pincode)
    ) {
      alert("Invalid Pincode");
      return false;
    }

    return true;
  };

  // ===========================
  // Save
  // ===========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSaving(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/auth/profile/${userId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Profile Updated Successfully");

        navigate("/profile");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);

      alert("Server Error");
    }

    setSaving(false);
  };

  if (loading) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Loading...
      </h2>
    );
  }

  return (
    <div className="editProfile">

      <form
        className="editCard"
        onSubmit={handleSubmit}
      >
        <h2>Edit Profile</h2>

        <label>Full Name</label>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label>Email</label>

        <input
          type="email"
          name="useremail"
          value={formData.useremail}
          onChange={handleChange}
        />

        <label>Mobile Number</label>

        <input
          type="text"
          name="usermobileno"
          value={formData.usermobileno}
          onChange={handleChange}
        />

        <label>Address</label>

        <textarea
          rows="3"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <label>City</label>

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

        <label>State</label>

        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />

        <label>Country</label>

        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />

        <label>Pincode</label>

        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />

        <div className="buttons">

          <button
            type="button"
            className="cancelBtn"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </button>

          <button
            className="saveBtn"
            type="submit"
            disabled={saving}
          >
            {saving
              ? "Saving..."
              : "Save Changes"}
          </button>

        </div>

      </form>

    </div>
  );
}