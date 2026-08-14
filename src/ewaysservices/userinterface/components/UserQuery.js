import { useState } from "react";
import "./UserQuery.css";
import Swal from "sweetalert2";
import { postData } from "../../services/FetchApiServices";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function UserQuery() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
const [showOtp, setShowOtp] = useState(false);
const [otp, setOtp] = useState("");
  const MAX_MESSAGE_LENGTH = 2000;
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    company: "",
    message: "",
    updates: false,

   
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🧠 Validation
  const validate = () => {
    const newErrors = {};

    // -------------------------
    // Full Name
    // -------------------------
    const fullname = formData.fullname.trim();

    if (!fullname) {
      newErrors.fullname = "Full name is required.";
    } else if (fullname.length > 100) {
      newErrors.fullname = "Name cannot exceed 100 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(fullname)) {
      newErrors.fullname = "Name should contain only letters.";
    }

    // -------------------------
    // Email
    // -------------------------
    const email = formData.email.trim();

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (email.length > 254) {
      newErrors.email = "Email address is too long.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // -------------------------
    // Phone
    // OPTIONAL
    // -------------------------
    const contact = formData.contact.trim();

    if (contact && !/^[0-9]{10}$/.test(contact)) {
      newErrors.contact = "Enter a valid 10-digit contact number.";
    }

    // -------------------------
    // Company
    // OPTIONAL
    // -------------------------
    const company = formData.company.trim();

    if (company.length > 150) {
      newErrors.company = "Company name cannot exceed 150 characters.";
    }

    // -------------------------
    // Message
    // -------------------------
    const message = formData.message.trim();

    if (!message) {
      newErrors.message = "Message cannot be empty.";
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message =
        `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
    }

    // -------------------------
    // Honeypot
    // -------------------------
   

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const sendOtp = async () => {
  if (!validate()) return;

  try {
    setIsSubmitting(true);

    const dataToSend = {
      fullname: formData.fullname.trim(),
      email: formData.email.trim().toLowerCase(),
      contact: formData.contact.trim(),
      company: formData.company.trim(),
      message: formData.message.trim(),
      updates: formData.updates,
    };

    const res = await postData("userquery/send-otp", dataToSend);

    if (res.success) {
      Swal.fire({
        title: "OTP Sent",
        text: res.otp, // Development only
        icon: "success",
      });

      setShowOtp(true);
      ;
    } else {
      Swal.fire({
        icon: "error",
        title: res.message,
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Server Error",
    });
  } finally {
    setIsSubmitting(false);
  }
};

const verifyOtp = async () => {
   if (otp.length !== 6) {
    Swal.fire({
      icon: "error",
      title: "Enter 6 digit OTP",
    });
    return;
  }


  try {

  setIsSubmitting(true);
  const res = await postData("userquery/verify-otp", {
    email: formData.email,
    otp,
  });
  

  if (res.success) {

    const saveRes = await postData("userquery/query", {
      fullname: formData.fullname.trim(),
      email: formData.email.trim().toLowerCase(),
      contact: formData.contact.trim(),
      company: formData.company.trim(),
      message: formData.message.trim(),
      updates: formData.updates,
    });

    if (saveRes.success) {
      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
      });

      setFormData({
        fullname: "",
        email: "",
        contact: "",
        company: "",
        message: "",
        updates: false,
      });

      setOtp("");
      setShowOtp(false);
setErrors({});
    } else {
      Swal.fire({
        icon: "error",
        title: saveRes.message,
      });
    }

  } else {
    Swal.fire({
      icon: "error",
      title: res.message,
    });
  }
  } catch (error) {

  Swal.fire({
    icon: "error",
    title: "Server Error",
  });

} finally {

  setIsSubmitting(false);

}
};

  // 📨 Submit

  // 🧩 Handle Input
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));

    // Remove error while user is correcting field
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const messageLength = formData.message.length;

  return (
    <div className="userquery-container">
      {/* LEFT SIDE */}
      <div
        className="userquery-left"
        style={{
          width: matches ? "85%" : "",
          marginBottom: matches ? 5 : "",
        }}
      >
        <h2>Let’s Talk about</h2>

        <ul>
          <li>We are open to talk</li>
          <li>Joining our team</li>
          <li>General inquiries</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="userquery-right"
        style={{
          width: matches ? "81%" : "",
          marginTop: matches ? 5 : "",
        }}
      >
        <h2>Got a question? We would love to hear from you.</h2>

        <p>
          Send us your message, we will respond as soon as possible.
        </p>

        <form
          className="userquery-form"
          
          noValidate
        >
          {/* =========================
              HONEYPOT
          ========================== */}


          {/* =========================
              NAME + EMAIL
          ========================== */}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullname">
                Full Name *
              </label>

              <input
                id="fullname"
                type="text"
                value={formData.fullname}
                onChange={handleChange}
                maxLength={100}
                autoComplete="name"
              />

              {errors.fullname && (
                <span className="error">
                  {errors.fullname}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address *
              </label>

              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                maxLength={254}
                autoComplete="email"
              />

              {errors.email && (
                <span className="error">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* =========================
              PHONE + COMPANY
          ========================== */}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact">
                Contact Number
                <span
                  style={{
                    fontSize: "12px",
                    marginLeft: "5px",
                    opacity: 0.7,
                  }}
                >
                  (Optional)
                </span>
              </label>

              <input
                id="contact"
                type="tel"
                value={formData.contact}
                onChange={handleChange}
                maxLength={10}
                inputMode="numeric"
                autoComplete="tel"
              />

              {errors.contact && (
                <span className="error">
                  {errors.contact}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="company">
                Company Name
                <span
                  style={{
                    fontSize: "12px",
                    marginLeft: "5px",
                    opacity: 0.7,
                  }}
                >
                  (Optional)
                </span>
              </label>

              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                maxLength={150}
                autoComplete="organization"
              />

              {errors.company && (
                <span className="error">
                  {errors.company}
                </span>
              )}
            </div>
          </div>

          {/* =========================
              MESSAGE
          ========================== */}

          <div className="form-group full-width">
            <label htmlFor="message">
              Your Message *
            </label>

            <textarea
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              maxLength={MAX_MESSAGE_LENGTH}
            ></textarea>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "5px",
              }}
            >
              {errors.message ? (
                <span className="error">
                  {errors.message}
                </span>
              ) : (
                <span></span>
              )}

              <span
                style={{
                  fontSize: "12px",
                  color:
                    messageLength >= MAX_MESSAGE_LENGTH
                      ? "#d32f2f"
                      : "#666",
                }}
              >
                {messageLength}/{MAX_MESSAGE_LENGTH}
              </span>
            </div>
          </div>
{showOtp && (
  <div className="form-group full-width">
    <label>OTP</label>

    <input
      type="text"
      value={otp}
      maxLength={6}
      inputMode="numeric"
  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
    />
  </div>
)}
          {/* =========================
              UPDATES
          ========================== */}

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

          {/* =========================
              SUBMIT
          ========================== */}

         <button
  type="button"
  className="send-btn"
  onClick={!showOtp ? sendOtp : verifyOtp}
   disabled={isSubmitting}
>
  {isSubmitting
    ? "PLEASE WAIT..."
    : !showOtp
    ? "SEND OTP"
    : "VERIFY OTP & SEND MESSAGE"}
</button>
        </form>
      </div>
    </div>
  );
}