import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Paper,
} from "@mui/material";
import Swal from "sweetalert2";
import { postData } from "../../services/FetchApiServices"; // ✅ your existing backend function

export default function CareersPage() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    field: "",
    linkedin: "",
    github: "",
    skills: "",
    message: "",
    resume: null,
  });

  // ✅ Update text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle file upload
  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  // ✅ Clear all fields after submit
  const resetForm = () => {
    setForm({
      fullname: "",
      email: "",
      phone: "",
      field: "",
      linkedin: "",
      github: "",
      skills: "",
      message: "",
      resume: null,
    });
  };

  // ✅ Submit form with SweetAlert and backend call
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic empty check
    if (!form.fullname || !form.email || !form.phone || !form.field) {
      Swal.fire({
        title: "Missing Fields",
        text: "Please fill all required fields before submitting.",
        icon: "warning",
        timer: 2500,
        toast: true,
       
        showConfirmButton: false,
      });
      return;
    }

    try {
      // Prepare FormData for file upload
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
        console.log("File before upload:", form.resume);
      }

      // ✅ API call (adjust your backend endpoint if needed)
      const response = await postData("career/add", formData);

      if (response?.success) {
        Swal.fire({
          title: "Application Submitted!",
          text: "Thank you for applying. Our team will contact you soon.",
          icon: "success",
          timer: 2500,
          toast: true,
          
          showConfirmButton: false,
        });
        resetForm(); // clear after success
      } else {
        Swal.fire({
          title: "Submission Failed",
          text: response?.error || "Please try again later.",
          icon: "error",
          timer: 2500,
          toast: true,
         
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Career Submit Error:", error);
      Swal.fire({
        title: "Server Error",
        text: "Unable to submit your application. Please try again later.",
        icon: "error",
        timer: 2500,
        toast: true,
      
        showConfirmButton: false,
      });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        px: { xs: 3, md: 10 },
        background: "linear-gradient(180deg, #f0f9ff 30%, #00a8ff 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Title Section */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#00a8ff", mb: 1 }}
        >
          Join the Eways Team
        </Typography>
        <Typography sx={{ color: "#555", maxWidth: 600, mx: "auto" }}>
          We’re always looking for talented, passionate individuals to join our
          growing team. Explore opportunities and become part of our innovative
          digital journey.
        </Typography>
      </Box>

      {/* Features */}
      <Grid container spacing={3} justifyContent="center" mb={6}>
        {[
          { title: "Flexible Hours", desc: "Work when you're most productive." },
          { title: "Remote Friendly", desc: "Collaborate from anywhere." },
          { title: "Learning Culture", desc: "Upskill with courses & mentoring." },
          { title: "Work-Life Balance", desc: "Recharge and grow sustainably." },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#00a8ff" }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#555", mt: 1 }}>
                {item.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Application Form */}
      <Paper
        elevation={3}
        sx={{
          p: 5,
          borderRadius: 4,
          maxWidth: 900,
          mx: "auto",
          mb: 8,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#00a8ff", mb: 3, textAlign: "center" }}
        >
          Application Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} size={4}>
              <TextField
                fullWidth
                required
                label="Full Name"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} size={4}>
              <TextField
                fullWidth
                required
                label="Email ID"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} size={4}>
              <TextField
                fullWidth
                required
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} size={4}>
              <TextField
                select
                fullWidth
                required
                label="Select Field"
                name="field"
                value={form.field}
                onChange={handleChange}
              >
                <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
                <MenuItem value="Backend Developer">Backend Developer</MenuItem>
                <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
                <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} size={4}>
              <TextField
                fullWidth
                label="LinkedIn Profile Link"
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} size={4}>
              <TextField
                fullWidth
                label="GitHub Profile Link"
                name="github"
                value={form.github}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} size={6}>
              <TextField
                fullWidth
                label="Your Skills"
                name="skills"
                multiline
                rows={2}
                value={form.skills}
                onChange={handleChange}
                placeholder="e.g. React, Node.js, MySQL, MongoDB"
              />
            </Grid>

          

            <Grid item xs={12} size={6}>
              <Button
                variant="outlined"
                component="label"
                sx={{
                  borderRadius: "25px",
                  borderColor: "#00a8ff",
                  color: "#fff",
                  background: "#00a8ff",
                  textTransform: "none",
                  px: 4,
                  
                }}
                fullWidth
              >
                Upload Resume
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
              </Button>
              {form.resume && (
                <Typography sx={{ mt: 1, fontSize: 14, color: "#555" }}>
                  Selected: {form.resume.name}
                </Typography>
              )}
            </Grid>

              <Grid item xs={12} size={12}>
              <TextField
                fullWidth
                label="Why are you a good fit?"
                name="message"
                multiline
                rows={3}
                value={form.message}
                onChange={handleChange}
              />
            </Grid>

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
                  display:'flex',justifyContent:'center',alignItems:'center'
                }}
              >
                Submit Application
              </Button>
          </Grid>
        </form>
      </Paper>

      {/* Culture Section */}
      <Box
        sx={{
          background: "#f9f9f9",
          borderRadius: 4,
          p: 5,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#00a8ff", mb: 2 }}
        >
          Our Culture
        </Typography>
        <Typography sx={{ color: "#555", mb: 3 }}>
          At <strong>Eways Services</strong>, we believe in teamwork, innovation,
          and personal growth. We maintain an open, transparent, and supportive
          environment where every voice matters.
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#00a8ff", mb: 1 }}
        >
          Hiring Process
        </Typography>
        <Typography sx={{ color: "#555", lineHeight: 1.8 }}>
          1️⃣ Apply with your resume and details. <br />
          2️⃣ Initial screening and introduction call. <br />
          3️⃣ Technical/skill evaluation. <br />
          4️⃣ Final interview and offer discussion.
        </Typography>
      </Box>
    </Box>
  );
}
