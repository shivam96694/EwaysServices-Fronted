import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { Box, Typography, Button, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const { state } = useLocation(); // data passed from navigation
  const service = state || {}; // fallback if not found

  // Fallback title if state is empty
  const title = service.title || serviceId.replace(/-/g, " ");
  const description =
    service.desc ||
    "We specialize in delivering reliable, scalable, and user-centric digital solutions designed to help your business thrive in the modern world.";

  return (
    <Box
      sx={{
        py: 8,
        width:'100%',
        px: { xs: 3, md: "10%" },
background: 'linear-gradient(135deg, #f7f9fb 30%, #00a8ff 100%)',
    boxShadow: "inset 0 0 80px rgba(0,168,255,0.08)",

        textAlign: "center",
      }}
    >
      {/* --- Service Title --- */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#007bff",
          mb: 3,
          textTransform: "capitalize",
        }}
      >
        {title}
      </Typography>

      {/* --- Icon Image --- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            backgroundColor: "#e6f4ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={service.icon}
            alt={title}
            style={{ width: "70%", height: "70%" }}
          />
        </Box>
      </Box>

      {/* --- Short Description --- */}
      <Typography
        sx={{
          fontSize: "1.1rem",
          color: "#444",
          maxWidth: "800px",
          margin: "0 auto",
          mb: 5,
          lineHeight: 1.7,
        }}
      >
        {description}
      </Typography>

      <Divider sx={{ width: "60%", margin: "0 auto", mb: 5 }} />

      {/* --- Extra Context Section --- */}
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#007bff", mb: 2 }}
        >
          What Makes Our {title} Unique?
        </Typography>

        <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 4 }}>
          At <strong>Eways Services</strong>, we blend innovation, design, and
          technology to build solutions that create measurable value. Our team
          focuses on user experience, clean coding practices, and scalable
          architecture. Whether you need a custom website, mobile app, ERP, CRM,
          or API integration, we ensure it’s fast, secure, and future-ready.
        </Typography>

        <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 4 }}>
          Every project we take on goes through a deep understanding of your
          business goals, followed by a carefully crafted design and
          implementation process. We don’t just deliver projects — we build
          long-term partnerships that empower digital growth.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#007bff",
            fontWeight: "bold",
            mt: 5,
            mb: 1,
          }}
        >
          🚀 Ready to take your business online?
        </Typography>

        <Typography sx={{ color: "#666", mb: 5 }}>
          Let our experts bring your ideas to life with reliable, cutting-edge
          digital services.
        </Typography>

        {/* Back Button */}
        <Button
          component={Link}
          to="/"
          variant="contained"
          startIcon={<ArrowBackIcon />}
          sx={{
            backgroundColor: "#007bff",
            borderRadius: "25px",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#0062cc",
            },
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
}
