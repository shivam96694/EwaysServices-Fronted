import  { useState } from "react";
import "./UserQuery.css";
import Swal from "sweetalert2";
import { postData } from "../../services/FetchApiServices"; // your existing API helper
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function UserQuery() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));


  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    company: "",
    message: "",
    updates: false,
  });

  const [errors, setErrors] = useState({});

  // 🧠 Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!/^[A-Za-z\s]+$/.test(formData.fullname))
      newErrors.fullname = "Name should contain only letters.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!/^[0-9]{10}$/.test(formData.contact))
      newErrors.contact = "Enter a valid 10-digit contact number.";

    if (!formData.company.trim())
      newErrors.company = "Company name is required.";

    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 📨 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      Swal.fire({
        title: "Please fix the errors before submitting!",
        icon: "error",
        timer: 3000,
        toast: true,
        showConfirmButton: false,
        
      });
      return;
    }

    try {
console.log("Sending formData:", formData);
const res = await postData("userquery/query", formData);
console.log("Backend response:", res);
      if (res.success) {
        Swal.fire({
          title: "Message Sent Successfully!",
          text: "Our team will reach out to you soon.",
          icon: "success",
          timer: 4000,
          showConfirmButton: false,
         
        });

        // Reset form
        setFormData({
          fullname: "",
          email: "",
          contact: "",
          company: "",
          message: "",
          updates: false,
        });
      } else {
        Swal.fire({
          title: "Something went wrong!",
          text: res.message || "Please try again later.",
          icon: "error",
          timer: 3000,
          showConfirmButton: false,
          
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Server Error",
        text: "Unable to connect to server.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
        position: 'center',
      });
      console.error(error);
    }
  };

  // 🧩 Handle Input
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="userquery-container">
      {/* LEFT SIDE */}
      <div className="userquery-left" style={{width:matches?'85%':'',marginBottom:matches?5:''}}>
        <h2>Let’s Talk about</h2>
        <ul>
          <li>We are open to talk</li>
          <li>Joining our team</li>
          <li>General inquiries</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="userquery-right" style={{width:matches?'81%':'',marginTop:matches?5:''}}>
        <h2>Got a question? We would love to hear from you.</h2>
        <p>Send us your message, we will respond as soon as possible.</p>

        <form className="userquery-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                id="fullname"
                type="text"
                value={formData.fullname}
                onChange={handleChange}
              />
              {errors.fullname && <span className="error">{errors.fullname}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                id="contact"
                type="tel"
                value={formData.contact}
                onChange={handleChange}
              />
              {errors.contact && <span className="error">{errors.contact}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && <span className="error">{errors.company}</span>}
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <div className="checkbox-row">
            <input
              type="checkbox"
              id="updates"
              checked={formData.updates}
              onChange={handleChange}
            />
            <label htmlFor="updates">
              I would like to get information about the latest updates.
            </label>
          </div>

          <button type="submit" className="send-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
