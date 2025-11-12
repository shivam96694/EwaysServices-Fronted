import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Swal from "sweetalert2";
import { postData } from "../../services/FetchApiServices"; // your existing helper

export default function ContactComponents() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.message) {
      Swal.fire({
        title: "Please fill all fields",
        icon: "warning",
        timer: 2000,
        toast: true,
        
        showConfirmButton: false,
      });
      return;
    }

    try {
      // ✅ API call (you’ll create backend route contact/add)
      const res = await postData("contact/add", form);

      if (res?.success) {
        Swal.fire({
          title: "Message Sent Successfully!",
          icon: "success",
          timer: 2500,
          toast: true,
        
          showConfirmButton: false,
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({
          title: "Failed to send message",
          text: res?.error || "Please try again later",
          icon: "error",
          timer: 2500,
          toast: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Server Error",
        text: "Unable to send message. Please try again later.",
        icon: "error",
        timer: 2500,
        toast: true,
        showConfirmButton: false,
      });
      console.error("Contact form error:", error);
    }
  };

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 3, md: 10 },
        background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#00a8ff", mb: 1 }}
        >
          Contact Us
        </Typography>
        <Typography sx={{ color: "#555", maxWidth: 600, mx: "auto" }}>
          Have questions or want to work with us? We’d love to hear from you!
          Fill out the form below or reach out through our contact details.
        </Typography>
      </Box>

      {/* Contact Layout */}
      <Grid container spacing={5} alignItems="stretch" sx={{marginBottom:20}}>
        {/* Contact Form */}
        <Grid item xs={12} md={7} >
          <Paper
            elevation={3}
            sx={{
              p: 5,
              borderRadius: 4,
              height: "100%",
              
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#00a8ff",
                mb: 3,
                textAlign: "center",
              }}
            >
              Send us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} size={4}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6} size={4}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} size={4}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} size={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#00a8ff",
                      borderRadius: "25px",
                      px: 5,
                      py: 1.5,
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#008dd4" },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={5} sx={{marginTop:10}}>
          <Paper
            elevation={3}
            sx={{
              p: 5,
              borderRadius: 4,
              background: "#00a8ff",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 3,
              height: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
            >
              Get in Touch
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LocationOnIcon />
              <Typography>
                Eways Services Pvt. Ltd.  
                <br /> Sector 63, Noida, Uttar Pradesh, India
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <EmailIcon />
              <Typography>info@ewaysservices.com</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <PhoneIcon />
              <Typography>+91 98765 43210</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Box
        sx={{
          mt: 8,
          borderRadius: 4,
          overflow: "hidden",
          height: 350,
          boxShadow: "0 4px 25px rgba(0,0,0,0.1)",
        }}
      >
        <iframe
          title="Eways Services Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.473373449048!2d77.3832!3d28.6207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57fbb5f0f9b%3A0x25b3c6a4cf4f7b7c!2sNoida%20Sector%2063%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703254368123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
}
